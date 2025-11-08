---
title: Hopping off the (SSG) framework train
date: 2025-11-07
abstract: Replacing Astro with my own Node.js build and postprocess scripts. And falling in love with &lt;img sizes="auto"&gt; along the way.
---

Three years ago, this statically built blog [made the journey](/moving-to-astro) from Gatsby to Astro. Astro's major version was 1 at the time. Now it's 5. Every major version of a framework comes with breaking changes. While they are mostly intentional, they might still require spending time understanding and implementing them.

So when I stumbled upon the following (non-public) post on Mastodon the other day, it hit a nerve:

> this week i've lost several hours upgrading a site from Astro v4 to v5.
> really looking forward to doing this again for v6 in a few months 🫠
> [...]
> i would like to rewrite my personal website without any sort of framework or static site generator.

I was immediately nerd-sniped and knew what to do on a Sunday train ride to [sunny southern Switzerland](https://social.thomasjaggi.ch/@thomas/115435829060174716). What I ended up with is 400+ lines of JavaScript:

- [build.js](https://github.com/backflip/blog.responsive.ch/blob/346d3efbddbfe5decaeb22613f9c70898c75b45c/bin/build.js) transpiles Markdown files to HTML, creates a full-text RSS feed and bundles client-side scripts.
- [postprocess.js](https://github.com/backflip/blog.responsive.ch/blob/346d3efbddbfe5decaeb22613f9c70898c75b45c/bin/postprocess.js) resizes images and transpiles and minifies styles.

## How it works

### HTML and RSS

I chose [Marked](https://marked.js.org) to compile posts written in Markdown to HTML because it comes with 0 dependencies and is well-documented. There are two plugins in use: [marked-shiki](https://www.npmjs.com/package/marked-shiki) to add syntax highlighting to code blocks and [marked-footnote](https://www.npmjs.com/package/marked-footnote). Metadata like title, date and abstract is parsed using [front-matter](https://www.npmjs.com/package/front-matter).

The only outraging thing I stumbled upon so far: Marked seems to be unable to parse custom element names [containing emojis](https://blog.jim-nielsen.com/2023/validity-of-custom-element-tag-names/).

The [full-text RSS feed](/rss.xml) is built with the help of [xml](https://www.npmjs.com/package/xml) because I still don't understand CDATA. Fun fact: The full-text part was actually [more complex](https://github.com/backflip/blog.responsive.ch/commit/b41153a3471c1b4a7d96c228f64458e286942b28) when still using Astro v1.

### Styles

The single [CSS file](https://github.com/backflip/blog.responsive.ch/blob/346d3efbddbfe5decaeb22613f9c70898c75b45c/public/styles/main.css) is copied as is and then postprocessed using [LightningCSS](https://lightningcss.dev). The processing consists of transpiling new syntax based on a [Browserslist](https://browsersl.ist) config (flattening CSS nesting, rewriting color functions like `lch` etc.) and minification.

This is mostly optional: Should the postprocessing step make any issues at any point, I could just drop it and everything would still work fine (though styles would not be minified and some rules would be not be interpreted in older browsers).

### Responsive images

The built HTML is parsed using [LinkeDOM](https://www.npmjs.com/package/linkedom) to find all `img` elements with relative `src` URLs. Using [Sharp](https://sharp.pixelplumbing.com), images are transformed to WebP and resized based on a pre-defined list of dimensions.

Before:

```md
![form route after POST request](media/form-post.png)
```

After:

```html
<img
  height="538"
  width="800"
  loading="lazy"
  sizes="auto"
  srcset="media/form-post-400.webp 400w, media/form-post-800.webp 800w"
  src="media/form-post.png"
  alt="form route after POST request"
/>
```

So the postprocess script adds an `srcset` attribute with a few image sizes based on the original size of the image.

The magic part is the added `sizes="auto"` as it frees me from figuring out specific sizes for specific images on specific viewports. Instead, the browser will pick the proper size. It has to be combined with `loading="lazy"` so it would not be appropriate for keyvisuals, but works great for my content images.

This is totally awesome.

<my-gifreplay>

![Nick Offerman as Ron Swanson dancing happily](./media/dancing.gif)

</my-gifreplay>

I really hope it will be part of [Interop 2026](https://github.com/web-platform-tests/interop/issues/1114) as it's currently [Chromium-only](https://caniuse.com/mdn-html_elements_img_sizes_auto). Until then, the following step will bundle a [polyfill](https://github.com/Shopify/autosizes) for other browser.

This processing step is optional, too. We'll still get working images should it ever fail, they are just larger than necessary. Same for non-Chromium browsers unable or unwilling to load and interpret the polyfill.

### Scripts

The [layout component](https://github.com/backflip/blog.responsive.ch/blob/346d3efbddbfe5decaeb22613f9c70898c75b45c/src/components/Layout.js#L24) references a single file:

```html
<script src="/scripts/index.js" type="module"></script>
```

It is created from a [single entrypoint](https://github.com/backflip/blog.responsive.ch/blob/346d3efbddbfe5decaeb22613f9c70898c75b45c/src/scripts/index.js) using [esbuild](https://esbuild.github.io/). There are some hoops to jump through in order to map the Browserslist config to esbuild's [target option](https://www.npmjs.com/package/browserslist-to-esbuild), but nothing too fancy.

## Deployment

A two-stage [Docker build](https://github.com/backflip/blog.responsive.ch/blob/346d3efbddbfe5decaeb22613f9c70898c75b45c/Dockerfile) first runs the build and postprocess scripts and serves the result with `nginx`. A custom [config file](https://github.com/backflip/blog.responsive.ch/blob/346d3efbddbfe5decaeb22613f9c70898c75b45c/nginx.default.conf) makes sure that we have a nice [404 page](https://github.com/backflip/blog.responsive.ch/blob/346d3efbddbfe5decaeb22613f9c70898c75b45c/src/pages/404/index.md).

This should work everywhere we can run a docker container. As a fan of [fly.io](https://fly.io), I have chosen their platform and deploy via their default [GitHub action](https://github.com/backflip/blog.responsive.ch/blob/346d3efbddbfe5decaeb22613f9c70898c75b45c/.github/workflows/fly-deploy.yml).

## Limitations

Limitations?

<my-gifreplay>

![Nick Offerman as Lord Bruno in The Little Hours saying How Dare You!](./media/how-dare-you.gif)

</my-gifreplay>

Okay, for one, there is no real development server. Instead, I serve the `dist/` folder using macOS's built-in `python3 -m http.server -d dist`. A simple `node --watch-path=./src ./bin/build.js` rebuilds everything on every [change](https://nodejs.org/api/cli.html#--watch-path) of a markdown file and I manually reload the browser window whenever I feel like it. Which is not very often.

Second: Test coverage. Works on my machine.

Third: I don't yet understand the [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag) caching behavior used by nginx (specifically, when my browser should decide to fetch updated styles or client-side scripts).

## Summary

- Tired of regularly upgrading your SSG framework? There are two options:
  1. Replace the framework with another, fancier framework.
  2. Build your own framework.
- `sizes="auto"` is the best.
