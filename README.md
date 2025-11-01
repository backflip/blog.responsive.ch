# blog.responsive.ch

Static site built with [custom build script](./bin/build.js).

## Build

`npm run build` compiles Markdown to HTML (using [Marked](https://marked.js.org) and [front-matter](https://github.com/jxson/front-matter)), transforms CSS (using [Lightning CSS](https://lightningcss.dev)) and bundles JavaScript using [ESBuild](https://esbuild.github.io). The result is available in `dist/`.

Using Docker: `docker build . -t blog.responsive.ch`

## Serve

`npm run serve` serves `dist/` using Python's built-in HTTP server.

Using Docker: `docker run -p 80:80 blog.responsive.ch`

## Watch

`npm run dev` runs the build script on any file change in `src/`. 

Useful in combination with `npm run serve`.
