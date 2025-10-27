import { html } from "../utils/html.js";
import Fathom from "./Fathom.js";
import pkg from "../../package.json" with { type: "json" };

/**
 * @param {{ title?: string, content: string; root?: boolean }} props
 * @returns {string}
 */
export default ({ title, content, root }) => html`<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link
      rel="alternate"
      type="application/rss+xml"
      href="/rss.xml"
      title="RSS Feed"
    />
    <link rel="stylesheet" href="${`https://www.responsive.ch/assets/index.css?v${pkg.version}`}" />
    <link rel="stylesheet" href="/styles/main.css" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <title>${title ? `${title} – ` : ""}blog.responsive.ch</title>
  </head>
  <body>
    <div class="wrapper">
      <header>
        <a aria-current="${root ? "page" : false}" href="/"
          >${root ? "" : `← `}blog.responsive.ch</a
        >
      </header>
      <main>${title ? html`<h1>${title}</h1>` : ""} ${content}</main>
      <footer>
        <img
          src="https://www.responsive.ch/media/portrait.jpg"
          alt="Thomas Jaggi"
          width="{90}"
          height="{90}"
        />
        <p>
          A blog about web technology and remotely related thingies.<br />
          Written by <strong>Thomas Jaggi</strong> who does things with code at
          <a href="https://responsive.ch">responsive.ch</a>.<br />
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
