import { html } from "../utils/html.js";

/**
 * @param {{ posts: import("../../types.js").Post[] }} props
 * @returns {string}
 */
export default function Listing({ posts }) {
  return posts
    .map((post) => {
      return html`<article>
        <time datetime="${post.date?.toISOString()}"
          >${post.dateFormatted}</time
        >
        <h2>
          <a href="${post.url}">${post.title}</a>
        </h2>
        <p>${post.abstract}</p>
      </article>`;
    })
    .join("");
}
