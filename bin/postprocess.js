#!/usr/bin/env node
import { readFile, writeFile, glob } from "node:fs/promises";
import { basename, dirname, extname, resolve } from "node:path";
import { styleText } from "node:util";
import { transform } from "lightningcss";
import sharp from "sharp";
import { parseHTML } from "linkedom";

/**
 * Post-processing of static site builder
 * - Processes `dist/styles/main.css` with LightningCSS.
 * - Processes images by extracting them from built HTML with LinkeDOM and optimizing size and format with Sharp.
 */

const distDir = resolve(import.meta.dirname, "../dist");

const IMAGE_MAX_WIDTH = 800;
const IMAGE_FORMATS_TO_CONVERT = ["jpg", "jpeg", "png"];

/**
 * Process CSS with LightningCSS
 */
async function transformStyles() {
  const stylesPath = resolve(distDir, "styles/main.css");
  const styles = await readFile(stylesPath);

  const { code } = transform({
    filename: basename(stylesPath),
    code: styles,
    minify: true,
  });

  await writeFile(stylesPath, code);

  console.log(
    `${styleText("green", "[transformStyles]")} Transformed ${stylesPath}`
  );
}

/**
 * Process images
 * - Extract image URLs from built HTML using LinkeDOM
 * - Optimize size (resize to IMAGE_MAX_WIDTH or specific dimensions if `w` and/or `h` query parameters are present) with Sharp
 * - Convert to WebP with Sharp
 */
async function processImages() {
  const pages = await glob(`${distDir}/**/*.html`);

  for await (const page of pages) {
    const content = await readFile(page, "utf-8");
    const { document } = parseHTML(content);
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

      let distPath = filePath;

      const url = new URL(image.src, "http://localhost");
      const transformed = await sharp(content);

      // Transform to webp
      if (IMAGE_FORMATS_TO_CONVERT.includes(format)) {
        await transformed.webp({ quality: 75 });

        distPath = distPath.replace(`.${format}`, ".webp");

        image.src = url.pathname
          .replace(new RegExp(`.${format}$`), ".webp")
          .replace(/^\//, "");
      }

      // Resize
      // Check for width (`w`) and height (`h`) query parameters, fall back to max-width of 800px
      // Duplicate by 2x for high-res displays
      const widthParam = url.searchParams.get("w");
      const heightParam = url.searchParams.get("h");

      const width = widthParam ? parseInt(widthParam, 10) : IMAGE_MAX_WIDTH;
      const height = heightParam ? parseInt(heightParam, 10) : undefined;

      await transformed.resize(
        width ? 2 * width : undefined,
        height ? 2 * height : undefined,
        {
          withoutEnlargement: true,
        }
      );

      if (widthParam) {
        image.setAttribute("width", String(width));
      }
      if (heightParam) {
        image.setAttribute("height", String(height));
      }

      // Save
      await transformed.toFile(distPath);

      console.log(
        `${styleText("green", "[processImages]")} Created ${distPath} (${
          width || ""
        }x${height || ""})`
      );
    }

    const updatedContent = document.toString();

    await writeFile(page, updatedContent);

    console.log(`${styleText("green", "[processImages]")} Updated ${page}`);
  }
}

/**
 * Put everything together
 */
async function postProcess() {
  await Promise.all([transformStyles(), processImages()]);
}

await postProcess();
