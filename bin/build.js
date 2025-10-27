#!/usr/bin/env node
import { cp, glob, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";
import { styleText } from "node:util";
import fm from "front-matter";
import { marked } from "marked";
import Layout from "../src/components/Layout.js";

const distDir = resolve(import.meta.dirname, "../dist");

// Empty `dist` directory
async function setup() {
  if (existsSync(distDir)) {
    await rm(distDir, { recursive: true });
  }
}

// Compile `src/pages/**/index.md` to `dist/**/index.html` and copy their `media/` assets
async function buildPages() {
  const pagesDir = resolve(import.meta.dirname, "../src/pages");
  const pages = await glob(`${pagesDir}/**/index.md`);

  for await (const srcPath of pages) {
    const markdown = await readFile(srcPath, "utf-8");
    const { attributes, body } = fm(markdown);

    const content = await marked.parse(body);
    const page = Layout({ title: attributes.title, content });

    const pageDir = dirname(srcPath);
    const pageDistDir = pageDir.replace(pagesDir, distDir);
    const pageDistPath = resolve(
      pageDistDir,
      `${basename(srcPath, ".md")}.html`
    );

    await mkdir(pageDistDir, { recursive: true });

    await writeFile(pageDistPath, page);

    const pageMediaDir = resolve(pageDir, "media");

    if (existsSync(pageMediaDir)) {
      await cp(pageMediaDir, resolve(pageDistDir, "media"), {
        recursive: true,
      });
    }

    console.log(
      `${styleText(
        "green",
        "[buildPages]"
      )} Built ${pageDistPath} and copied its media assets`
    );
  }
}

// Copy static files from `public/` to `dist/`
async function copyPublic() {
  const srcDir = resolve(import.meta.dirname, "../public");

  await cp(srcDir, distDir, { recursive: true });

  console.log(
    `${styleText("green", "[copyPublic]")} Copied \`public/\` to ${distDir}`
  );
}

async function build() {
  await setup();

  await Promise.all([buildPages(), copyPublic()]);
}

await build();
