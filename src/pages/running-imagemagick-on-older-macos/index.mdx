---
layout: ../../layouts/Layout.astro
title: Running ImageMagick on older macOS
date: 2025-07-31
abstract: Using Docker to work around the limitations of Homebrew on older macOS versions.
---

We reanimated an old MacBook for the kid so he could download pictures of planes, trains and automobiles, and create his own memory sets (a card game which is apparently called [concentration](<https://en.wikipedia.org/wiki/Concentration_(card_game)>) in non-German speaking countries). Turns out the latest macOS running on that particular hardware ([10.15 Catalina](https://en.wikipedia.org/wiki/MacOS_Catalina)) does not yet support WebP or AVIF images outside of a browser. No problem, let's [brew ourselves](https://formulae.brew.sh/formula/imagemagick) some [ImageMagick](https://imagemagick.org) so we can convert them to PNGs.

Nope. Turns out a dependency (an ingredient?) of that formula, a recent OpenSSL version, [assumes as specific Perl dependency](https://github.com/openssl/openssl/pull/27941) is always present. Not on this machine. As some people on the internet recommended against manipulating the system version of Perl, I went with a new homebrewed one and installed the missing [IO::Socket::IP](https://metacpan.org/pod/IO::Socket::IP) via [`cpan`](https://www.cpan.org/modules/INSTALL.html). Still no luck, as installing OpenSSL apparently ignored my new perl version. At some point this was working somehow, but then I stumbled upon the next failing dependency.

I was expecting something similar to [npm's overrides](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides) to exist, allowing me to pin an old version of any incompatible dependeny. But based on what I gathered from [discussions in Homebrew's issue tracker](https://github.com/Homebrew/brew/issues/6103), that is not something they want to provide. Which is very unfortunate for my case but totally understandable from an open-source software support point-of-view.

So I gave up and turned to Docker:

```
FROM debian:latest
RUN apt-get update && apt-get install -y imagemagick
ENTRYPOINT ["magick"]
```

After building this image with `docker build . -t imagemagick`, it can be used to convert all `.webp` and `.avif` files in the current directory (recursively) to PNG:

```bash
for f in $(find . -name '*.webp' -o -name '*.avif'); do
  docker run -v $(pwd):/i imagemagick /i/$f /i/$f.png
done
```

However, this image has a ridiculous size of 380 MB. So let's pick a smaller base image:

```
FROM alpine:latest
RUN apk add --no-cache imagemagick
ENTRYPOINT ["magick"]
```

While this reduces the size to 33 MB, it has the slight disadvantage of not working:

```
magick: no decode delegate for this image format `AVIF' @ error/constitute.c/ReadImage/746.
magick: delegate failed `'dwebp' -pam '%i' -o '%o'' @ error/delegate.c/InvokeDelegate/1920.
magick: unable to open file '/tmp/magick-WH2QY7r79RAmEmO-qFYO0Lv219JnOAbk': No such file or directory @ error/constitute.c/ReadImage/785.
```

So let's add the missing packages:

```
FROM alpine:latest
RUN apk add --no-cache imagemagick libwebp libheif
ENTRYPOINT ["magick"]
```

This increases the built image's size to 51 MB (~0.5 MB for `libwebp` and the rest for `libheif`), but we are still almost 90% below the initial size. 🎉

So as long as Docker runs on macOS Catalina, we are probably safe.
