/**
 * Adds a replay button to GIF images, setting a `reload=timestamp` search parameter on the source to force a reload.
 */
class GifReplay extends HTMLElement {
  connectedCallback() {
    const image = this.querySelector("img");

    if (!image) {
      console.warn("No image found");

      return;
    }

    const imageUrl = new URL(image.src);

    // Create wrapper if not present
    let wrapper = this.querySelector("p");

    if (!wrapper) {
      wrapper = document.createElement("p");

      wrapper.appendChild(image);

      this.appendChild(wrapper);
    }

    // Create button
    const button = document.createElement("button");
    button.innerHTML = `⟳ <span class="visually-hidden">Replay GIF</span>`;

    button.addEventListener("click", () => {
      imageUrl.searchParams.set("reload", String(Date.now()));

      image.src = imageUrl.toString();
    });

    wrapper.appendChild(button);
  }
}

customElements.define("my-gifreplay", GifReplay);
