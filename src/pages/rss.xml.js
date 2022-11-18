import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("../pages/**/*.mdx", { eager: true });
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "blog.responsive.ch",
    description: "A blog about web technology and remotely related thingies.",
    site: import.meta.env.SITE,
    items: posts
      .filter((post) => !post.frontmatter.draft)
      .sort(
        (a, b) =>
          Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
      )
      .map((post) => ({
        link: post.url,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date,
        description: post.frontmatter.abstract,
      })),
    customData: `<language>en-us</language>`,
  });
