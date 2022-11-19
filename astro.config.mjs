import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://blog.responsive.ch",
  integrations: [
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  markdown: {
    remarkRehype: {
      footnoteLabelTagName: "h3",
    },
  },
});
