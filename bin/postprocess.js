#!/usr/bin/env node
import { readFile, writeFile, glob } from "node:fs/promises";
import { basename, dirname, extname, resolve } from "node:path";
import { styleText } from "node:util";
import { transform } from "lightningcss";
import sharp from "sharp";
import { parseHTML } from "linkedom";

const distDir = resolve(import.meta.dirname, "../dist");

// Process CSS with LightningCSS
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

// Process images
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
      // Ignore `.webp` images
      .filter((img) => {
        const url = new URL(img.src, "http://localhost");

        return !url.pathname.match(/\.webp$/);
      });

    for (const image of images) {
      const resolvedSrc = resolve(dirname(page), image.src);
      const filePath = new URL(resolvedSrc, "file://").pathname;
      const distPath = filePath.replace(extname(filePath), ".webp");

      const transformed = await sharp(filePath);

      // Transform to webp
      await transformed.webp({ quality: 75 });

      // Resize
      // Check for width (`w`) and height (`h`) query parameters, fall back to max-width of 800px
      // Duplicate by 2x for high-res displays
      const url = new URL(image.src, "http://localhost");
      const widthParam = url.searchParams.get("w");
      const heightParam = url.searchParams.get("h");

      const width = widthParam ? parseInt(widthParam, 10) : 800;
      const height = heightParam ? parseInt(heightParam, 10) : undefined;

      await transformed.resize(
        width ? 2 * width : undefined,
        height ? 2 * height : undefined,
        {
          withoutEnlargement: true,
        }
      );

      // Save
      await transformed.toFile(distPath);

      // Update image node in HTML
      if (width || height) {
        image.src = url.pathname
          .replace(extname(filePath), ".webp")
          .replace(/^\//, "");

        if (width) {
          image.setAttribute("width", String(width));
        }
        if (height) {
          image.setAttribute("height", String(height));
        }
      }

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

async function postProcess() {
  await Promise.all([transformStyles(), processImages()]);
}

await postProcess();
