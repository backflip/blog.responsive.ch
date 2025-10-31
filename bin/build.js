#!/usr/bin/env node
import { cp, glob, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { styleText } from "node:util";
import fm from "front-matter";
import { marked } from "marked";
import markedShiki from "marked-shiki";
import { createHighlighter } from "shiki";
import xml from "xml";
import * as esbuild from "esbuild";
import Layout from "../src/components/Layout.js";
import Listing from "../src/components/Listing.js";
import { html } from "../src/utils/html.js";

/**
 * Static site builder
 * - Compiles `src/pages/**\/index.md` to `dist/**\/index.html`, adds syntax highlighting to code blocks.
 * - Creates `dist/index.html` overview page listing all pages with a `date` front matter field.
 * - Creates `dist/rss.xml` feed listing all pages with a `date` front matter field.
 * - Copies `src/pages/**\/media/` to `dist/**\/media/`.
 * - Copies `public/` to `dist/`.
 */

const distDir = resolve(import.meta.dirname, "../dist");
const pagesDir = resolve(import.meta.dirname, "../src/pages");

const DOMAIN = "https://blog.responsive.ch";
const SITE_TITLE = "blog.responsive.ch";
const SITE_DESCRIPTION =
  "A blog about web technology and remotely related thingies.";

// Setup syntax highlighter
const highlighter = await createHighlighter({
  langs: ["html", "bash", "json", "toml"],
  themes: ["github-dark-dimmed"],
});

marked.use(
  markedShiki({
    highlight(code, lang, props) {
      return highlighter.codeToHtml(code, {
        lang,
        theme: "github-dark-dimmed",
      });
    },
  })
);

/**
 * Empty `dist` directory
 */
async function setup() {
  if (existsSync(distDir)) {
    await rm(distDir, { recursive: true });
  }

  await mkdir(distDir, { recursive: true });
}

/**
 * Find `src/pages/**\/index.md`, extract front matter and compile markdown to HTML
 * @return {Promise<import("../types.js").Page[]>}
 */
async function getPages() {
  const pagesSrc = await glob(`${pagesDir}/**/index.md`);

  /** @type {import("../types.js").Page[]} */
  const pages = [];

  for await (const srcPath of pagesSrc) {
    const markdown = await readFile(srcPath, "utf-8");
    const { attributes, body } = fm(markdown);
    const content = await marked.parse(body);
    const url = `/${dirname(relative(pagesDir, srcPath))}`;

    /** @type {import("../types.js").Page} */
    const page = {
      title: attributes.title,
      url,
      content,
      srcPath,
    };

    if (attributes.date) {
      const dateFormatted = attributes.date?.toLocaleDateString("en-EN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const post = {
        ...page,
        abstract: attributes.abstract,
        date: attributes.date,
        dateFormatted,
      };

      pages.push(post);

      continue;
    }

    pages.push(page);
  }

  return pages;
}

/**
 * Compile `src/pages/**\/index.md` to `dist/**\/index.html` and copy their `media/` assets
 * @param {{ pages: import("../types.js").Page[] }} props
 */
async function buildPages({ pages }) {
  for (const page of pages) {
    const { title, content, srcPath } = page;

    const html = Layout({
      title,
      content,
      description: "abstract" in page ? page.abstract : undefined,
    });

    const pageDir = dirname(srcPath);
    const pageDistDir = pageDir.replace(pagesDir, distDir);
    const pageDistPath = resolve(
      pageDistDir,
      `${basename(srcPath, ".md")}.html`
    );

    await mkdir(pageDistDir, { recursive: true });

    await writeFile(pageDistPath, html);

    const pageMediaDir = resolve(pageDir, "media");

    if (existsSync(pageMediaDir)) {
      await cp(pageMediaDir, resolve(pageDistDir, "media"), {
        recursive: true,
      });
    }

    console.log(
      `${styleText(
        "green",
        "[buildPosts]"
      )} Built ${pageDistPath} and copied its media assets`
    );
  }
}

/**
 * Create overview
 * @param {{ posts: import("../types.js").Post[] }} props
 */
async function buildOverview({ posts }) {
  const listing = Listing({ posts });
  const page = Layout({ content: listing, description: SITE_DESCRIPTION });

  const distPath = join(distDir, "index.html");

  await writeFile(distPath, page);

  console.log(`${styleText("green", "[buildOverview]")} Built overview page`);
}

/**
 * Create feed
 * @param {{ posts: import("../types.js").Post[] }} props
 */
async function buildFeed({ posts }) {
  const feed = xml([
    {
      rss: [
        { _attr: { version: "2.0" } },
        {
          channel: [
            { title: SITE_TITLE },
            { description: SITE_DESCRIPTION },
            { link: DOMAIN },
            ...posts
              .filter((post) => post.date)
              .map((post) => {
                const url = `${DOMAIN}${post.url}/`;

                return {
                  item: [
                    { title: post.title },
                    { link: url },
                    { guid: [{ _attr: { isPermaLink: "true" } }, url] },
                    { pubDate: post.date.toUTCString() },
                    { description: { _cdata: post.content } },
                  ],
                };
              }),
          ],
        },
      ],
    },
  ]);

  const distPath = join(distDir, "rss.xml");

  await writeFile(
    distPath,
    html`<?xml version="1.0" encoding="utf-8"?>${feed}`
  );

  console.log(`${styleText("green", "[buildFeed]")} Built RSS feed`);
}

/**
 * Copy static files from `public/` to `dist/`
 */
async function copyPublic() {
  const srcDir = resolve(import.meta.dirname, "../public");

  await cp(srcDir, distDir, { recursive: true });

  console.log(
    `${styleText("green", "[copyPublic]")} Copied \`public/\` to ${distDir}`
  );
}

/**
 * Bundle JavaScript with ESBuild
 */
async function buildScripts() {
  const srcPath = resolve(import.meta.dirname, "../src/scripts/index.js");
  const distPath = resolve(distDir, "scripts/index.js");

  await esbuild.build({
    entryPoints: [srcPath],
    bundle: true,
    minify: true,
    outfile: distPath,
  });

  console.log(`${styleText("green", "[bundleScripts]")} Bundled ${distPath}`);
}

/**
 * Put everything together
 */
async function build() {
  const pages = await getPages();
  const posts = pages
    .filter((page) => "date" in page)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  await setup();

  await Promise.all([
    buildPages({ pages }),
    buildOverview({ posts }),
    buildFeed({ posts }),
    copyPublic(),
    buildScripts(),
  ]);
}

await build();
