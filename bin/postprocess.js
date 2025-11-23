#!/usr/bin/env node
import { readFile, writeFile, glob } from "node:fs/promises";
import { basename, dirname, extname, relative, resolve } from "node:path";
import { styleText } from "node:util";
import browserslist from "browserslist";
import { transform, browserslistToTargets } from "lightningcss";
import sharp from "sharp";
import { parseHTML } from "linkedom";

/**
 * Post-processing of static site builder
 * - Processes `dist/styles/main.css` with LightningCSS.
 * - Processes images by extracting them from built HTML with LinkeDOM and optimizing size and format with Sharp.
 */

const distDir = resolve(import.meta.dirname, "../dist");

const IMAGE_WIDTHS = [400, 800, 1600];
const IMAGE_FORMATS_TO_CONVERT = ["jpg", "jpeg", "png"];

/**
 * Process CSS with LightningCSS
 */
async function transformStyles() {
  const stylesPath = resolve(distDir, "styles/main.css");
  const styles = await readFile(stylesPath);

  const targets = browserslistToTargets(browserslist());

  const { code } = transform({
    filename: basename(stylesPath),
    code: styles,
    minify: true,
    targets,
  });

  await writeFile(stylesPath, code);

  console.log(
    `${styleText("green", "[transformStyles]")} Transformed ${stylesPath}`
  );
}

/**
 * Get resize targets
 * @param {number} originalWidth
 * @returns {number[]}
 */
function getImageWidths(originalWidth) {
  const maxWidth = /** @type {number} */ (
    IMAGE_WIDTHS.find((width) => width >= originalWidth) ||
      IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1]
  );

  let widths = IMAGE_WIDTHS.filter((width) => width <= maxWidth);

  if (widths.length === 1) {
    widths.unshift(maxWidth / 2);
  }

  return widths;
}

/**
 * Process images
 * - Extract image URLs from built HTML using LinkeDOM
 * - Convert to WebP with Sharp
 * - Create multiple sizes with Sharp, create corresponding responsive image markup
 * @param {{ page: string, document: HTMLDocument }} props
 * @returns {Promise<HTMLDocument>}
 */
async function processImages({ page, document }) {
  const images = Array.from(document.querySelectorAll("img"))
    // Ignore non-relative sources
    .filter((img) => {
      try {
        new URL(img.src);

        return false;
      } catch (err) {
        return true;
      }
    })
    // Ignore GIFs and SVGs
    .filter((img) => {
      const filePath = new URL(img.src, "http://localhost").pathname;
      const format = extname(filePath).replace(".", "").toLowerCase();

      return !["gif", "svg"].includes(format);
    });

  for (const image of images) {
    const resolvedSrc = resolve(dirname(page), image.src);
    const filePath = new URL(resolvedSrc, "file://").pathname;
    const content = await readFile(filePath);
    const format = extname(filePath).replace(".", "").toLowerCase();
    const transformed = await sharp(content);
    const { width: originalWidth, height: originalHeight } =
      await transformed.metadata();

    // Transform to webp
    if (IMAGE_FORMATS_TO_CONVERT.includes(format)) {
      await transformed.webp({ quality: 75 });
    }

    // Create resize configs
    const widths = getImageWidths(originalWidth);
    const images = widths.map((width) => {
      // Add width suffix to filename
      let src = image.src.replace(
        extname(image.src),
        `-${width}${extname(image.src)}`
      );

      // Update format
      if (IMAGE_FORMATS_TO_CONVERT.includes(format)) {
        src = src.replace(new RegExp(`.${format}(\\?|$)`), ".webp");
      }

      return { width, src };
    });

    // Resize
    for (const { width, src } of images) {
      const resized = await transformed.clone().resize(width, undefined, {
        withoutEnlargement: true,
      });

      // Save
      const distPath = resolve(dirname(page), src);

      await resized.toFile(distPath);

      console.log(
        `${styleText("green", "[processImages]")} Created ${distPath}`
      );
    }

    // Update markup
    const maxWidth = /** @type {number} */ (widths[widths.length - 1]);

    image.srcset = images
      .map(({ src, width }) => `${src} ${width}w`)
      .join(", ");
    image.sizes = "auto";
    image.setAttribute("loading", "lazy");
    image.width = maxWidth;
    image.height = Math.round((originalHeight / originalWidth) * maxWidth);
  }

  return document;
}

/**
 * Add view transition names to headings
 * @param {{ page: string, document: HTMLDocument }} props
 * @returns {Promise<HTMLDocument>}
 */
async function processHeadings({ page, document }) {
  const /** @type {HTMLElement[]} */ listing = Array.from(
      document.querySelectorAll("article h2")
    );

  if (listing.length) {
    for (const heading of listing) {
      const id = heading.querySelector("a")?.href?.replace(/^\//, "");

      if (id) {
        heading.style.viewTransitionName = id;
      }
    }
  } else {
    const /** @type {HTMLElement|null} */ detail =
        document.querySelector("main h1");

    if (detail) {
      const id = relative(distDir, dirname(page)).replace(/\\/g, "/");

      detail.style.viewTransitionName = id;
    }
  }

  return document;
}

/**
 * Transform HTML markup
 */
async function processMarkup() {
  const pages = await glob(`${distDir}/**/*.html`);

  for await (const page of pages) {
    const content = await readFile(page, "utf-8");
    let { document } = parseHTML(content);

    document = await processImages({ page, document });
    document = await processHeadings({ page, document });

    const updatedContent = document.toString();

    await writeFile(page, updatedContent);

    console.log(`${styleText("green", "[processMarkup]")} Updated ${page}`);
  }
}

/**
 * Put everything together
 */
async function postProcess() {
  await Promise.all([transformStyles(), processMarkup()]);
}

await postProcess();
