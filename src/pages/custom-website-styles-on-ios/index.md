---
title: Custom Website Styles on iOS
date: 2023-10-08
abstract: Blinded by the light? Create your own dark modes for light websites.
---

I tend to read in the evening. This is what I look like:

[![](https://media.giphy.com/media/t6lAk9EJRLKajKTc3O/giphy.gif)](https://giphy.com/gifs/natgeochannel-season-1-nat-geo-valley-of-the-boom-t6lAk9EJRLKajKTc3O)

Yes, I have mounted my smartphone to the wall.

As websites like [watson.ch](https://www.watson.ch) or [vox.com](https://www.vox.com) don't seem to offer a dark mode, writing my own custom styles is the quickest solution.

Turns out there is a nice solution for that: [Userscripts](https://github.com/quoid/userscripts):

> Userscripts is an open source Safari extension that lets you save and run arbitrary bits of JavaScript (and CSS) code for the websites you visit. It implements a code editor right in your browser for a simple method of creating, editing and saving your code.

This is what my custom styles for watson.ch look like:

<details open>
	<summary>Toggle code</summary>

```css
/* ==UserStyle==
@name        Watson Dark Mode
@description Light text on dark background for watson.ch
@match       https://www.watson.ch/*
==/UserStyle== */

/**
 * 1. COLORS
 */

:root {
  --dark: rgb(43, 43, 43);
  --light: rgb(255, 255, 255);
  --light-secondary: rgba(255, 255, 255, 0.75);
  --accent: rgb(244, 15, 151);
}

/* Default styles */
body {
  background: var(--dark) !important;
  color: var(--light) !important;
}

/* Remove custom background */
.cluster,
.region,
.teaser.teaser.teaser.teaser.teaser,
.watson-footer,
.watson-snippet__contextBoxList,
.combo_bg,
.mega_teaser_short_wrapper,
.watson-snippet__tableOfContents__item,
.watson-snippet__simple-infobox__box,
.watson-snippet__result-table,
.watson-teaser__image,
.watson-ad,
.watson-snippet__datawrapper iframe {
  background-color: var(--dark) !important;
}

/* Remove border */
.region,
.cluster,
.watson-discussion,
.fat_wrapper {
  border-color: transparent !important;
}

/* Remove custom font color */
.text,
.text h2 div,
.teaser_type_default.combo_fg,
.watson-snippet__tableOfContents__item {
  color: inherit !important;
}

/* Optimize gradient colors */
.watson-storybreadcrumbs__fade {
  background-image: linear-gradient(
    to right,
    transparent,
    var(--dark)
  ) !important;
}
.watson-next-story__actionbutton {
  background-image: linear-gradient(
    to bottom,
    transparent,
    var(--dark)
  ) !important;
}

/* Apply accent color where light/dark is not enough */
.region .mega_teaser_short_wrapper::before {
  border-bottom-color: var(--accent) !important;
  top: -11px !important;
}

/**
 * 2. OPTIMIZATIONS
 */

/* Set fixed height for ads to prevent constant reflow on scroll */
.commercial {
  aspect-ratio: 1 !important;
  overflow: hidden !important;
  margin-bottom: 1rem;
}

/* Hide irrelevant elements */
.watson-snippet__contextBoxList,
.watson-donation,
.story-recommendations,
.watson-snippet__newsletter,
.watson-little-boxes,
.watson-next-story,
.watson-sharebuttons,
.watson-footer,
.cookiefooter,
.sorgometer,
#donation,
.watson-trending-topics-box,
.watson-language-switch,
.weathersummary {
  display: none !important;
}
```

</details>

## Step by step

1. It starts with a [somewhat standardized](https://github.com/openstyles/stylus/wiki/Writing-UserCSS) metadata block [^1]. An important part of it is specifying which pages the styles are supposed to be applied to.

   ```css
   /* ==UserStyle==
    @name        Watson Dark Mode
    @description Light text on dark background for watson.ch
    @match       https://www.watson.ch/*
    ==/UserStyle== */
   ```

2. Specification of the colors I intend to use as CSS custom properties:

   ```css
   :root {
     --dark: rgb(43, 43, 43);
     --light: rgb(255, 255, 255);
     --light-secondary: rgba(255, 255, 255, 0.75);
     --accent: rgb(244, 15, 151);
   }
   ```

3. Application of the main colors to the body:

   ```css
   body {
     background: var(--dark) !important;
     color: var(--light) !important;
   }
   ```

4. Removal of background, border and custom font colors on specific elements:

   ```css
   .cluster,
   .region /*,
   ... more selectors */ {
     background-color: transparent !important;
   }

   .cluster,
   .region /*,
   ... more selectors */ {
     border-color: transparent !important;
   }

   .text,
   .text h2 div /*,
   ... more selectors */ {
     color: inherit !important;
   }
   ```

5. Other color optimizations on specific elements:

   ```css
   /* Optimize gradient colors */
   .watson-storybreadcrumbs__fade {
     background-image: linear-gradient(
       to right,
       transparent,
       var(--dark)
     ) !important;
   }
   /* ... */

   /* Apply accent color where light/dark is not enough */
   .region .mega_teaser_short_wrapper::before {
     border-bottom-color: var(--accent) !important;
     top: -11px !important;
   }
   ```

6. Other optimizations

   ```css
   /* Set fixed height for ads to prevent constant reflow on scroll */
   .commercial {
     aspect-ratio: 1 !important;
     overflow: hidden !important;
     margin-bottom: 1rem;
   }

   /* Hide irrelevant elements */
   .watson-snippet__contextBoxList,
   .watson-donation,
   .story-recommendations /*,
   ... more selectors */ {
     display: none !important;
   }
   ```

## Process

I use the Safari developer tools to inspect the page and decide what styles to apply to which element. Then I edit the styles in the Userscript extension page and reload the page.

The styles are synced from my desktop to my iPhone via [iCloud sync](https://github.com/quoid/userscripts#usage). [^2]

## What is this fixed ad height in step 6 about? Ever heard of ad blockers?

I tend not to block ads on pages where I regularly consume free content. I would prefer to pay for the content and not have ads, but nobody listens to me.

As long as they don't trigger reflows while I'm reading, I can live with ads. This can usually be enfored with `aspect-ratio: ...` and `overflow: hidden`. Otherwise I enable every ad blocker I can find, of course. There are limits.

[^1]: See [GitHub issue](https://github.com/quoid/userscripts/issues/215) on the differences between what Userscripts supports and what alternative tools like Stylus do.

[^2]: Recently, this synchronization has proven to be somewhat unreliable. From time to time, I have to open the [Files](https://support.apple.com/en-us/HT206481) app and make sure all the user styles are downloaded to my device. But this is probably due to my phone being low on storage rather than a general issue.
