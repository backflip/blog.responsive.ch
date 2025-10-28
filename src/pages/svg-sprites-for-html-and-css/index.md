---
title: SVG Sprites for HTML and CSS
date: 2024-07-30
abstract: How to use the same SVG sprite in both HTML and CSS
---

SVG sprites are a great way to serve icons. They have been around for [quite some time](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).

The basic approach:

1. Add each icon as a `<symbol>` to a single `sprite-symbols.svg` file:
   ```html
   <svg xmlns="http://www.w3.org/2000/svg">
     <symbol viewBox="0 -960 960 960" id="search">
       <path
         d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
       />
     </symbol>
     <symbol viewBox="0 -960 960 960" id="close">
       <path
         d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
       />
     </symbol>
   </svg>
   ```
2. Render SVG with `use` element. Reference specific symbol via fragment identifier:
   ```html
   <svg class="icon">
     <use xlink:href="sprite-symbols.svg#search" />
   </svg>
   ```
3. Set color via CSS:
   ```css
   .icon {
     fill: currentColor;
   }
   ```

The result:

<style>
.icon-button {
  appearance: none;
  color: black;
  background: white;
  border: 1px solid;
  border-radius: 5px;
	display: inline-flex;
	align-items: center;
}
.icon-button svg {
	fill: currentColor;
	width: 2rem;
	aspect-ratio: 1;
}
.icon-button:hover,
.icon-button:focus {
	color: red;
}
</style>

<button type="button" class="icon-button">
  <svg>
    <use xlink:href="media/sprite-symbols.svg#search" />
  </svg>
  <span>Search</span>
</button>
<button type="button" class="icon-button">
  <svg>
    <use xlink:href="media/sprite-symbols.svg#close" />
  </svg>
  <span>Close</span>
</button>

## How to reference the sprite in CSS?

What if we are unable to control the HTML and want to render the icon via CSS instead?

Let's add a background image:

```html
<style>
  .var-background::before {
    background-image: url(sprite-symbols.svg#search);
    /* ... */
  }
</style>

<button type="button" class="icon-button var-background">Search</button>
```

Unfortunately, the icon is not rendered:

<style>
.var-background::before {
	background-image: url(media/sprite-symbols.svg#search);
	content: "";
	width: 2rem;
	aspect-ratio: 1;
}
</style>

<button type="button" class="icon-button var-background">
  <span>Search</span>
</button>

For this to work, we need to expose a [`<view>`](https://css-tricks.com/svg-fragment-identifiers-work/) element in the sprite. Fortunately, it can be combined with our existing `<symbol>` via a `<use>` intermediate:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <symbol viewBox="0 -960 960 960" id="search">
    <path
      d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
    />
  </symbol>
  <use xlink:href="#search" width="960" height="960" x="0" y="0"></use>
  <view id="search-view" viewBox="0 0 960 960" />

  <symbol viewBox="0 -960 960 960" id="close">
    <path
      d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
    />
  </symbol>
  <use xlink:href="#close" width="960" height="960" x="0" y="960"></use>
  <view id="close-view" viewBox="0 960 960 960" />
</svg>
```

Now we can use the fragment identifier of the new `<view id="search-view" />` element:

```css
.var-view::before {
  background-image: url(sprite-hybrid.svg#search-view);
  /* ... */
}
```

The updated result:

<style>
.var-view::before {
	background-image: url(media/sprite-hybrid.svg#search-view);
}
</style>

<button type="button" class="icon-button var-background var-view">
  <span>Search</span>
</button>

## How to change color on hover/active?

`mask-image` to the rescue. Instead of using `background-image`, we set a background color and use the icon as a mask:

```css
.var-mask::before {
  background: currentColor;
  mask-image: url(sprite-hybrid.svg#search-view);
  /** ... */
}
```

The final result:

<style>
.var-mask::before {
	background: currentColor;
	mask-image: url(media/sprite-hybrid.svg#search-view);
}
</style>

<button type="button" class="icon-button var-background var-view var-mask">
  <span>Search</span>
</button>

## How to automate this?

I'm currently using the highly recommended [svg-sprite](https://github.com/svg-sprite/svg-sprite) library to generate SVG sprites from a folder of icons. At the time of writing this article, it does not yet provide a [hybrid mode](https://github.com/svg-sprite/svg-sprite/issues/678). However, since its [compile method](https://github.com/svg-sprite/svg-sprite/blob/main/docs/api.md) returns both the generated SVG and all shapes, we can use the `symbol` [output mode](https://github.com/svg-sprite/svg-sprite/blob/main/docs/configuration.md#output-modes) and manually extend the generated SVG with a `<use ... /><view ... />` for each symbol by [looping through the shapes](https://github.com/svg-sprite/svg-sprite/issues/678#issuecomment-2257095890).
