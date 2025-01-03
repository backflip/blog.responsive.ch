import { readFileSync, existsSync, fstat, writeFileSync } from "fs";
import { URL } from "url";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { DOMParser, parseHTML } from "linkedom";

/**
 * Insert full post content into `<description>` elements in RSS feed
 *
 * How to use:
 * - Install `linkedom` npm package
 * - Add `insertContentIntoFeed({ feedFileName: 'REPLACE_ME.xml` })` to `integrations` in `astro.config.mjs`
 *
 * @param {Object} options
 * @param {string} options.feedFileName - Where to find the XML file in `dir`
 * @returns {import('astro').AstroIntegration}
 */
function insertContentIntoFeed({ feedFileName } = {}) {
  return {
    name: "insert-content-into-feed",
    hooks: {
      "astro:build:done": async ({ dir, pages }) => {
        if (!feedFileName) {
          console.error(
            `[insertContentIntoFeed] Please specify "feedFileName" inintegration option`
          );

          return;
        }

        // Parse feed
        const feedFilePath = `${dir.pathname}${feedFileName}`;

        if (!existsSync(feedFilePath)) {
          console.error(
            `[insertContentIntoFeed] No feed found in ${feedFilePath}`
          );

          return;
        }

        const feedFile = readFileSync(feedFilePath, "utf-8");
        const feedDocument = new DOMParser().parseFromString(
          feedFile,
          "text/xml"
        );

        // Loop through feed items
        feedDocument.querySelectorAll("item").forEach((item) => {
          // Find page by slug
          const url = new URL(item.querySelector("link").innerHTML);
          const slug = url.pathname.replace(/^\//, "");
          const page = pages.find((page) => page.pathname === slug);

          if (!page) {
            console.error(
              `[insertContentIntoFeed] No page found with pathname "${slug}"`
            );

            return;
          }

          // Parse post
          const postFilePath = `${dir.pathname}${page.pathname}index.html`;

          if (!existsSync(postFilePath)) {
            console.log(
              `[insertContentIntoFeed] No post found in ${postFilePath}`
            );

            return;
          }

          const postFile = readFileSync(postFilePath, "utf-8");
          const { document: postDocument } = parseHTML(postFile);

          // Replace item description with post content (excluding h1)
          const postContent = postDocument.querySelector("main");
          const itemDescription = item.querySelector("description");

          postContent.querySelector("h1")?.remove();

          itemDescription.innerHTML = `<![CDATA[${postContent.innerHTML}]]>`;
        });

        writeFileSync(feedFilePath, feedDocument.toString());
      },
    },
  };
}

export default defineConfig({
  site: "https://blog.responsive.ch",
  integrations: [mdx(), insertContentIntoFeed({ feedFileName: "rss.xml" })],
  markdown: {
    remarkRehype: {
      footnoteLabelTagName: "h3",
    },
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
