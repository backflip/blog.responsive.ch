import { html } from "../utils/html.js";
import Fathom from "./Fathom.js";

/**
 * @param {{ title?: string, description?: string, content: string; root?: boolean }} props
 * @returns {string}
 */
export default ({ title, description, content, root }) =>
  html`<html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/rss.xml"
        title="RSS Feed"
      />
      <link rel="stylesheet" href="https://www.responsive.ch/styles/main.css" />
      <link rel="stylesheet" href="/styles/main.css" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <script src="/scripts/index.js" type="module"></script>
      <title>${title ? `${title} – ` : ""}blog.responsive.ch</title>
      ${description
        ? html`<meta name="description" content="${description}" />`
        : ""}
    </head>
    <body>
      <div class="wrapper">
        <header>
          ${root ? "" : html`<a href="/">← blog.responsive.ch</a>`}
        </header>
        <main>
          ${title ? html`<h1 class="${root ? "root" : ""}">${title}</h1>` : ""}
          ${content}
        </main>
        <footer>
          <img
            src="https://www.responsive.ch/media/portrait-200.webp"
            alt="Thomas Jaggi"
            width="90"
            height="90"
            loading="lazy"
          />
          <p>
            A blog about web technology and remotely related thingies.<br />
            Written by <strong>Thomas Jaggi</strong> who does things with code
            at <a href="https://responsive.ch">responsive.ch</a>.<br />
            Please use
            <a href="https://social.thomasjaggi.ch/@thomas"
              ><span role="img" aria-label="Mastodon">🦣</span></a
            >
            for comments and questions.
          </p>
        </footer>
      </div>
      ${Fathom({ siteId: "BUNOM" })}
    </body>
  </html>`;
