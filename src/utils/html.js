import { DOMParser } from "linkedom";

/**
 * Allow for syntax highlighting in template strings
 *
 * E.g. via https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#raw_strings
 *
 * @param {string[] | ArrayLike<string>} strings
 * @param {...any} values
 * @returns {string}
 */
export function html(strings, ...values) {
  return String.raw({ raw: strings }, ...values);
}

/**
 * Escape HTML in strings (including quotes)
 * @param {string} string
 * @returns {string}
 */
export function escapeHTML(string) {
  const document = new DOMParser().parseFromString("", "text/html");
  const element = document.createElement("div", undefined);
  const text = document.createTextNode(string);

  element.appendChild(text);

  return element.innerHTML.replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
