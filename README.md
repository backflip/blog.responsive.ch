# blog.responsive.ch

Static site built with [custom build script](./bin/build.js).

## Build

`npm run build` compiles Markdown to HTML (using [Marked](https://marked.js.org) and [front-matter](https://github.com/jxson/front-matter)) and transforms CSS (using [Lightning CSS](https://lightningcss.dev)). The result is available in `dist/`.

Using Docker: `docker build . -t blog.responsive.ch`

## Serve

`python3 -m http.server -d dist`

Using Docker: `docker run -p 80:80 blog.responsive.ch`
