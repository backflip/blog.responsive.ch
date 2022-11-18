import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
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
