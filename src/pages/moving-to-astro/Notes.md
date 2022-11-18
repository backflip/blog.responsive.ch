```
npm WARN ERESOLVE overriding peer dependency
npm WARN ERESOLVE overriding peer dependency
npm WARN ERESOLVE overriding peer dependency
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated eslint-loader@2.2.1: This loader has been deprecated. Please use eslint-webpack-plugin
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated @types/vfile-message@2.0.0: This is a stub types definition. vfile-message provides its own type definitions, so you do not need this installed.
npm WARN deprecated async-cache@1.1.0: No longer maintained. Use [lru-cache](http://npm.im/lru-cache) version 7.6 or higher, and provide an asynchronous `fetchMethod` option.
npm WARN deprecated babel-eslint@10.1.0: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
npm WARN deprecated @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/joi@15.1.1: Switch to 'npm install joi'
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm WARN deprecated querystring@0.2.1: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated subscriptions-transport-ws@0.9.19: The `subscriptions-transport-ws` package is no longer maintained. We recommend you use `graphql-ws` instead. For help migrating Apollo software to `graphql-ws`, see https://www.apollographql.com/docs/apollo-server/data/subscriptions/#switching-from-subscriptions-transport-ws    For general help using `graphql-ws`, see https://github.com/enisdenjo/graphql-ws/blob/master/README.md
npm WARN deprecated gatsby-recipes@0.9.3: gatsby-recipes has been removed from gatsby/gatsby-cli >=4.5.0. Update to gatsby@latest/gatsby-cli@latest to use versions without gatsby-recipes. This package will no longer receive updates.
npm WARN deprecated gatsby-plugin-fathom@1.3.0: This project is outdated and you should use the official Fathom guide: https://usefathom.com/integrations/gatsbyjs
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.
npm WARN deprecated gatsby-image@2.11.0: gatsby-image is now gatsby-plugin-image: https://npm.im/gatsby-plugin-image. This package will no longer receive updates.
npm ERR! code 1
npm ERR! path node_modules/sharp
npm ERR! command failed
npm ERR! command sh -c -- (node install/libvips && node install/dll-copy && prebuild-install) || (node-gyp rebuild && node install/dll-copy)
npm ERR! CC(target) Release/obj.target/nothing/../node-addon-api/nothing.o
npm ERR!   LIBTOOL-STATIC Release/nothing.a
npm ERR!   TOUCH Release/obj.target/libvips-cpp.stamp
npm ERR!   CXX(target) Release/obj.target/sharp/src/common.o
npm ERR! info sharp Downloading https://github.com/lovell/sharp-libvips/releases/download/v8.10.5/libvips-8.10.5-darwin-arm64v8.tar.br
npm ERR! ERR! sharp Prebuilt libvips 8.10.5 binaries are not yet available for darwin-arm64v8
```

## Astro

```
@responsive.ch/nlog@0.0.1 /Users/me/Sites/Misc/blog.responsive.ch
└─┬ astro@1.6.7
  ├── @astrojs/compiler@0.29.13
  ├─┬ @astrojs/language-server@0.28.3
  │ ├─┬ @vscode/emmet-helper@2.8.4
  │ │ ├─┬ emmet@2.3.6
  │ │ │ ├─┬ @emmetio/abbreviation@2.2.3
  │ │ │ │ └── @emmetio/scanner@1.0.0
  │ │ │ └─┬ @emmetio/css-abbreviation@2.1.4
  │ │ │   └── @emmetio/scanner@1.0.0 deduped
  │ │ ├── jsonc-parser@2.3.1
  │ │ ├── vscode-languageserver-textdocument@1.0.7 deduped
  │ │ ├── vscode-languageserver-types@3.17.2 deduped
  │ │ ├── vscode-nls@5.2.0
  │ │ └── vscode-uri@2.1.2
  │ ├── events@3.3.0
  │ ├─┬ prettier-plugin-astro@0.7.0
  │ │ ├── @astrojs/compiler@0.29.13 deduped
  │ │ ├── prettier@2.7.1 deduped
  │ │ ├─┬ sass-formatter@0.7.5
  │ │ │ └─┬ suf-log@2.5.3
  │ │ │   └── s.color@0.0.15
  │ │ └─┬ synckit@0.8.4
  │ │   ├─┬ @pkgr/utils@2.3.1
  │ │   │ ├── cross-spawn@7.0.3 deduped
  │ │   │ ├── is-glob@4.0.3 deduped
  │ │   │ ├─┬ open@8.4.0
  │ │   │ │ ├── define-lazy-prop@2.0.0
  │ │   │ │ ├── is-docker@2.2.1
  │ │   │ │ └── is-wsl@2.2.0 deduped
  │ │   │ ├── picocolors@1.0.0 deduped
  │ │   │ ├─┬ tiny-glob@0.2.9
  │ │   │ │ ├── globalyzer@0.1.0
  │ │   │ │ └── globrex@0.1.2
  │ │   │ └── tslib@2.4.1 deduped
  │ │   └── tslib@2.4.1 deduped
  │ ├── prettier@2.7.1
  │ ├── source-map@0.7.4
  │ ├─┬ vscode-css-languageservice@6.1.1
  │ │ ├── vscode-languageserver-textdocument@1.0.7 deduped
  │ │ ├── vscode-languageserver-types@3.17.2 deduped
  │ │ ├── vscode-nls@5.2.0 deduped
  │ │ └── vscode-uri@3.0.6 deduped
  │ ├─┬ vscode-html-languageservice@5.0.2
  │ │ ├── vscode-languageserver-textdocument@1.0.7 deduped
  │ │ ├── vscode-languageserver-types@3.17.2 deduped
  │ │ ├── vscode-nls@5.2.0 deduped
  │ │ └── vscode-uri@3.0.6 deduped
  │ ├─┬ vscode-languageserver-protocol@3.17.2
  │ │ ├── vscode-jsonrpc@8.0.2
  │ │ └── vscode-languageserver-types@3.17.2 deduped
  │ ├── vscode-languageserver-textdocument@1.0.7
  │ ├── vscode-languageserver-types@3.17.2
  │ ├─┬ vscode-languageserver@8.0.2
  │ │ └── vscode-languageserver-protocol@3.17.2 deduped
  │ └── vscode-uri@3.0.6
  ├─┬ @astrojs/markdown-remark@1.1.3
  │ ├─┬ @astrojs/micromark-extension-mdx-jsx@1.0.3
  │ │ ├─┬ @types/acorn@4.0.6
  │ │ │ └── @types/estree@1.0.0
  │ │ ├── estree-util-is-identifier-name@2.0.1
  │ │ ├─┬ micromark-factory-mdx-expression@1.0.6
  │ │ │ ├── micromark-factory-space@1.0.0 deduped
  │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ ├── micromark-util-events-to-acorn@1.2.0 deduped
  │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ ├─┬ unist-util-position-from-estree@1.1.1
  │ │ │ │ └── @types/unist@2.0.6 deduped
  │ │ │ ├── uvu@0.5.6 deduped
  │ │ │ └── vfile-message@3.1.2 deduped
  │ │ ├─┬ micromark-factory-space@1.0.0
  │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ └── micromark-util-types@1.0.2 deduped
  │ │ ├─┬ micromark-util-character@1.1.0
  │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ └── micromark-util-types@1.0.2 deduped
  │ │ ├── micromark-util-symbol@1.0.1
  │ │ ├── micromark-util-types@1.0.2
  │ │ ├─┬ uvu@0.5.6
  │ │ │ ├── dequal@2.0.3
  │ │ │ ├── diff@5.1.0 deduped
  │ │ │ ├── kleur@4.1.5 deduped
  │ │ │ └─┬ sade@1.8.1
  │ │ │   └── mri@1.2.0
  │ │ └── vfile-message@3.1.2 deduped
  │ ├─┬ @astrojs/prism@1.0.2
  │ │ └── prismjs@1.29.0
  │ ├─┬ acorn-jsx@5.3.2
  │ │ └── acorn@8.8.1 deduped
  │ ├── acorn@8.8.1
  │ ├── github-slugger@1.5.0 deduped
  │ ├─┬ hast-util-to-html@8.0.3
  │ │ ├── @types/hast@2.3.4 deduped
  │ │ ├── ccount@2.0.1
  │ │ ├── comma-separated-tokens@2.0.2
  │ │ ├─┬ hast-util-is-element@2.1.2
  │ │ │ ├── @types/hast@2.3.4 deduped
  │ │ │ └── @types/unist@2.0.6 deduped
  │ │ ├── hast-util-whitespace@2.0.0
  │ │ ├── html-void-elements@2.0.1
  │ │ ├── property-information@6.1.1
  │ │ ├── space-separated-tokens@2.0.1
  │ │ ├─┬ stringify-entities@4.0.3
  │ │ │ ├── character-entities-html4@2.1.0
  │ │ │ └── character-entities-legacy@3.0.0
  │ │ └── unist-util-is@5.1.1 deduped
  │ ├── import-meta-resolve@2.1.0 deduped
  │ ├─┬ mdast-util-from-markdown@1.2.0
  │ │ ├─┬ @types/mdast@3.0.10
  │ │ │ └── @types/unist@2.0.6 deduped
  │ │ ├── @types/unist@2.0.6 deduped
  │ │ ├─┬ decode-named-character-reference@1.0.2
  │ │ │ └── character-entities@2.0.2
  │ │ ├── mdast-util-to-string@3.1.0
  │ │ ├─┬ micromark-util-decode-numeric-character-reference@1.0.0
  │ │ │ └── micromark-util-symbol@1.0.1 deduped
  │ │ ├─┬ micromark-util-decode-string@1.0.2
  │ │ │ ├── decode-named-character-reference@1.0.2 deduped
  │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ ├── micromark-util-decode-numeric-character-reference@1.0.0 deduped
  │ │ │ └── micromark-util-symbol@1.0.1 deduped
  │ │ ├─┬ micromark-util-normalize-identifier@1.0.0
  │ │ │ └── micromark-util-symbol@1.0.1 deduped
  │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ ├─┬ micromark@3.1.0
  │ │ │ ├─┬ @types/debug@4.1.7
  │ │ │ │ └── @types/ms@0.7.31
  │ │ │ ├── debug@4.3.4 deduped
  │ │ │ ├── decode-named-character-reference@1.0.2 deduped
  │ │ │ ├─┬ micromark-core-commonmark@1.0.6
  │ │ │ │ ├── decode-named-character-reference@1.0.2 deduped
  │ │ │ │ ├─┬ micromark-factory-destination@1.0.0
  │ │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ │ └── micromark-util-types@1.0.2 deduped
  │ │ │ │ ├─┬ micromark-factory-label@1.0.2
  │ │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ │ │ └── uvu@0.5.6 deduped
  │ │ │ │ ├── micromark-factory-space@1.0.0 deduped
  │ │ │ │ ├─┬ micromark-factory-title@1.0.2
  │ │ │ │ │ ├── micromark-factory-space@1.0.0 deduped
  │ │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ │ │ └── uvu@0.5.6 deduped
  │ │ │ │ ├─┬ micromark-factory-whitespace@1.0.0
  │ │ │ │ │ ├── micromark-factory-space@1.0.0 deduped
  │ │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ │ └── micromark-util-types@1.0.2 deduped
  │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ ├── micromark-util-chunked@1.0.0 deduped
  │ │ │ │ ├─┬ micromark-util-classify-character@1.0.0
  │ │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ │ └── micromark-util-types@1.0.2 deduped
  │ │ │ │ ├── micromark-util-html-tag-name@1.1.0
  │ │ │ │ ├── micromark-util-normalize-identifier@1.0.0 deduped
  │ │ │ │ ├── micromark-util-resolve-all@1.0.0 deduped
  │ │ │ │ ├── micromark-util-subtokenize@1.0.2 deduped
  │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ │ └── uvu@0.5.6 deduped
  │ │ │ ├── micromark-factory-space@1.0.0 deduped
  │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ ├── micromark-util-chunked@1.0.0 deduped
  │ │ │ ├── micromark-util-combine-extensions@1.0.0 deduped
  │ │ │ ├── micromark-util-decode-numeric-character-reference@1.0.0 deduped
  │ │ │ ├── micromark-util-encode@1.0.1
  │ │ │ ├── micromark-util-normalize-identifier@1.0.0 deduped
  │ │ │ ├─┬ micromark-util-resolve-all@1.0.0
  │ │ │ │ └── micromark-util-types@1.0.2 deduped
  │ │ │ ├─┬ micromark-util-sanitize-uri@1.1.0
  │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ ├── micromark-util-encode@1.0.1 deduped
  │ │ │ │ └── micromark-util-symbol@1.0.1 deduped
  │ │ │ ├─┬ micromark-util-subtokenize@1.0.2
  │ │ │ │ ├── micromark-util-chunked@1.0.0 deduped
  │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ │ └── uvu@0.5.6 deduped
  │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ └── uvu@0.5.6 deduped
  │ │ ├── unist-util-stringify-position@3.0.2 deduped
  │ │ └── uvu@0.5.6 deduped
  │ ├─┬ mdast-util-mdx-expression@1.3.1
  │ │ ├─┬ @types/estree-jsx@1.0.0
  │ │ │ └── @types/estree@1.0.0 deduped
  │ │ ├── @types/hast@2.3.4 deduped
  │ │ ├── @types/mdast@3.0.10 deduped
  │ │ ├── mdast-util-from-markdown@1.2.0 deduped
  │ │ └─┬ mdast-util-to-markdown@1.3.0
  │ │   ├── @types/mdast@3.0.10 deduped
  │ │   ├── @types/unist@2.0.6 deduped
  │ │   ├── longest-streak@3.0.1
  │ │   ├── mdast-util-to-string@3.1.0 deduped
  │ │   ├── micromark-util-decode-string@1.0.2 deduped
  │ │   ├── unist-util-visit@4.1.1 deduped
  │ │   └── zwitch@2.0.2
  │ ├─┬ mdast-util-mdx-jsx@1.2.0
  │ │ ├─┬ @types/estree-jsx@0.0.1
  │ │ │ └── @types/estree@1.0.0 deduped
  │ │ ├── @types/mdast@3.0.10 deduped
  │ │ ├── mdast-util-to-markdown@1.3.0 deduped
  │ │ ├─┬ parse-entities@4.0.0
  │ │ │ ├── @types/unist@2.0.6 deduped
  │ │ │ ├── character-entities-legacy@3.0.0 deduped
  │ │ │ ├── character-entities@2.0.2 deduped
  │ │ │ ├── character-reference-invalid@2.0.1
  │ │ │ ├── decode-named-character-reference@1.0.2 deduped
  │ │ │ ├─┬ is-alphanumerical@2.0.1
  │ │ │ │ ├── is-alphabetical@2.0.1
  │ │ │ │ └── is-decimal@2.0.1 deduped
  │ │ │ ├── is-decimal@2.0.1
  │ │ │ └── is-hexadecimal@2.0.1
  │ │ ├── stringify-entities@4.0.3 deduped
  │ │ ├─┬ unist-util-remove-position@4.0.1
  │ │ │ ├── @types/unist@2.0.6 deduped
  │ │ │ └── unist-util-visit@4.1.1 deduped
  │ │ ├── unist-util-stringify-position@3.0.2 deduped
  │ │ └── vfile-message@3.1.2 deduped
  │ ├─┬ micromark-extension-mdx-expression@1.0.3
  │ │ ├── micromark-factory-mdx-expression@1.0.6 deduped
  │ │ ├── micromark-factory-space@1.0.0 deduped
  │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ ├─┬ micromark-util-events-to-acorn@1.2.0
  │ │ │ ├── @types/acorn@4.0.6 deduped
  │ │ │ ├── @types/estree@1.0.0 deduped
  │ │ │ ├─┬ estree-util-visit@1.2.0
  │ │ │ │ ├── @types/estree-jsx@1.0.0 deduped
  │ │ │ │ └── @types/unist@2.0.6 deduped
  │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ ├── uvu@0.5.6 deduped
  │ │ │ ├─┬ vfile-location@4.0.1
  │ │ │ │ ├── @types/unist@2.0.6 deduped
  │ │ │ │ └── vfile@5.3.5 deduped
  │ │ │ └── vfile-message@3.1.2 deduped
  │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ └── uvu@0.5.6 deduped
  │ ├─┬ micromark-extension-mdx-md@1.0.0
  │ │ └── micromark-util-types@1.0.2 deduped
  │ ├─┬ micromark-util-combine-extensions@1.0.0
  │ │ ├─┬ micromark-util-chunked@1.0.0
  │ │ │ └── micromark-util-symbol@1.0.1 deduped
  │ │ └── micromark-util-types@1.0.2 deduped
  │ ├─┬ rehype-raw@6.1.1
  │ │ ├── @types/hast@2.3.4 deduped
  │ │ ├─┬ hast-util-raw@7.2.2
  │ │ │ ├── @types/hast@2.3.4 deduped
  │ │ │ ├── @types/parse5@6.0.3
  │ │ │ ├── hast-util-from-parse5@7.1.0 deduped
  │ │ │ ├─┬ hast-util-to-parse5@7.0.0
  │ │ │ │ ├── @types/hast@2.3.4 deduped
  │ │ │ │ ├── @types/parse5@6.0.3 deduped
  │ │ │ │ ├─┬ hast-to-hyperscript@10.0.1
  │ │ │ │ │ ├── @types/unist@2.0.6 deduped
  │ │ │ │ │ ├── comma-separated-tokens@2.0.2 deduped
  │ │ │ │ │ ├── property-information@6.1.1 deduped
  │ │ │ │ │ ├── space-separated-tokens@2.0.1 deduped
  │ │ │ │ │ ├─┬ style-to-object@0.3.0
  │ │ │ │ │ │ └── inline-style-parser@0.1.1
  │ │ │ │ │ ├── unist-util-is@5.1.1 deduped
  │ │ │ │ │ └── web-namespaces@2.0.1 deduped
  │ │ │ │ ├── property-information@6.1.1 deduped
  │ │ │ │ ├── web-namespaces@2.0.1 deduped
  │ │ │ │ └── zwitch@2.0.2 deduped
  │ │ │ ├── html-void-elements@2.0.1 deduped
  │ │ │ ├── parse5@6.0.1 deduped
  │ │ │ ├─┬ unist-util-position@4.0.3
  │ │ │ │ └── @types/unist@2.0.6 deduped
  │ │ │ ├── unist-util-visit@4.1.1 deduped
  │ │ │ ├── vfile@5.3.5 deduped
  │ │ │ ├── web-namespaces@2.0.1
  │ │ │ └── zwitch@2.0.2 deduped
  │ │ └── unified@10.1.2 deduped
  │ ├─┬ rehype-stringify@9.0.3
  │ │ ├── @types/hast@2.3.4 deduped
  │ │ ├── hast-util-to-html@8.0.3 deduped
  │ │ └── unified@10.1.2 deduped
  │ ├─┬ remark-gfm@3.0.1
  │ │ ├── @types/mdast@3.0.10 deduped
  │ │ ├─┬ mdast-util-gfm@2.0.1
  │ │ │ ├── mdast-util-from-markdown@1.2.0 deduped
  │ │ │ ├─┬ mdast-util-gfm-autolink-literal@1.0.2
  │ │ │ │ ├── @types/mdast@3.0.10 deduped
  │ │ │ │ ├── ccount@2.0.1 deduped
  │ │ │ │ ├─┬ mdast-util-find-and-replace@2.2.1
  │ │ │ │ │ ├── escape-string-regexp@5.0.0
  │ │ │ │ │ ├── unist-util-is@5.1.1 deduped
  │ │ │ │ │ └── unist-util-visit-parents@5.1.1 deduped
  │ │ │ │ └── micromark-util-character@1.1.0 deduped
  │ │ │ ├─┬ mdast-util-gfm-footnote@1.0.1
  │ │ │ │ ├── @types/mdast@3.0.10 deduped
  │ │ │ │ ├── mdast-util-to-markdown@1.3.0 deduped
  │ │ │ │ └── micromark-util-normalize-identifier@1.0.0 deduped
  │ │ │ ├─┬ mdast-util-gfm-strikethrough@1.0.2
  │ │ │ │ ├── @types/mdast@3.0.10 deduped
  │ │ │ │ └── mdast-util-to-markdown@1.3.0 deduped
  │ │ │ ├─┬ mdast-util-gfm-table@1.0.6
  │ │ │ │ ├── @types/mdast@3.0.10 deduped
  │ │ │ │ ├── markdown-table@3.0.2
  │ │ │ │ ├── mdast-util-from-markdown@1.2.0 deduped
  │ │ │ │ └── mdast-util-to-markdown@1.3.0 deduped
  │ │ │ ├─┬ mdast-util-gfm-task-list-item@1.0.1
  │ │ │ │ ├── @types/mdast@3.0.10 deduped
  │ │ │ │ └── mdast-util-to-markdown@1.3.0 deduped
  │ │ │ └── mdast-util-to-markdown@1.3.0 deduped
  │ │ ├─┬ micromark-extension-gfm@2.0.1
  │ │ │ ├─┬ micromark-extension-gfm-autolink-literal@1.0.3
  │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ ├── micromark-util-sanitize-uri@1.1.0 deduped
  │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ │ └── uvu@0.5.6 deduped
  │ │ │ ├─┬ micromark-extension-gfm-footnote@1.0.4
  │ │ │ │ ├── micromark-core-commonmark@1.0.6 deduped
  │ │ │ │ ├── micromark-factory-space@1.0.0 deduped
  │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ ├── micromark-util-normalize-identifier@1.0.0 deduped
  │ │ │ │ ├── micromark-util-sanitize-uri@1.1.0 deduped
  │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ │ └── uvu@0.5.6 deduped
  │ │ │ ├─┬ micromark-extension-gfm-strikethrough@1.0.4
  │ │ │ │ ├── micromark-util-chunked@1.0.0 deduped
  │ │ │ │ ├── micromark-util-classify-character@1.0.0 deduped
  │ │ │ │ ├── micromark-util-resolve-all@1.0.0 deduped
  │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ │ └── uvu@0.5.6 deduped
  │ │ │ ├─┬ micromark-extension-gfm-table@1.0.5
  │ │ │ │ ├── micromark-factory-space@1.0.0 deduped
  │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ │ └── uvu@0.5.6 deduped
  │ │ │ ├─┬ micromark-extension-gfm-tagfilter@1.0.1
  │ │ │ │ └── micromark-util-types@1.0.2 deduped
  │ │ │ ├─┬ micromark-extension-gfm-task-list-item@1.0.3
  │ │ │ │ ├── micromark-factory-space@1.0.0 deduped
  │ │ │ │ ├── micromark-util-character@1.1.0 deduped
  │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
  │ │ │ │ ├── micromark-util-types@1.0.2 deduped
  │ │ │ │ └── uvu@0.5.6 deduped
  │ │ │ ├── micromark-util-combine-extensions@1.0.0 deduped
  │ │ │ └── micromark-util-types@1.0.2 deduped
  │ │ └── unified@10.1.2 deduped
  │ ├─┬ remark-parse@10.0.1
  │ │ ├── @types/mdast@3.0.10 deduped
  │ │ ├── mdast-util-from-markdown@1.2.0 deduped
  │ │ └── unified@10.1.2 deduped
  │ ├─┬ remark-rehype@10.1.0
  │ │ ├── @types/hast@2.3.4 deduped
  │ │ ├── @types/mdast@3.0.10 deduped
  │ │ ├─┬ mdast-util-to-hast@12.2.4
  │ │ │ ├── @types/hast@2.3.4 deduped
  │ │ │ ├── @types/mdast@3.0.10 deduped
  │ │ │ ├─┬ mdast-util-definitions@5.1.1
  │ │ │ │ ├── @types/mdast@3.0.10 deduped
  │ │ │ │ ├── @types/unist@2.0.6 deduped
  │ │ │ │ └── unist-util-visit@4.1.1 deduped
  │ │ │ ├── micromark-util-sanitize-uri@1.1.0 deduped
  │ │ │ ├── trim-lines@3.0.1
  │ │ │ ├─┬ unist-builder@3.0.0
  │ │ │ │ └── @types/unist@2.0.6 deduped
  │ │ │ ├── unist-util-generated@2.0.0
  │ │ │ ├── unist-util-position@4.0.3 deduped
  │ │ │ └── unist-util-visit@4.1.1 deduped
  │ │ └── unified@10.1.2 deduped
  │ ├─┬ remark-smartypants@2.0.0
  │ │ ├─┬ retext-smartypants@5.2.0
  │ │ │ ├─┬ @types/nlcst@1.0.0
  │ │ │ │ └── @types/unist@2.0.6 deduped
  │ │ │ ├─┬ nlcst-to-string@3.1.0
  │ │ │ │ └── @types/nlcst@1.0.0 deduped
  │ │ │ ├── unified@10.1.2 deduped
  │ │ │ └── unist-util-visit@4.1.1 deduped
  │ │ ├─┬ retext@8.1.0
  │ │ │ ├── @types/nlcst@1.0.0 deduped
  │ │ │ ├─┬ retext-latin@3.1.0
  │ │ │ │ ├── @types/nlcst@1.0.0 deduped
  │ │ │ │ ├─┬ parse-latin@5.0.1
  │ │ │ │ │ ├── nlcst-to-string@3.1.0 deduped
  │ │ │ │ │ ├─┬ unist-util-modify-children@3.1.0
  │ │ │ │ │ │ ├── @types/unist@2.0.6 deduped
  │ │ │ │ │ │ └── array-iterate@2.0.1
  │ │ │ │ │ └─┬ unist-util-visit-children@2.0.1
  │ │ │ │ │   └── @types/unist@2.0.6 deduped
  │ │ │ │ ├── unherit@3.0.0
  │ │ │ │ └── unified@10.1.2 deduped
  │ │ │ ├─┬ retext-stringify@3.1.0
  │ │ │ │ ├── @types/nlcst@1.0.0 deduped
  │ │ │ │ ├── nlcst-to-string@3.1.0 deduped
  │ │ │ │ └── unified@10.1.2 deduped
  │ │ │ └── unified@10.1.2 deduped
  │ │ └── unist-util-visit@4.1.1 deduped
  │ ├── shiki@0.11.1 deduped
  │ ├─┬ unified@10.1.2
  │ │ ├── @types/unist@2.0.6 deduped
  │ │ ├── bail@2.0.2
  │ │ ├── extend@3.0.2
  │ │ ├── is-buffer@2.0.5 deduped
  │ │ ├── is-plain-obj@4.1.0
  │ │ ├── trough@2.1.0
  │ │ └── vfile@5.3.5 deduped
  │ ├─┬ unist-util-map@3.1.2
  │ │ └── @types/unist@2.0.6 deduped
  │ ├── unist-util-visit@4.1.1 deduped
  │ └── vfile@5.3.5 deduped
  ├─┬ @astrojs/telemetry@1.0.1
  │ ├── ci-info@3.6.0 deduped
  │ ├── debug@4.3.4 deduped
  │ ├── dlv@1.1.3
  │ ├── dset@3.1.2
  │ ├── is-docker@3.0.0
  │ ├─┬ is-wsl@2.2.0
  │ │ └── is-docker@2.2.1
  │ ├─┬ node-fetch@3.3.0
  │ │ ├── data-uri-to-buffer@4.0.0
  │ │ ├─┬ fetch-blob@3.2.0
  │ │ │ ├── node-domexception@1.0.0
  │ │ │ └── web-streams-polyfill@3.2.1
  │ │ └─┬ formdata-polyfill@4.0.10
  │ │   └── fetch-blob@3.2.0 deduped
  │ └── which-pm-runs@1.1.0
  ├─┬ @astrojs/webapi@1.1.1
  │ ├─┬ global-agent@3.0.0
  │ │ ├── boolean@3.2.0
  │ │ ├── es6-error@4.1.1
  │ │ ├─┬ matcher@3.0.0
  │ │ │ └── escape-string-regexp@4.0.0
  │ │ ├─┬ roarr@2.15.4
  │ │ │ ├── boolean@3.2.0 deduped
  │ │ │ ├── detect-node@2.1.0
  │ │ │ ├─┬ globalthis@1.0.3
  │ │ │ │ └─┬ define-properties@1.1.4
  │ │ │ │   ├─┬ has-property-descriptors@1.0.0
  │ │ │ │   │ └─┬ get-intrinsic@1.1.3
  │ │ │ │   │   ├── function-bind@1.1.1 deduped
  │ │ │ │   │   ├── has-symbols@1.0.3
  │ │ │ │   │   └── has@1.0.3 deduped
  │ │ │ │   └── object-keys@1.1.1
  │ │ │ ├── json-stringify-safe@5.0.1
  │ │ │ ├── semver-compare@1.0.0
  │ │ │ └── sprintf-js@1.1.2
  │ │ ├── semver@7.3.8 deduped
  │ │ └─┬ serialize-error@7.0.1
  │ │   └── type-fest@0.13.1
  │ └── node-fetch@3.3.0 deduped
  ├─┬ @babel/core@7.20.2
  │ ├─┬ @ampproject/remapping@2.2.0
  │ │ ├─┬ @jridgewell/gen-mapping@0.1.1
  │ │ │ ├── @jridgewell/set-array@1.1.2 deduped
  │ │ │ └── @jridgewell/sourcemap-codec@1.4.14 deduped
  │ │ └─┬ @jridgewell/trace-mapping@0.3.17
  │ │   ├── @jridgewell/resolve-uri@3.1.0
  │ │   └── @jridgewell/sourcemap-codec@1.4.14 deduped
  │ ├─┬ @babel/code-frame@7.18.6
  │ │ └─┬ @babel/highlight@7.18.6
  │ │   ├── @babel/helper-validator-identifier@7.19.1 deduped
  │ │   ├─┬ chalk@2.4.2
  │ │   │ ├─┬ ansi-styles@3.2.1
  │ │   │ │ └─┬ color-convert@1.9.3
  │ │   │ │   └── color-name@1.1.3
  │ │   │ ├── escape-string-regexp@1.0.5
  │ │   │ └─┬ supports-color@5.5.0
  │ │   │   └── has-flag@3.0.0
  │ │   └── js-tokens@4.0.0
  │ ├── @babel/generator@7.20.4 deduped
  │ ├─┬ @babel/helper-compilation-targets@7.20.0
  │ │ ├── @babel/compat-data@7.20.1
  │ │ ├── @babel/core@7.20.2 deduped
  │ │ ├── @babel/helper-validator-option@7.18.6
  │ │ ├─┬ browserslist@4.21.4
  │ │ │ ├── caniuse-lite@1.0.30001431
  │ │ │ ├── electron-to-chromium@1.4.284
  │ │ │ ├── node-releases@2.0.6
  │ │ │ └─┬ update-browserslist-db@1.0.10
  │ │ │   ├── browserslist@4.21.4 deduped
  │ │ │   ├── escalade@3.1.1 deduped
  │ │ │   └── picocolors@1.0.0 deduped
  │ │ └── semver@6.3.0
  │ ├─┬ @babel/helper-module-transforms@7.20.2
  │ │ ├── @babel/helper-environment-visitor@7.18.9 deduped
  │ │ ├── @babel/helper-module-imports@7.18.6 deduped
  │ │ ├─┬ @babel/helper-simple-access@7.20.2
  │ │ │ └── @babel/types@7.20.2 deduped
  │ │ ├── @babel/helper-split-export-declaration@7.18.6 deduped
  │ │ ├── @babel/helper-validator-identifier@7.19.1 deduped
  │ │ ├── @babel/template@7.18.10 deduped
  │ │ ├── @babel/traverse@7.20.1 deduped
  │ │ └── @babel/types@7.20.2 deduped
  │ ├─┬ @babel/helpers@7.20.1
  │ │ ├── @babel/template@7.18.10 deduped
  │ │ ├── @babel/traverse@7.20.1 deduped
  │ │ └── @babel/types@7.20.2 deduped
  │ ├── @babel/parser@7.20.3 deduped
  │ ├─┬ @babel/template@7.18.10
  │ │ ├── @babel/code-frame@7.18.6 deduped
  │ │ ├── @babel/parser@7.20.3 deduped
  │ │ └── @babel/types@7.20.2 deduped
  │ ├── @babel/traverse@7.20.1 deduped
  │ ├── @babel/types@7.20.2 deduped
  │ ├── convert-source-map@1.9.0
  │ ├── debug@4.3.4 deduped
  │ ├── gensync@1.0.0-beta.2
  │ ├── json5@2.2.1
  │ └── semver@6.3.0
  ├─┬ @babel/generator@7.20.4
  │ ├── @babel/types@7.20.2 deduped
  │ ├─┬ @jridgewell/gen-mapping@0.3.2
  │ │ ├── @jridgewell/set-array@1.1.2
  │ │ ├── @jridgewell/sourcemap-codec@1.4.14
  │ │ └── @jridgewell/trace-mapping@0.3.17 deduped
  │ └── jsesc@2.5.2
  ├── @babel/parser@7.20.3
  ├─┬ @babel/plugin-transform-react-jsx@7.19.0
  │ ├── @babel/core@7.20.2 deduped
  │ ├─┬ @babel/helper-annotate-as-pure@7.18.6
  │ │ └── @babel/types@7.20.2 deduped
  │ ├─┬ @babel/helper-module-imports@7.18.6
  │ │ └── @babel/types@7.20.2 deduped
  │ ├── @babel/helper-plugin-utils@7.20.2
  │ ├─┬ @babel/plugin-syntax-jsx@7.18.6
  │ │ ├── @babel/core@7.20.2 deduped
  │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
  │ └── @babel/types@7.20.2 deduped
  ├─┬ @babel/traverse@7.20.1
  │ ├── @babel/code-frame@7.18.6 deduped
  │ ├── @babel/generator@7.20.4 deduped
  │ ├── @babel/helper-environment-visitor@7.18.9
  │ ├─┬ @babel/helper-function-name@7.19.0
  │ │ ├── @babel/template@7.18.10 deduped
  │ │ └── @babel/types@7.20.2 deduped
  │ ├─┬ @babel/helper-hoist-variables@7.18.6
  │ │ └── @babel/types@7.20.2 deduped
  │ ├─┬ @babel/helper-split-export-declaration@7.18.6
  │ │ └── @babel/types@7.20.2 deduped
  │ ├── @babel/parser@7.20.3 deduped
  │ ├── @babel/types@7.20.2 deduped
  │ ├── debug@4.3.4 deduped
  │ └── globals@11.12.0
  ├─┬ @babel/types@7.20.2
  │ ├── @babel/helper-string-parser@7.19.4
  │ ├── @babel/helper-validator-identifier@7.19.1
  │ └── to-fast-properties@2.0.0
  ├─┬ @proload/core@0.3.3
  │ ├── deepmerge@4.2.2
  │ └── escalade@3.1.1
  ├─┬ @proload/plugin-tsm@0.2.1
  │ ├── @proload/core@0.3.3 deduped
  │ └─┬ tsm@2.2.2
  │   └── esbuild@0.14.54 deduped
  ├─┬ @types/babel__core@7.1.20
  │ ├── @babel/parser@7.20.3 deduped
  │ ├── @babel/types@7.20.2 deduped
  │ ├─┬ @types/babel__generator@7.6.4
  │ │ └── @babel/types@7.20.2 deduped
  │ ├─┬ @types/babel__template@7.4.1
  │ │ ├── @babel/parser@7.20.3 deduped
  │ │ └── @babel/types@7.20.2 deduped
  │ └─┬ @types/babel__traverse@7.18.2
  │   └── @babel/types@7.20.2 deduped
  ├── @types/html-escaper@3.0.0
  ├── @types/yargs-parser@21.0.0
  ├─┬ boxen@6.2.1
  │ ├─┬ ansi-align@3.0.1
  │ │ └─┬ string-width@4.2.3
  │ │   ├── emoji-regex@8.0.0
  │ │   ├── is-fullwidth-code-point@3.0.0
  │ │   └─┬ strip-ansi@6.0.1
  │ │     └── ansi-regex@5.0.1
  │ ├── camelcase@6.3.0
  │ ├─┬ chalk@4.1.2
  │ │ ├─┬ ansi-styles@4.3.0
  │ │ │ └─┬ color-convert@2.0.1
  │ │ │   └── color-name@1.1.4
  │ │ └─┬ supports-color@7.2.0
  │ │   └── has-flag@4.0.0
  │ ├── cli-boxes@3.0.0
  │ ├── string-width@5.1.2 deduped
  │ ├── type-fest@2.19.0
  │ ├─┬ widest-line@4.0.1
  │ │ └── string-width@5.1.2 deduped
  │ └─┬ wrap-ansi@8.0.1
  │   ├── ansi-styles@6.2.1
  │   ├── string-width@5.1.2 deduped
  │   └── strip-ansi@7.0.1 deduped
  ├── ci-info@3.6.0
  ├── common-ancestor-path@1.0.1
  ├── cookie@0.5.0
  ├─┬ debug@4.3.4
  │ └── ms@2.1.2
  ├── deepmerge-ts@4.2.2
  ├── diff@5.1.0
  ├── es-module-lexer@0.10.5
  ├─┬ esbuild@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY @esbuild/linux-loong64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-android-64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-android-arm64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-darwin-64@0.14.54
  │ ├── esbuild-darwin-arm64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-freebsd-64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-freebsd-arm64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-32@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-arm@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-arm64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-mips64le@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-ppc64le@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-riscv64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-s390x@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-netbsd-64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-openbsd-64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-sunos-64@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-windows-32@0.14.54
  │ ├── UNMET OPTIONAL DEPENDENCY esbuild-windows-64@0.14.54
  │ └── UNMET OPTIONAL DEPENDENCY esbuild-windows-arm64@0.14.54
  ├─┬ execa@6.1.0
  │ ├─┬ cross-spawn@7.0.3
  │ │ ├── path-key@3.1.1
  │ │ ├─┬ shebang-command@2.0.0
  │ │ │ └── shebang-regex@3.0.0
  │ │ └─┬ which@2.0.2
  │ │   └── isexe@2.0.0
  │ ├── get-stream@6.0.1
  │ ├── human-signals@3.0.1
  │ ├── is-stream@3.0.0
  │ ├── merge-stream@2.0.0
  │ ├─┬ npm-run-path@5.1.0
  │ │ └── path-key@4.0.0
  │ ├─┬ onetime@6.0.0
  │ │ └── mimic-fn@4.0.0
  │ ├── signal-exit@3.0.7
  │ └── strip-final-newline@3.0.0
  ├─┬ fast-glob@3.2.12
  │ ├── @nodelib/fs.stat@2.0.5
  │ ├─┬ @nodelib/fs.walk@1.2.8
  │ │ ├─┬ @nodelib/fs.scandir@2.1.5
  │ │ │ ├── @nodelib/fs.stat@2.0.5 deduped
  │ │ │ └─┬ run-parallel@1.2.0
  │ │ │   └── queue-microtask@1.2.3
  │ │ └─┬ fastq@1.13.0
  │ │   └── reusify@1.0.4
  │ ├─┬ glob-parent@5.1.2
  │ │ └─┬ is-glob@4.0.3
  │ │   └── is-extglob@2.1.1
  │ ├── merge2@1.4.1
  │ └─┬ micromatch@4.0.5
  │   ├─┬ braces@3.0.2
  │   │ └─┬ fill-range@7.0.1
  │   │   └─┬ to-regex-range@5.0.1
  │   │     └── is-number@7.0.0
  │   └── picomatch@2.3.1
  ├── github-slugger@1.5.0
  ├─┬ gray-matter@4.0.3
  │ ├─┬ js-yaml@3.14.1
  │ │ ├─┬ argparse@1.0.10
  │ │ │ └── sprintf-js@1.0.3
  │ │ └── esprima@4.0.1 deduped
  │ ├── kind-of@6.0.3
  │ ├─┬ section-matter@1.0.0
  │ │ ├─┬ extend-shallow@2.0.1
  │ │ │ └── is-extendable@0.1.1
  │ │ └── kind-of@6.0.3 deduped
  │ └── strip-bom-string@1.0.0
  ├── html-entities@2.3.3
  ├── html-escaper@3.0.3
  ├── import-meta-resolve@2.1.0
  ├── kleur@4.1.5
  ├─┬ magic-string@0.25.9
  │ └── sourcemap-codec@1.4.8
  ├── mime@3.0.0
  ├─┬ ora@6.1.2
  │ ├─┬ bl@5.1.0
  │ │ ├─┬ buffer@6.0.3
  │ │ │ ├── base64-js@1.5.1
  │ │ │ └── ieee754@1.2.1
  │ │ ├── inherits@2.0.4
  │ │ └─┬ readable-stream@3.6.0
  │ │   ├── inherits@2.0.4 deduped
  │ │   ├─┬ string_decoder@1.3.0
  │ │   │ └── safe-buffer@5.2.1
  │ │   └── util-deprecate@1.0.2
  │ ├── chalk@5.1.2
  │ ├─┬ cli-cursor@4.0.0
  │ │ └─┬ restore-cursor@4.0.0
  │ │   ├─┬ onetime@5.1.2
  │ │   │ └── mimic-fn@2.1.0
  │ │   └── signal-exit@3.0.7 deduped
  │ ├── cli-spinners@2.7.0
  │ ├── is-interactive@2.0.0
  │ ├── is-unicode-supported@1.3.0
  │ ├─┬ log-symbols@5.1.0
  │ │ ├── chalk@5.1.2
  │ │ └── is-unicode-supported@1.3.0 deduped
  │ ├── strip-ansi@7.0.1 deduped
  │ └─┬ wcwidth@1.0.1
  │   └─┬ defaults@1.0.4
  │     └── clone@1.0.4
  ├── path-browserify@1.0.1
  ├── path-to-regexp@6.2.1
  ├─┬ postcss-load-config@3.1.4
  │ ├── lilconfig@2.0.6
  │ ├── postcss@8.4.19 deduped
  │ ├── UNMET OPTIONAL DEPENDENCY ts-node@>=9.0.0
  │ └── yaml@1.10.2
  ├─┬ postcss@8.4.19
  │ ├── nanoid@3.3.4
  │ ├── picocolors@1.0.0
  │ └── source-map-js@1.0.2
  ├─┬ preferred-pm@3.0.3
  │ ├─┬ find-up@5.0.0
  │ │ ├─┬ locate-path@6.0.0
  │ │ │ └─┬ p-locate@5.0.0
  │ │ │   └─┬ p-limit@3.1.0
  │ │ │     └── yocto-queue@0.1.0
  │ │ └── path-exists@4.0.0 deduped
  │ ├─┬ find-yarn-workspace-root2@1.2.16
  │ │ ├── micromatch@4.0.5 deduped
  │ │ └─┬ pkg-dir@4.2.0
  │ │   └─┬ find-up@4.1.0
  │ │     ├─┬ locate-path@5.0.0
  │ │     │ └─┬ p-locate@4.1.0
  │ │     │   └─┬ p-limit@2.3.0
  │ │     │     └── p-try@2.2.0
  │ │     └── path-exists@4.0.0 deduped
  │ ├── path-exists@4.0.0
  │ └─┬ which-pm@2.0.0
  │   ├─┬ load-yaml-file@0.2.0
  │   │ ├── graceful-fs@4.2.10
  │   │ ├── js-yaml@3.14.1 deduped
  │   │ ├── pify@4.0.1
  │   │ └── strip-bom@3.0.0
  │   └── path-exists@4.0.0 deduped
  ├─┬ prompts@2.4.2
  │ ├── kleur@3.0.3
  │ └── sisteransi@1.0.5
  ├─┬ recast@0.20.5
  │ ├─┬ ast-types@0.14.2
  │ │ └── tslib@2.4.1 deduped
  │ ├── esprima@4.0.1
  │ ├── source-map@0.6.1
  │ └── tslib@2.4.1
  ├─┬ rehype@12.0.1
  │ ├─┬ @types/hast@2.3.4
  │ │ └── @types/unist@2.0.6 deduped
  │ ├─┬ rehype-parse@8.0.4
  │ │ ├── @types/hast@2.3.4 deduped
  │ │ ├─┬ hast-util-from-parse5@7.1.0
  │ │ │ ├── @types/hast@2.3.4 deduped
  │ │ │ ├── @types/parse5@6.0.3 deduped
  │ │ │ ├── @types/unist@2.0.6 deduped
  │ │ │ ├─┬ hastscript@7.1.0
  │ │ │ │ ├── @types/hast@2.3.4 deduped
  │ │ │ │ ├── comma-separated-tokens@2.0.2 deduped
  │ │ │ │ ├─┬ hast-util-parse-selector@3.1.0
  │ │ │ │ │ └── @types/hast@2.3.4 deduped
  │ │ │ │ ├── property-information@6.1.1 deduped
  │ │ │ │ └── space-separated-tokens@2.0.1 deduped
  │ │ │ ├── property-information@6.1.1 deduped
  │ │ │ ├── vfile-location@4.0.1 deduped
  │ │ │ ├── vfile@5.3.5 deduped
  │ │ │ └── web-namespaces@2.0.1 deduped
  │ │ ├── parse5@6.0.1
  │ │ └── unified@10.1.2 deduped
  │ ├── rehype-stringify@9.0.3 deduped
  │ └── unified@10.1.2 deduped
  ├─┬ resolve@1.22.1
  │ ├─┬ is-core-module@2.11.0
  │ │ └─┬ has@1.0.3
  │ │   └── function-bind@1.1.1
  │ ├── path-parse@1.0.7
  │ └── supports-preserve-symlinks-flag@1.0.0
  ├─┬ rollup@2.79.1
  │ └── fsevents@2.3.2
  ├─┬ semver@7.3.8
  │ └─┬ lru-cache@6.0.0
  │   └── yallist@4.0.0
  ├─┬ shiki@0.11.1
  │ ├── jsonc-parser@3.2.0
  │ ├── vscode-oniguruma@1.6.2
  │ └── vscode-textmate@6.0.0
  ├─┬ sirv@2.0.2
  │ ├── @polka/url@1.0.0-next.21
  │ ├── mrmime@1.0.1
  │ └── totalist@3.0.0
  ├── slash@4.0.0
  ├─┬ string-width@5.1.2
  │ ├── eastasianwidth@0.2.0
  │ ├── emoji-regex@9.2.2
  │ └── strip-ansi@7.0.1 deduped
  ├─┬ strip-ansi@7.0.1
  │ └── ansi-regex@6.0.1
  ├─┬ supports-esm@1.0.0
  │ └─┬ has-package-exports@1.3.0
  │   └── @ljharb/has-package-exports-patterns@0.0.2
  ├─┬ tsconfig-resolver@3.0.1
  │ ├── @types/json5@0.0.30
  │ ├── @types/resolve@1.20.2
  │ ├── json5@2.2.1 deduped
  │ ├── resolve@1.22.1 deduped
  │ ├── strip-bom@4.0.0
  │ └── type-fest@0.13.1
  ├── typescript@4.8.4
  ├─┬ unist-util-visit@4.1.1
  │ ├── @types/unist@2.0.6
  │ ├── unist-util-is@5.1.1
  │ └─┬ unist-util-visit-parents@5.1.1
  │   ├── @types/unist@2.0.6 deduped
  │   └── unist-util-is@5.1.1 deduped
  ├─┬ vfile@5.3.5
  │ ├── @types/unist@2.0.6 deduped
  │ ├── is-buffer@2.0.5
  │ ├─┬ unist-util-stringify-position@3.0.2
  │ │ └── @types/unist@2.0.6 deduped
  │ └─┬ vfile-message@3.1.2
  │   ├── @types/unist@2.0.6 deduped
  │   └── unist-util-stringify-position@3.0.2 deduped
  ├─┬ vite@3.2.3
  │ ├── UNMET OPTIONAL DEPENDENCY @types/node@>= 14
  │ ├─┬ esbuild@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY @esbuild/android-arm@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY @esbuild/linux-loong64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-android-64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-android-arm64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-darwin-64@0.15.13
  │ │ ├── esbuild-darwin-arm64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-freebsd-64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-freebsd-arm64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-32@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-arm@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-arm64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-mips64le@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-ppc64le@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-riscv64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-linux-s390x@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-netbsd-64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-openbsd-64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-sunos-64@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-windows-32@0.15.13
  │ │ ├── UNMET OPTIONAL DEPENDENCY esbuild-windows-64@0.15.13
  │ │ └── UNMET OPTIONAL DEPENDENCY esbuild-windows-arm64@0.15.13
  │ ├── fsevents@2.3.2 deduped
  │ ├── UNMET OPTIONAL DEPENDENCY less@*
  │ ├── postcss@8.4.19 deduped
  │ ├── resolve@1.22.1 deduped
  │ ├── rollup@2.79.1 deduped
  │ ├── UNMET OPTIONAL DEPENDENCY sass@*
  │ ├── UNMET OPTIONAL DEPENDENCY stylus@*
  │ ├── UNMET OPTIONAL DEPENDENCY sugarss@*
  │ └── UNMET OPTIONAL DEPENDENCY terser@^5.4.0
  ├─┬ vitefu@0.1.1
  │ └── vite@3.2.3 deduped
  ├── yargs-parser@21.1.1
  └── zod@3.19.1
```

## Gatsby

```
@responsive.ch/blog@0.1.0 /Users/me/Sites/Misc/responsive.ch/packages/blog
├─┬ gatsby-image@2.11.0
│ ├─┬ @babel/runtime@7.20.1
│ │ └── regenerator-runtime@0.13.10
│ ├── object-fit-images@3.2.4
│ └─┬ prop-types@15.8.1
│   ├── loose-envify@1.4.0 deduped
│   ├── object-assign@4.1.1 deduped
│   └── react-is@16.13.1
├─┬ gatsby-plugin-fathom@1.3.0
│ ├─┬ @babel/runtime@7.9.6
│ │ └── regenerator-runtime@0.13.10 deduped
│ ├── gatsby@2.32.13 deduped
│ └─┬ react@16.14.0
│   ├── loose-envify@1.4.0 deduped
│   ├── object-assign@4.1.1 deduped
│   └── prop-types@15.8.1 deduped
├─┬ gatsby-plugin-feed@2.13.1
│ ├── @babel/runtime@7.20.1 deduped
│ ├─┬ @hapi/joi@15.1.1
│ │ ├── @hapi/address@2.1.4
│ │ ├── @hapi/bourne@1.3.2
│ │ ├── @hapi/hoek@8.5.1
│ │ └─┬ @hapi/topo@3.1.6
│ │   └── @hapi/hoek@8.5.1 deduped
│ ├── common-tags@1.8.2
│ ├─┬ fs-extra@9.1.0
│ │ ├── at-least-node@1.0.0
│ │ ├── graceful-fs@4.2.10
│ │ ├─┬ jsonfile@6.1.0
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ └── universalify@2.0.0 deduped
│ │ └── universalify@2.0.0
│ ├─┬ gatsby-plugin-utils@0.9.0
│ │ ├── gatsby@2.32.13 deduped
│ │ └── joi@17.7.0 deduped
│ ├── gatsby@2.32.13 deduped
│ ├── lodash.merge@4.6.2
│ └─┬ rss@1.2.2
│   ├─┬ mime-types@2.1.13
│   │ └── mime-db@1.25.0
│   └── xml@1.0.1
├─┬ gatsby-plugin-react-helmet@3.10.0
│ ├── @babel/runtime@7.20.1 deduped
│ ├── gatsby@2.32.13 deduped
│ └── react-helmet@6.1.0 deduped
├─┬ gatsby-plugin-sharp@2.14.4
│ ├── @babel/runtime@7.20.1 deduped
│ ├── async@3.2.4
│ ├── bluebird@3.7.2
│ ├─┬ filenamify@4.3.0
│ │ ├── filename-reserved-regex@2.0.0
│ │ ├─┬ strip-outer@1.0.1
│ │ │ └── escape-string-regexp@1.0.5
│ │ └─┬ trim-repeated@1.0.0
│ │   └── escape-string-regexp@1.0.5
│ ├─┬ fs-extra@9.1.0
│ │ ├── at-least-node@1.0.0 deduped
│ │ ├── graceful-fs@4.2.10 deduped
│ │ ├─┬ jsonfile@6.1.0
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ └── universalify@2.0.0 deduped
│ │ └── universalify@2.0.0
│ ├─┬ gatsby-core-utils@1.10.1
│ │ ├── ci-info@2.0.0
│ │ ├─┬ configstore@5.0.1
│ │ │ ├─┬ dot-prop@5.3.0
│ │ │ │ └── is-obj@2.0.0
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ ├── make-dir@3.1.0 deduped
│ │ │ ├─┬ unique-string@2.0.0
│ │ │ │ └── crypto-random-string@2.0.0
│ │ │ ├─┬ write-file-atomic@3.0.3
│ │ │ │ ├── imurmurhash@0.1.4 deduped
│ │ │ │ ├── is-typedarray@1.0.0
│ │ │ │ ├── signal-exit@3.0.7 deduped
│ │ │ │ └─┬ typedarray-to-buffer@3.1.5
│ │ │ │   └── is-typedarray@1.0.0 deduped
│ │ │ └── xdg-basedir@4.0.0 deduped
│ │ ├── fs-extra@8.1.0 deduped
│ │ ├── node-object-hash@2.3.10
│ │ ├─┬ proper-lockfile@4.1.2
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ ├── retry@0.12.0
│ │ │ └── signal-exit@3.0.7 deduped
│ │ ├── tmp@0.2.1 deduped
│ │ └── xdg-basedir@4.0.0
│ ├─┬ gatsby-telemetry@1.10.2
│ │ ├── @babel/code-frame@7.18.6 deduped
│ │ ├── @babel/runtime@7.20.1 deduped
│ │ ├─┬ @turist/fetch@7.2.0
│ │ │ ├─┬ @types/node-fetch@2.6.2
│ │ │ │ ├── @types/node@18.11.9 deduped
│ │ │ │ └─┬ form-data@3.0.1
│ │ │ │   ├── asynckit@0.4.0
│ │ │ │   ├─┬ combined-stream@1.0.8
│ │ │ │   │ └── delayed-stream@1.0.0
│ │ │ │   └── mime-types@2.1.35 deduped
│ │ │ └── node-fetch@2.6.7 deduped
│ │ ├── @turist/time@0.0.1
│ │ ├── async-retry-ng@2.0.1
│ │ ├─┬ boxen@4.2.0
│ │ │ ├─┬ ansi-align@3.0.1
│ │ │ │ └─┬ string-width@4.2.3
│ │ │ │   ├── emoji-regex@8.0.0
│ │ │ │   ├── is-fullwidth-code-point@3.0.0
│ │ │ │   └─┬ strip-ansi@6.0.1
│ │ │ │     └── ansi-regex@5.0.1 deduped
│ │ │ ├── camelcase@5.3.1
│ │ │ ├─┬ chalk@3.0.0
│ │ │ │ ├── ansi-styles@4.3.0 deduped
│ │ │ │ └── supports-color@7.2.0 deduped
│ │ │ ├── cli-boxes@2.2.1
│ │ │ ├─┬ string-width@4.2.3
│ │ │ │ ├── emoji-regex@8.0.0
│ │ │ │ ├── is-fullwidth-code-point@3.0.0
│ │ │ │ └─┬ strip-ansi@6.0.1
│ │ │ │   └── ansi-regex@5.0.1 deduped
│ │ │ ├── term-size@2.2.1
│ │ │ ├── type-fest@0.8.1
│ │ │ └─┬ widest-line@3.1.0
│ │ │   └─┬ string-width@4.2.3
│ │ │     ├── emoji-regex@8.0.0
│ │ │     ├── is-fullwidth-code-point@3.0.0
│ │ │     └─┬ strip-ansi@6.0.1
│ │ │       └── ansi-regex@5.0.1 deduped
│ │ ├── configstore@5.0.1 deduped
│ │ ├── fs-extra@8.1.0 deduped
│ │ ├── gatsby-core-utils@1.10.1 deduped
│ │ ├─┬ git-up@4.0.5
│ │ │ ├─┬ is-ssh@1.4.0
│ │ │ │ └── protocols@2.0.1
│ │ │ └─┬ parse-url@6.0.5
│ │ │   ├── is-ssh@1.4.0 deduped
│ │ │   ├── normalize-url@6.1.0
│ │ │   ├─┬ parse-path@4.0.4
│ │ │   │ ├── is-ssh@1.4.0 deduped
│ │ │   │ ├── protocols@1.4.8
│ │ │   │ ├── qs@6.11.0 deduped
│ │ │   │ └── query-string@6.14.1 deduped
│ │ │   └── protocols@1.4.8
│ │ ├── is-docker@2.2.1
│ │ ├── lodash@4.17.21 deduped
│ │ ├─┬ node-fetch@2.6.7
│ │ │ ├── UNMET OPTIONAL DEPENDENCY encoding@^0.1.0
│ │ │ └─┬ whatwg-url@5.0.0
│ │ │   ├── tr46@0.0.3
│ │ │   └── webidl-conversions@3.0.1
│ │ └── uuid@3.4.0 deduped
│ ├── gatsby@2.32.13 deduped
│ ├─┬ got@10.7.0
│ │ ├── @sindresorhus/is@2.1.1
│ │ ├─┬ @szmarczak/http-timer@4.0.6
│ │ │ └── defer-to-connect@2.0.1
│ │ ├─┬ @types/cacheable-request@6.0.3
│ │ │ ├── @types/http-cache-semantics@4.0.1
│ │ │ ├─┬ @types/keyv@3.1.4
│ │ │ │ └── @types/node@18.11.9 deduped
│ │ │ ├── @types/node@18.11.9 deduped
│ │ │ └─┬ @types/responselike@1.0.0
│ │ │   └── @types/node@18.11.9 deduped
│ │ ├─┬ cacheable-lookup@2.0.1
│ │ │ ├── @types/keyv@3.1.4 deduped
│ │ │ └─┬ keyv@4.5.2
│ │ │   └── json-buffer@3.0.1
│ │ ├─┬ cacheable-request@7.0.2
│ │ │ ├─┬ clone-response@1.0.2
│ │ │ │ └── mimic-response@1.0.1 deduped
│ │ │ ├── get-stream@5.2.0 deduped
│ │ │ ├── http-cache-semantics@4.1.0
│ │ │ ├─┬ keyv@4.5.2
│ │ │ │ └── json-buffer@3.0.1
│ │ │ ├── lowercase-keys@2.0.0 deduped
│ │ │ ├── normalize-url@6.1.0
│ │ │ └── responselike@2.0.1 deduped
│ │ ├─┬ decompress-response@5.0.0
│ │ │ └── mimic-response@2.1.0 deduped
│ │ ├── duplexer3@0.1.5
│ │ ├─┬ get-stream@5.2.0
│ │ │ └─┬ pump@3.0.0
│ │ │   ├─┬ end-of-stream@1.4.4
│ │ │   │ └── once@1.4.0 deduped
│ │ │   └── once@1.4.0 deduped
│ │ ├── lowercase-keys@2.0.0
│ │ ├── mimic-response@2.1.0
│ │ ├── p-cancelable@2.1.1
│ │ ├─┬ p-event@4.2.0
│ │ │ └─┬ p-timeout@3.2.0
│ │ │   └── p-finally@1.0.0 deduped
│ │ ├─┬ responselike@2.0.1
│ │ │ └── lowercase-keys@2.0.0 deduped
│ │ ├── to-readable-stream@2.1.0
│ │ └── type-fest@0.10.0
│ ├─┬ imagemin-mozjpeg@9.0.0
│ │ ├── execa@4.1.0 deduped
│ │ ├── is-jpg@2.0.0
│ │ └─┬ mozjpeg@7.1.1
│ │   ├─┬ bin-build@3.0.0
│ │   │ ├─┬ decompress@4.2.1
│ │   │ │ ├─┬ decompress-tar@4.1.1
│ │   │ │ │ ├── file-type@5.2.0
│ │   │ │ │ ├── is-stream@1.1.0
│ │   │ │ │ └─┬ tar-stream@1.6.2
│ │   │ │ │   ├─┬ bl@1.2.3
│ │   │ │ │   │ ├── readable-stream@2.3.7 deduped
│ │   │ │ │   │ └── safe-buffer@5.1.2 deduped
│ │   │ │ │   ├─┬ buffer-alloc@1.2.0
│ │   │ │ │   │ ├── buffer-alloc-unsafe@1.1.0
│ │   │ │ │   │ └── buffer-fill@1.0.0
│ │   │ │ │   ├── end-of-stream@1.4.4 deduped
│ │   │ │ │   ├── fs-constants@1.0.0 deduped
│ │   │ │ │   ├── readable-stream@2.3.7 deduped
│ │   │ │ │   ├── to-buffer@1.1.1
│ │   │ │ │   └── xtend@4.0.2 deduped
│ │   │ │ ├─┬ decompress-tarbz2@4.1.1
│ │   │ │ │ ├── decompress-tar@4.1.1 deduped
│ │   │ │ │ ├── file-type@6.2.0
│ │   │ │ │ ├── is-stream@1.1.0
│ │   │ │ │ ├─┬ seek-bzip@1.0.6
│ │   │ │ │ │ └── commander@2.20.3 deduped
│ │   │ │ │ └─┬ unbzip2-stream@1.4.3
│ │   │ │ │   ├── buffer@5.7.1 deduped
│ │   │ │ │   └── through@2.3.8 deduped
│ │   │ │ ├─┬ decompress-targz@4.1.1
│ │   │ │ │ ├── decompress-tar@4.1.1 deduped
│ │   │ │ │ ├── file-type@5.2.0
│ │   │ │ │ └── is-stream@1.1.0
│ │   │ │ ├─┬ decompress-unzip@4.0.1
│ │   │ │ │ ├── file-type@3.9.0
│ │   │ │ │ ├─┬ get-stream@2.3.1
│ │   │ │ │ │ ├── object-assign@4.1.1 deduped
│ │   │ │ │ │ └── pinkie-promise@2.0.1 deduped
│ │   │ │ │ ├── pify@2.3.0
│ │   │ │ │ └─┬ yauzl@2.10.0
│ │   │ │ │   ├── buffer-crc32@0.2.13
│ │   │ │ │   └─┬ fd-slicer@1.1.0
│ │   │ │ │     └── pend@1.2.0
│ │   │ │ ├── graceful-fs@4.2.10 deduped
│ │   │ │ ├─┬ make-dir@1.3.0
│ │   │ │ │ └── pify@3.0.0
│ │   │ │ ├── pify@2.3.0
│ │   │ │ └─┬ strip-dirs@2.1.0
│ │   │ │   └── is-natural-number@4.0.1
│ │   │ ├─┬ download@6.2.5
│ │   │ │ ├─┬ caw@2.0.1
│ │   │ │ │ ├─┬ get-proxy@2.1.0
│ │   │ │ │ │ └─┬ npm-conf@1.1.3
│ │   │ │ │ │   ├─┬ config-chain@1.1.13
│ │   │ │ │ │   │ ├── ini@1.3.8 deduped
│ │   │ │ │ │   │ └── proto-list@1.2.4
│ │   │ │ │ │   └── pify@3.0.0 deduped
│ │   │ │ │ ├── isurl@1.0.0 deduped
│ │   │ │ │ ├── tunnel-agent@0.6.0 deduped
│ │   │ │ │ └── url-to-options@1.0.1 deduped
│ │   │ │ ├── content-disposition@0.5.4 deduped
│ │   │ │ ├── decompress@4.2.1 deduped
│ │   │ │ ├─┬ ext-name@5.0.0
│ │   │ │ │ ├─┬ ext-list@2.2.2
│ │   │ │ │ │ └── mime-db@1.52.0 deduped
│ │   │ │ │ └─┬ sort-keys-length@1.0.1
│ │   │ │ │   └─┬ sort-keys@1.1.2
│ │   │ │ │     └── is-plain-obj@1.1.0 deduped
│ │   │ │ ├── file-type@5.2.0
│ │   │ │ ├─┬ filenamify@2.1.0
│ │   │ │ │ ├── filename-reserved-regex@2.0.0 deduped
│ │   │ │ │ ├── strip-outer@1.0.1 deduped
│ │   │ │ │ └── trim-repeated@1.0.0 deduped
│ │   │ │ ├── get-stream@3.0.0
│ │   │ │ ├─┬ got@7.1.0
│ │   │ │ │ ├── decompress-response@3.3.0 deduped
│ │   │ │ │ ├── duplexer3@0.1.5 deduped
│ │   │ │ │ ├── get-stream@3.0.0 deduped
│ │   │ │ │ ├── is-plain-obj@1.1.0 deduped
│ │   │ │ │ ├── is-retry-allowed@1.2.0 deduped
│ │   │ │ │ ├── is-stream@1.1.0
│ │   │ │ │ ├── isurl@1.0.0 deduped
│ │   │ │ │ ├── lowercase-keys@1.0.1 deduped
│ │   │ │ │ ├── p-cancelable@0.3.0
│ │   │ │ │ ├─┬ p-timeout@1.2.1
│ │   │ │ │ │ └── p-finally@1.0.0 deduped
│ │   │ │ │ ├── safe-buffer@5.1.2 deduped
│ │   │ │ │ ├── timed-out@4.0.1 deduped
│ │   │ │ │ ├─┬ url-parse-lax@1.0.0
│ │   │ │ │ │ └── prepend-http@1.0.4
│ │   │ │ │ └── url-to-options@1.0.1 deduped
│ │   │ │ ├─┬ make-dir@1.3.0
│ │   │ │ │ └── pify@3.0.0 deduped
│ │   │ │ ├─┬ p-event@1.3.0
│ │   │ │ │ └─┬ p-timeout@1.2.1
│ │   │ │ │   └── p-finally@1.0.0 deduped
│ │   │ │ └── pify@3.0.0 deduped
│ │   │ ├─┬ execa@0.7.0
│ │   │ │ ├─┬ cross-spawn@5.1.0
│ │   │ │ │ ├─┬ lru-cache@4.1.5
│ │   │ │ │ │ ├── pseudomap@1.0.2 deduped
│ │   │ │ │ │ └── yallist@2.1.2 deduped
│ │   │ │ │ ├── shebang-command@1.2.0 deduped
│ │   │ │ │ └── which@1.3.1 deduped
│ │   │ │ ├── get-stream@3.0.0
│ │   │ │ ├── is-stream@1.1.0
│ │   │ │ ├─┬ npm-run-path@2.0.2
│ │   │ │ │ └── path-key@2.0.1 deduped
│ │   │ │ ├── p-finally@1.0.0 deduped
│ │   │ │ ├── signal-exit@3.0.7 deduped
│ │   │ │ └── strip-eof@1.0.0 deduped
│ │   │ ├─┬ p-map-series@1.0.0
│ │   │ │ └── p-reduce@1.0.0
│ │   │ └─┬ tempfile@2.0.0
│ │   │   ├── temp-dir@1.0.0
│ │   │   └── uuid@3.4.0 deduped
│ │   └─┬ bin-wrapper@4.1.0
│ │     ├─┬ bin-check@4.1.0
│ │     │ ├─┬ execa@0.7.0
│ │     │ │ ├─┬ cross-spawn@5.1.0
│ │     │ │ │ ├─┬ lru-cache@4.1.5
│ │     │ │ │ │ ├── pseudomap@1.0.2 deduped
│ │     │ │ │ │ └── yallist@2.1.2 deduped
│ │     │ │ │ ├── shebang-command@1.2.0 deduped
│ │     │ │ │ └── which@1.3.1 deduped
│ │     │ │ ├── get-stream@3.0.0
│ │     │ │ ├── is-stream@1.1.0
│ │     │ │ ├─┬ npm-run-path@2.0.2
│ │     │ │ │ └── path-key@2.0.1 deduped
│ │     │ │ ├── p-finally@1.0.0 deduped
│ │     │ │ ├── signal-exit@3.0.7 deduped
│ │     │ │ └── strip-eof@1.0.0 deduped
│ │     │ └─┬ executable@4.1.1
│ │     │   └── pify@2.3.0
│ │     ├─┬ bin-version-check@4.0.0
│ │     │ ├─┬ bin-version@3.1.0
│ │     │ │ ├─┬ execa@1.0.0
│ │     │ │ │ ├── cross-spawn@6.0.5 deduped
│ │     │ │ │ ├─┬ get-stream@4.1.0
│ │     │ │ │ │ └── pump@3.0.0 deduped
│ │     │ │ │ ├── is-stream@1.1.0
│ │     │ │ │ ├─┬ npm-run-path@2.0.2
│ │     │ │ │ │ └── path-key@2.0.1 deduped
│ │     │ │ │ ├── p-finally@1.0.0 deduped
│ │     │ │ │ ├── signal-exit@3.0.7 deduped
│ │     │ │ │ └── strip-eof@1.0.0 deduped
│ │     │ │ └─┬ find-versions@3.2.0
│ │     │ │   └── semver-regex@2.0.0
│ │     │ ├─┬ semver-truncate@1.1.2
│ │     │ │ └── semver@5.7.1
│ │     │ └── semver@5.7.1
│ │     ├─┬ download@7.1.0
│ │     │ ├─┬ archive-type@4.0.0
│ │     │ │ └── file-type@4.4.0
│ │     │ ├── caw@2.0.1 deduped
│ │     │ ├── content-disposition@0.5.4 deduped
│ │     │ ├── decompress@4.2.1 deduped
│ │     │ ├── ext-name@5.0.0 deduped
│ │     │ ├── file-type@8.1.0
│ │     │ ├─┬ filenamify@2.1.0
│ │     │ │ ├── filename-reserved-regex@2.0.0 deduped
│ │     │ │ ├── strip-outer@1.0.1 deduped
│ │     │ │ └── trim-repeated@1.0.0 deduped
│ │     │ ├── get-stream@3.0.0
│ │     │ ├── got@8.3.2 deduped
│ │     │ ├─┬ make-dir@1.3.0
│ │     │ │ └── pify@3.0.0
│ │     │ ├─┬ p-event@2.3.1
│ │     │ │ └── p-timeout@2.0.1 deduped
│ │     │ └── pify@3.0.0
│ │     ├── import-lazy@3.1.0
│ │     ├─┬ os-filter-obj@2.0.0
│ │     │ └── arch@2.2.0 deduped
│ │     └── pify@4.0.1
│ ├─┬ imagemin-pngquant@9.0.2
│ │ ├── execa@4.1.0 deduped
│ │ ├── is-png@2.0.0
│ │ ├── is-stream@2.0.1
│ │ ├─┬ ow@0.17.0
│ │ │ └── type-fest@0.11.0
│ │ └─┬ pngquant-bin@6.0.1
│ │   ├── bin-build@3.0.0 deduped
│ │   ├── bin-wrapper@4.1.0 deduped
│ │   └── execa@4.1.0 deduped
│ ├─┬ imagemin@7.0.1
│ │ ├── file-type@12.4.2
│ │ ├─┬ globby@10.0.2
│ │ │ ├─┬ @types/glob@7.2.0
│ │ │ │ ├── @types/minimatch@5.1.2 deduped
│ │ │ │ └── @types/node@18.11.9 deduped
│ │ │ ├── array-union@2.1.0
│ │ │ ├─┬ dir-glob@3.0.1
│ │ │ │ └── path-type@4.0.0
│ │ │ ├─┬ fast-glob@3.2.12
│ │ │ │ ├── @nodelib/fs.stat@2.0.5 deduped
│ │ │ │ ├── @nodelib/fs.walk@1.2.8 deduped
│ │ │ │ ├── glob-parent@5.1.2 deduped
│ │ │ │ ├── merge2@1.4.1 deduped
│ │ │ │ └── micromatch@4.0.5 deduped
│ │ │ ├── glob@7.2.3 deduped
│ │ │ ├── ignore@5.2.0
│ │ │ ├── merge2@1.4.1
│ │ │ └── slash@3.0.0 deduped
│ │ ├── graceful-fs@4.2.10 deduped
│ │ ├── junk@3.1.0
│ │ ├─┬ make-dir@3.1.0
│ │ │ └── semver@6.3.0
│ │ ├── p-pipe@3.1.0
│ │ └── replace-ext@1.0.0
│ ├── lodash@4.17.21
│ ├── mini-svg-data-uri@1.4.4
│ ├─┬ potrace@2.1.8
│ │ └─┬ jimp@0.14.0
│ │   ├── @babel/runtime@7.20.1 deduped
│ │   ├─┬ @jimp/custom@0.14.0
│ │   │ ├── @babel/runtime@7.20.1 deduped
│ │   │ └─┬ @jimp/core@0.14.0
│ │   │   ├── @babel/runtime@7.20.1 deduped
│ │   │   ├─┬ @jimp/utils@0.14.0
│ │   │   │ ├── @babel/runtime@7.20.1 deduped
│ │   │   │ └── regenerator-runtime@0.13.10 deduped
│ │   │   ├── any-base@1.1.0
│ │   │   ├── buffer@5.7.1 deduped
│ │   │   ├── exif-parser@0.1.12
│ │   │   ├── file-type@9.0.0
│ │   │   ├─┬ load-bmfont@1.4.1
│ │   │   │ ├── buffer-equal@0.0.1
│ │   │   │ ├── mime@1.6.0
│ │   │   │ ├── parse-bmfont-ascii@1.0.6
│ │   │   │ ├── parse-bmfont-binary@1.0.6
│ │   │   │ ├─┬ parse-bmfont-xml@1.1.4
│ │   │   │ │ ├── xml-parse-from-string@1.0.1
│ │   │   │ │ └─┬ xml2js@0.4.23
│ │   │   │ │   ├── sax@1.2.4 deduped
│ │   │   │ │   └── xmlbuilder@11.0.1
│ │   │   │ ├── phin@2.9.3 deduped
│ │   │   │ ├─┬ xhr@2.6.0
│ │   │   │ │ ├── global@4.4.0 deduped
│ │   │   │ │ ├── is-function@1.0.2
│ │   │   │ │ ├── parse-headers@2.0.5
│ │   │   │ │ └── xtend@4.0.2 deduped
│ │   │   │ └── xtend@4.0.2 deduped
│ │   │   ├── mkdirp@0.5.6 deduped
│ │   │   ├── phin@2.9.3
│ │   │   ├─┬ pixelmatch@4.0.2
│ │   │   │ └── pngjs@3.4.0 deduped
│ │   │   └── tinycolor2@1.4.2
│ │   ├─┬ @jimp/plugins@0.14.0
│ │   │ ├── @babel/runtime@7.20.1 deduped
│ │   │ ├── @jimp/custom@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-blit@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-blur@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-circle@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-color@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/utils@0.14.0 deduped
│ │   │ │ └── tinycolor2@1.4.2 deduped
│ │   │ ├─┬ @jimp/plugin-contain@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-blit@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-resize@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-scale@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-cover@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-crop@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-resize@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-scale@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-crop@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-displace@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-dither@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-fisheye@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-flip@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-rotate@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-gaussian@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-invert@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-mask@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-normalize@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-print@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-blit@0.14.0 deduped
│ │   │ │ ├── @jimp/utils@0.14.0 deduped
│ │   │ │ └── load-bmfont@1.4.1 deduped
│ │   │ ├─┬ @jimp/plugin-resize@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-rotate@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-blit@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-crop@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-resize@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-scale@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-resize@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-shadow@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-blur@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-resize@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ ├─┬ @jimp/plugin-threshold@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-color@0.14.0 deduped
│ │   │ │ ├── @jimp/plugin-resize@0.14.0 deduped
│ │   │ │ └── @jimp/utils@0.14.0 deduped
│ │   │ └── timm@1.7.1
│ │   ├─┬ @jimp/types@0.14.0
│ │   │ ├── @babel/runtime@7.20.1 deduped
│ │   │ ├─┬ @jimp/bmp@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/utils@0.14.0 deduped
│ │   │ │ └── bmp-js@0.1.0
│ │   │ ├── @jimp/custom@0.14.0 deduped
│ │   │ ├─┬ @jimp/gif@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/utils@0.14.0 deduped
│ │   │ │ ├─┬ gifwrap@0.9.4
│ │   │ │ │ ├─┬ image-q@4.0.0
│ │   │ │ │ │ └── @types/node@16.9.1
│ │   │ │ │ └── omggif@1.0.10 deduped
│ │   │ │ └── omggif@1.0.10
│ │   │ ├─┬ @jimp/jpeg@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/utils@0.14.0 deduped
│ │   │ │ └── jpeg-js@0.4.4
│ │   │ ├─┬ @jimp/png@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ ├── @jimp/utils@0.14.0 deduped
│ │   │ │ └── pngjs@3.4.0
│ │   │ ├─┬ @jimp/tiff@0.14.0
│ │   │ │ ├── @babel/runtime@7.20.1 deduped
│ │   │ │ ├── @jimp/custom@0.14.0 deduped
│ │   │ │ └─┬ utif@2.0.1
│ │   │ │   └── pako@1.0.11 deduped
│ │   │ └── timm@1.7.1 deduped
│ │   └── regenerator-runtime@0.13.10 deduped
│ ├─┬ probe-image-size@6.0.0
│ │ ├── deepmerge@4.2.2
│ │ ├─┬ needle@2.9.1
│ │ │ ├── debug@3.2.7 deduped
│ │ │ ├── iconv-lite@0.4.24 deduped
│ │ │ └── sax@1.2.4 deduped
│ │ └─┬ stream-parser@0.3.1
│ │   └─┬ debug@2.6.9
│ │     └── ms@2.0.0
│ ├── progress@2.0.3
│ ├─┬ semver@7.3.8
│ │ └─┬ lru-cache@6.0.0
│ │   └── yallist@4.0.0
│ ├─┬ sharp@0.27.2
│ │ ├── array-flatten@3.0.0
│ │ ├─┬ color@3.2.1
│ │ │ ├─┬ color-convert@1.9.3
│ │ │ │ └── color-name@1.1.3
│ │ │ └─┬ color-string@1.9.1
│ │ │   ├── color-name@1.1.4
│ │ │   └─┬ simple-swizzle@0.2.2
│ │ │     └── is-arrayish@0.3.2
│ │ ├── detect-libc@1.0.3
│ │ ├── node-addon-api@3.2.1
│ │ ├─┬ npmlog@4.1.2
│ │ │ ├─┬ are-we-there-yet@1.1.7
│ │ │ │ ├── delegates@1.0.0
│ │ │ │ └── readable-stream@2.3.7 deduped
│ │ │ ├── console-control-strings@1.1.0
│ │ │ ├─┬ gauge@2.7.4
│ │ │ │ ├── aproba@1.2.0
│ │ │ │ ├── console-control-strings@1.1.0 deduped
│ │ │ │ ├── has-unicode@2.0.1
│ │ │ │ ├── object-assign@4.1.1 deduped
│ │ │ │ ├── signal-exit@3.0.7 deduped
│ │ │ │ ├─┬ string-width@1.0.2
│ │ │ │ │ ├── code-point-at@1.1.0
│ │ │ │ │ ├─┬ is-fullwidth-code-point@1.0.0
│ │ │ │ │ │ └── number-is-nan@1.0.1
│ │ │ │ │ └── strip-ansi@3.0.1 deduped
│ │ │ │ ├─┬ strip-ansi@3.0.1
│ │ │ │ │ └── ansi-regex@2.1.1
│ │ │ │ └─┬ wide-align@1.1.5
│ │ │ │   └── string-width@2.1.1 deduped
│ │ │ └── set-blocking@2.0.0
│ │ ├─┬ prebuild-install@6.1.4
│ │ │ ├── detect-libc@1.0.3 deduped
│ │ │ ├── expand-template@2.0.3
│ │ │ ├── github-from-package@0.0.0
│ │ │ ├── minimist@1.2.7 deduped
│ │ │ ├── mkdirp-classic@0.5.3
│ │ │ ├── napi-build-utils@1.0.2
│ │ │ ├─┬ node-abi@2.30.1
│ │ │ │ └── semver@5.7.1
│ │ │ ├── npmlog@4.1.2 deduped
│ │ │ ├── pump@3.0.0 deduped
│ │ │ ├─┬ rc@1.2.8
│ │ │ │ ├── deep-extend@0.6.0
│ │ │ │ ├── ini@1.3.8
│ │ │ │ ├── minimist@1.2.7 deduped
│ │ │ │ └── strip-json-comments@2.0.1
│ │ │ ├─┬ simple-get@3.1.1
│ │ │ │ ├─┬ decompress-response@4.2.1
│ │ │ │ │ └── mimic-response@2.1.0
│ │ │ │ ├── once@1.4.0 deduped
│ │ │ │ └── simple-concat@1.0.1 deduped
│ │ │ ├── tar-fs@2.1.1 deduped
│ │ │ └── tunnel-agent@0.6.0 deduped
│ │ ├── semver@7.3.8 deduped
│ │ ├─┬ simple-get@4.0.1
│ │ │ ├─┬ decompress-response@6.0.0
│ │ │ │ └── mimic-response@3.1.0
│ │ │ ├── once@1.4.0 deduped
│ │ │ └── simple-concat@1.0.1
│ │ ├─┬ tar-fs@2.1.1
│ │ │ ├── chownr@1.1.4
│ │ │ ├── mkdirp-classic@0.5.3 deduped
│ │ │ ├── pump@3.0.0 deduped
│ │ │ └─┬ tar-stream@2.2.0
│ │ │   ├── bl@4.1.0 deduped
│ │ │   ├── end-of-stream@1.4.4 deduped
│ │ │   ├── fs-constants@1.0.0
│ │ │   ├── inherits@2.0.4 deduped
│ │ │   └─┬ readable-stream@3.6.0
│ │ │     ├── inherits@2.0.4 deduped
│ │ │     ├── string_decoder@1.1.1 deduped
│ │ │     └── util-deprecate@1.0.2 deduped
│ │ └─┬ tunnel-agent@0.6.0
│ │   └── safe-buffer@5.1.2 deduped
│ ├─┬ svgo@1.3.2
│ │ ├─┬ chalk@2.4.2
│ │ │ ├─┬ ansi-styles@3.2.1
│ │ │ │ └─┬ color-convert@1.9.3
│ │ │ │   └── color-name@1.1.3
│ │ │ ├── escape-string-regexp@1.0.5
│ │ │ └─┬ supports-color@5.5.0
│ │ │   └── has-flag@3.0.0
│ │ ├─┬ coa@2.0.2
│ │ │ ├── @types/q@1.5.5
│ │ │ ├─┬ chalk@2.4.2
│ │ │ │ ├─┬ ansi-styles@3.2.1
│ │ │ │ │ └─┬ color-convert@1.9.3
│ │ │ │ │   └── color-name@1.1.3
│ │ │ │ ├── escape-string-regexp@1.0.5
│ │ │ │ └─┬ supports-color@5.5.0
│ │ │ │   └── has-flag@3.0.0
│ │ │ └── q@1.5.1
│ │ ├── css-select-base-adapter@0.1.1
│ │ ├─┬ css-select@2.1.0
│ │ │ ├── boolbase@1.0.0
│ │ │ ├── css-what@3.4.2
│ │ │ ├─┬ domutils@1.7.0
│ │ │ │ ├─┬ dom-serializer@0.2.2
│ │ │ │ │ ├── domelementtype@2.3.0 deduped
│ │ │ │ │ └── entities@2.2.0
│ │ │ │ └── domelementtype@1.3.1
│ │ │ └─┬ nth-check@1.0.2
│ │ │   └── boolbase@1.0.0 deduped
│ │ ├─┬ css-tree@1.0.0-alpha.37
│ │ │ ├── mdn-data@2.0.4
│ │ │ └── source-map@0.6.1
│ │ ├─┬ csso@4.2.0
│ │ │ └─┬ css-tree@1.1.3
│ │ │   ├── mdn-data@2.0.14
│ │ │   └── source-map@0.6.1
│ │ ├─┬ js-yaml@3.14.1
│ │ │ ├─┬ argparse@1.0.10
│ │ │ │ └── sprintf-js@1.0.3
│ │ │ └── esprima@4.0.1
│ │ ├── mkdirp@0.5.6 deduped
│ │ ├─┬ object.values@1.1.6
│ │ │ ├── call-bind@1.0.2 deduped
│ │ │ ├── define-properties@1.1.4 deduped
│ │ │ └─┬ es-abstract@1.20.4
│ │ │   ├── call-bind@1.0.2 deduped
│ │ │   ├─┬ es-to-primitive@1.2.1
│ │ │   │ ├── is-callable@1.2.7 deduped
│ │ │   │ ├── is-date-object@1.0.5 deduped
│ │ │   │ └─┬ is-symbol@1.0.4
│ │ │   │   └── has-symbols@1.0.3 deduped
│ │ │   ├── function-bind@1.1.1 deduped
│ │ │   ├─┬ function.prototype.name@1.1.5
│ │ │   │ ├── call-bind@1.0.2 deduped
│ │ │   │ ├── define-properties@1.1.4 deduped
│ │ │   │ ├── es-abstract@1.20.4 deduped
│ │ │   │ └── functions-have-names@1.2.3 deduped
│ │ │   ├── get-intrinsic@1.1.3 deduped
│ │ │   ├─┬ get-symbol-description@1.0.0
│ │ │   │ ├── call-bind@1.0.2 deduped
│ │ │   │ └── get-intrinsic@1.1.3 deduped
│ │ │   ├── has-property-descriptors@1.0.0 deduped
│ │ │   ├── has-symbols@1.0.3 deduped
│ │ │   ├── has@1.0.3 deduped
│ │ │   ├── internal-slot@1.0.3 deduped
│ │ │   ├── is-callable@1.2.7 deduped
│ │ │   ├── is-negative-zero@2.0.2
│ │ │   ├─┬ is-regex@1.1.4
│ │ │   │ ├── call-bind@1.0.2 deduped
│ │ │   │ └── has-tostringtag@1.0.0 deduped
│ │ │   ├─┬ is-shared-array-buffer@1.0.2
│ │ │   │ └── call-bind@1.0.2 deduped
│ │ │   ├── is-string@1.0.7 deduped
│ │ │   ├─┬ is-weakref@1.0.2
│ │ │   │ └── call-bind@1.0.2 deduped
│ │ │   ├── object-inspect@1.12.2
│ │ │   ├── object-keys@1.1.1 deduped
│ │ │   ├── object.assign@4.1.4 deduped
│ │ │   ├── regexp.prototype.flags@1.4.3 deduped
│ │ │   ├─┬ safe-regex-test@1.0.0
│ │ │   │ ├── call-bind@1.0.2 deduped
│ │ │   │ ├── get-intrinsic@1.1.3 deduped
│ │ │   │ └── is-regex@1.1.4 deduped
│ │ │   ├─┬ string.prototype.trimend@1.0.6
│ │ │   │ ├── call-bind@1.0.2 deduped
│ │ │   │ ├── define-properties@1.1.4 deduped
│ │ │   │ └── es-abstract@1.20.4 deduped
│ │ │   ├─┬ string.prototype.trimstart@1.0.6
│ │ │   │ ├── call-bind@1.0.2 deduped
│ │ │   │ ├── define-properties@1.1.4 deduped
│ │ │   │ └── es-abstract@1.20.4 deduped
│ │ │   └─┬ unbox-primitive@1.0.2
│ │ │     ├── call-bind@1.0.2 deduped
│ │ │     ├── has-bigints@1.0.2
│ │ │     ├── has-symbols@1.0.3 deduped
│ │ │     └─┬ which-boxed-primitive@1.0.2
│ │ │       ├─┬ is-bigint@1.0.4
│ │ │       │ └── has-bigints@1.0.2 deduped
│ │ │       ├─┬ is-boolean-object@1.1.2
│ │ │       │ ├── call-bind@1.0.2 deduped
│ │ │       │ └── has-tostringtag@1.0.0 deduped
│ │ │       ├─┬ is-number-object@1.0.7
│ │ │       │ └── has-tostringtag@1.0.0 deduped
│ │ │       ├── is-string@1.0.7 deduped
│ │ │       └── is-symbol@1.0.4 deduped
│ │ ├── sax@1.2.4
│ │ ├── stable@0.1.8
│ │ ├── unquote@1.1.1
│ │ └─┬ util.promisify@1.0.1
│ │   ├── define-properties@1.1.4 deduped
│ │   ├── es-abstract@1.20.4 deduped
│ │   ├── has-symbols@1.0.3 deduped
│ │   └── object.getownpropertydescriptors@2.1.5 deduped
│ └── uuid@3.4.0
├─┬ gatsby-remark-copy-linked-files@2.10.0
│ ├── @babel/runtime@7.20.1 deduped
│ ├─┬ cheerio@1.0.0-rc.12
│ │ ├─┬ cheerio-select@2.1.0
│ │ │ ├── boolbase@1.0.0 deduped
│ │ │ ├─┬ css-select@5.1.0
│ │ │ │ ├── boolbase@1.0.0 deduped
│ │ │ │ ├── css-what@6.1.0 deduped
│ │ │ │ ├── domhandler@5.0.3 deduped
│ │ │ │ ├── domutils@3.0.1 deduped
│ │ │ │ └─┬ nth-check@2.1.1
│ │ │ │   └── boolbase@1.0.0 deduped
│ │ │ ├── css-what@6.1.0
│ │ │ ├── domelementtype@2.3.0
│ │ │ ├── domhandler@5.0.3 deduped
│ │ │ └── domutils@3.0.1 deduped
│ │ ├─┬ dom-serializer@2.0.0
│ │ │ ├── domelementtype@2.3.0 deduped
│ │ │ ├── domhandler@5.0.3 deduped
│ │ │ └── entities@4.4.0
│ │ ├─┬ domhandler@5.0.3
│ │ │ └── domelementtype@2.3.0 deduped
│ │ ├─┬ domutils@3.0.1
│ │ │ ├── dom-serializer@2.0.0 deduped
│ │ │ ├── domelementtype@2.3.0 deduped
│ │ │ └── domhandler@5.0.3 deduped
│ │ ├─┬ htmlparser2@8.0.1
│ │ │ ├── domelementtype@2.3.0 deduped
│ │ │ ├── domhandler@5.0.3 deduped
│ │ │ ├── domutils@3.0.1 deduped
│ │ │ └── entities@4.4.0 deduped
│ │ ├─┬ parse5-htmlparser2-tree-adapter@7.0.0
│ │ │ ├── domhandler@5.0.3 deduped
│ │ │ └── parse5@7.1.1 deduped
│ │ └─┬ parse5@7.1.1
│ │   └── entities@4.4.0 deduped
│ ├─┬ fs-extra@8.1.0
│ │ ├── graceful-fs@4.2.10 deduped
│ │ ├─┬ jsonfile@4.0.0
│ │ │ └── graceful-fs@4.2.10 deduped
│ │ └── universalify@0.1.2
│ ├── gatsby@2.32.13 deduped
│ ├─┬ is-relative-url@3.0.0
│ │ └── is-absolute-url@3.0.3
│ ├── lodash@4.17.21 deduped
│ ├── path-is-inside@1.0.2
│ ├── probe-image-size@6.0.0 deduped
│ └─┬ unist-util-visit@1.4.1
│   └─┬ unist-util-visit-parents@2.1.2
│     └── unist-util-is@3.0.0
├─┬ gatsby-remark-external-links@0.0.4
│ ├─┬ babel-runtime@6.26.0
│ │ ├── core-js@2.6.12
│ │ └── regenerator-runtime@0.11.1
│ ├─┬ is-relative-url@2.0.0
│ │ └── is-absolute-url@2.1.0
│ ├─┬ unist-util-find@1.0.2
│ │ ├── lodash.iteratee@4.7.0
│ │ └─┬ unist-util-visit@1.4.1
│ │   └─┬ unist-util-visit-parents@2.1.2
│ │     └── unist-util-is@3.0.0
│ └─┬ unist-util-visit@1.4.1
│   └─┬ unist-util-visit-parents@2.1.2
│     └── unist-util-is@3.0.0
├─┬ gatsby-remark-images@3.11.1
│ ├── @babel/runtime@7.20.1 deduped
│ ├─┬ chalk@4.1.2
│ │ ├─┬ ansi-styles@4.3.0
│ │ │ └─┬ color-convert@2.0.1
│ │ │   └── color-name@1.1.4 deduped
│ │ └─┬ supports-color@7.2.0
│ │   └── has-flag@4.0.0
│ ├── cheerio@1.0.0-rc.12 deduped
│ ├── gatsby-core-utils@1.10.1 deduped
│ ├── gatsby-plugin-sharp@2.14.4 deduped
│ ├── gatsby@2.32.13 deduped
│ ├── is-relative-url@3.0.0 deduped
│ ├── lodash@4.17.21 deduped
│ ├─┬ mdast-util-definitions@1.2.5
│ │ └─┬ unist-util-visit@1.4.1
│ │   └─┬ unist-util-visit-parents@2.1.2
│ │     └── unist-util-is@3.0.0
│ ├── potrace@2.1.8 deduped
│ ├─┬ query-string@6.14.1
│ │ ├── decode-uri-component@0.2.0
│ │ ├── filter-obj@1.1.0
│ │ ├── split-on-first@1.1.0
│ │ └── strict-uri-encode@2.0.0
│ ├─┬ unist-util-select@1.5.0
│ │ ├── css-selector-parser@1.4.1
│ │ ├─┬ debug@2.6.9
│ │ │ └── ms@2.0.0
│ │ └─┬ nth-check@1.0.2
│ │   └── boolbase@1.0.0 deduped
│ └─┬ unist-util-visit-parents@2.1.2
│   └── unist-util-is@3.0.0
├─┬ gatsby-remark-prismjs@3.13.0
│ ├── @babel/runtime@7.20.1 deduped
│ ├── gatsby@2.32.13 deduped
│ ├── parse-numeric-range@0.0.2
│ ├── prismjs@1.29.0 deduped
│ └─┬ unist-util-visit@1.4.1
│   └─┬ unist-util-visit-parents@2.1.2
│     └── unist-util-is@3.0.0
├─┬ gatsby-remark-responsive-iframe@2.11.0
│ ├── @babel/runtime@7.20.1 deduped
│ ├── cheerio@1.0.0-rc.12 deduped
│ ├── common-tags@1.8.2 deduped
│ ├── gatsby@2.32.13 deduped
│ ├── lodash@4.17.21 deduped
│ └─┬ unist-util-visit@1.4.1
│   └─┬ unist-util-visit-parents@2.1.2
│     └── unist-util-is@3.0.0
├─┬ gatsby-remark-smartypants@2.10.0
│ ├── @babel/runtime@7.20.1 deduped
│ ├── gatsby@2.32.13 deduped
│ ├─┬ retext-smartypants@3.0.3
│ │ ├── nlcst-to-string@2.0.4
│ │ └─┬ unist-util-visit@1.4.1
│ │   └─┬ unist-util-visit-parents@2.1.2
│ │     └── unist-util-is@3.0.0
│ ├─┬ retext@5.0.0
│ │ ├─┬ retext-latin@2.0.4
│ │ │ ├─┬ parse-latin@4.3.0
│ │ │ │ ├── nlcst-to-string@2.0.4 deduped
│ │ │ │ ├── unist-util-modify-children@2.0.0 deduped
│ │ │ │ └── unist-util-visit-children@1.1.4 deduped
│ │ │ └── unherit@1.1.3 deduped
│ │ ├─┬ retext-stringify@2.0.4
│ │ │ └── nlcst-to-string@2.0.4 deduped
│ │ └─┬ unified@6.2.0
│ │   ├── bail@1.0.5 deduped
│ │   ├── extend@3.0.2 deduped
│ │   ├── is-plain-obj@1.1.0 deduped
│ │   ├── trough@1.0.5 deduped
│ │   ├─┬ vfile@2.3.0
│ │   │ ├── is-buffer@1.1.6
│ │   │ ├── replace-ext@1.0.0 deduped
│ │   │ ├── unist-util-stringify-position@1.1.2
│ │   │ └─┬ vfile-message@1.1.1
│ │   │   └── unist-util-stringify-position@1.1.2 deduped
│ │   └── x-is-string@0.1.0 deduped
│ └─┬ unist-util-visit@1.4.1
│   └─┬ unist-util-visit-parents@2.1.2
│     └── unist-util-is@3.0.0
├─┬ gatsby-source-filesystem@2.11.1
│ ├── @babel/runtime@7.20.1 deduped
│ ├─┬ better-queue@3.8.12
│ │ ├── better-queue-memory@1.0.4
│ │ ├── node-eta@0.9.0
│ │ └── uuid@9.0.0
│ ├─┬ chokidar@3.5.3
│ │ ├─┬ anymatch@3.1.2
│ │ │ ├── normalize-path@3.0.0 deduped
│ │ │ └── picomatch@2.3.1 deduped
│ │ ├─┬ braces@3.0.2
│ │ │ └─┬ fill-range@7.0.1
│ │ │   └─┬ to-regex-range@5.0.1
│ │ │     └── is-number@7.0.0
│ │ ├── fsevents@2.3.2
│ │ ├─┬ glob-parent@5.1.2
│ │ │ └── is-glob@4.0.3 deduped
│ │ ├─┬ is-binary-path@2.1.0
│ │ │ └── binary-extensions@2.2.0
│ │ ├─┬ is-glob@4.0.3
│ │ │ └── is-extglob@2.1.1
│ │ ├── normalize-path@3.0.0 deduped
│ │ └─┬ readdirp@3.6.0
│ │   └── picomatch@2.3.1 deduped
│ ├─┬ file-type@16.5.4
│ │ ├─┬ readable-web-to-node-stream@3.0.2
│ │ │ └─┬ readable-stream@3.6.0
│ │ │   ├── inherits@2.0.4 deduped
│ │ │   ├── string_decoder@1.1.1 deduped
│ │ │   └── util-deprecate@1.0.2 deduped
│ │ ├─┬ strtok3@6.3.0
│ │ │ ├── @tokenizer/token@0.3.0
│ │ │ └── peek-readable@4.1.0
│ │ └─┬ token-types@4.2.1
│ │   ├── @tokenizer/token@0.3.0 deduped
│ │   └── ieee754@1.2.1
│ ├── fs-extra@8.1.0 deduped
│ ├── gatsby-core-utils@1.10.1 deduped
│ ├── gatsby@2.32.13 deduped
│ ├─┬ got@9.6.0
│ │ ├── @sindresorhus/is@0.14.0
│ │ ├─┬ @szmarczak/http-timer@1.1.2
│ │ │ └── defer-to-connect@1.1.3
│ │ ├─┬ cacheable-request@6.1.0
│ │ │ ├── clone-response@1.0.2 deduped
│ │ │ ├── get-stream@5.2.0 deduped
│ │ │ ├── http-cache-semantics@4.1.0
│ │ │ ├─┬ keyv@3.0.0
│ │ │ │ └── json-buffer@3.0.0
│ │ │ ├── lowercase-keys@2.0.0
│ │ │ ├── normalize-url@4.5.1
│ │ │ └─┬ responselike@1.0.2
│ │ │   └── lowercase-keys@1.0.1 deduped
│ │ ├─┬ decompress-response@3.3.0
│ │ │ └── mimic-response@1.0.1 deduped
│ │ ├── duplexer3@0.1.5 deduped
│ │ ├─┬ get-stream@4.1.0
│ │ │ └── pump@3.0.0 deduped
│ │ ├── lowercase-keys@1.0.1
│ │ ├── mimic-response@1.0.1
│ │ ├── p-cancelable@1.1.0
│ │ ├── to-readable-stream@1.0.0
│ │ └─┬ url-parse-lax@3.0.0
│ │   └── prepend-http@2.0.0
│ ├── md5-file@5.0.0
│ ├── mime@2.6.0
│ ├── pretty-bytes@5.6.0
│ ├── progress@2.0.3 deduped
│ ├── valid-url@1.0.9
│ └── xstate@4.34.0
├─┬ gatsby-transformer-remark@2.16.1
│ ├── @babel/runtime@7.20.1 deduped
│ ├── bluebird@3.7.2 deduped
│ ├── gatsby-core-utils@1.10.1 deduped
│ ├── gatsby@2.32.13 deduped
│ ├─┬ gray-matter@4.0.3
│ │ ├── js-yaml@3.14.1 deduped
│ │ ├── kind-of@6.0.3
│ │ ├─┬ section-matter@1.0.0
│ │ │ ├─┬ extend-shallow@2.0.1
│ │ │ │ └── is-extendable@0.1.1
│ │ │ └── kind-of@6.0.3 deduped
│ │ └── strip-bom-string@1.0.0
│ ├─┬ hast-util-raw@4.0.0
│ │ ├─┬ hast-util-from-parse5@4.0.2
│ │ │ ├── ccount@1.1.0 deduped
│ │ │ ├─┬ hastscript@4.1.0
│ │ │ │ ├── comma-separated-tokens@1.0.8 deduped
│ │ │ │ ├── hast-util-parse-selector@2.2.5
│ │ │ │ ├── property-information@4.2.0 deduped
│ │ │ │ └── space-separated-tokens@1.1.5 deduped
│ │ │ ├── property-information@4.2.0 deduped
│ │ │ ├── web-namespaces@1.1.4 deduped
│ │ │ └── xtend@4.0.2 deduped
│ │ ├─┬ hast-util-to-parse5@4.0.1
│ │ │ ├─┬ hast-to-hyperscript@5.0.0
│ │ │ │ ├── comma-separated-tokens@1.0.8 deduped
│ │ │ │ ├── property-information@4.2.0 deduped
│ │ │ │ ├── space-separated-tokens@1.1.5 deduped
│ │ │ │ ├─┬ style-to-object@0.2.3
│ │ │ │ │ └── inline-style-parser@0.1.1 deduped
│ │ │ │ ├── unist-util-is@2.1.3 deduped
│ │ │ │ └── web-namespaces@1.1.4 deduped
│ │ │ ├── property-information@4.2.0 deduped
│ │ │ ├── web-namespaces@1.1.4 deduped
│ │ │ ├── xtend@4.0.2 deduped
│ │ │ └── zwitch@1.0.5 deduped
│ │ ├── html-void-elements@1.0.5
│ │ ├── parse5@5.1.1
│ │ ├── unist-util-position@3.1.0
│ │ ├── web-namespaces@1.1.4
│ │ ├── xtend@4.0.2
│ │ └── zwitch@1.0.5
│ ├─┬ hast-util-to-html@4.0.1
│ │ ├── ccount@1.1.0
│ │ ├── comma-separated-tokens@1.0.8
│ │ ├── hast-util-is-element@1.1.0
│ │ ├── hast-util-whitespace@1.0.4
│ │ ├── html-void-elements@1.0.5 deduped
│ │ ├─┬ property-information@4.2.0
│ │ │ └── xtend@4.0.2 deduped
│ │ ├── space-separated-tokens@1.1.5
│ │ ├─┬ stringify-entities@1.3.2
│ │ │ ├── character-entities-html4@1.1.4
│ │ │ ├── character-entities-legacy@1.1.4
│ │ │ ├─┬ is-alphanumerical@1.0.4
│ │ │ │ ├── is-alphabetical@1.0.4
│ │ │ │ └── is-decimal@1.0.4
│ │ │ └── is-hexadecimal@1.0.4
│ │ ├── unist-util-is@2.1.3
│ │ └── xtend@4.0.2 deduped
│ ├── lodash@4.17.21 deduped
│ ├─┬ mdast-util-to-hast@3.0.4
│ │ ├── collapse-white-space@1.0.6
│ │ ├─┬ detab@2.0.4
│ │ │ └── repeat-string@1.6.1 deduped
│ │ ├── mdast-util-definitions@1.2.5 deduped
│ │ ├── mdurl@1.0.1
│ │ ├── trim-lines@1.1.3
│ │ ├── trim@0.0.1
│ │ ├─┬ unist-builder@1.0.4
│ │ │ └── object-assign@4.1.1 deduped
│ │ ├── unist-util-generated@1.1.6
│ │ ├── unist-util-position@3.1.0 deduped
│ │ ├─┬ unist-util-visit@1.4.1
│ │ │ └─┬ unist-util-visit-parents@2.1.2
│ │ │   └── unist-util-is@3.0.0
│ │ └── xtend@4.0.2 deduped
│ ├── mdast-util-to-string@1.1.0
│ ├─┬ mdast-util-toc@5.1.0
│ │ ├─┬ @types/mdast@3.0.10
│ │ │ └── @types/unist@2.0.6 deduped
│ │ ├── @types/unist@2.0.6
│ │ ├── extend@3.0.2
│ │ ├── github-slugger@1.5.0
│ │ ├── mdast-util-to-string@2.0.0
│ │ ├── unist-util-is@4.1.0
│ │ └─┬ unist-util-visit@2.0.3
│ │   ├── @types/unist@2.0.6 deduped
│ │   ├── unist-util-is@4.1.0
│ │   └─┬ unist-util-visit-parents@3.1.1
│ │     ├── @types/unist@2.0.6 deduped
│ │     └── unist-util-is@4.1.0
│ ├─┬ remark-parse@6.0.3
│ │ ├── collapse-white-space@1.0.6 deduped
│ │ ├── is-alphabetical@1.0.4
│ │ ├── is-decimal@1.0.4
│ │ ├── is-whitespace-character@1.0.4
│ │ ├── is-word-character@1.0.4
│ │ ├── markdown-escapes@1.0.4
│ │ ├─┬ parse-entities@1.2.2
│ │ │ ├── character-entities-legacy@1.1.4
│ │ │ ├── character-entities@1.2.4
│ │ │ ├── character-reference-invalid@1.1.4
│ │ │ ├─┬ is-alphanumerical@1.0.4
│ │ │ │ ├── is-alphabetical@1.0.4 deduped
│ │ │ │ └── is-decimal@1.0.4 deduped
│ │ │ ├── is-decimal@1.0.4 deduped
│ │ │ └── is-hexadecimal@1.0.4
│ │ ├── repeat-string@1.6.1
│ │ ├── state-toggle@1.0.3
│ │ ├── trim-trailing-lines@1.1.4
│ │ ├── trim@0.0.1 deduped
│ │ ├─┬ unherit@1.1.3
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ └── xtend@4.0.2 deduped
│ │ ├── unist-util-remove-position@1.1.4 deduped
│ │ ├── vfile-location@2.0.6
│ │ └── xtend@4.0.2 deduped
│ ├─┬ remark-retext@3.1.3
│ │ └─┬ mdast-util-to-nlcst@3.2.3
│ │   ├── nlcst-to-string@2.0.4 deduped
│ │   ├── repeat-string@1.6.1 deduped
│ │   ├── unist-util-position@3.1.0 deduped
│ │   └── vfile-location@2.0.6
│ ├─┬ remark-stringify@6.0.4
│ │ ├── ccount@1.1.0 deduped
│ │ ├── is-alphanumeric@1.0.0
│ │ ├── is-decimal@1.0.4
│ │ ├── is-whitespace-character@1.0.4 deduped
│ │ ├── longest-streak@2.0.4
│ │ ├── markdown-escapes@1.0.4 deduped
│ │ ├── markdown-table@1.1.3
│ │ ├─┬ mdast-util-compact@1.0.4
│ │ │ └── unist-util-visit@1.4.1 deduped
│ │ ├─┬ parse-entities@1.2.2
│ │ │ ├── character-entities-legacy@1.1.4
│ │ │ ├── character-entities@1.2.4
│ │ │ ├── character-reference-invalid@1.1.4
│ │ │ ├─┬ is-alphanumerical@1.0.4
│ │ │ │ ├── is-alphabetical@1.0.4
│ │ │ │ └── is-decimal@1.0.4 deduped
│ │ │ ├── is-decimal@1.0.4 deduped
│ │ │ └── is-hexadecimal@1.0.4
│ │ ├── repeat-string@1.6.1 deduped
│ │ ├── state-toggle@1.0.3 deduped
│ │ ├── stringify-entities@1.3.2 deduped
│ │ ├── unherit@1.1.3 deduped
│ │ └── xtend@4.0.2 deduped
│ ├─┬ remark@10.0.1
│ │ ├── remark-parse@6.0.3 deduped
│ │ ├─┬ remark-stringify@6.0.4
│ │ │ ├── ccount@1.1.0 deduped
│ │ │ ├── is-alphanumeric@1.0.0 deduped
│ │ │ ├── is-decimal@1.0.4
│ │ │ ├── is-whitespace-character@1.0.4 deduped
│ │ │ ├── longest-streak@2.0.4
│ │ │ ├── markdown-escapes@1.0.4 deduped
│ │ │ ├── markdown-table@1.1.3
│ │ │ ├─┬ mdast-util-compact@1.0.4
│ │ │ │ └─┬ unist-util-visit@1.4.1
│ │ │ │   └─┬ unist-util-visit-parents@2.1.2
│ │ │ │     └── unist-util-is@3.0.0
│ │ │ ├─┬ parse-entities@1.2.2
│ │ │ │ ├── character-entities-legacy@1.1.4
│ │ │ │ ├── character-entities@1.2.4
│ │ │ │ ├── character-reference-invalid@1.1.4
│ │ │ │ ├─┬ is-alphanumerical@1.0.4
│ │ │ │ │ ├── is-alphabetical@1.0.4
│ │ │ │ │ └── is-decimal@1.0.4 deduped
│ │ │ │ ├── is-decimal@1.0.4 deduped
│ │ │ │ └── is-hexadecimal@1.0.4
│ │ │ ├── repeat-string@1.6.1 deduped
│ │ │ ├── state-toggle@1.0.3 deduped
│ │ │ ├── stringify-entities@1.3.2 deduped
│ │ │ ├── unherit@1.1.3 deduped
│ │ │ └── xtend@4.0.2 deduped
│ │ └─┬ unified@7.1.0
│ │   ├── @types/unist@2.0.6 deduped
│ │   ├─┬ @types/vfile@3.0.2
│ │   │ ├── @types/node@18.11.9 deduped
│ │   │ ├── @types/unist@2.0.6 deduped
│ │   │ └─┬ @types/vfile-message@2.0.0
│ │   │   └─┬ vfile-message@3.1.2
│ │   │     ├── @types/unist@2.0.6 deduped
│ │   │     └─┬ unist-util-stringify-position@3.0.2
│ │   │       └── @types/unist@2.0.6 deduped
│ │   ├── bail@1.0.5 deduped
│ │   ├── extend@3.0.2 deduped
│ │   ├── is-plain-obj@1.1.0 deduped
│ │   ├── trough@1.0.5 deduped
│ │   ├─┬ vfile@3.0.1
│ │   │ ├── is-buffer@2.0.5
│ │   │ ├── replace-ext@1.0.0 deduped
│ │   │ ├── unist-util-stringify-position@1.1.2
│ │   │ └─┬ vfile-message@1.1.1
│ │   │   └── unist-util-stringify-position@1.1.2 deduped
│ │   └── x-is-string@0.1.0 deduped
│ ├─┬ retext-english@3.0.4
│ │ ├─┬ parse-english@4.2.0
│ │ │ ├── nlcst-to-string@2.0.4 deduped
│ │ │ ├── parse-latin@4.3.0 deduped
│ │ │ ├─┬ unist-util-modify-children@2.0.0
│ │ │ │ └── array-iterate@1.1.4
│ │ │ └── unist-util-visit-children@1.1.4
│ │ └── unherit@1.1.3 deduped
│ ├─┬ sanitize-html@1.27.5
│ │ ├─┬ htmlparser2@4.1.0
│ │ │ ├── domelementtype@2.3.0 deduped
│ │ │ ├─┬ domhandler@3.3.0
│ │ │ │ └── domelementtype@2.3.0 deduped
│ │ │ ├─┬ domutils@2.8.0
│ │ │ │ ├─┬ dom-serializer@1.4.1
│ │ │ │ │ ├── domelementtype@2.3.0 deduped
│ │ │ │ │ ├─┬ domhandler@4.3.1
│ │ │ │ │ │ └── domelementtype@2.3.0 deduped
│ │ │ │ │ └── entities@2.2.0 deduped
│ │ │ │ ├── domelementtype@2.3.0 deduped
│ │ │ │ └─┬ domhandler@4.3.1
│ │ │ │   └── domelementtype@2.3.0 deduped
│ │ │ └── entities@2.2.0
│ │ ├── lodash@4.17.21 deduped
│ │ ├── parse-srcset@1.0.2
│ │ └─┬ postcss@7.0.39
│ │   ├── picocolors@0.2.1 deduped
│ │   └── source-map@0.6.1
│ ├─┬ underscore.string@3.3.6
│ │ ├── sprintf-js@1.1.2
│ │ └── util-deprecate@1.0.2
│ ├─┬ unified@6.2.0
│ │ ├── bail@1.0.5
│ │ ├── extend@3.0.2 deduped
│ │ ├── is-plain-obj@1.1.0
│ │ ├── trough@1.0.5
│ │ ├─┬ vfile@2.3.0
│ │ │ ├── is-buffer@1.1.6
│ │ │ ├── replace-ext@1.0.0 deduped
│ │ │ ├── unist-util-stringify-position@1.1.2
│ │ │ └─┬ vfile-message@1.1.1
│ │ │   └── unist-util-stringify-position@1.1.2 deduped
│ │ └── x-is-string@0.1.0
│ ├─┬ unist-util-remove-position@1.1.4
│ │ └─┬ unist-util-visit@1.4.1
│ │   └─┬ unist-util-visit-parents@2.1.2
│ │     └── unist-util-is@3.0.0
│ ├── unist-util-select@1.5.0 deduped
│ └─┬ unist-util-visit@1.4.1
│   └─┬ unist-util-visit-parents@2.1.2
│     └── unist-util-is@3.0.0
├─┬ gatsby-transformer-sharp@2.12.1
│ ├── @babel/runtime@7.20.1 deduped
│ ├── bluebird@3.7.2 deduped
│ ├─┬ fs-extra@9.1.0
│ │ ├── at-least-node@1.0.0 deduped
│ │ ├── graceful-fs@4.2.10 deduped
│ │ ├─┬ jsonfile@6.1.0
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ └── universalify@2.0.0 deduped
│ │ └── universalify@2.0.0
│ ├── gatsby-plugin-sharp@2.14.4 deduped
│ ├── gatsby@2.32.13 deduped
│ ├── potrace@2.1.8 deduped
│ ├── probe-image-size@6.0.0 deduped
│ ├── semver@7.3.8 deduped
│ └── sharp@0.27.2 deduped
├─┬ gatsby@2.32.13
│ ├─┬ @babel/code-frame@7.18.6
│ │ └─┬ @babel/highlight@7.18.6
│ │   ├── @babel/helper-validator-identifier@7.19.1 deduped
│ │   ├─┬ chalk@2.4.2
│ │   │ ├─┬ ansi-styles@3.2.1
│ │   │ │ └─┬ color-convert@1.9.3
│ │   │ │   └── color-name@1.1.3
│ │   │ ├── escape-string-regexp@1.0.5
│ │   │ └─┬ supports-color@5.5.0
│ │   │   └── has-flag@3.0.0
│ │   └── js-tokens@4.0.0 deduped
│ ├─┬ @babel/core@7.20.2
│ │ ├─┬ @ampproject/remapping@2.2.0
│ │ │ ├─┬ @jridgewell/gen-mapping@0.1.1
│ │ │ │ ├── @jridgewell/set-array@1.1.2
│ │ │ │ └── @jridgewell/sourcemap-codec@1.4.14
│ │ │ └─┬ @jridgewell/trace-mapping@0.3.17
│ │ │   ├── @jridgewell/resolve-uri@3.1.0
│ │ │   └── @jridgewell/sourcemap-codec@1.4.14 deduped
│ │ ├── @babel/code-frame@7.18.6 deduped
│ │ ├─┬ @babel/generator@7.20.4
│ │ │ ├── @babel/types@7.20.2 deduped
│ │ │ ├─┬ @jridgewell/gen-mapping@0.3.2
│ │ │ │ ├── @jridgewell/set-array@1.1.2 deduped
│ │ │ │ ├── @jridgewell/sourcemap-codec@1.4.14 deduped
│ │ │ │ └── @jridgewell/trace-mapping@0.3.17 deduped
│ │ │ └── jsesc@2.5.2
│ │ ├─┬ @babel/helper-compilation-targets@7.20.0
│ │ │ ├── @babel/compat-data@7.20.1
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/helper-validator-option@7.18.6
│ │ │ ├── browserslist@4.21.4 deduped
│ │ │ └── semver@6.3.0
│ │ ├─┬ @babel/helper-module-transforms@7.20.2
│ │ │ ├── @babel/helper-environment-visitor@7.18.9 deduped
│ │ │ ├── @babel/helper-module-imports@7.18.6 deduped
│ │ │ ├─┬ @babel/helper-simple-access@7.20.2
│ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ ├── @babel/helper-split-export-declaration@7.18.6 deduped
│ │ │ ├── @babel/helper-validator-identifier@7.19.1 deduped
│ │ │ ├── @babel/template@7.18.10 deduped
│ │ │ ├── @babel/traverse@7.20.1 deduped
│ │ │ └── @babel/types@7.20.2 deduped
│ │ ├─┬ @babel/helpers@7.20.1
│ │ │ ├── @babel/template@7.18.10 deduped
│ │ │ ├── @babel/traverse@7.20.1 deduped
│ │ │ └── @babel/types@7.20.2 deduped
│ │ ├── @babel/parser@7.20.3 deduped
│ │ ├─┬ @babel/template@7.18.10
│ │ │ ├── @babel/code-frame@7.18.6 deduped
│ │ │ ├── @babel/parser@7.20.3 deduped
│ │ │ └── @babel/types@7.20.2 deduped
│ │ ├── @babel/traverse@7.20.1 deduped
│ │ ├── @babel/types@7.20.2 deduped
│ │ ├── convert-source-map@1.9.0
│ │ ├─┬ debug@4.3.4
│ │ │ └── ms@2.1.2
│ │ ├── gensync@1.0.0-beta.2
│ │ ├── json5@2.2.1
│ │ └── semver@6.3.0
│ ├── @babel/parser@7.20.3
│ ├── @babel/runtime@7.20.1 deduped
│ ├─┬ @babel/traverse@7.20.1
│ │ ├── @babel/code-frame@7.18.6 deduped
│ │ ├── @babel/generator@7.20.4 deduped
│ │ ├── @babel/helper-environment-visitor@7.18.9
│ │ ├─┬ @babel/helper-function-name@7.19.0
│ │ │ ├── @babel/template@7.18.10 deduped
│ │ │ └── @babel/types@7.20.2 deduped
│ │ ├─┬ @babel/helper-hoist-variables@7.18.6
│ │ │ └── @babel/types@7.20.2 deduped
│ │ ├─┬ @babel/helper-split-export-declaration@7.18.6
│ │ │ └── @babel/types@7.20.2 deduped
│ │ ├── @babel/parser@7.20.3 deduped
│ │ ├── @babel/types@7.20.2 deduped
│ │ ├─┬ debug@4.3.4
│ │ │ └── ms@2.1.2
│ │ └── globals@11.12.0
│ ├─┬ @babel/types@7.20.2
│ │ ├── @babel/helper-string-parser@7.19.4
│ │ ├── @babel/helper-validator-identifier@7.19.1
│ │ └── to-fast-properties@2.0.0
│ ├── @hapi/joi@15.1.1 deduped
│ ├── @mikaelkristiansson/domready@1.0.11
│ ├─┬ @nodelib/fs.walk@1.2.8
│ │ ├─┬ @nodelib/fs.scandir@2.1.5
│ │ │ ├── @nodelib/fs.stat@2.0.5
│ │ │ └─┬ run-parallel@1.2.0
│ │ │   └── queue-microtask@1.2.3
│ │ └── fastq@1.13.0 deduped
│ ├─┬ @pieh/friendly-errors-webpack-plugin@1.7.0-chalk-2
│ │ ├─┬ chalk@2.4.2
│ │ │ ├─┬ ansi-styles@3.2.1
│ │ │ │ └─┬ color-convert@1.9.3
│ │ │ │   └── color-name@1.1.3
│ │ │ ├── escape-string-regexp@1.0.5
│ │ │ └─┬ supports-color@5.5.0
│ │ │   └── has-flag@3.0.0
│ │ ├─┬ error-stack-parser@2.1.4
│ │ │ └── stackframe@1.3.4
│ │ ├─┬ string-width@2.1.1
│ │ │ ├── is-fullwidth-code-point@2.0.0
│ │ │ └─┬ strip-ansi@4.0.0
│ │ │   └── ansi-regex@3.0.1
│ │ ├─┬ strip-ansi@3.0.1
│ │ │ └── ansi-regex@2.1.1
│ │ └── webpack@4.46.0 deduped
│ ├─┬ @pmmmwh/react-refresh-webpack-plugin@0.4.3
│ │ ├── UNMET OPTIONAL DEPENDENCY @types/webpack@4.x
│ │ ├── ansi-html@0.0.7 deduped
│ │ ├── error-stack-parser@2.1.4 deduped
│ │ ├── html-entities@1.4.0
│ │ ├─┬ native-url@0.2.6
│ │ │ └── querystring@0.2.1
│ │ ├── react-refresh@0.8.3 deduped
│ │ ├─┬ schema-utils@2.7.1
│ │ │ ├── @types/json-schema@7.0.11
│ │ │ ├── ajv-keywords@3.5.2 deduped
│ │ │ └── ajv@6.12.6 deduped
│ │ ├─┬ sockjs-client@1.6.1
│ │ │ ├── debug@3.2.7 deduped
│ │ │ ├── eventsource@2.0.2
│ │ │ ├─┬ faye-websocket@0.11.4
│ │ │ │ └── websocket-driver@0.7.4 deduped
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ └─┬ url-parse@1.5.10
│ │ │   ├── querystringify@2.2.0
│ │ │   └── requires-port@1.0.0 deduped
│ │ ├── source-map@0.7.4 deduped
│ │ ├── UNMET OPTIONAL DEPENDENCY type-fest@^0.13.1
│ │ ├── webpack-dev-server@3.11.3 deduped
│ │ ├── webpack-hot-middleware@2.25.3 deduped
│ │ ├── UNMET OPTIONAL DEPENDENCY webpack-plugin-serve@0.x || 1.x
│ │ └── webpack@4.46.0 deduped
│ ├─┬ @reach/router@1.3.4
│ │ ├─┬ create-react-context@0.3.0
│ │ │ ├── gud@1.0.0
│ │ │ ├── prop-types@15.8.1 deduped
│ │ │ ├── react@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router, "^0.14.0 || ^15.0.0 || ^16.0.0" from node_modules/gatsby/node_modules/@reach/router/node_modules/create-react-context
│ │ │ └─┬ warning@4.0.3
│ │ │   └── loose-envify@1.4.0 deduped
│ │ ├── invariant@2.2.4 deduped
│ │ ├── prop-types@15.8.1 deduped
│ │ ├── react-dom@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router
│ │ ├── react-lifecycles-compat@3.0.4
│ │ └── react@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router
│ ├─┬ @types/http-proxy@1.17.9
│ │ └── @types/node@18.11.9
│ ├─┬ @typescript-eslint/eslint-plugin@2.34.0
│ │ ├─┬ @typescript-eslint/experimental-utils@2.34.0
│ │ │ ├── @types/json-schema@7.0.11 deduped
│ │ │ ├── @typescript-eslint/typescript-estree@2.34.0 deduped
│ │ │ ├── eslint-scope@5.1.1 deduped
│ │ │ ├─┬ eslint-utils@2.1.0
│ │ │ │ └── eslint-visitor-keys@1.3.0 deduped
│ │ │ └── eslint@6.8.0 deduped
│ │ ├── @typescript-eslint/parser@2.34.0 deduped
│ │ ├── eslint@6.8.0 deduped
│ │ ├── functional-red-black-tree@1.0.1
│ │ ├── regexpp@3.2.0
│ │ └─┬ tsutils@3.21.0
│ │   ├── tslib@1.14.1 deduped
│ │   └── UNMET DEPENDENCY typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta
│ ├─┬ @typescript-eslint/parser@2.34.0
│ │ ├── @types/eslint-visitor-keys@1.0.0
│ │ ├── @typescript-eslint/experimental-utils@2.34.0 deduped
│ │ ├─┬ @typescript-eslint/typescript-estree@2.34.0
│ │ │ ├─┬ debug@4.3.4
│ │ │ │ └── ms@2.1.2
│ │ │ ├── eslint-visitor-keys@1.3.0 deduped
│ │ │ ├── glob@7.2.3 deduped
│ │ │ ├── is-glob@4.0.3 deduped
│ │ │ ├── lodash@4.17.21 deduped
│ │ │ ├── semver@7.3.8 deduped
│ │ │ └── tsutils@3.21.0 deduped
│ │ ├── eslint-visitor-keys@1.3.0
│ │ └── eslint@6.8.0 deduped
│ ├── address@1.1.2
│ ├── anser@2.1.1
│ ├── ansi-html@0.0.7
│ ├─┬ autoprefixer@9.8.8
│ │ ├── browserslist@4.21.4 deduped
│ │ ├── caniuse-lite@1.0.30001431
│ │ ├── normalize-range@0.1.2
│ │ ├── num2fraction@1.2.2
│ │ ├── picocolors@0.2.1
│ │ ├── postcss-value-parser@4.2.0
│ │ └── postcss@7.0.39 deduped
│ ├─┬ axios@0.21.4
│ │ └── follow-redirects@1.15.2
│ ├─┬ babel-core@7.0.0-bridge.0
│ │ └── @babel/core@7.20.2 deduped
│ ├─┬ babel-eslint@10.1.0
│ │ ├── @babel/code-frame@7.18.6 deduped
│ │ ├── @babel/parser@7.20.3 deduped
│ │ ├── @babel/traverse@7.20.1 deduped
│ │ ├── @babel/types@7.20.2 deduped
│ │ ├── eslint-visitor-keys@1.3.0 deduped
│ │ ├── eslint@6.8.0 deduped
│ │ └─┬ resolve@1.22.1
│ │   ├── is-core-module@2.11.0 deduped
│ │   ├── path-parse@1.0.7
│ │   └── supports-preserve-symlinks-flag@1.0.0
│ ├─┬ babel-loader@8.3.0
│ │ ├── @babel/core@7.20.2 deduped
│ │ ├── find-cache-dir@3.3.2 deduped
│ │ ├─┬ loader-utils@2.0.4
│ │ │ ├── big.js@5.2.2
│ │ │ ├── emojis-list@3.0.0
│ │ │ └── json5@2.2.1 deduped
│ │ ├── make-dir@3.1.0 deduped
│ │ ├── schema-utils@2.7.1 deduped
│ │ └── webpack@4.46.0 deduped
│ ├── babel-plugin-add-module-exports@1.0.4
│ ├─┬ babel-plugin-dynamic-import-node@2.3.3
│ │ └─┬ object.assign@4.1.4
│ │   ├── call-bind@1.0.2 deduped
│ │   ├── define-properties@1.1.4 deduped
│ │   ├── has-symbols@1.0.3 deduped
│ │   └── object-keys@1.1.1
│ ├─┬ babel-plugin-lodash@3.3.4
│ │ ├─┬ @babel/helper-module-imports@7.18.6
│ │ │ └── @babel/types@7.20.2 deduped
│ │ ├── @babel/types@7.20.2 deduped
│ │ ├── glob@7.2.3 deduped
│ │ ├── lodash@4.17.21 deduped
│ │ └── require-package-name@2.0.1
│ ├─┬ babel-plugin-remove-graphql-queries@2.16.1
│ │ ├── @babel/core@7.20.2 deduped
│ │ └── gatsby@2.32.13 deduped
│ ├─┬ babel-preset-gatsby@0.12.3
│ │ ├── @babel/core@7.20.2 deduped
│ │ ├─┬ @babel/plugin-proposal-class-properties@7.18.6
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├─┬ @babel/helper-create-class-features-plugin@7.20.2
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-annotate-as-pure@7.18.6 deduped
│ │ │ │ ├── @babel/helper-environment-visitor@7.18.9 deduped
│ │ │ │ ├── @babel/helper-function-name@7.19.0 deduped
│ │ │ │ ├─┬ @babel/helper-member-expression-to-functions@7.18.9
│ │ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ │ ├── @babel/helper-optimise-call-expression@7.18.6 deduped
│ │ │ │ ├── @babel/helper-replace-supers@7.19.1 deduped
│ │ │ │ └── @babel/helper-split-export-declaration@7.18.6 deduped
│ │ │ └── @babel/helper-plugin-utils@7.20.2
│ │ ├─┬ @babel/plugin-proposal-nullish-coalescing-operator@7.18.6
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ └─┬ @babel/plugin-syntax-nullish-coalescing-operator@7.8.3
│ │ │   ├── @babel/core@7.20.2 deduped
│ │ │   └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ ├─┬ @babel/plugin-proposal-optional-chaining@7.18.9
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/helper-skip-transparent-expression-wrappers@7.20.0
│ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ └─┬ @babel/plugin-syntax-optional-chaining@7.8.3
│ │ │   ├── @babel/core@7.20.2 deduped
│ │ │   └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ ├─┬ @babel/plugin-syntax-dynamic-import@7.8.3
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ ├─┬ @babel/plugin-transform-classes@7.20.2
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├─┬ @babel/helper-annotate-as-pure@7.18.6
│ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ ├── @babel/helper-compilation-targets@7.20.0 deduped
│ │ │ ├── @babel/helper-environment-visitor@7.18.9 deduped
│ │ │ ├── @babel/helper-function-name@7.19.0 deduped
│ │ │ ├─┬ @babel/helper-optimise-call-expression@7.18.6
│ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/helper-replace-supers@7.19.1
│ │ │ │ ├── @babel/helper-environment-visitor@7.18.9 deduped
│ │ │ │ ├── @babel/helper-member-expression-to-functions@7.18.9 deduped
│ │ │ │ ├── @babel/helper-optimise-call-expression@7.18.6 deduped
│ │ │ │ ├── @babel/traverse@7.20.1 deduped
│ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ ├── @babel/helper-split-export-declaration@7.18.6 deduped
│ │ │ └── globals@11.12.0 deduped
│ │ ├─┬ @babel/plugin-transform-runtime@7.19.6
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/helper-module-imports@7.18.6 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ babel-plugin-polyfill-corejs2@0.3.3
│ │ │ │ ├── @babel/compat-data@7.20.1 deduped
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├─┬ @babel/helper-define-polyfill-provider@0.3.3
│ │ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ │ ├── @babel/helper-compilation-targets@7.20.0 deduped
│ │ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ │ ├─┬ debug@4.3.4
│ │ │ │ │ │ └── ms@2.1.2
│ │ │ │ │ ├── lodash.debounce@4.0.8
│ │ │ │ │ ├── resolve@1.22.1 deduped
│ │ │ │ │ └── semver@6.3.0
│ │ │ │ └── semver@6.3.0
│ │ │ ├─┬ babel-plugin-polyfill-corejs3@0.6.0
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-define-polyfill-provider@0.3.3 deduped
│ │ │ │ └── core-js-compat@3.26.0 deduped
│ │ │ ├─┬ babel-plugin-polyfill-regenerator@0.4.1
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-define-polyfill-provider@0.3.3 deduped
│ │ │ └── semver@6.3.0
│ │ ├─┬ @babel/plugin-transform-spread@7.19.0
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ └── @babel/helper-skip-transparent-expression-wrappers@7.20.0 deduped
│ │ ├─┬ @babel/preset-env@7.20.2
│ │ │ ├── @babel/compat-data@7.20.1 deduped
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/helper-compilation-targets@7.20.0 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├── @babel/helper-validator-option@7.18.6 deduped
│ │ │ ├─┬ @babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.18.9
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ ├── @babel/helper-skip-transparent-expression-wrappers@7.20.0 deduped
│ │ │ │ └── @babel/plugin-proposal-optional-chaining@7.18.9 deduped
│ │ │ ├─┬ @babel/plugin-proposal-async-generator-functions@7.20.1
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-environment-visitor@7.18.9 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ ├─┬ @babel/helper-remap-async-to-generator@7.18.9
│ │ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ │ ├── @babel/helper-annotate-as-pure@7.18.6 deduped
│ │ │ │ │ ├── @babel/helper-environment-visitor@7.18.9 deduped
│ │ │ │ │ ├─┬ @babel/helper-wrap-function@7.19.0
│ │ │ │ │ │ ├── @babel/helper-function-name@7.19.0 deduped
│ │ │ │ │ │ ├── @babel/template@7.18.10 deduped
│ │ │ │ │ │ ├── @babel/traverse@7.20.1 deduped
│ │ │ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ │ └── @babel/plugin-syntax-async-generators@7.8.4 deduped
│ │ │ ├── @babel/plugin-proposal-class-properties@7.18.6 deduped
│ │ │ ├─┬ @babel/plugin-proposal-class-static-block@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-create-class-features-plugin@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/plugin-syntax-class-static-block@7.14.5 deduped
│ │ │ ├─┬ @babel/plugin-proposal-dynamic-import@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/plugin-syntax-dynamic-import@7.8.3 deduped
│ │ │ ├─┬ @babel/plugin-proposal-export-namespace-from@7.18.9
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/plugin-syntax-export-namespace-from@7.8.3 deduped
│ │ │ ├─┬ @babel/plugin-proposal-json-strings@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/plugin-syntax-json-strings@7.8.3 deduped
│ │ │ ├─┬ @babel/plugin-proposal-logical-assignment-operators@7.18.9
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/plugin-syntax-logical-assignment-operators@7.10.4 deduped
│ │ │ ├── @babel/plugin-proposal-nullish-coalescing-operator@7.18.6 deduped
│ │ │ ├── @babel/plugin-proposal-numeric-separator@7.18.6 deduped
│ │ │ ├─┬ @babel/plugin-proposal-object-rest-spread@7.20.2
│ │ │ │ ├── @babel/compat-data@7.20.1 deduped
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-compilation-targets@7.20.0 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ ├── @babel/plugin-syntax-object-rest-spread@7.8.3 deduped
│ │ │ │ └── @babel/plugin-transform-parameters@7.20.3 deduped
│ │ │ ├─┬ @babel/plugin-proposal-optional-catch-binding@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/plugin-syntax-optional-catch-binding@7.8.3 deduped
│ │ │ ├── @babel/plugin-proposal-optional-chaining@7.18.9 deduped
│ │ │ ├─┬ @babel/plugin-proposal-private-methods@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-create-class-features-plugin@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-proposal-private-property-in-object@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-annotate-as-pure@7.18.6 deduped
│ │ │ │ ├── @babel/helper-create-class-features-plugin@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/plugin-syntax-private-property-in-object@7.14.5 deduped
│ │ │ ├─┬ @babel/plugin-proposal-unicode-property-regex@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├─┬ @babel/helper-create-regexp-features-plugin@7.19.0
│ │ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ │ ├── @babel/helper-annotate-as-pure@7.18.6 deduped
│ │ │ │ │ └─┬ regexpu-core@5.2.1
│ │ │ │ │   ├─┬ regenerate-unicode-properties@10.1.0
│ │ │ │ │   │ └── regenerate@1.4.2 deduped
│ │ │ │ │   ├── regenerate@1.4.2
│ │ │ │ │   ├── regjsgen@0.7.1
│ │ │ │ │   ├─┬ regjsparser@0.9.1
│ │ │ │ │   │ └── jsesc@0.5.0
│ │ │ │ │   ├─┬ unicode-match-property-ecmascript@2.0.0
│ │ │ │ │   │ ├── unicode-canonical-property-names-ecmascript@2.0.0
│ │ │ │ │   │ └── unicode-property-aliases-ecmascript@2.1.0
│ │ │ │ │   └── unicode-match-property-value-ecmascript@2.0.0
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-syntax-async-generators@7.8.4
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-syntax-class-properties@7.12.13
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-syntax-class-static-block@7.14.5
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├── @babel/plugin-syntax-dynamic-import@7.8.3 deduped
│ │ │ ├─┬ @babel/plugin-syntax-export-namespace-from@7.8.3
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-syntax-import-assertions@7.20.0
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-syntax-json-strings@7.8.3
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-syntax-logical-assignment-operators@7.10.4
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├── @babel/plugin-syntax-nullish-coalescing-operator@7.8.3 deduped
│ │ │ ├─┬ @babel/plugin-syntax-numeric-separator@7.10.4
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-syntax-object-rest-spread@7.8.3
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-syntax-optional-catch-binding@7.8.3
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├── @babel/plugin-syntax-optional-chaining@7.8.3 deduped
│ │ │ ├─┬ @babel/plugin-syntax-private-property-in-object@7.14.5
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-syntax-top-level-await@7.14.5
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-arrow-functions@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-async-to-generator@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-module-imports@7.18.6 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/helper-remap-async-to-generator@7.18.9 deduped
│ │ │ ├─┬ @babel/plugin-transform-block-scoped-functions@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-block-scoping@7.20.2
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├── @babel/plugin-transform-classes@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-computed-properties@7.18.9
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-destructuring@7.20.2
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-dotall-regex@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-create-regexp-features-plugin@7.19.0 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-duplicate-keys@7.18.9
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-exponentiation-operator@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├─┬ @babel/helper-builder-binary-assignment-operator-visitor@7.18.9
│ │ │ │ │ ├─┬ @babel/helper-explode-assignable-expression@7.18.6
│ │ │ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-for-of@7.18.8
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-function-name@7.18.9
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-compilation-targets@7.20.0 deduped
│ │ │ │ ├── @babel/helper-function-name@7.19.0 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-literals@7.18.9
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-member-expression-literals@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-modules-amd@7.19.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-module-transforms@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-modules-commonjs@7.19.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-module-transforms@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/helper-simple-access@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-modules-systemjs@7.19.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-hoist-variables@7.18.6 deduped
│ │ │ │ ├── @babel/helper-module-transforms@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/helper-validator-identifier@7.19.1 deduped
│ │ │ ├─┬ @babel/plugin-transform-modules-umd@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-module-transforms@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-named-capturing-groups-regex@7.19.1
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-create-regexp-features-plugin@7.19.0 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-new-target@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-object-super@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/helper-replace-supers@7.19.1 deduped
│ │ │ ├─┬ @babel/plugin-transform-parameters@7.20.3
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-property-literals@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-regenerator@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └─┬ regenerator-transform@0.15.0
│ │ │ │   └── @babel/runtime@7.20.1 deduped
│ │ │ ├─┬ @babel/plugin-transform-reserved-words@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-shorthand-properties@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├── @babel/plugin-transform-spread@7.19.0 deduped
│ │ │ ├─┬ @babel/plugin-transform-sticky-regex@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-template-literals@7.18.9
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-typeof-symbol@7.18.9
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-unicode-escapes@7.18.10
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-unicode-regex@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-create-regexp-features-plugin@7.19.0 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/preset-modules@0.1.5
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ ├── @babel/plugin-proposal-unicode-property-regex@7.18.6 deduped
│ │ │ │ ├── @babel/plugin-transform-dotall-regex@7.18.6 deduped
│ │ │ │ ├── @babel/types@7.20.2 deduped
│ │ │ │ └── esutils@2.0.3 deduped
│ │ │ ├── @babel/types@7.20.2 deduped
│ │ │ ├── babel-plugin-polyfill-corejs2@0.3.3 deduped
│ │ │ ├── babel-plugin-polyfill-corejs3@0.6.0 deduped
│ │ │ ├── babel-plugin-polyfill-regenerator@0.4.1 deduped
│ │ │ ├── core-js-compat@3.26.0 deduped
│ │ │ └── semver@6.3.0
│ │ ├─┬ @babel/preset-react@7.18.6
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├── @babel/helper-validator-option@7.18.6 deduped
│ │ │ ├─┬ @babel/plugin-transform-react-display-name@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├─┬ @babel/plugin-transform-react-jsx-development@7.18.6
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ └── @babel/plugin-transform-react-jsx@7.19.0 deduped
│ │ │ ├─┬ @babel/plugin-transform-react-jsx@7.19.0
│ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ ├── @babel/helper-annotate-as-pure@7.18.6 deduped
│ │ │ │ ├── @babel/helper-module-imports@7.18.6 deduped
│ │ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ ├─┬ @babel/plugin-syntax-jsx@7.18.6
│ │ │ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ │ │ └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ │ └── @babel/types@7.20.2 deduped
│ │ │ └─┬ @babel/plugin-transform-react-pure-annotations@7.18.6
│ │ │   ├── @babel/core@7.20.2 deduped
│ │ │   ├── @babel/helper-annotate-as-pure@7.18.6 deduped
│ │ │   └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ ├── @babel/runtime@7.20.1 deduped
│ │ ├── babel-plugin-dynamic-import-node@2.3.3 deduped
│ │ ├─┬ babel-plugin-macros@2.8.0
│ │ │ ├── @babel/runtime@7.20.1 deduped
│ │ │ ├─┬ cosmiconfig@6.0.0
│ │ │ │ ├── @types/parse-json@4.0.0
│ │ │ │ ├── import-fresh@3.3.0 deduped
│ │ │ │ ├─┬ parse-json@5.2.0
│ │ │ │ │ ├── @babel/code-frame@7.18.6 deduped
│ │ │ │ │ ├─┬ error-ex@1.3.2
│ │ │ │ │ │ └── is-arrayish@0.2.1
│ │ │ │ │ ├── json-parse-even-better-errors@2.3.1
│ │ │ │ │ └── lines-and-columns@1.2.4
│ │ │ │ ├── path-type@4.0.0 deduped
│ │ │ │ └── yaml@1.10.2 deduped
│ │ │ └── resolve@1.22.1 deduped
│ │ ├── babel-plugin-transform-react-remove-prop-types@0.4.24
│ │ ├── core-js@3.26.0 deduped
│ │ ├── gatsby-core-utils@1.10.1 deduped
│ │ └── gatsby-legacy-polyfills@0.7.1 deduped
│ ├─┬ better-opn@2.1.1
│ │ └─┬ open@7.4.2
│ │   ├── is-docker@2.2.1 deduped
│ │   └─┬ is-wsl@2.2.0
│ │     └── is-docker@2.2.1 deduped
│ ├── better-queue@3.8.12 deduped
│ ├── bluebird@3.7.2 deduped
│ ├─┬ body-parser@1.20.1
│ │ ├── bytes@3.1.2
│ │ ├── content-type@1.0.4
│ │ ├─┬ debug@2.6.9
│ │ │ └── ms@2.0.0
│ │ ├── depd@2.0.0
│ │ ├── destroy@1.2.0
│ │ ├─┬ http-errors@2.0.0
│ │ │ ├── depd@2.0.0 deduped
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ ├── setprototypeof@1.2.0 deduped
│ │ │ ├── statuses@2.0.1 deduped
│ │ │ └── toidentifier@1.0.1
│ │ ├─┬ iconv-lite@0.4.24
│ │ │ └── safer-buffer@2.1.2
│ │ ├─┬ on-finished@2.4.1
│ │ │ └── ee-first@1.1.1
│ │ ├─┬ qs@6.11.0
│ │ │ └─┬ side-channel@1.0.4
│ │ │   ├── call-bind@1.0.2 deduped
│ │ │   ├── get-intrinsic@1.1.3 deduped
│ │ │   └── object-inspect@1.12.2 deduped
│ │ ├─┬ raw-body@2.5.1
│ │ │ ├── bytes@3.1.2 deduped
│ │ │ ├── http-errors@2.0.0 deduped
│ │ │ ├── iconv-lite@0.4.24 deduped
│ │ │ └── unpipe@1.0.0 deduped
│ │ ├─┬ type-is@1.6.18
│ │ │ ├── media-typer@0.3.0
│ │ │ └─┬ mime-types@2.1.35
│ │ │   └── mime-db@1.52.0 deduped
│ │ └── unpipe@1.0.0
│ ├─┬ browserslist@4.21.4
│ │ ├── caniuse-lite@1.0.30001431 deduped
│ │ ├── electron-to-chromium@1.4.284
│ │ ├── node-releases@2.0.6
│ │ └─┬ update-browserslist-db@1.0.10
│ │   ├── browserslist@4.21.4 deduped
│ │   ├── escalade@3.1.1
│ │   └── picocolors@1.0.0
│ ├─┬ cache-manager@2.11.1
│ │ ├── async@1.5.2
│ │ ├── lodash.clonedeep@4.5.0
│ │ └─┬ lru-cache@4.0.0
│ │   ├── pseudomap@1.0.2
│ │   └── yallist@2.1.2
│ ├── chalk@4.1.2 deduped
│ ├── chokidar@3.5.3 deduped
│ ├── common-tags@1.8.2 deduped
│ ├─┬ compression@1.7.4
│ │ ├─┬ accepts@1.3.8
│ │ │ ├── mime-types@2.1.35 deduped
│ │ │ └── negotiator@0.6.3 deduped
│ │ ├── bytes@3.0.0
│ │ ├─┬ compressible@2.0.18
│ │ │ └── mime-db@1.52.0
│ │ ├─┬ debug@2.6.9
│ │ │ └── ms@2.0.0
│ │ ├── on-headers@1.0.2
│ │ ├── safe-buffer@5.1.2
│ │ └── vary@1.1.2
│ ├── convert-hrtime@3.0.0
│ ├─┬ copyfiles@2.4.1
│ │ ├── glob@7.2.3 deduped
│ │ ├─┬ minimatch@3.1.2
│ │ │ └─┬ brace-expansion@1.1.11
│ │ │   ├── balanced-match@1.0.2
│ │ │   └── concat-map@0.0.1
│ │ ├── mkdirp@1.0.4
│ │ ├─┬ noms@0.0.0
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ └─┬ readable-stream@1.0.34
│ │ │   ├── core-util-is@1.0.3
│ │ │   ├── inherits@2.0.4 deduped
│ │ │   ├── isarray@0.0.1
│ │ │   └── string_decoder@0.10.31
│ │ ├─┬ through2@2.0.5
│ │ │ ├─┬ readable-stream@2.3.7
│ │ │ │ ├── core-util-is@1.0.3 deduped
│ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ ├── isarray@1.0.0
│ │ │ │ ├── process-nextick-args@2.0.1
│ │ │ │ ├── safe-buffer@5.1.2 deduped
│ │ │ │ ├── string_decoder@1.1.1 deduped
│ │ │ │ └── util-deprecate@1.0.2 deduped
│ │ │ └── xtend@4.0.2 deduped
│ │ ├── untildify@4.0.0
│ │ └─┬ yargs@16.2.0
│ │   ├─┬ cliui@7.0.4
│ │   │ ├─┬ string-width@4.2.3
│ │   │ │ ├── emoji-regex@8.0.0
│ │   │ │ ├── is-fullwidth-code-point@3.0.0
│ │   │ │ └── strip-ansi@6.0.1 deduped
│ │   │ ├─┬ strip-ansi@6.0.1
│ │   │ │ └── ansi-regex@5.0.1 deduped
│ │   │ └─┬ wrap-ansi@7.0.0
│ │   │   ├── ansi-styles@4.3.0 deduped
│ │   │   ├─┬ string-width@4.2.3
│ │   │   │ ├── emoji-regex@8.0.0
│ │   │   │ ├── is-fullwidth-code-point@3.0.0
│ │   │   │ └── strip-ansi@6.0.1 deduped
│ │   │   └─┬ strip-ansi@6.0.1
│ │   │     └── ansi-regex@5.0.1 deduped
│ │   ├── escalade@3.1.1 deduped
│ │   ├── get-caller-file@2.0.5
│ │   ├── require-directory@2.1.1
│ │   ├─┬ string-width@4.2.3
│ │   │ ├── emoji-regex@8.0.0
│ │   │ ├── is-fullwidth-code-point@3.0.0
│ │   │ └─┬ strip-ansi@6.0.1
│ │   │   └── ansi-regex@5.0.1 deduped
│ │   ├── y18n@5.0.8
│ │   └── yargs-parser@20.2.9
│ ├── core-js@3.26.0
│ ├─┬ cors@2.8.5
│ │ ├── object-assign@4.1.1 deduped
│ │ └── vary@1.1.2 deduped
│ ├─┬ css-loader@1.0.1
│ │ ├─┬ babel-code-frame@6.26.0
│ │ │ ├─┬ chalk@1.1.3
│ │ │ │ ├── ansi-styles@2.2.1
│ │ │ │ ├── escape-string-regexp@1.0.5
│ │ │ │ ├── has-ansi@2.0.0 deduped
│ │ │ │ ├─┬ strip-ansi@3.0.1
│ │ │ │ │ └── ansi-regex@2.1.1
│ │ │ │ └── supports-color@2.0.0
│ │ │ ├── esutils@2.0.3 deduped
│ │ │ └── js-tokens@3.0.2
│ │ ├─┬ css-selector-tokenizer@0.7.3
│ │ │ ├── cssesc@3.0.0
│ │ │ └── fastparse@1.1.2
│ │ ├─┬ icss-utils@2.1.0
│ │ │ └─┬ postcss@6.0.23
│ │ │   ├─┬ chalk@2.4.2
│ │ │   │ ├─┬ ansi-styles@3.2.1
│ │ │   │ │ └─┬ color-convert@1.9.3
│ │ │   │ │   └── color-name@1.1.3
│ │ │   │ ├── escape-string-regexp@1.0.5
│ │ │   │ └── supports-color@5.5.0 deduped
│ │ │   ├── source-map@0.6.1
│ │ │   └─┬ supports-color@5.5.0
│ │ │     └── has-flag@3.0.0
│ │ ├─┬ loader-utils@1.4.2
│ │ │ ├── big.js@5.2.2 deduped
│ │ │ ├── emojis-list@3.0.0 deduped
│ │ │ └─┬ json5@1.0.1
│ │ │   └── minimist@1.2.7 deduped
│ │ ├── lodash@4.17.21 deduped
│ │ ├─┬ postcss-modules-extract-imports@1.2.1
│ │ │ └─┬ postcss@6.0.23
│ │ │   ├─┬ chalk@2.4.2
│ │ │   │ ├─┬ ansi-styles@3.2.1
│ │ │   │ │ └─┬ color-convert@1.9.3
│ │ │   │ │   └── color-name@1.1.3
│ │ │   │ ├── escape-string-regexp@1.0.5
│ │ │   │ └── supports-color@5.5.0 deduped
│ │ │   ├── source-map@0.6.1
│ │ │   └─┬ supports-color@5.5.0
│ │ │     └── has-flag@3.0.0
│ │ ├─┬ postcss-modules-local-by-default@1.2.0
│ │ │ ├── css-selector-tokenizer@0.7.3 deduped
│ │ │ └─┬ postcss@6.0.23
│ │ │   ├─┬ chalk@2.4.2
│ │ │   │ ├─┬ ansi-styles@3.2.1
│ │ │   │ │ └─┬ color-convert@1.9.3
│ │ │   │ │   └── color-name@1.1.3
│ │ │   │ ├── escape-string-regexp@1.0.5
│ │ │   │ └── supports-color@5.5.0 deduped
│ │ │   ├── source-map@0.6.1
│ │ │   └─┬ supports-color@5.5.0
│ │ │     └── has-flag@3.0.0
│ │ ├─┬ postcss-modules-scope@1.1.0
│ │ │ ├── css-selector-tokenizer@0.7.3 deduped
│ │ │ └─┬ postcss@6.0.23
│ │ │   ├─┬ chalk@2.4.2
│ │ │   │ ├─┬ ansi-styles@3.2.1
│ │ │   │ │ └─┬ color-convert@1.9.3
│ │ │   │ │   └── color-name@1.1.3
│ │ │   │ ├── escape-string-regexp@1.0.5
│ │ │   │ └── supports-color@5.5.0 deduped
│ │ │   ├── source-map@0.6.1
│ │ │   └─┬ supports-color@5.5.0
│ │ │     └── has-flag@3.0.0
│ │ ├─┬ postcss-modules-values@1.3.0
│ │ │ ├── icss-replace-symbols@1.1.0
│ │ │ └─┬ postcss@6.0.23
│ │ │   ├─┬ chalk@2.4.2
│ │ │   │ ├─┬ ansi-styles@3.2.1
│ │ │   │ │ └─┬ color-convert@1.9.3
│ │ │   │ │   └── color-name@1.1.3
│ │ │   │ ├── escape-string-regexp@1.0.5
│ │ │   │ └── supports-color@5.5.0 deduped
│ │ │   ├── source-map@0.6.1
│ │ │   └─┬ supports-color@5.5.0
│ │ │     └── has-flag@3.0.0
│ │ ├── postcss-value-parser@3.3.1
│ │ ├─┬ postcss@6.0.23
│ │ │ ├─┬ chalk@2.4.2
│ │ │ │ ├─┬ ansi-styles@3.2.1
│ │ │ │ │ └─┬ color-convert@1.9.3
│ │ │ │ │   └── color-name@1.1.3
│ │ │ │ ├── escape-string-regexp@1.0.5
│ │ │ │ └── supports-color@5.5.0 deduped
│ │ │ ├── source-map@0.6.1
│ │ │ └─┬ supports-color@5.5.0
│ │ │   └── has-flag@3.0.0
│ │ ├── source-list-map@2.0.1
│ │ └── webpack@4.46.0 deduped
│ ├── date-fns@2.29.3
│ ├─┬ debug@3.2.7
│ │ └── ms@2.1.3
│ ├─┬ del@5.1.0
│ │ ├── globby@10.0.2 deduped
│ │ ├── graceful-fs@4.2.10 deduped
│ │ ├── is-glob@4.0.3 deduped
│ │ ├── is-path-cwd@2.2.0
│ │ ├── is-path-inside@3.0.3
│ │ ├─┬ p-map@3.0.0
│ │ │ └─┬ aggregate-error@3.1.0
│ │ │   ├── clean-stack@2.2.0
│ │ │   └── indent-string@4.0.0
│ │ ├─┬ rimraf@3.0.2
│ │ │ └── glob@7.2.3 deduped
│ │ └── slash@3.0.0
│ ├─┬ detect-port@1.5.1
│ │ ├── address@1.1.2 deduped
│ │ └─┬ debug@4.3.4
│ │   └── ms@2.1.2
│ ├─┬ devcert@1.2.2
│ │ ├── @types/configstore@2.1.1
│ │ ├── @types/debug@0.0.30
│ │ ├── @types/get-port@3.2.0
│ │ ├─┬ @types/glob@5.0.37
│ │ │ ├── @types/minimatch@5.1.2
│ │ │ └── @types/node@18.11.9 deduped
│ │ ├── @types/lodash@4.14.188
│ │ ├─┬ @types/mkdirp@0.5.2
│ │ │ └── @types/node@18.11.9 deduped
│ │ ├── @types/node@8.10.66
│ │ ├─┬ @types/rimraf@2.0.5
│ │ │ ├── @types/glob@5.0.37 deduped
│ │ │ └── @types/node@18.11.9 deduped
│ │ ├── @types/tmp@0.0.33
│ │ ├── application-config-path@0.1.0
│ │ ├── command-exists@1.2.9
│ │ ├── debug@3.2.7 deduped
│ │ ├── eol@0.9.1
│ │ ├── get-port@3.2.0
│ │ ├── glob@7.2.3 deduped
│ │ ├─┬ is-valid-domain@0.1.6
│ │ │ └── punycode@2.1.1
│ │ ├── lodash@4.17.21 deduped
│ │ ├── mkdirp@0.5.6 deduped
│ │ ├─┬ password-prompt@1.1.2
│ │ │ ├── ansi-escapes@3.2.0
│ │ │ └── cross-spawn@6.0.5 deduped
│ │ ├─┬ rimraf@2.7.1
│ │ │ └── glob@7.2.3 deduped
│ │ ├── sudo-prompt@8.2.5
│ │ ├─┬ tmp@0.0.33
│ │ │ └── os-tmpdir@1.0.2
│ │ └── tslib@1.14.1
│ ├── dotenv@8.6.0
│ ├─┬ eslint-config-react-app@5.2.1
│ │ ├── @typescript-eslint/eslint-plugin@2.34.0 deduped
│ │ ├── @typescript-eslint/parser@2.34.0 deduped
│ │ ├── babel-eslint@10.1.0 deduped
│ │ ├── confusing-browser-globals@1.0.11
│ │ ├── eslint-plugin-flowtype@3.13.0 deduped
│ │ ├── eslint-plugin-import@2.26.0 deduped
│ │ ├── eslint-plugin-jsx-a11y@6.6.1 deduped
│ │ ├── eslint-plugin-react-hooks@1.7.0 deduped
│ │ ├── eslint-plugin-react@7.31.10 deduped
│ │ └── eslint@6.8.0 deduped
│ ├─┬ eslint-loader@2.2.1
│ │ ├── eslint@6.8.0 deduped
│ │ ├─┬ loader-fs-cache@1.0.3
│ │ │ ├─┬ find-cache-dir@0.1.1
│ │ │ │ ├── commondir@1.0.1 deduped
│ │ │ │ ├── mkdirp@0.5.6 deduped
│ │ │ │ └─┬ pkg-dir@1.0.0
│ │ │ │   └─┬ find-up@1.1.2
│ │ │ │     ├─┬ path-exists@2.1.0
│ │ │ │     │ └── pinkie-promise@2.0.1 deduped
│ │ │ │     └── pinkie-promise@2.0.1 deduped
│ │ │ └── mkdirp@0.5.6 deduped
│ │ ├─┬ loader-utils@1.4.2
│ │ │ ├── big.js@5.2.2 deduped
│ │ │ ├── emojis-list@3.0.0 deduped
│ │ │ └─┬ json5@1.0.1
│ │ │   └── minimist@1.2.7 deduped
│ │ ├── object-assign@4.1.1 deduped
│ │ ├── object-hash@1.3.1
│ │ ├─┬ rimraf@2.7.1
│ │ │ └── glob@7.2.3 deduped
│ │ └── webpack@4.46.0 deduped
│ ├─┬ eslint-plugin-flowtype@3.13.0
│ │ ├── eslint@6.8.0 deduped
│ │ └── lodash@4.17.21 deduped
│ ├─┬ eslint-plugin-graphql@4.0.0
│ │ ├── @babel/runtime@7.20.1 deduped
│ │ ├─┬ graphql-config@3.4.1
│ │ │ ├─┬ @endemolshinegroup/cosmiconfig-typescript-loader@3.0.2
│ │ │ │ ├── cosmiconfig@6.0.0 deduped
│ │ │ │ ├── lodash.get@4.4.2
│ │ │ │ ├── make-error@1.3.6
│ │ │ │ ├─┬ ts-node@9.1.1
│ │ │ │ │ ├── arg@4.1.3
│ │ │ │ │ ├── create-require@1.1.1
│ │ │ │ │ ├── diff@4.0.2
│ │ │ │ │ ├── make-error@1.3.6 deduped
│ │ │ │ │ ├── source-map-support@0.5.21 deduped
│ │ │ │ │ ├── UNMET DEPENDENCY typescript@>=2.7
│ │ │ │ │ └── yn@3.1.1
│ │ │ │ └── tslib@2.4.1
│ │ │ ├─┬ @graphql-tools/graphql-file-loader@6.2.7
│ │ │ │ ├─┬ @graphql-tools/import@6.7.11
│ │ │ │ │ ├─┬ @graphql-tools/utils@9.1.0
│ │ │ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ │ │ └── tslib@2.4.1 deduped
│ │ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ │ ├── resolve-from@5.0.0 deduped
│ │ │ │ │ └── tslib@2.4.1
│ │ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ └── tslib@2.1.0
│ │ │ ├─┬ @graphql-tools/json-file-loader@6.2.6
│ │ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ └── tslib@2.0.3
│ │ │ ├─┬ @graphql-tools/load@6.2.8
│ │ │ │ ├── @graphql-tools/merge@6.2.14 deduped
│ │ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ │ ├─┬ globby@11.0.3
│ │ │ │ │ ├── array-union@2.1.0 deduped
│ │ │ │ │ ├── dir-glob@3.0.1 deduped
│ │ │ │ │ ├── fast-glob@3.2.12 deduped
│ │ │ │ │ ├── ignore@5.2.0
│ │ │ │ │ ├── merge2@1.4.1 deduped
│ │ │ │ │ └── slash@3.0.0 deduped
│ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ ├─┬ import-from@3.0.0
│ │ │ │ │ └── resolve-from@5.0.0 deduped
│ │ │ │ ├─┬ is-glob@4.0.1
│ │ │ │ │ └── is-extglob@2.1.1 deduped
│ │ │ │ ├─┬ p-limit@3.1.0
│ │ │ │ │ └── yocto-queue@0.1.0
│ │ │ │ ├── tslib@2.2.0
│ │ │ │ ├─┬ unixify@1.0.0
│ │ │ │ │ └─┬ normalize-path@2.1.1
│ │ │ │ │   └── remove-trailing-separator@1.1.0 deduped
│ │ │ │ └── valid-url@1.0.9 deduped
│ │ │ ├─┬ @graphql-tools/merge@6.2.14
│ │ │ │ ├── @graphql-tools/schema@7.1.5 deduped
│ │ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ └── tslib@2.2.0
│ │ │ ├─┬ @graphql-tools/url-loader@6.10.1
│ │ │ │ ├─┬ @graphql-tools/delegate@7.1.5
│ │ │ │ │ ├── @ardatan/aggregate-error@0.0.6 deduped
│ │ │ │ │ ├─┬ @graphql-tools/batch-execute@7.1.2
│ │ │ │ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ │ │ │ ├── dataloader@2.0.0 deduped
│ │ │ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ │ │ ├── tslib@2.2.0
│ │ │ │ │ │ └── value-or-promise@1.0.6 deduped
│ │ │ │ │ ├── @graphql-tools/schema@7.1.5 deduped
│ │ │ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ │ │ ├── dataloader@2.0.0
│ │ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ │ ├── tslib@2.2.0
│ │ │ │ │ └── value-or-promise@1.0.6 deduped
│ │ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ │ ├─┬ @graphql-tools/wrap@7.0.8
│ │ │ │ │ ├── @graphql-tools/delegate@7.1.5 deduped
│ │ │ │ │ ├── @graphql-tools/schema@7.1.5 deduped
│ │ │ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ │ ├── tslib@2.2.0
│ │ │ │ │ └── value-or-promise@1.0.6 deduped
│ │ │ │ ├── @microsoft/fetch-event-source@2.0.1
│ │ │ │ ├─┬ @types/websocket@1.0.2
│ │ │ │ │ └── @types/node@18.11.9 deduped
│ │ │ │ ├─┬ abort-controller@3.0.0
│ │ │ │ │ └── event-target-shim@5.0.1
│ │ │ │ ├─┬ cross-fetch@3.1.4
│ │ │ │ │ └── node-fetch@2.6.1
│ │ │ │ ├── extract-files@9.0.0
│ │ │ │ ├─┬ form-data@4.0.0
│ │ │ │ │ ├── asynckit@0.4.0 deduped
│ │ │ │ │ ├── combined-stream@1.0.8 deduped
│ │ │ │ │ └── mime-types@2.1.35 deduped
│ │ │ │ ├─┬ graphql-ws@4.9.0
│ │ │ │ │ └── graphql@14.7.0 deduped
│ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ ├── is-promise@4.0.0
│ │ │ │ ├─┬ isomorphic-ws@4.0.1
│ │ │ │ │ └── ws@7.5.9 deduped
│ │ │ │ ├── lodash@4.17.21 deduped
│ │ │ │ ├─┬ meros@1.1.4
│ │ │ │ │ └── @types/node@18.11.9 deduped
│ │ │ │ ├─┬ subscriptions-transport-ws@0.9.19
│ │ │ │ │ ├── backo2@1.0.2 deduped
│ │ │ │ │ ├── eventemitter3@3.1.2
│ │ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ │ ├── iterall@1.3.0 deduped
│ │ │ │ │ ├── symbol-observable@1.2.0
│ │ │ │ │ └── ws@7.5.9 deduped
│ │ │ │ ├─┬ sync-fetch@0.3.0
│ │ │ │ │ ├── buffer@5.7.1 deduped
│ │ │ │ │ └── node-fetch@2.6.7 deduped
│ │ │ │ ├── tslib@2.2.0
│ │ │ │ ├── valid-url@1.0.9 deduped
│ │ │ │ └─┬ ws@7.4.5
│ │ │ │   ├── UNMET OPTIONAL DEPENDENCY bufferutil@^4.0.1
│ │ │ │   └── UNMET OPTIONAL DEPENDENCY utf-8-validate@^5.0.2
│ │ │ ├─┬ @graphql-tools/utils@7.10.0
│ │ │ │ ├─┬ @ardatan/aggregate-error@0.0.6
│ │ │ │ │ └── tslib@2.0.3
│ │ │ │ ├─┬ camel-case@4.1.2
│ │ │ │ │ ├─┬ pascal-case@3.1.2
│ │ │ │ │ │ ├─┬ no-case@3.0.4
│ │ │ │ │ │ │ ├─┬ lower-case@2.0.2
│ │ │ │ │ │ │ │ └── tslib@2.4.1
│ │ │ │ │ │ │ └── tslib@2.4.1
│ │ │ │ │ │ └── tslib@2.4.1
│ │ │ │ │ └── tslib@2.4.1
│ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ └── tslib@2.2.0
│ │ │ ├─┬ cosmiconfig-toml-loader@1.0.0
│ │ │ │ └── @iarna/toml@2.2.5
│ │ │ ├─┬ cosmiconfig@7.0.0
│ │ │ │ ├── @types/parse-json@4.0.0 deduped
│ │ │ │ ├── import-fresh@3.3.0 deduped
│ │ │ │ ├── parse-json@5.2.0 deduped
│ │ │ │ ├── path-type@4.0.0 deduped
│ │ │ │ └── yaml@1.10.2 deduped
│ │ │ ├── graphql@14.7.0 deduped
│ │ │ ├─┬ minimatch@3.0.4
│ │ │ │ └── brace-expansion@1.1.11 deduped
│ │ │ └── string-env-interpolation@1.0.1
│ │ ├── graphql@14.7.0 deduped
│ │ ├── lodash.flatten@4.4.0
│ │ └── lodash.without@4.4.0
│ ├─┬ eslint-plugin-import@2.26.0
│ │ ├─┬ array-includes@3.1.6
│ │ │ ├── call-bind@1.0.2 deduped
│ │ │ ├── define-properties@1.1.4 deduped
│ │ │ ├── es-abstract@1.20.4 deduped
│ │ │ ├─┬ get-intrinsic@1.1.3
│ │ │ │ ├── function-bind@1.1.1 deduped
│ │ │ │ ├── has-symbols@1.0.3 deduped
│ │ │ │ └── has@1.0.3 deduped
│ │ │ └─┬ is-string@1.0.7
│ │ │   └─┬ has-tostringtag@1.0.0
│ │ │     └── has-symbols@1.0.3 deduped
│ │ ├─┬ array.prototype.flat@1.3.1
│ │ │ ├── call-bind@1.0.2 deduped
│ │ │ ├── define-properties@1.1.4 deduped
│ │ │ ├── es-abstract@1.20.4 deduped
│ │ │ └─┬ es-shim-unscopables@1.0.0
│ │ │   └── has@1.0.3 deduped
│ │ ├─┬ debug@2.6.9
│ │ │ └── ms@2.0.0
│ │ ├─┬ doctrine@2.1.0
│ │ │ └── esutils@2.0.3 deduped
│ │ ├─┬ eslint-import-resolver-node@0.3.6
│ │ │ ├── debug@3.2.7 deduped
│ │ │ └── resolve@1.22.1 deduped
│ │ ├─┬ eslint-module-utils@2.7.4
│ │ │ └── debug@3.2.7 deduped
│ │ ├── eslint@6.8.0 deduped
│ │ ├─┬ has@1.0.3
│ │ │ └── function-bind@1.1.1
│ │ ├─┬ is-core-module@2.11.0
│ │ │ └── has@1.0.3 deduped
│ │ ├── is-glob@4.0.3 deduped
│ │ ├── minimatch@3.1.2 deduped
│ │ ├── object.values@1.1.6 deduped
│ │ ├── resolve@1.22.1 deduped
│ │ └─┬ tsconfig-paths@3.14.1
│ │   ├── @types/json5@0.0.29
│ │   ├─┬ json5@1.0.1
│ │   │ └── minimist@1.2.7 deduped
│ │   ├── minimist@1.2.7 deduped
│ │   └── strip-bom@3.0.0
│ ├─┬ eslint-plugin-jsx-a11y@6.6.1
│ │ ├── @babel/runtime@7.20.1 deduped
│ │ ├─┬ aria-query@4.2.2
│ │ │ ├─┬ @babel/runtime-corejs3@7.20.1
│ │ │ │ ├── core-js-pure@3.26.0
│ │ │ │ └── regenerator-runtime@0.13.10 deduped
│ │ │ └── @babel/runtime@7.20.1 deduped
│ │ ├── array-includes@3.1.6 deduped
│ │ ├── ast-types-flow@0.0.7
│ │ ├── axe-core@4.5.1
│ │ ├── axobject-query@2.2.0
│ │ ├── damerau-levenshtein@1.0.8
│ │ ├── emoji-regex@9.2.2
│ │ ├── eslint@6.8.0 deduped
│ │ ├── has@1.0.3 deduped
│ │ ├─┬ jsx-ast-utils@3.3.3
│ │ │ ├── array-includes@3.1.6 deduped
│ │ │ └── object.assign@4.1.4 deduped
│ │ ├─┬ language-tags@1.0.5
│ │ │ └── language-subtag-registry@0.3.22
│ │ ├── minimatch@3.1.2 deduped
│ │ └── semver@6.3.0
│ ├─┬ eslint-plugin-react-hooks@1.7.0
│ │ └── eslint@6.8.0 deduped
│ ├─┬ eslint-plugin-react@7.31.10
│ │ ├── array-includes@3.1.6 deduped
│ │ ├─┬ array.prototype.flatmap@1.3.1
│ │ │ ├── call-bind@1.0.2 deduped
│ │ │ ├── define-properties@1.1.4 deduped
│ │ │ ├── es-abstract@1.20.4 deduped
│ │ │ └── es-shim-unscopables@1.0.0 deduped
│ │ ├─┬ doctrine@2.1.0
│ │ │ └── esutils@2.0.3 deduped
│ │ ├── eslint@6.8.0 deduped
│ │ ├── estraverse@5.3.0
│ │ ├── jsx-ast-utils@3.3.3 deduped
│ │ ├── minimatch@3.1.2 deduped
│ │ ├─┬ object.entries@1.1.6
│ │ │ ├── call-bind@1.0.2 deduped
│ │ │ ├── define-properties@1.1.4 deduped
│ │ │ └── es-abstract@1.20.4 deduped
│ │ ├─┬ object.fromentries@2.0.6
│ │ │ ├── call-bind@1.0.2 deduped
│ │ │ ├── define-properties@1.1.4 deduped
│ │ │ └── es-abstract@1.20.4 deduped
│ │ ├─┬ object.hasown@1.1.2
│ │ │ ├── define-properties@1.1.4 deduped
│ │ │ └── es-abstract@1.20.4 deduped
│ │ ├── object.values@1.1.6 deduped
│ │ ├── prop-types@15.8.1 deduped
│ │ ├─┬ resolve@2.0.0-next.4
│ │ │ ├── is-core-module@2.11.0 deduped
│ │ │ ├── path-parse@1.0.7 deduped
│ │ │ └── supports-preserve-symlinks-flag@1.0.0 deduped
│ │ ├── semver@6.3.0
│ │ └─┬ string.prototype.matchall@4.0.8
│ │   ├── call-bind@1.0.2 deduped
│ │   ├── define-properties@1.1.4 deduped
│ │   ├── es-abstract@1.20.4 deduped
│ │   ├── get-intrinsic@1.1.3 deduped
│ │   ├── has-symbols@1.0.3 deduped
│ │   ├─┬ internal-slot@1.0.3
│ │   │ ├── get-intrinsic@1.1.3 deduped
│ │   │ ├── has@1.0.3 deduped
│ │   │ └── side-channel@1.0.4 deduped
│ │   ├─┬ regexp.prototype.flags@1.4.3
│ │   │ ├── call-bind@1.0.2 deduped
│ │   │ ├── define-properties@1.1.4 deduped
│ │   │ └── functions-have-names@1.2.3
│ │   └── side-channel@1.0.4 deduped
│ ├─┬ eslint@6.8.0
│ │ ├── @babel/code-frame@7.18.6 deduped
│ │ ├─┬ ajv@6.12.6
│ │ │ ├── fast-deep-equal@3.1.3
│ │ │ ├── fast-json-stable-stringify@2.1.0
│ │ │ ├── json-schema-traverse@0.4.1
│ │ │ └─┬ uri-js@4.4.1
│ │ │   └── punycode@2.1.1 deduped
│ │ ├─┬ chalk@2.4.2
│ │ │ ├─┬ ansi-styles@3.2.1
│ │ │ │ └─┬ color-convert@1.9.3
│ │ │ │   └── color-name@1.1.3
│ │ │ ├── escape-string-regexp@1.0.5
│ │ │ └─┬ supports-color@5.5.0
│ │ │   └── has-flag@3.0.0
│ │ ├─┬ cross-spawn@6.0.5
│ │ │ ├── nice-try@1.0.5
│ │ │ ├── path-key@2.0.1
│ │ │ ├── semver@5.7.1
│ │ │ ├─┬ shebang-command@1.2.0
│ │ │ │ └── shebang-regex@1.0.0
│ │ │ └─┬ which@1.3.1
│ │ │   └── isexe@2.0.0
│ │ ├─┬ debug@4.3.4
│ │ │ └── ms@2.1.2
│ │ ├─┬ doctrine@3.0.0
│ │ │ └── esutils@2.0.3 deduped
│ │ ├─┬ eslint-scope@5.1.1
│ │ │ ├─┬ esrecurse@4.3.0
│ │ │ │ └── estraverse@5.3.0 deduped
│ │ │ └── estraverse@4.3.0
│ │ ├─┬ eslint-utils@1.4.3
│ │ │ └── eslint-visitor-keys@1.3.0 deduped
│ │ ├── eslint-visitor-keys@1.3.0 deduped
│ │ ├─┬ espree@6.2.1
│ │ │ ├─┬ acorn-jsx@5.3.2
│ │ │ │ └── acorn@7.4.1 deduped
│ │ │ ├── acorn@7.4.1
│ │ │ └── eslint-visitor-keys@1.3.0 deduped
│ │ ├─┬ esquery@1.4.0
│ │ │ └── estraverse@5.3.0 deduped
│ │ ├── esutils@2.0.3
│ │ ├─┬ file-entry-cache@5.0.1
│ │ │ └─┬ flat-cache@2.0.1
│ │ │   ├── flatted@2.0.2
│ │ │   ├─┬ rimraf@2.6.3
│ │ │   │ └── glob@7.2.3 deduped
│ │ │   └─┬ write@1.0.3
│ │ │     └── mkdirp@0.5.6 deduped
│ │ ├── functional-red-black-tree@1.0.1 deduped
│ │ ├── glob-parent@5.1.2 deduped
│ │ ├─┬ globals@12.4.0
│ │ │ └── type-fest@0.8.1
│ │ ├── ignore@4.0.6
│ │ ├─┬ import-fresh@3.3.0
│ │ │ ├─┬ parent-module@1.0.1
│ │ │ │ └── callsites@3.1.0
│ │ │ └── resolve-from@4.0.0
│ │ ├── imurmurhash@0.1.4
│ │ ├─┬ inquirer@7.3.3
│ │ │ ├─┬ ansi-escapes@4.3.2
│ │ │ │ └── type-fest@0.21.3
│ │ │ ├── chalk@4.1.2 deduped
│ │ │ ├─┬ cli-cursor@3.1.0
│ │ │ │ └─┬ restore-cursor@3.1.0
│ │ │ │   ├── onetime@5.1.2 deduped
│ │ │ │   └── signal-exit@3.0.7 deduped
│ │ │ ├── cli-width@3.0.0
│ │ │ ├─┬ external-editor@3.1.0
│ │ │ │ ├── chardet@0.7.0
│ │ │ │ ├── iconv-lite@0.4.24 deduped
│ │ │ │ └─┬ tmp@0.0.33
│ │ │ │   └── os-tmpdir@1.0.2 deduped
│ │ │ ├─┬ figures@3.2.0
│ │ │ │ └── escape-string-regexp@1.0.5
│ │ │ ├── lodash@4.17.21 deduped
│ │ │ ├── mute-stream@0.0.8
│ │ │ ├── run-async@2.4.1
│ │ │ ├─┬ rxjs@6.6.7
│ │ │ │ └── tslib@1.14.1 deduped
│ │ │ ├─┬ string-width@4.2.3
│ │ │ │ ├── emoji-regex@8.0.0
│ │ │ │ ├── is-fullwidth-code-point@3.0.0
│ │ │ │ └── strip-ansi@6.0.1 deduped
│ │ │ ├─┬ strip-ansi@6.0.1
│ │ │ │ └── ansi-regex@5.0.1 deduped
│ │ │ └── through@2.3.8
│ │ ├── is-glob@4.0.3 deduped
│ │ ├── js-yaml@3.14.1 deduped
│ │ ├── json-stable-stringify-without-jsonify@1.0.1
│ │ ├─┬ levn@0.3.0
│ │ │ ├── prelude-ls@1.1.2
│ │ │ └─┬ type-check@0.3.2
│ │ │   └── prelude-ls@1.1.2 deduped
│ │ ├── lodash@4.17.21 deduped
│ │ ├── minimatch@3.1.2 deduped
│ │ ├── mkdirp@0.5.6 deduped
│ │ ├── natural-compare@1.4.0
│ │ ├─┬ optionator@0.8.3
│ │ │ ├── deep-is@0.1.4
│ │ │ ├── fast-levenshtein@2.0.6 deduped
│ │ │ ├── levn@0.3.0 deduped
│ │ │ ├── prelude-ls@1.1.2 deduped
│ │ │ ├── type-check@0.3.2 deduped
│ │ │ └── word-wrap@1.2.3
│ │ ├── progress@2.0.3 deduped
│ │ ├── regexpp@2.0.1
│ │ ├── semver@6.3.0
│ │ ├── strip-ansi@5.2.0 deduped
│ │ ├── strip-json-comments@3.1.1
│ │ ├─┬ table@5.4.6
│ │ │ ├── ajv@6.12.6 deduped
│ │ │ ├── lodash@4.17.21 deduped
│ │ │ ├─┬ slice-ansi@2.1.0
│ │ │ │ ├─┬ ansi-styles@3.2.1
│ │ │ │ │ └─┬ color-convert@1.9.3
│ │ │ │ │   └── color-name@1.1.3
│ │ │ │ ├── astral-regex@1.0.0
│ │ │ │ └── is-fullwidth-code-point@2.0.0 deduped
│ │ │ └─┬ string-width@3.1.0
│ │ │   ├── emoji-regex@7.0.3
│ │ │   ├── is-fullwidth-code-point@2.0.0 deduped
│ │ │   └── strip-ansi@5.2.0 deduped
│ │ ├── text-table@0.2.0
│ │ └── v8-compile-cache@2.3.0 deduped
│ ├── event-source-polyfill@1.0.31
│ ├─┬ execa@4.1.0
│ │ ├─┬ cross-spawn@7.0.3
│ │ │ ├── path-key@3.1.1
│ │ │ ├─┬ shebang-command@2.0.0
│ │ │ │ └── shebang-regex@3.0.0
│ │ │ └─┬ which@2.0.2
│ │ │   └── isexe@2.0.0 deduped
│ │ ├── get-stream@5.2.0 deduped
│ │ ├── human-signals@1.1.1
│ │ ├── is-stream@2.0.1 deduped
│ │ ├── merge-stream@2.0.0
│ │ ├─┬ npm-run-path@4.0.1
│ │ │ └── path-key@3.1.1
│ │ ├─┬ onetime@5.1.2
│ │ │ └── mimic-fn@2.1.0
│ │ ├── signal-exit@3.0.7 deduped
│ │ └── strip-final-newline@2.0.0
│ ├─┬ express-graphql@0.9.0
│ │ ├── accepts@1.3.8 deduped
│ │ ├── content-type@1.0.4 deduped
│ │ ├── graphql@14.7.0 deduped
│ │ ├─┬ http-errors@1.8.1
│ │ │ ├── depd@1.1.2
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ ├── setprototypeof@1.2.0 deduped
│ │ │ ├── statuses@1.5.0
│ │ │ └── toidentifier@1.0.1 deduped
│ │ └── raw-body@2.5.1 deduped
│ ├─┬ express@4.18.2
│ │ ├── accepts@1.3.8 deduped
│ │ ├── array-flatten@1.1.1
│ │ ├── body-parser@1.20.1 deduped
│ │ ├─┬ content-disposition@0.5.4
│ │ │ └── safe-buffer@5.2.1
│ │ ├── content-type@1.0.4 deduped
│ │ ├── cookie-signature@1.0.6
│ │ ├── cookie@0.5.0
│ │ ├─┬ debug@2.6.9
│ │ │ └── ms@2.0.0
│ │ ├── depd@2.0.0 deduped
│ │ ├── encodeurl@1.0.2
│ │ ├── escape-html@1.0.3
│ │ ├── etag@1.8.1
│ │ ├─┬ finalhandler@1.2.0
│ │ │ ├─┬ debug@2.6.9
│ │ │ │ └── ms@2.0.0
│ │ │ ├── encodeurl@1.0.2 deduped
│ │ │ ├── escape-html@1.0.3 deduped
│ │ │ ├── on-finished@2.4.1 deduped
│ │ │ ├── parseurl@1.3.3 deduped
│ │ │ ├── statuses@2.0.1 deduped
│ │ │ └── unpipe@1.0.0 deduped
│ │ ├── fresh@0.5.2
│ │ ├── http-errors@2.0.0 deduped
│ │ ├── merge-descriptors@1.0.1
│ │ ├── methods@1.1.2
│ │ ├── on-finished@2.4.1 deduped
│ │ ├── parseurl@1.3.3 deduped
│ │ ├── path-to-regexp@0.1.7
│ │ ├─┬ proxy-addr@2.0.7
│ │ │ ├── forwarded@0.2.0
│ │ │ └── ipaddr.js@1.9.1
│ │ ├── qs@6.11.0 deduped
│ │ ├── range-parser@1.2.1
│ │ ├── safe-buffer@5.2.1
│ │ ├─┬ send@0.18.0
│ │ │ ├─┬ debug@2.6.9
│ │ │ │ └── ms@2.0.0
│ │ │ ├── depd@2.0.0 deduped
│ │ │ ├── destroy@1.2.0 deduped
│ │ │ ├── encodeurl@1.0.2 deduped
│ │ │ ├── escape-html@1.0.3 deduped
│ │ │ ├── etag@1.8.1 deduped
│ │ │ ├── fresh@0.5.2 deduped
│ │ │ ├── http-errors@2.0.0 deduped
│ │ │ ├── mime@1.6.0
│ │ │ ├── ms@2.1.3 deduped
│ │ │ ├── on-finished@2.4.1 deduped
│ │ │ ├── range-parser@1.2.1 deduped
│ │ │ └── statuses@2.0.1 deduped
│ │ ├─┬ serve-static@1.15.0
│ │ │ ├── encodeurl@1.0.2 deduped
│ │ │ ├── escape-html@1.0.3 deduped
│ │ │ ├── parseurl@1.3.3 deduped
│ │ │ └── send@0.18.0 deduped
│ │ ├── setprototypeof@1.2.0
│ │ ├── statuses@2.0.1
│ │ ├── type-is@1.6.18 deduped
│ │ ├── utils-merge@1.0.1
│ │ └── vary@1.1.2 deduped
│ ├── fastest-levenshtein@1.0.16
│ ├─┬ fastq@1.13.0
│ │ └── reusify@1.0.4
│ ├─┬ file-loader@1.1.11
│ │ ├─┬ loader-utils@1.4.2
│ │ │ ├── big.js@5.2.2 deduped
│ │ │ ├── emojis-list@3.0.0 deduped
│ │ │ └─┬ json5@1.0.1
│ │ │   └── minimist@1.2.7 deduped
│ │ ├─┬ schema-utils@0.4.7
│ │ │ ├── ajv-keywords@3.5.2 deduped
│ │ │ └── ajv@6.12.6 deduped
│ │ └── webpack@4.46.0 deduped
│ ├─┬ find-cache-dir@3.3.2
│ │ ├── commondir@1.0.1
│ │ ├── make-dir@3.1.0 deduped
│ │ └─┬ pkg-dir@4.2.0
│ │   └─┬ find-up@4.1.0
│ │     ├─┬ locate-path@5.0.0
│ │     │ └─┬ p-locate@4.1.0
│ │     │   └─┬ p-limit@2.3.0
│ │     │     └── p-try@2.2.0 deduped
│ │     └── path-exists@4.0.0
│ ├── fs-exists-cached@1.0.0
│ ├── fs-extra@8.1.0 deduped
│ ├─┬ gatsby-cli@2.19.3
│ │ ├── @babel/code-frame@7.18.6 deduped
│ │ ├── @hapi/joi@15.1.1 deduped
│ │ ├── @types/common-tags@1.8.1
│ │ ├── better-opn@2.1.1 deduped
│ │ ├── chalk@4.1.2 deduped
│ │ ├─┬ clipboardy@2.3.0
│ │ │ ├── arch@2.2.0
│ │ │ ├─┬ execa@1.0.0
│ │ │ │ ├── cross-spawn@6.0.5 deduped
│ │ │ │ ├─┬ get-stream@4.1.0
│ │ │ │ │ └── pump@3.0.0 deduped
│ │ │ │ ├── is-stream@1.1.0
│ │ │ │ ├─┬ npm-run-path@2.0.2
│ │ │ │ │ └── path-key@2.0.1 deduped
│ │ │ │ ├── p-finally@1.0.0 deduped
│ │ │ │ ├── signal-exit@3.0.7 deduped
│ │ │ │ └── strip-eof@1.0.0
│ │ │ └── is-wsl@2.2.0 deduped
│ │ ├── common-tags@1.8.2 deduped
│ │ ├── configstore@5.0.1 deduped
│ │ ├── convert-hrtime@3.0.0 deduped
│ │ ├── create-gatsby@0.5.1
│ │ ├── envinfo@7.8.1
│ │ ├─┬ execa@3.4.0
│ │ │ ├─┬ cross-spawn@7.0.3
│ │ │ │ ├── path-key@3.1.1
│ │ │ │ ├─┬ shebang-command@2.0.0
│ │ │ │ │ └── shebang-regex@3.0.0
│ │ │ │ └─┬ which@2.0.2
│ │ │ │   └── isexe@2.0.0 deduped
│ │ │ ├── get-stream@5.2.0 deduped
│ │ │ ├── human-signals@1.1.1 deduped
│ │ │ ├── is-stream@2.0.1 deduped
│ │ │ ├── merge-stream@2.0.0 deduped
│ │ │ ├── npm-run-path@4.0.1 deduped
│ │ │ ├── onetime@5.1.2 deduped
│ │ │ ├── p-finally@2.0.1
│ │ │ ├── signal-exit@3.0.7 deduped
│ │ │ └── strip-final-newline@2.0.0 deduped
│ │ ├── fs-exists-cached@1.0.0 deduped
│ │ ├── fs-extra@8.1.0 deduped
│ │ ├── gatsby-core-utils@1.10.1 deduped
│ │ ├─┬ gatsby-recipes@0.9.3
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/generator@7.20.4 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├── @babel/plugin-proposal-optional-chaining@7.18.9 deduped
│ │ │ ├── @babel/plugin-transform-react-jsx@7.19.0 deduped
│ │ │ ├── @babel/standalone@7.20.4
│ │ │ ├── @babel/template@7.18.10 deduped
│ │ │ ├── @babel/types@7.20.2 deduped
│ │ │ ├─┬ @graphql-tools/schema@7.1.5
│ │ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ ├── tslib@2.2.0
│ │ │ │ └── value-or-promise@1.0.6
│ │ │ ├── @graphql-tools/utils@7.10.0 deduped
│ │ │ ├── @hapi/hoek@8.5.1 deduped
│ │ │ ├── @hapi/joi@15.1.1 deduped
│ │ │ ├── better-queue@3.8.12 deduped
│ │ │ ├── chokidar@3.5.3 deduped
│ │ │ ├─┬ contentful-management@7.54.2
│ │ │ │ ├── @types/json-patch@0.0.30
│ │ │ │ ├── axios@0.21.4 deduped
│ │ │ │ ├─┬ contentful-sdk-core@6.11.0
│ │ │ │ │ ├── fast-copy@2.1.7 deduped
│ │ │ │ │ ├── lodash.isplainobject@4.0.6 deduped
│ │ │ │ │ ├── lodash.isstring@4.0.1
│ │ │ │ │ ├── p-throttle@4.1.1
│ │ │ │ │ └── qs@6.11.0 deduped
│ │ │ │ ├── fast-copy@2.1.7
│ │ │ │ ├── lodash.isplainobject@4.0.6
│ │ │ │ └── type-fest@2.19.0
│ │ │ ├── cors@2.8.5 deduped
│ │ │ ├─┬ debug@4.3.4
│ │ │ │ └── ms@2.1.2
│ │ │ ├── detect-port@1.5.1 deduped
│ │ │ ├── dotenv@8.6.0 deduped
│ │ │ ├── execa@4.1.0 deduped
│ │ │ ├── express-graphql@0.9.0 deduped
│ │ │ ├── express@4.18.2 deduped
│ │ │ ├── fs-extra@8.1.0 deduped
│ │ │ ├── gatsby-core-utils@1.10.1 deduped
│ │ │ ├── gatsby-telemetry@1.10.2 deduped
│ │ │ ├── glob@7.2.3 deduped
│ │ │ ├── graphql-compose@6.3.8 deduped
│ │ │ ├─┬ graphql-subscriptions@1.2.1
│ │ │ │ ├── graphql@14.7.0 deduped
│ │ │ │ └── iterall@1.3.0 deduped
│ │ │ ├─┬ graphql-type-json@0.3.2
│ │ │ │ └── graphql@14.7.0 deduped
│ │ │ ├── graphql@14.7.0 deduped
│ │ │ ├─┬ hicat@0.8.0
│ │ │ │ ├── highlight.js@10.7.3
│ │ │ │ └── minimist@1.2.7 deduped
│ │ │ ├── is-binary-path@2.1.0 deduped
│ │ │ ├── is-url@1.2.4
│ │ │ ├─┬ jest-diff@25.5.0
│ │ │ │ ├─┬ chalk@3.0.0
│ │ │ │ │ ├── ansi-styles@4.3.0 deduped
│ │ │ │ │ └── supports-color@7.2.0 deduped
│ │ │ │ ├── diff-sequences@25.2.6
│ │ │ │ ├── jest-get-type@25.2.6
│ │ │ │ └─┬ pretty-format@25.5.0
│ │ │ │   ├─┬ @jest/types@25.5.0
│ │ │ │   │ ├── @types/istanbul-lib-coverage@2.0.4
│ │ │ │   │ ├─┬ @types/istanbul-reports@1.1.2
│ │ │ │   │ │ ├── @types/istanbul-lib-coverage@2.0.4 deduped
│ │ │ │   │ │ └─┬ @types/istanbul-lib-report@3.0.0
│ │ │ │   │ │   └── @types/istanbul-lib-coverage@2.0.4 deduped
│ │ │ │   │ ├─┬ @types/yargs@15.0.14
│ │ │ │   │ │ └── @types/yargs-parser@21.0.0
│ │ │ │   │ └─┬ chalk@3.0.0
│ │ │ │   │   ├── ansi-styles@4.3.0 deduped
│ │ │ │   │   └── supports-color@7.2.0 deduped
│ │ │ │   ├── ansi-regex@5.0.1 deduped
│ │ │ │   ├── ansi-styles@4.3.0 deduped
│ │ │ │   └── react-is@16.13.1 deduped
│ │ │ ├── lock@1.1.0
│ │ │ ├── lodash@4.17.21 deduped
│ │ │ ├── mitt@1.2.0 deduped
│ │ │ ├── mkdirp@0.5.6 deduped
│ │ │ ├── node-fetch@2.6.7 deduped
│ │ │ ├── pkg-dir@4.2.0 deduped
│ │ │ ├── prettier@2.7.1
│ │ │ ├── prop-types@15.8.1 deduped
│ │ │ ├─┬ remark-mdx@2.1.5
│ │ │ │ ├─┬ mdast-util-mdx@2.0.0
│ │ │ │ │ ├─┬ mdast-util-mdx-expression@1.3.1
│ │ │ │ │ │ ├─┬ @types/estree-jsx@1.0.0
│ │ │ │ │ │ │ └── @types/estree@1.0.0
│ │ │ │ │ │ ├─┬ @types/hast@2.3.4
│ │ │ │ │ │ │ └── @types/unist@2.0.6 deduped
│ │ │ │ │ │ ├── @types/mdast@3.0.10 deduped
│ │ │ │ │ │ ├─┬ mdast-util-from-markdown@1.2.0
│ │ │ │ │ │ │ ├── @types/mdast@3.0.10 deduped
│ │ │ │ │ │ │ ├── @types/unist@2.0.6 deduped
│ │ │ │ │ │ │ ├─┬ decode-named-character-reference@1.0.2
│ │ │ │ │ │ │ │ └── character-entities@2.0.2 deduped
│ │ │ │ │ │ │ ├── mdast-util-to-string@3.1.0
│ │ │ │ │ │ │ ├─┬ micromark-util-decode-numeric-character-reference@1.0.0
│ │ │ │ │ │ │ │ └── micromark-util-symbol@1.0.1 deduped
│ │ │ │ │ │ │ ├─┬ micromark-util-decode-string@1.0.2
│ │ │ │ │ │ │ │ ├── decode-named-character-reference@1.0.2 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-decode-numeric-character-reference@1.0.0 deduped
│ │ │ │ │ │ │ │ └── micromark-util-symbol@1.0.1 deduped
│ │ │ │ │ │ │ ├─┬ micromark-util-normalize-identifier@1.0.0
│ │ │ │ │ │ │ │ └── micromark-util-symbol@1.0.1 deduped
│ │ │ │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │ │ │ │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │ │ │ │ ├─┬ micromark@3.1.0
│ │ │ │ │ │ │ │ ├─┬ @types/debug@4.1.7
│ │ │ │ │ │ │ │ │ └── @types/ms@0.7.31
│ │ │ │ │ │ │ │ ├─┬ debug@4.3.4
│ │ │ │ │ │ │ │ │ └── ms@2.1.2
│ │ │ │ │ │ │ │ ├── decode-named-character-reference@1.0.2 deduped
│ │ │ │ │ │ │ │ ├── micromark-core-commonmark@1.0.6 deduped
│ │ │ │ │ │ │ │ ├── micromark-factory-space@1.0.0 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-chunked@1.0.0 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-combine-extensions@1.0.0 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-decode-numeric-character-reference@1.0.0 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-encode@1.0.1
│ │ │ │ │ │ │ │ ├── micromark-util-normalize-identifier@1.0.0 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-resolve-all@1.0.0 deduped
│ │ │ │ │ │ │ │ ├─┬ micromark-util-sanitize-uri@1.1.0
│ │ │ │ │ │ │ │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │ │ │ │ │ │ ├── micromark-util-encode@1.0.1 deduped
│ │ │ │ │ │ │ │ │ └── micromark-util-symbol@1.0.1 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-subtokenize@1.0.2 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │ │ │ │ │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │ │ │ │ │ └── uvu@0.5.6 deduped
│ │ │ │ │ │ │ ├── unist-util-stringify-position@3.0.2 deduped
│ │ │ │ │ │ │ └── uvu@0.5.6 deduped
│ │ │ │ │ │ └─┬ mdast-util-to-markdown@1.3.0
│ │ │ │ │ │   ├── @types/mdast@3.0.10 deduped
│ │ │ │ │ │   ├── @types/unist@2.0.6 deduped
│ │ │ │ │ │   ├── longest-streak@3.0.1
│ │ │ │ │ │   ├── mdast-util-to-string@3.1.0
│ │ │ │ │ │   ├── micromark-util-decode-string@1.0.2 deduped
│ │ │ │ │ │   ├─┬ unist-util-visit@4.1.1
│ │ │ │ │ │   │ ├── @types/unist@2.0.6 deduped
│ │ │ │ │ │   │ ├── unist-util-is@5.1.1
│ │ │ │ │ │   │ └─┬ unist-util-visit-parents@5.1.1
│ │ │ │ │ │   │   ├── @types/unist@2.0.6 deduped
│ │ │ │ │ │   │   └── unist-util-is@5.1.1 deduped
│ │ │ │ │ │   └── zwitch@2.0.2
│ │ │ │ │ ├─┬ mdast-util-mdx-jsx@2.1.0
│ │ │ │ │ │ ├── @types/estree-jsx@1.0.0 deduped
│ │ │ │ │ │ ├── @types/hast@2.3.4 deduped
│ │ │ │ │ │ ├── @types/mdast@3.0.10 deduped
│ │ │ │ │ │ ├── ccount@2.0.1
│ │ │ │ │ │ ├── mdast-util-to-markdown@1.3.0 deduped
│ │ │ │ │ │ ├─┬ parse-entities@4.0.0
│ │ │ │ │ │ │ ├── @types/unist@2.0.6 deduped
│ │ │ │ │ │ │ ├── character-entities-legacy@3.0.0
│ │ │ │ │ │ │ ├── character-entities@2.0.2
│ │ │ │ │ │ │ ├── character-reference-invalid@2.0.1
│ │ │ │ │ │ │ ├── decode-named-character-reference@1.0.2 deduped
│ │ │ │ │ │ │ ├─┬ is-alphanumerical@2.0.1
│ │ │ │ │ │ │ │ ├── is-alphabetical@2.0.1
│ │ │ │ │ │ │ │ └── is-decimal@2.0.1 deduped
│ │ │ │ │ │ │ ├── is-decimal@2.0.1
│ │ │ │ │ │ │ └── is-hexadecimal@2.0.1
│ │ │ │ │ │ ├─┬ stringify-entities@4.0.3
│ │ │ │ │ │ │ ├── character-entities-html4@2.1.0
│ │ │ │ │ │ │ └── character-entities-legacy@3.0.0 deduped
│ │ │ │ │ │ ├─┬ unist-util-remove-position@4.0.1
│ │ │ │ │ │ │ ├── @types/unist@2.0.6 deduped
│ │ │ │ │ │ │ └─┬ unist-util-visit@4.1.1
│ │ │ │ │ │ │   ├── @types/unist@2.0.6 deduped
│ │ │ │ │ │ │   ├── unist-util-is@5.1.1
│ │ │ │ │ │ │   └─┬ unist-util-visit-parents@5.1.1
│ │ │ │ │ │ │     ├── @types/unist@2.0.6 deduped
│ │ │ │ │ │ │     └── unist-util-is@5.1.1 deduped
│ │ │ │ │ │ ├── unist-util-stringify-position@3.0.2 deduped
│ │ │ │ │ │ └── vfile-message@3.1.2 deduped
│ │ │ │ │ └─┬ mdast-util-mdxjs-esm@1.3.0
│ │ │ │ │   ├── @types/estree-jsx@1.0.0 deduped
│ │ │ │ │   ├── @types/hast@2.3.4 deduped
│ │ │ │ │   ├── @types/mdast@3.0.10 deduped
│ │ │ │ │   ├── mdast-util-from-markdown@1.2.0 deduped
│ │ │ │ │   └── mdast-util-to-markdown@1.3.0 deduped
│ │ │ │ └─┬ micromark-extension-mdxjs@1.0.0
│ │ │ │   ├── acorn-jsx@5.3.2 deduped
│ │ │ │   ├── acorn@8.8.1
│ │ │ │   ├─┬ micromark-extension-mdx-expression@1.0.3
│ │ │ │   │ ├─┬ micromark-factory-mdx-expression@1.0.6
│ │ │ │   │ │ ├── micromark-factory-space@1.0.0 deduped
│ │ │ │   │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ │ ├── micromark-util-events-to-acorn@1.2.0 deduped
│ │ │ │   │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ ├── unist-util-position-from-estree@1.1.1 deduped
│ │ │ │   │ │ ├── uvu@0.5.6 deduped
│ │ │ │   │ │ └── vfile-message@3.1.2 deduped
│ │ │ │   │ ├─┬ micromark-factory-space@1.0.0
│ │ │ │   │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ │ └── micromark-util-types@1.0.2 deduped
│ │ │ │   │ ├─┬ micromark-util-character@1.1.0
│ │ │ │   │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ │ └── micromark-util-types@1.0.2 deduped
│ │ │ │   │ ├─┬ micromark-util-events-to-acorn@1.2.0
│ │ │ │   │ │ ├── @types/acorn@4.0.6 deduped
│ │ │ │   │ │ ├── @types/estree@1.0.0 deduped
│ │ │ │   │ │ ├─┬ estree-util-visit@1.2.0
│ │ │ │   │ │ │ ├── @types/estree-jsx@1.0.0 deduped
│ │ │ │   │ │ │ └── @types/unist@2.0.6 deduped
│ │ │ │   │ │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ ├── uvu@0.5.6 deduped
│ │ │ │   │ │ ├─┬ vfile-location@4.0.1
│ │ │ │   │ │ │ ├── @types/unist@2.0.6 deduped
│ │ │ │   │ │ │ └─┬ vfile@5.3.5
│ │ │ │   │ │ │   ├── @types/unist@2.0.6 deduped
│ │ │ │   │ │ │   ├── is-buffer@2.0.5 deduped
│ │ │ │   │ │ │   ├── unist-util-stringify-position@3.0.2 deduped
│ │ │ │   │ │ │   └── vfile-message@3.1.2 deduped
│ │ │ │   │ │ └── vfile-message@3.1.2 deduped
│ │ │ │   │ ├── micromark-util-symbol@1.0.1
│ │ │ │   │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │   │ └─┬ uvu@0.5.6
│ │ │ │   │   ├── dequal@2.0.3
│ │ │ │   │   ├── diff@5.1.0
│ │ │ │   │   ├── kleur@4.1.5
│ │ │ │   │   └─┬ sade@1.8.1
│ │ │ │   │     └── mri@1.2.0
│ │ │ │   ├─┬ micromark-extension-mdx-jsx@1.0.3
│ │ │ │   │ ├─┬ @types/acorn@4.0.6
│ │ │ │   │ │ └── @types/estree@1.0.0 deduped
│ │ │ │   │ ├── estree-util-is-identifier-name@2.0.1
│ │ │ │   │ ├── micromark-factory-mdx-expression@1.0.6 deduped
│ │ │ │   │ ├── micromark-factory-space@1.0.0 deduped
│ │ │ │   │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │   │ ├── uvu@0.5.6 deduped
│ │ │ │   │ └── vfile-message@3.1.2 deduped
│ │ │ │   ├─┬ micromark-extension-mdx-md@1.0.0
│ │ │ │   │ └── micromark-util-types@1.0.2 deduped
│ │ │ │   ├─┬ micromark-extension-mdxjs-esm@1.0.3
│ │ │ │   │ ├─┬ micromark-core-commonmark@1.0.6
│ │ │ │   │ │ ├── decode-named-character-reference@1.0.2 deduped
│ │ │ │   │ │ ├─┬ micromark-factory-destination@1.0.0
│ │ │ │   │ │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ │ │ └── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ ├─┬ micromark-factory-label@1.0.2
│ │ │ │   │ │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ │ │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ │ └── uvu@0.5.6 deduped
│ │ │ │   │ │ ├── micromark-factory-space@1.0.0 deduped
│ │ │ │   │ │ ├─┬ micromark-factory-title@1.0.2
│ │ │ │   │ │ │ ├── micromark-factory-space@1.0.0 deduped
│ │ │ │   │ │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ │ │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ │ └── uvu@0.5.6 deduped
│ │ │ │   │ │ ├─┬ micromark-factory-whitespace@1.0.0
│ │ │ │   │ │ │ ├── micromark-factory-space@1.0.0 deduped
│ │ │ │   │ │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ │ │ └── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ │ ├── micromark-util-chunked@1.0.0 deduped
│ │ │ │   │ │ ├─┬ micromark-util-classify-character@1.0.0
│ │ │ │   │ │ │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ │ │ └── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ ├── micromark-util-html-tag-name@1.1.0
│ │ │ │   │ │ ├── micromark-util-normalize-identifier@1.0.0 deduped
│ │ │ │   │ │ ├─┬ micromark-util-resolve-all@1.0.0
│ │ │ │   │ │ │ └── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ ├─┬ micromark-util-subtokenize@1.0.2
│ │ │ │   │ │ │ ├── micromark-util-chunked@1.0.0 deduped
│ │ │ │   │ │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ │ │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ │ └── uvu@0.5.6 deduped
│ │ │ │   │ │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │   │ │ └── uvu@0.5.6 deduped
│ │ │ │   │ ├── micromark-util-character@1.1.0 deduped
│ │ │ │   │ ├── micromark-util-events-to-acorn@1.2.0 deduped
│ │ │ │   │ ├── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ ├── micromark-util-types@1.0.2 deduped
│ │ │ │   │ ├─┬ unist-util-position-from-estree@1.1.1
│ │ │ │   │ │ └── @types/unist@2.0.6 deduped
│ │ │ │   │ ├── uvu@0.5.6 deduped
│ │ │ │   │ └── vfile-message@3.1.2 deduped
│ │ │ │   ├─┬ micromark-util-combine-extensions@1.0.0
│ │ │ │   │ ├─┬ micromark-util-chunked@1.0.0
│ │ │ │   │ │ └── micromark-util-symbol@1.0.1 deduped
│ │ │ │   │ └── micromark-util-types@1.0.2 deduped
│ │ │ │   └── micromark-util-types@1.0.2
│ │ │ ├─┬ remark-mdxjs@2.0.0-next.8
│ │ │ │ ├─┬ @babel/core@7.10.5
│ │ │ │ │ ├── @babel/code-frame@7.18.6 deduped
│ │ │ │ │ ├── @babel/generator@7.20.4 deduped
│ │ │ │ │ ├── @babel/helper-module-transforms@7.20.2 deduped
│ │ │ │ │ ├── @babel/helpers@7.20.1 deduped
│ │ │ │ │ ├── @babel/parser@7.20.3 deduped
│ │ │ │ │ ├── @babel/template@7.18.10 deduped
│ │ │ │ │ ├── @babel/traverse@7.20.1 deduped
│ │ │ │ │ ├── @babel/types@7.20.2 deduped
│ │ │ │ │ ├── convert-source-map@1.9.0 deduped
│ │ │ │ │ ├─┬ debug@4.3.4
│ │ │ │ │ │ └── ms@2.1.2
│ │ │ │ │ ├── gensync@1.0.0-beta.2 deduped
│ │ │ │ │ ├── json5@2.2.1 deduped
│ │ │ │ │ ├── lodash@4.17.21 deduped
│ │ │ │ │ ├── resolve@1.22.1 deduped
│ │ │ │ │ ├── semver@5.7.1
│ │ │ │ │ └── source-map@0.5.7
│ │ │ │ ├── @babel/helper-plugin-utils@7.10.4
│ │ │ │ ├─┬ @babel/plugin-proposal-object-rest-spread@7.10.4
│ │ │ │ │ ├── @babel/core@7.10.5 deduped
│ │ │ │ │ ├── @babel/helper-plugin-utils@7.10.4 deduped
│ │ │ │ │ ├── @babel/plugin-syntax-object-rest-spread@7.8.3 deduped
│ │ │ │ │ └── @babel/plugin-transform-parameters@7.20.3 deduped
│ │ │ │ ├─┬ @babel/plugin-syntax-jsx@7.10.4
│ │ │ │ │ ├── @babel/core@7.10.5 deduped
│ │ │ │ │ └── @babel/helper-plugin-utils@7.10.4 deduped
│ │ │ │ └── @mdx-js/util@2.0.0-next.8
│ │ │ ├── remark-parse@6.0.3 deduped
│ │ │ ├─┬ remark-stringify@8.1.1
│ │ │ │ ├── ccount@1.1.0 deduped
│ │ │ │ ├── is-alphanumeric@1.0.0 deduped
│ │ │ │ ├── is-decimal@1.0.4
│ │ │ │ ├── is-whitespace-character@1.0.4 deduped
│ │ │ │ ├── longest-streak@2.0.4
│ │ │ │ ├── markdown-escapes@1.0.4 deduped
│ │ │ │ ├─┬ markdown-table@2.0.0
│ │ │ │ │ └── repeat-string@1.6.1 deduped
│ │ │ │ ├─┬ mdast-util-compact@2.0.1
│ │ │ │ │ └── unist-util-visit@2.0.3 deduped
│ │ │ │ ├─┬ parse-entities@2.0.0
│ │ │ │ │ ├── character-entities-legacy@1.1.4
│ │ │ │ │ ├── character-entities@1.2.4
│ │ │ │ │ ├── character-reference-invalid@1.1.4
│ │ │ │ │ ├─┬ is-alphanumerical@1.0.4
│ │ │ │ │ │ ├── is-alphabetical@1.0.4
│ │ │ │ │ │ └── is-decimal@1.0.4 deduped
│ │ │ │ │ ├── is-decimal@1.0.4 deduped
│ │ │ │ │ └── is-hexadecimal@1.0.4
│ │ │ │ ├── repeat-string@1.6.1 deduped
│ │ │ │ ├── state-toggle@1.0.3 deduped
│ │ │ │ ├─┬ stringify-entities@3.1.0
│ │ │ │ │ ├── character-entities-html4@1.1.4 deduped
│ │ │ │ │ ├── character-entities-legacy@1.1.4 deduped
│ │ │ │ │ └── xtend@4.0.2 deduped
│ │ │ │ ├── unherit@1.1.3 deduped
│ │ │ │ └── xtend@4.0.2 deduped
│ │ │ ├── resolve-from@5.0.0
│ │ │ ├── semver@7.3.8 deduped
│ │ │ ├─┬ single-trailing-newline@1.0.0
│ │ │ │ └─┬ detect-newline@1.0.3
│ │ │ │   ├── get-stdin@4.0.1
│ │ │ │   └── minimist@1.2.7 deduped
│ │ │ ├─┬ strip-ansi@6.0.1
│ │ │ │ └── ansi-regex@5.0.1 deduped
│ │ │ ├─┬ style-to-object@0.3.0
│ │ │ │ └── inline-style-parser@0.1.1
│ │ │ ├─┬ unified@8.4.2
│ │ │ │ ├── bail@1.0.5 deduped
│ │ │ │ ├── extend@3.0.2 deduped
│ │ │ │ ├── is-plain-obj@2.1.0
│ │ │ │ ├── trough@1.0.5 deduped
│ │ │ │ └─┬ vfile@4.2.1
│ │ │ │   ├── @types/unist@2.0.6 deduped
│ │ │ │   ├── is-buffer@2.0.5 deduped
│ │ │ │   ├─┬ unist-util-stringify-position@2.0.3
│ │ │ │   │ └── @types/unist@2.0.6 deduped
│ │ │ │   └─┬ vfile-message@2.0.4
│ │ │ │     ├── @types/unist@2.0.6 deduped
│ │ │ │     └── unist-util-stringify-position@2.0.3 deduped
│ │ │ ├─┬ unist-util-remove@2.1.0
│ │ │ │ └── unist-util-is@4.1.0
│ │ │ ├── unist-util-visit@2.0.3 deduped
│ │ │ ├── uuid@3.4.0 deduped
│ │ │ ├─┬ ws@7.5.9
│ │ │ │ ├── UNMET OPTIONAL DEPENDENCY bufferutil@^4.0.1
│ │ │ │ └── UNMET OPTIONAL DEPENDENCY utf-8-validate@^5.0.2
│ │ │ ├── xstate@4.34.0 deduped
│ │ │ └── yoga-layout-prebuilt@1.10.0 deduped
│ │ ├── gatsby-telemetry@1.10.2 deduped
│ │ ├─┬ hosted-git-info@3.0.8
│ │ │ └─┬ lru-cache@6.0.0
│ │ │   └── yallist@4.0.0
│ │ ├─┬ is-valid-path@0.1.1
│ │ │ └─┬ is-invalid-path@0.1.0
│ │ │   └─┬ is-glob@2.0.1
│ │ │     └── is-extglob@1.0.0
│ │ ├── lodash@4.17.21 deduped
│ │ ├── meant@1.0.3 deduped
│ │ ├── node-fetch@2.6.7 deduped
│ │ ├── opentracing@0.14.7 deduped
│ │ ├─┬ pretty-error@2.1.2
│ │ │ ├── lodash@4.17.21 deduped
│ │ │ └─┬ renderkid@2.0.7
│ │ │   ├─┬ css-select@4.3.0
│ │ │   │ ├── boolbase@1.0.0 deduped
│ │ │   │ ├── css-what@6.1.0 deduped
│ │ │   │ ├─┬ domhandler@4.3.1
│ │ │   │ │ └── domelementtype@2.3.0 deduped
│ │ │   │ ├─┬ domutils@2.8.0
│ │ │   │ │ ├─┬ dom-serializer@1.4.1
│ │ │   │ │ │ ├── domelementtype@2.3.0 deduped
│ │ │   │ │ │ ├── domhandler@4.3.1 deduped
│ │ │   │ │ │ └── entities@2.2.0 deduped
│ │ │   │ │ ├── domelementtype@2.3.0 deduped
│ │ │   │ │ └── domhandler@4.3.1 deduped
│ │ │   │ └── nth-check@2.1.1 deduped
│ │ │   ├─┬ dom-converter@0.2.0
│ │ │   │ └── utila@0.4.0
│ │ │   ├─┬ htmlparser2@6.1.0
│ │ │   │ ├── domelementtype@2.3.0 deduped
│ │ │   │ ├── domhandler@4.3.1 deduped
│ │ │   │ ├── domutils@2.8.0 deduped
│ │ │   │ └── entities@2.2.0
│ │ │   ├── lodash@4.17.21 deduped
│ │ │   └─┬ strip-ansi@3.0.1
│ │ │     └── ansi-regex@2.1.1
│ │ ├── progress@2.0.3 deduped
│ │ ├── prompts@2.4.2 deduped
│ │ ├── redux@4.2.0 deduped
│ │ ├─┬ resolve-cwd@3.0.0
│ │ │ └── resolve-from@5.0.0 deduped
│ │ ├── semver@7.3.8 deduped
│ │ ├── signal-exit@3.0.7 deduped
│ │ ├── source-map@0.7.3
│ │ ├── stack-trace@0.0.10 deduped
│ │ ├── strip-ansi@5.2.0 deduped
│ │ ├─┬ update-notifier@5.1.0
│ │ │ ├─┬ boxen@5.1.2
│ │ │ │ ├── ansi-align@3.0.1 deduped
│ │ │ │ ├── camelcase@6.3.0
│ │ │ │ ├── chalk@4.1.2 deduped
│ │ │ │ ├── cli-boxes@2.2.1 deduped
│ │ │ │ ├─┬ string-width@4.2.3
│ │ │ │ │ ├── emoji-regex@8.0.0
│ │ │ │ │ ├── is-fullwidth-code-point@3.0.0
│ │ │ │ │ └─┬ strip-ansi@6.0.1
│ │ │ │ │   └── ansi-regex@5.0.1 deduped
│ │ │ │ ├── type-fest@0.20.2
│ │ │ │ ├── widest-line@3.1.0 deduped
│ │ │ │ └── wrap-ansi@7.0.0 deduped
│ │ │ ├── chalk@4.1.2 deduped
│ │ │ ├── configstore@5.0.1 deduped
│ │ │ ├── has-yarn@2.1.0
│ │ │ ├── import-lazy@2.1.0
│ │ │ ├─┬ is-ci@2.0.0
│ │ │ │ └── ci-info@2.0.0 deduped
│ │ │ ├─┬ is-installed-globally@0.4.0
│ │ │ │ ├─┬ global-dirs@3.0.0
│ │ │ │ │ └── ini@2.0.0
│ │ │ │ └── is-path-inside@3.0.3 deduped
│ │ │ ├── is-npm@5.0.0
│ │ │ ├── is-yarn-global@0.3.0
│ │ │ ├── latest-version@5.1.0 deduped
│ │ │ ├─┬ pupa@2.1.1
│ │ │ │ └── escape-goat@2.1.1
│ │ │ ├─┬ semver-diff@3.1.1
│ │ │ │ └── semver@6.3.0
│ │ │ ├── semver@7.3.8 deduped
│ │ │ └── xdg-basedir@4.0.0 deduped
│ │ ├── uuid@3.4.0 deduped
│ │ ├─┬ yargs@15.4.1
│ │ │ ├─┬ cliui@6.0.0
│ │ │ │ ├── string-width@4.2.3 deduped
│ │ │ │ ├─┬ strip-ansi@6.0.1
│ │ │ │ │ └── ansi-regex@5.0.1 deduped
│ │ │ │ └─┬ wrap-ansi@6.2.0
│ │ │ │   ├── ansi-styles@4.3.0 deduped
│ │ │ │   ├── string-width@4.2.3 deduped
│ │ │ │   └─┬ strip-ansi@6.0.1
│ │ │ │     └── ansi-regex@5.0.1 deduped
│ │ │ ├── decamelize@1.2.0
│ │ │ ├── find-up@4.1.0 deduped
│ │ │ ├── get-caller-file@2.0.5 deduped
│ │ │ ├── require-directory@2.1.1 deduped
│ │ │ ├── require-main-filename@2.0.0
│ │ │ ├── set-blocking@2.0.0 deduped
│ │ │ ├─┬ string-width@4.2.3
│ │ │ │ ├── emoji-regex@8.0.0
│ │ │ │ ├── is-fullwidth-code-point@3.0.0
│ │ │ │ └─┬ strip-ansi@6.0.1
│ │ │ │   └── ansi-regex@5.0.1 deduped
│ │ │ ├── which-module@2.0.0
│ │ │ ├── y18n@4.0.3
│ │ │ └─┬ yargs-parser@18.1.3
│ │ │   ├── camelcase@5.3.1 deduped
│ │ │   └── decamelize@1.2.0 deduped
│ │ ├─┬ yoga-layout-prebuilt@1.10.0
│ │ │ └── @types/yoga-layout@1.9.2
│ │ └─┬ yurnalist@2.1.0
│ │   ├─┬ chalk@2.4.2
│ │   │ ├─┬ ansi-styles@3.2.1
│ │   │ │ └─┬ color-convert@1.9.3
│ │   │ │   └── color-name@1.1.3
│ │   │ ├── escape-string-regexp@1.0.5
│ │   │ └─┬ supports-color@5.5.0
│ │   │   └── has-flag@3.0.0
│ │   ├── inquirer@7.3.3 deduped
│ │   ├── is-ci@2.0.0 deduped
│ │   ├─┬ read@1.0.7
│ │   │ └── mute-stream@0.0.8 deduped
│ │   └── strip-ansi@5.2.0 deduped
│ ├── gatsby-core-utils@1.10.1 deduped
│ ├─┬ gatsby-graphiql-explorer@0.11.0
│ │ └── @babel/runtime@7.20.1 deduped
│ ├─┬ gatsby-legacy-polyfills@0.7.1
│ │ └─┬ core-js-compat@3.26.0
│ │   └── browserslist@4.21.4 deduped
│ ├─┬ gatsby-link@2.11.0
│ │ ├── @babel/runtime@7.20.1 deduped
│ │ ├── @reach/router@1.3.4 deduped
│ │ ├─┬ @types/reach__router@1.3.11
│ │ │ └── @types/react@17.0.52 deduped
│ │ ├── prop-types@15.8.1 deduped
│ │ ├── react-dom@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router
│ │ └── react@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router
│ ├─┬ gatsby-plugin-page-creator@2.10.2
│ │ ├── @babel/traverse@7.20.1 deduped
│ │ ├─┬ @sindresorhus/slugify@1.1.2
│ │ │ ├─┬ @sindresorhus/transliterate@0.1.2
│ │ │ │ ├── escape-string-regexp@2.0.0
│ │ │ │ └── lodash.deburr@4.1.0
│ │ │ └── escape-string-regexp@4.0.0
│ │ ├── chokidar@3.5.3 deduped
│ │ ├── fs-exists-cached@1.0.0 deduped
│ │ ├─┬ gatsby-page-utils@0.9.1
│ │ │ ├── @babel/runtime@7.20.1 deduped
│ │ │ ├── bluebird@3.7.2 deduped
│ │ │ ├── chokidar@3.5.3 deduped
│ │ │ ├── fs-exists-cached@1.0.0 deduped
│ │ │ ├── gatsby-core-utils@1.10.1 deduped
│ │ │ ├── glob@7.2.3 deduped
│ │ │ ├── lodash@4.17.21 deduped
│ │ │ └── micromatch@4.0.5 deduped
│ │ ├── gatsby-telemetry@1.10.2 deduped
│ │ ├── gatsby@2.32.13 deduped
│ │ ├─┬ globby@11.1.0
│ │ │ ├── array-union@2.1.0 deduped
│ │ │ ├── dir-glob@3.0.1 deduped
│ │ │ ├── fast-glob@3.2.12 deduped
│ │ │ ├── ignore@5.2.0
│ │ │ ├── merge2@1.4.1 deduped
│ │ │ └── slash@3.0.0 deduped
│ │ └── lodash@4.17.21 deduped
│ ├─┬ gatsby-plugin-typescript@2.12.1
│ │ ├── @babel/core@7.20.2 deduped
│ │ ├── @babel/plugin-proposal-nullish-coalescing-operator@7.18.6 deduped
│ │ ├─┬ @babel/plugin-proposal-numeric-separator@7.18.6
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ └── @babel/plugin-syntax-numeric-separator@7.10.4 deduped
│ │ ├── @babel/plugin-proposal-optional-chaining@7.18.9 deduped
│ │ ├─┬ @babel/preset-typescript@7.18.6
│ │ │ ├── @babel/core@7.20.2 deduped
│ │ │ ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │ ├── @babel/helper-validator-option@7.18.6 deduped
│ │ │ └─┬ @babel/plugin-transform-typescript@7.20.2
│ │ │   ├── @babel/core@7.20.2 deduped
│ │ │   ├── @babel/helper-create-class-features-plugin@7.20.2 deduped
│ │ │   ├── @babel/helper-plugin-utils@7.20.2 deduped
│ │ │   └─┬ @babel/plugin-syntax-typescript@7.20.0
│ │ │     ├── @babel/core@7.20.2 deduped
│ │ │     └── @babel/helper-plugin-utils@7.20.2 deduped
│ │ ├── @babel/runtime@7.20.1 deduped
│ │ └── babel-plugin-remove-graphql-queries@2.16.1 deduped
│ ├── gatsby-plugin-utils@0.9.0 deduped
│ ├─┬ gatsby-react-router-scroll@3.7.0
│ │ ├── @babel/runtime@7.20.1 deduped
│ │ ├── @reach/router@1.3.4 deduped
│ │ ├── react-dom@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router
│ │ └── react@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router
│ ├── gatsby-telemetry@1.10.2 deduped
│ ├─┬ glob@7.2.3
│ │ ├── fs.realpath@1.0.0
│ │ ├─┬ inflight@1.0.6
│ │ │ ├── once@1.4.0 deduped
│ │ │ └── wrappy@1.0.2
│ │ ├── inherits@2.0.4
│ │ ├── minimatch@3.1.2 deduped
│ │ ├─┬ once@1.4.0
│ │ │ └── wrappy@1.0.2 deduped
│ │ └── path-is-absolute@1.0.1
│ ├─┬ got@8.3.2
│ │ ├── @sindresorhus/is@0.7.0
│ │ ├─┬ cacheable-request@2.1.4
│ │ │ ├── clone-response@1.0.2 deduped
│ │ │ ├── get-stream@3.0.0
│ │ │ ├── http-cache-semantics@3.8.1
│ │ │ ├── keyv@3.0.0 deduped
│ │ │ ├── lowercase-keys@1.0.0
│ │ │ ├─┬ normalize-url@2.0.1
│ │ │ │ ├── prepend-http@2.0.0 deduped
│ │ │ │ ├─┬ query-string@5.1.1
│ │ │ │ │ ├── decode-uri-component@0.2.0 deduped
│ │ │ │ │ ├── object-assign@4.1.1 deduped
│ │ │ │ │ └── strict-uri-encode@1.1.0
│ │ │ │ └─┬ sort-keys@2.0.0
│ │ │ │   └── is-plain-obj@1.1.0 deduped
│ │ │ └── responselike@1.0.2 deduped
│ │ ├── decompress-response@3.3.0 deduped
│ │ ├── duplexer3@0.1.5 deduped
│ │ ├── get-stream@3.0.0
│ │ ├─┬ into-stream@3.1.0
│ │ │ ├─┬ from2@2.3.0
│ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ └── readable-stream@2.3.7 deduped
│ │ │ └── p-is-promise@1.1.0
│ │ ├── is-retry-allowed@1.2.0
│ │ ├─┬ isurl@1.0.0
│ │ │ ├─┬ has-to-string-tag-x@1.4.1
│ │ │ │ └── has-symbol-support-x@1.4.2
│ │ │ └── is-object@1.0.2
│ │ ├── lowercase-keys@1.0.1 deduped
│ │ ├── mimic-response@1.0.1 deduped
│ │ ├── p-cancelable@0.4.1
│ │ ├─┬ p-timeout@2.0.1
│ │ │ └── p-finally@1.0.0
│ │ ├── pify@3.0.0
│ │ ├── safe-buffer@5.1.2 deduped
│ │ ├── timed-out@4.0.1
│ │ ├── url-parse-lax@3.0.0 deduped
│ │ └── url-to-options@1.0.1
│ ├─┬ graphql-compose@6.3.8
│ │ ├─┬ graphql-type-json@0.2.4
│ │ │ └── graphql@14.7.0 deduped
│ │ ├── graphql@14.7.0 deduped
│ │ └── object-path@0.11.8
│ ├─┬ graphql-playground-middleware-express@1.7.23
│ │ ├── express@4.18.2 deduped
│ │ └─┬ graphql-playground-html@1.6.30
│ │   └─┬ xss@1.0.14
│ │     ├── commander@2.20.3 deduped
│ │     └── cssfilter@0.0.10
│ ├─┬ graphql@14.7.0
│ │ └── iterall@1.3.0
│ ├─┬ hasha@5.2.2
│ │ ├── is-stream@2.0.1 deduped
│ │ └── type-fest@0.8.1
│ ├─┬ http-proxy@1.18.1
│ │ ├── eventemitter3@4.0.7
│ │ ├── follow-redirects@1.15.2 deduped
│ │ └── requires-port@1.0.0
│ ├─┬ invariant@2.2.4
│ │ └── loose-envify@1.4.0 deduped
│ ├── is-relative-url@3.0.0 deduped
│ ├─┬ is-relative@1.0.0
│ │ └─┬ is-unc-path@1.0.0
│ │   └── unc-path-regex@0.1.2
│ ├─┬ jest-worker@24.9.0
│ │ ├── merge-stream@2.0.0 deduped
│ │ └─┬ supports-color@6.1.0
│ │   └── has-flag@3.0.0
│ ├─┬ joi@17.7.0
│ │ ├── @hapi/hoek@9.3.0
│ │ ├─┬ @hapi/topo@5.1.0
│ │ │ └── @hapi/hoek@9.3.0 deduped
│ │ ├─┬ @sideway/address@4.1.4
│ │ │ └── @hapi/hoek@9.3.0
│ │ ├── @sideway/formula@3.0.0
│ │ └── @sideway/pinpoint@2.0.0
│ ├── json-loader@0.5.7
│ ├── json-stringify-safe@5.0.1
│ ├─┬ latest-version@5.1.0
│ │ └─┬ package-json@6.5.0
│ │   ├─┬ got@9.6.0
│ │   │ ├── @sindresorhus/is@0.14.0
│ │   │ ├── @szmarczak/http-timer@1.1.2 deduped
│ │   │ ├─┬ cacheable-request@6.1.0
│ │   │ │ ├── clone-response@1.0.2 deduped
│ │   │ │ ├── get-stream@5.2.0 deduped
│ │   │ │ ├── http-cache-semantics@4.1.0
│ │   │ │ ├── keyv@3.0.0 deduped
│ │   │ │ ├── lowercase-keys@2.0.0
│ │   │ │ ├── normalize-url@4.5.1
│ │   │ │ └── responselike@1.0.2 deduped
│ │   │ ├── decompress-response@3.3.0 deduped
│ │   │ ├── duplexer3@0.1.5 deduped
│ │   │ ├─┬ get-stream@4.1.0
│ │   │ │ └── pump@3.0.0 deduped
│ │   │ ├── lowercase-keys@1.0.1 deduped
│ │   │ ├── mimic-response@1.0.1 deduped
│ │   │ ├── p-cancelable@1.1.0
│ │   │ ├── to-readable-stream@1.0.0 deduped
│ │   │ └── url-parse-lax@3.0.0 deduped
│ │   ├─┬ registry-auth-token@4.2.2
│ │   │ └── rc@1.2.8 deduped
│ │   ├─┬ registry-url@5.1.0
│ │   │ └── rc@1.2.8 deduped
│ │   └── semver@6.3.0
│ ├── lodash@4.17.21 deduped
│ ├── md5-file@5.0.0 deduped
│ ├── meant@1.0.3
│ ├─┬ memoizee@0.4.15
│ │ ├─┬ d@1.0.1
│ │ │ ├── es5-ext@0.10.62 deduped
│ │ │ └── type@1.2.0
│ │ ├─┬ es5-ext@0.10.62
│ │ │ ├─┬ es6-iterator@2.0.3
│ │ │ │ ├── d@1.0.1 deduped
│ │ │ │ ├── es5-ext@0.10.62 deduped
│ │ │ │ └── es6-symbol@3.1.3 deduped
│ │ │ ├─┬ es6-symbol@3.1.3
│ │ │ │ ├── d@1.0.1 deduped
│ │ │ │ └─┬ ext@1.7.0
│ │ │ │   └── type@2.7.2
│ │ │ └── next-tick@1.1.0 deduped
│ │ ├─┬ es6-weak-map@2.0.3
│ │ │ ├── d@1.0.1 deduped
│ │ │ ├── es5-ext@0.10.62 deduped
│ │ │ ├── es6-iterator@2.0.3 deduped
│ │ │ └── es6-symbol@3.1.3 deduped
│ │ ├─┬ event-emitter@0.3.5
│ │ │ ├── d@1.0.1 deduped
│ │ │ └── es5-ext@0.10.62 deduped
│ │ ├── is-promise@2.2.2
│ │ ├─┬ lru-queue@0.1.0
│ │ │ └── es5-ext@0.10.62 deduped
│ │ ├── next-tick@1.1.0
│ │ └─┬ timers-ext@0.1.7
│ │   ├── es5-ext@0.10.62 deduped
│ │   └── next-tick@1.1.0 deduped
│ ├─┬ micromatch@4.0.5
│ │ ├── braces@3.0.2 deduped
│ │ └── picomatch@2.3.1
│ ├── mime@2.6.0 deduped
│ ├─┬ mini-css-extract-plugin@0.11.3
│ │ ├─┬ loader-utils@1.4.2
│ │ │ ├── big.js@5.2.2 deduped
│ │ │ ├── emojis-list@3.0.0 deduped
│ │ │ └─┬ json5@1.0.1
│ │ │   └── minimist@1.2.7 deduped
│ │ ├─┬ normalize-url@1.9.1
│ │ │ ├── object-assign@4.1.1 deduped
│ │ │ ├── prepend-http@1.0.4
│ │ │ ├─┬ query-string@4.3.4
│ │ │ │ ├── object-assign@4.1.1 deduped
│ │ │ │ └── strict-uri-encode@1.1.0
│ │ │ └─┬ sort-keys@1.1.2
│ │ │   └── is-plain-obj@1.1.0 deduped
│ │ ├─┬ schema-utils@1.0.0
│ │ │ ├─┬ ajv-errors@1.0.1
│ │ │ │ └── ajv@6.12.6 deduped
│ │ │ ├── ajv-keywords@3.5.2 deduped
│ │ │ └── ajv@6.12.6 deduped
│ │ ├─┬ webpack-sources@1.4.3
│ │ │ ├── source-list-map@2.0.1 deduped
│ │ │ └── source-map@0.6.1
│ │ └── webpack@4.46.0 deduped
│ ├── mitt@1.2.0
│ ├─┬ mkdirp@0.5.6
│ │ └── minimist@1.2.7
│ ├── moment@2.29.4
│ ├── name-all-modules-plugin@1.0.1
│ ├── normalize-path@3.0.0
│ ├─┬ null-loader@3.0.0
│ │ ├─┬ loader-utils@1.4.2
│ │ │ ├── big.js@5.2.2 deduped
│ │ │ ├── emojis-list@3.0.0 deduped
│ │ │ └─┬ json5@1.0.1
│ │ │   └── minimist@1.2.7 deduped
│ │ ├─┬ schema-utils@1.0.0
│ │ │ ├── ajv-errors@1.0.1 deduped
│ │ │ ├── ajv-keywords@3.5.2 deduped
│ │ │ └── ajv@6.12.6 deduped
│ │ └── webpack@4.46.0 deduped
│ ├── opentracing@0.14.7
│ ├─┬ optimize-css-assets-webpack-plugin@5.0.8
│ │ ├─┬ cssnano@4.1.11
│ │ │ ├─┬ cosmiconfig@5.2.1
│ │ │ │ ├─┬ import-fresh@2.0.0
│ │ │ │ │ ├─┬ caller-path@2.0.0
│ │ │ │ │ │ └─┬ caller-callsite@2.0.0
│ │ │ │ │ │   └── callsites@2.0.0
│ │ │ │ │ └── resolve-from@3.0.0
│ │ │ │ ├── is-directory@0.3.1
│ │ │ │ ├── js-yaml@3.14.1 deduped
│ │ │ │ └─┬ parse-json@4.0.0
│ │ │ │   ├── error-ex@1.3.2 deduped
│ │ │ │   └── json-parse-better-errors@1.0.2 deduped
│ │ │ ├─┬ cssnano-preset-default@4.0.8
│ │ │ │ ├─┬ css-declaration-sorter@4.0.1
│ │ │ │ │ ├── postcss@7.0.39 deduped
│ │ │ │ │ └── timsort@0.3.0
│ │ │ │ ├─┬ cssnano-util-raw-cache@4.0.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-calc@7.0.5
│ │ │ │ │ ├─┬ postcss-selector-parser@6.0.10
│ │ │ │ │ │ ├── cssesc@3.0.0 deduped
│ │ │ │ │ │ └── util-deprecate@1.0.2 deduped
│ │ │ │ │ ├── postcss-value-parser@4.2.0 deduped
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-colormin@4.0.3
│ │ │ │ │ ├── browserslist@4.21.4 deduped
│ │ │ │ │ ├── color@3.2.1 deduped
│ │ │ │ │ ├── has@1.0.3 deduped
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-convert-values@4.0.1
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-discard-comments@4.0.2
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-discard-duplicates@4.0.2
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-discard-empty@4.0.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-discard-overridden@4.0.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-merge-longhand@4.0.11
│ │ │ │ │ ├── css-color-names@0.0.4
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ ├── postcss@7.0.39 deduped
│ │ │ │ │ └─┬ stylehacks@4.0.3
│ │ │ │ │   ├── browserslist@4.21.4 deduped
│ │ │ │ │   ├─┬ postcss-selector-parser@3.1.2
│ │ │ │ │   │ ├── dot-prop@5.3.0 deduped
│ │ │ │ │   │ ├── indexes-of@1.0.1 deduped
│ │ │ │ │   │ └── uniq@1.0.1 deduped
│ │ │ │ │   └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-merge-rules@4.0.3
│ │ │ │ │ ├── browserslist@4.21.4 deduped
│ │ │ │ │ ├─┬ caniuse-api@3.0.0
│ │ │ │ │ │ ├── browserslist@4.21.4 deduped
│ │ │ │ │ │ ├── caniuse-lite@1.0.30001431 deduped
│ │ │ │ │ │ ├── lodash.memoize@4.1.2
│ │ │ │ │ │ └── lodash.uniq@4.5.0
│ │ │ │ │ ├── cssnano-util-same-parent@4.0.1
│ │ │ │ │ ├─┬ postcss-selector-parser@3.1.2
│ │ │ │ │ │ ├── dot-prop@5.3.0 deduped
│ │ │ │ │ │ ├── indexes-of@1.0.1
│ │ │ │ │ │ └── uniq@1.0.1
│ │ │ │ │ ├── postcss@7.0.39 deduped
│ │ │ │ │ └── vendors@1.0.4
│ │ │ │ ├─┬ postcss-minify-font-values@4.0.2
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-minify-gradients@4.0.2
│ │ │ │ │ ├── cssnano-util-get-arguments@4.0.0
│ │ │ │ │ ├─┬ is-color-stop@1.1.0
│ │ │ │ │ │ ├── css-color-names@0.0.4 deduped
│ │ │ │ │ │ ├── hex-color-regex@1.1.0
│ │ │ │ │ │ ├── hsl-regex@1.0.0
│ │ │ │ │ │ ├── hsla-regex@1.0.0
│ │ │ │ │ │ ├── rgb-regex@1.0.1
│ │ │ │ │ │ └── rgba-regex@1.0.0
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-minify-params@4.0.2
│ │ │ │ │ ├── alphanum-sort@1.0.2
│ │ │ │ │ ├── browserslist@4.21.4 deduped
│ │ │ │ │ ├── cssnano-util-get-arguments@4.0.0 deduped
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ ├── postcss@7.0.39 deduped
│ │ │ │ │ └── uniqs@2.0.0
│ │ │ │ ├─┬ postcss-minify-selectors@4.0.2
│ │ │ │ │ ├── alphanum-sort@1.0.2 deduped
│ │ │ │ │ ├── has@1.0.3 deduped
│ │ │ │ │ ├─┬ postcss-selector-parser@3.1.2
│ │ │ │ │ │ ├── dot-prop@5.3.0 deduped
│ │ │ │ │ │ ├── indexes-of@1.0.1 deduped
│ │ │ │ │ │ └── uniq@1.0.1 deduped
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-normalize-charset@4.0.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-normalize-display-values@4.0.2
│ │ │ │ │ ├── cssnano-util-get-match@4.0.0
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-normalize-positions@4.0.2
│ │ │ │ │ ├── cssnano-util-get-arguments@4.0.0 deduped
│ │ │ │ │ ├── has@1.0.3 deduped
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-normalize-repeat-style@4.0.2
│ │ │ │ │ ├── cssnano-util-get-arguments@4.0.0 deduped
│ │ │ │ │ ├── cssnano-util-get-match@4.0.0 deduped
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-normalize-string@4.0.2
│ │ │ │ │ ├── has@1.0.3 deduped
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-normalize-timing-functions@4.0.2
│ │ │ │ │ ├── cssnano-util-get-match@4.0.0 deduped
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-normalize-unicode@4.0.1
│ │ │ │ │ ├── browserslist@4.21.4 deduped
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-normalize-url@4.0.1
│ │ │ │ │ ├── is-absolute-url@2.1.0
│ │ │ │ │ ├── normalize-url@3.3.0
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-normalize-whitespace@4.0.2
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-ordered-values@4.1.2
│ │ │ │ │ ├── cssnano-util-get-arguments@4.0.0 deduped
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-reduce-initial@4.0.3
│ │ │ │ │ ├── browserslist@4.21.4 deduped
│ │ │ │ │ ├── caniuse-api@3.0.0 deduped
│ │ │ │ │ ├── has@1.0.3 deduped
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-reduce-transforms@4.0.2
│ │ │ │ │ ├── cssnano-util-get-match@4.0.0 deduped
│ │ │ │ │ ├── has@1.0.3 deduped
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ └── postcss@7.0.39 deduped
│ │ │ │ ├─┬ postcss-svgo@4.0.3
│ │ │ │ │ ├── postcss-value-parser@3.3.1
│ │ │ │ │ ├── postcss@7.0.39 deduped
│ │ │ │ │ └── svgo@1.3.2 deduped
│ │ │ │ ├─┬ postcss-unique-selectors@4.0.1
│ │ │ │ │ ├── alphanum-sort@1.0.2 deduped
│ │ │ │ │ ├── postcss@7.0.39 deduped
│ │ │ │ │ └── uniqs@2.0.0 deduped
│ │ │ │ └── postcss@7.0.39 deduped
│ │ │ ├── is-resolvable@1.1.0
│ │ │ └── postcss@7.0.39 deduped
│ │ ├─┬ last-call-webpack-plugin@3.0.0
│ │ │ ├── lodash@4.17.21 deduped
│ │ │ └── webpack-sources@1.4.3 deduped
│ │ └── webpack@4.46.0 deduped
│ ├── p-defer@3.0.0
│ ├── parseurl@1.3.3
│ ├── physical-cpu-count@2.0.0
│ ├─┬ pnp-webpack-plugin@1.7.0
│ │ └── ts-pnp@1.2.0
│ ├─┬ postcss-flexbugs-fixes@4.2.1
│ │ └── postcss@7.0.39 deduped
│ ├─┬ postcss-loader@3.0.0
│ │ ├─┬ loader-utils@1.4.2
│ │ │ ├── big.js@5.2.2 deduped
│ │ │ ├── emojis-list@3.0.0 deduped
│ │ │ └─┬ json5@1.0.1
│ │ │   └── minimist@1.2.7 deduped
│ │ ├─┬ postcss-load-config@2.1.2
│ │ │ ├─┬ cosmiconfig@5.2.1
│ │ │ │ ├─┬ import-fresh@2.0.0
│ │ │ │ │ ├── caller-path@2.0.0 deduped
│ │ │ │ │ └── resolve-from@3.0.0
│ │ │ │ ├── is-directory@0.3.1 deduped
│ │ │ │ ├── js-yaml@3.14.1 deduped
│ │ │ │ └─┬ parse-json@4.0.0
│ │ │ │   ├── error-ex@1.3.2 deduped
│ │ │ │   └── json-parse-better-errors@1.0.2 deduped
│ │ │ └─┬ import-cwd@2.1.0
│ │ │   └─┬ import-from@2.1.0
│ │ │     └── resolve-from@3.0.0
│ │ ├── postcss@7.0.39 deduped
│ │ └─┬ schema-utils@1.0.0
│ │   ├── ajv-errors@1.0.1 deduped
│ │   ├── ajv-keywords@3.5.2 deduped
│ │   └── ajv@6.12.6 deduped
│ ├─┬ prompts@2.4.2
│ │ ├── kleur@3.0.3
│ │ └── sisteransi@1.0.5
│ ├── prop-types@15.8.1 deduped
│ ├── query-string@6.14.1 deduped
│ ├── raw-loader@0.5.1
│ ├─┬ react-dev-utils@4.2.3
│ │ ├── address@1.0.3
│ │ ├── babel-code-frame@6.26.0 deduped
│ │ ├─┬ chalk@1.1.3
│ │ │ ├── ansi-styles@2.2.1
│ │ │ ├── escape-string-regexp@1.0.5 deduped
│ │ │ ├─┬ has-ansi@2.0.0
│ │ │ │ └── ansi-regex@2.1.1
│ │ │ ├── strip-ansi@3.0.1 deduped
│ │ │ └── supports-color@2.0.0
│ │ ├─┬ cross-spawn@5.1.0
│ │ │ ├─┬ lru-cache@4.1.5
│ │ │ │ ├── pseudomap@1.0.2 deduped
│ │ │ │ └── yallist@2.1.2 deduped
│ │ │ ├── shebang-command@1.2.0 deduped
│ │ │ └── which@1.3.1 deduped
│ │ ├─┬ detect-port-alt@1.1.3
│ │ │ ├── address@1.1.2 deduped
│ │ │ └─┬ debug@2.6.9
│ │ │   └── ms@2.0.0
│ │ ├── escape-string-regexp@1.0.5
│ │ ├── filesize@3.5.11
│ │ ├─┬ global-modules@1.0.0
│ │ │ ├─┬ global-prefix@1.0.2
│ │ │ │ ├─┬ expand-tilde@2.0.2
│ │ │ │ │ └── homedir-polyfill@1.0.3 deduped
│ │ │ │ ├─┬ homedir-polyfill@1.0.3
│ │ │ │ │ └── parse-passwd@1.0.0
│ │ │ │ ├── ini@1.3.8 deduped
│ │ │ │ ├── is-windows@1.0.2 deduped
│ │ │ │ └── which@1.3.1 deduped
│ │ │ ├── is-windows@1.0.2
│ │ │ └─┬ resolve-dir@1.0.1
│ │ │   ├── expand-tilde@2.0.2 deduped
│ │ │   └── global-modules@1.0.0 deduped
│ │ ├─┬ gzip-size@3.0.0
│ │ │ └── duplexer@0.1.2
│ │ ├─┬ inquirer@3.3.0
│ │ │ ├── ansi-escapes@3.2.0
│ │ │ ├─┬ chalk@2.4.2
│ │ │ │ ├─┬ ansi-styles@3.2.1
│ │ │ │ │ └─┬ color-convert@1.9.3
│ │ │ │ │   └── color-name@1.1.3
│ │ │ │ ├── escape-string-regexp@1.0.5 deduped
│ │ │ │ └─┬ supports-color@5.5.0
│ │ │ │   └── has-flag@3.0.0
│ │ │ ├─┬ cli-cursor@2.1.0
│ │ │ │ └─┬ restore-cursor@2.0.0
│ │ │ │   ├─┬ onetime@2.0.1
│ │ │ │   │ └── mimic-fn@1.2.0
│ │ │ │   └── signal-exit@3.0.7 deduped
│ │ │ ├── cli-width@2.2.1
│ │ │ ├─┬ external-editor@2.2.0
│ │ │ │ ├── chardet@0.4.2
│ │ │ │ ├── iconv-lite@0.4.24 deduped
│ │ │ │ └─┬ tmp@0.0.33
│ │ │ │   └── os-tmpdir@1.0.2 deduped
│ │ │ ├─┬ figures@2.0.0
│ │ │ │ └── escape-string-regexp@1.0.5 deduped
│ │ │ ├── lodash@4.17.21 deduped
│ │ │ ├── mute-stream@0.0.7
│ │ │ ├── run-async@2.4.1 deduped
│ │ │ ├─┬ rx-lite-aggregates@4.0.8
│ │ │ │ └── rx-lite@4.0.8 deduped
│ │ │ ├── rx-lite@4.0.8
│ │ │ ├── string-width@2.1.1 deduped
│ │ │ ├─┬ strip-ansi@4.0.0
│ │ │ │ └── ansi-regex@3.0.1
│ │ │ └── through@2.3.8 deduped
│ │ ├── is-root@1.0.0
│ │ ├─┬ opn@5.1.0
│ │ │ └── is-wsl@1.1.0
│ │ ├── react-error-overlay@3.0.0 deduped
│ │ ├─┬ recursive-readdir@2.2.1
│ │ │ └─┬ minimatch@3.0.3
│ │ │   └── brace-expansion@1.1.11 deduped
│ │ ├─┬ shell-quote@1.6.1
│ │ │ ├── array-filter@0.0.1
│ │ │ ├── array-map@0.0.1
│ │ │ ├── array-reduce@0.0.0
│ │ │ └── jsonify@0.0.1
│ │ ├─┬ sockjs-client@1.1.4
│ │ │ ├─┬ debug@2.6.9
│ │ │ │ └── ms@2.0.0
│ │ │ ├─┬ eventsource@0.1.6
│ │ │ │ └─┬ original@1.0.2
│ │ │ │   └── url-parse@1.5.10 deduped
│ │ │ ├── faye-websocket@0.11.4 deduped
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ ├── json3@3.3.3
│ │ │ └── url-parse@1.5.10 deduped
│ │ ├─┬ strip-ansi@3.0.1
│ │ │ └── ansi-regex@2.1.1
│ │ └── text-table@0.2.0 deduped
│ ├── react-dom@17.0.2 deduped
│ ├── react-error-overlay@3.0.0
│ ├─┬ react-hot-loader@4.13.1
│ │ ├─┬ @types/react@17.0.52
│ │ │ ├── @types/prop-types@15.7.5
│ │ │ ├── @types/scheduler@0.16.2
│ │ │ └── csstype@3.1.1
│ │ ├── fast-levenshtein@2.0.6
│ │ ├─┬ global@4.4.0
│ │ │ ├─┬ min-document@2.19.0
│ │ │ │ └── dom-walk@0.1.2
│ │ │ └── process@0.11.10
│ │ ├─┬ hoist-non-react-statics@3.3.2
│ │ │ └── react-is@16.13.1 deduped
│ │ ├── loader-utils@2.0.4 deduped
│ │ ├── prop-types@15.8.1 deduped
│ │ ├── react-dom@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router
│ │ ├── react-lifecycles-compat@3.0.4 deduped
│ │ ├── react@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router
│ │ ├── shallowequal@1.1.0
│ │ └── source-map@0.7.4 deduped
│ ├── react-refresh@0.8.3
│ ├── react@17.0.2 deduped
│ ├─┬ redux-thunk@2.4.2
│ │ └── redux@4.2.0 deduped
│ ├─┬ redux@4.2.0
│ │ └── @babel/runtime@7.20.1 deduped
│ ├── semver@7.3.8 deduped
│ ├── shallow-compare@1.2.2
│ ├── signal-exit@3.0.7
│ ├── slugify@1.6.5
│ ├─┬ socket.io-client@3.1.1
│ │ ├── @types/component-emitter@1.2.11
│ │ ├── backo2@1.0.2
│ │ ├── component-emitter@1.3.0
│ │ ├─┬ debug@4.3.4
│ │ │ └── ms@2.1.2
│ │ ├─┬ engine.io-client@4.1.4
│ │ │ ├── base64-arraybuffer@0.1.4
│ │ │ ├── component-emitter@1.3.0 deduped
│ │ │ ├─┬ debug@4.3.4
│ │ │ │ └── ms@2.1.2
│ │ │ ├─┬ engine.io-parser@4.0.3
│ │ │ │ └── base64-arraybuffer@0.1.4 deduped
│ │ │ ├── has-cors@1.1.0
│ │ │ ├── parseqs@0.0.6
│ │ │ ├── parseuri@0.0.6 deduped
│ │ │ ├─┬ ws@7.4.6
│ │ │ │ ├── UNMET OPTIONAL DEPENDENCY bufferutil@^4.0.1
│ │ │ │ └── UNMET OPTIONAL DEPENDENCY utf-8-validate@^5.0.2
│ │ │ ├── xmlhttprequest-ssl@1.6.3
│ │ │ └── yeast@0.1.2
│ │ ├── parseuri@0.0.6
│ │ └─┬ socket.io-parser@4.0.5
│ │   ├── @types/component-emitter@1.2.11 deduped
│ │   ├── component-emitter@1.3.0 deduped
│ │   └─┬ debug@4.3.4
│ │     └── ms@2.1.2
│ ├─┬ socket.io@3.1.1
│ │ ├── @types/cookie@0.4.1
│ │ ├── @types/cors@2.8.12
│ │ ├── @types/node@14.18.33
│ │ ├── accepts@1.3.8 deduped
│ │ ├── base64id@2.0.0
│ │ ├─┬ debug@4.3.4
│ │ │ └── ms@2.1.2
│ │ ├─┬ engine.io@4.1.2
│ │ │ ├── accepts@1.3.8 deduped
│ │ │ ├── base64id@2.0.0 deduped
│ │ │ ├── cookie@0.4.2
│ │ │ ├── cors@2.8.5 deduped
│ │ │ ├─┬ debug@4.3.4
│ │ │ │ └── ms@2.1.2
│ │ │ ├── engine.io-parser@4.0.3 deduped
│ │ │ └─┬ ws@7.4.6
│ │ │   ├── UNMET OPTIONAL DEPENDENCY bufferutil@^4.0.1
│ │ │   └── UNMET OPTIONAL DEPENDENCY utf-8-validate@^5.0.2
│ │ ├── socket.io-adapter@2.1.0
│ │ └── socket.io-parser@4.0.5 deduped
│ ├─┬ source-map-support@0.5.21
│ │ ├── buffer-from@1.1.2
│ │ └── source-map@0.6.1
│ ├── source-map@0.7.4
│ ├─┬ st@2.0.0
│ │ ├─┬ async-cache@1.1.0
│ │ │ └── lru-cache@4.0.0 deduped
│ │ ├─┬ bl@4.1.0
│ │ │ ├─┬ buffer@5.7.1
│ │ │ │ ├── base64-js@1.5.1
│ │ │ │ └── ieee754@1.2.1 deduped
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ └─┬ readable-stream@3.6.0
│ │ │   ├── inherits@2.0.4 deduped
│ │ │   ├── string_decoder@1.1.1 deduped
│ │ │   └── util-deprecate@1.0.2 deduped
│ │ ├── fd@0.0.3
│ │ ├── graceful-fs@4.2.10 deduped
│ │ ├── mime@2.6.0 deduped
│ │ └── negotiator@0.6.3
│ ├── stack-trace@0.0.10
│ ├─┬ string-similarity@1.2.2
│ │ ├── lodash.every@4.6.0
│ │ ├── lodash.flattendeep@4.4.0
│ │ ├── lodash.foreach@4.5.0
│ │ ├── lodash.map@4.6.0
│ │ └── lodash.maxby@4.6.0
│ ├─┬ strip-ansi@5.2.0
│ │ └── ansi-regex@4.1.1
│ ├─┬ style-loader@0.23.1
│ │ ├─┬ loader-utils@1.4.2
│ │ │ ├── big.js@5.2.2 deduped
│ │ │ ├── emojis-list@3.0.0 deduped
│ │ │ └─┬ json5@1.0.1
│ │ │   └── minimist@1.2.7 deduped
│ │ └─┬ schema-utils@1.0.0
│ │   ├── ajv-errors@1.0.1 deduped
│ │   ├── ajv-keywords@3.5.2 deduped
│ │   └── ajv@6.12.6 deduped
│ ├─┬ terser-webpack-plugin@2.3.8
│ │ ├─┬ cacache@13.0.1
│ │ │ ├── chownr@1.1.4 deduped
│ │ │ ├── figgy-pudding@3.5.2
│ │ │ ├─┬ fs-minipass@2.1.0
│ │ │ │ └── minipass@3.3.4 deduped
│ │ │ ├── glob@7.2.3 deduped
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ ├── infer-owner@1.0.4
│ │ │ ├─┬ lru-cache@5.1.1
│ │ │ │ └── yallist@3.1.1
│ │ │ ├─┬ minipass-collect@1.0.2
│ │ │ │ └── minipass@3.3.4 deduped
│ │ │ ├─┬ minipass-flush@1.0.5
│ │ │ │ └── minipass@3.3.4 deduped
│ │ │ ├─┬ minipass-pipeline@1.2.4
│ │ │ │ └── minipass@3.3.4 deduped
│ │ │ ├─┬ minipass@3.3.4
│ │ │ │ └── yallist@4.0.0
│ │ │ ├── mkdirp@0.5.6 deduped
│ │ │ ├─┬ move-concurrently@1.0.1
│ │ │ │ ├── aproba@1.2.0 deduped
│ │ │ │ ├─┬ copy-concurrently@1.0.5
│ │ │ │ │ ├── aproba@1.2.0 deduped
│ │ │ │ │ ├── fs-write-stream-atomic@1.0.10 deduped
│ │ │ │ │ ├── iferr@0.1.5
│ │ │ │ │ ├── mkdirp@0.5.6 deduped
│ │ │ │ │ ├─┬ rimraf@2.7.1
│ │ │ │ │ │ └── glob@7.2.3 deduped
│ │ │ │ │ └── run-queue@1.0.3 deduped
│ │ │ │ ├─┬ fs-write-stream-atomic@1.0.10
│ │ │ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ │ │ ├── iferr@0.1.5 deduped
│ │ │ │ │ ├── imurmurhash@0.1.4 deduped
│ │ │ │ │ └── readable-stream@2.3.7 deduped
│ │ │ │ ├── mkdirp@0.5.6 deduped
│ │ │ │ ├─┬ rimraf@2.7.1
│ │ │ │ │ └── glob@7.2.3 deduped
│ │ │ │ └─┬ run-queue@1.0.3
│ │ │ │   └── aproba@1.2.0 deduped
│ │ │ ├── p-map@3.0.0 deduped
│ │ │ ├── promise-inflight@1.0.1
│ │ │ ├─┬ rimraf@2.7.1
│ │ │ │ └── glob@7.2.3 deduped
│ │ │ ├─┬ ssri@7.1.1
│ │ │ │ ├── figgy-pudding@3.5.2 deduped
│ │ │ │ └── minipass@3.3.4 deduped
│ │ │ └─┬ unique-filename@1.1.1
│ │ │   └─┬ unique-slug@2.0.2
│ │ │     └── imurmurhash@0.1.4 deduped
│ │ ├── find-cache-dir@3.3.2 deduped
│ │ ├─┬ jest-worker@25.5.0
│ │ │ ├── merge-stream@2.0.0 deduped
│ │ │ └── supports-color@7.2.0 deduped
│ │ ├─┬ p-limit@2.3.0
│ │ │ └── p-try@2.2.0
│ │ ├── schema-utils@2.7.1 deduped
│ │ ├─┬ serialize-javascript@4.0.0
│ │ │ └─┬ randombytes@2.1.0
│ │ │   └── safe-buffer@5.1.2 deduped
│ │ ├── source-map@0.6.1
│ │ ├─┬ terser@4.8.1
│ │ │ ├── commander@2.20.3
│ │ │ ├── source-map-support@0.5.21 deduped
│ │ │ └── source-map@0.6.1
│ │ ├── webpack-sources@1.4.3 deduped
│ │ └── webpack@4.46.0 deduped
│ ├─┬ tmp@0.2.1
│ │ └── rimraf@3.0.2 deduped
│ ├── true-case-path@2.2.1
│ ├── type-of@2.0.1
│ ├─┬ url-loader@1.1.2
│ │ ├─┬ loader-utils@1.4.2
│ │ │ ├── big.js@5.2.2 deduped
│ │ │ ├── emojis-list@3.0.0 deduped
│ │ │ └─┬ json5@1.0.1
│ │ │   └── minimist@1.2.7 deduped
│ │ ├── mime@2.6.0 deduped
│ │ ├─┬ schema-utils@1.0.0
│ │ │ ├── ajv-errors@1.0.1 deduped
│ │ │ ├── ajv-keywords@3.5.2 deduped
│ │ │ └── ajv@6.12.6 deduped
│ │ └── webpack@4.46.0 deduped
│ ├─┬ util.promisify@1.1.1
│ │ ├─┬ call-bind@1.0.2
│ │ │ ├── function-bind@1.1.1 deduped
│ │ │ └── get-intrinsic@1.1.3 deduped
│ │ ├─┬ define-properties@1.1.4
│ │ │ ├─┬ has-property-descriptors@1.0.0
│ │ │ │ └── get-intrinsic@1.1.3 deduped
│ │ │ └── object-keys@1.1.1 deduped
│ │ ├─┬ for-each@0.3.3
│ │ │ └── is-callable@1.2.7
│ │ ├── has-symbols@1.0.3
│ │ └─┬ object.getownpropertydescriptors@2.1.5
│ │   ├─┬ array.prototype.reduce@1.0.5
│ │   │ ├── call-bind@1.0.2 deduped
│ │   │ ├── define-properties@1.1.4 deduped
│ │   │ ├── es-abstract@1.20.4 deduped
│ │   │ ├── es-array-method-boxes-properly@1.0.0
│ │   │ └── is-string@1.0.7 deduped
│ │   ├── call-bind@1.0.2 deduped
│ │   ├── define-properties@1.1.4 deduped
│ │   └── es-abstract@1.20.4 deduped
│ ├── uuid@3.4.0 deduped
│ ├── v8-compile-cache@2.3.0
│ ├─┬ webpack-dev-middleware@3.7.3
│ │ ├─┬ memory-fs@0.4.1
│ │ │ ├─┬ errno@0.1.8
│ │ │ │ └── prr@1.0.1
│ │ │ └── readable-stream@2.3.7 deduped
│ │ ├── mime@2.6.0 deduped
│ │ ├── mkdirp@0.5.6 deduped
│ │ ├── range-parser@1.2.1 deduped
│ │ ├─┬ webpack-log@2.0.0
│ │ │ ├── ansi-colors@3.2.4
│ │ │ └── uuid@3.4.0 deduped
│ │ └── webpack@4.46.0 deduped
│ ├─┬ webpack-dev-server@3.11.3
│ │ ├── ansi-html-community@0.0.8
│ │ ├─┬ bonjour@3.5.0
│ │ │ ├── array-flatten@2.1.2
│ │ │ ├─┬ deep-equal@1.1.1
│ │ │ │ ├─┬ is-arguments@1.1.1
│ │ │ │ │ ├── call-bind@1.0.2 deduped
│ │ │ │ │ └── has-tostringtag@1.0.0 deduped
│ │ │ │ ├─┬ is-date-object@1.0.5
│ │ │ │ │ └── has-tostringtag@1.0.0 deduped
│ │ │ │ ├── is-regex@1.1.4 deduped
│ │ │ │ ├─┬ object-is@1.1.5
│ │ │ │ │ ├── call-bind@1.0.2 deduped
│ │ │ │ │ └── define-properties@1.1.4 deduped
│ │ │ │ ├── object-keys@1.1.1 deduped
│ │ │ │ └── regexp.prototype.flags@1.4.3 deduped
│ │ │ ├── dns-equal@1.0.0
│ │ │ ├─┬ dns-txt@2.0.2
│ │ │ │ └── buffer-indexof@1.1.1
│ │ │ ├── multicast-dns-service-types@1.1.0
│ │ │ └─┬ multicast-dns@6.2.3
│ │ │   ├─┬ dns-packet@1.3.4
│ │ │   │ ├── ip@1.1.8 deduped
│ │ │   │ └── safe-buffer@5.1.2 deduped
│ │ │   └── thunky@1.1.0
│ │ ├─┬ chokidar@2.1.8
│ │ │ ├─┬ anymatch@2.0.0
│ │ │ │ ├─┬ micromatch@3.1.10
│ │ │ │ │ ├── arr-diff@4.0.0 deduped
│ │ │ │ │ ├── array-unique@0.3.2 deduped
│ │ │ │ │ ├── braces@2.3.2 deduped
│ │ │ │ │ ├── define-property@2.0.2 deduped
│ │ │ │ │ ├─┬ extend-shallow@3.0.2
│ │ │ │ │ │ ├── assign-symbols@1.0.0 deduped
│ │ │ │ │ │ └─┬ is-extendable@1.0.1
│ │ │ │ │ │   └── is-plain-object@2.0.4 deduped
│ │ │ │ │ ├── extglob@2.0.4 deduped
│ │ │ │ │ ├── fragment-cache@0.2.1 deduped
│ │ │ │ │ ├── kind-of@6.0.3 deduped
│ │ │ │ │ ├── nanomatch@1.2.13 deduped
│ │ │ │ │ ├── object.pick@1.3.0 deduped
│ │ │ │ │ ├── regex-not@1.0.2 deduped
│ │ │ │ │ ├── snapdragon@0.8.2 deduped
│ │ │ │ │ └── to-regex@3.0.2 deduped
│ │ │ │ └─┬ normalize-path@2.1.1
│ │ │ │   └── remove-trailing-separator@1.1.0
│ │ │ ├── async-each@1.0.3
│ │ │ ├─┬ braces@2.3.2
│ │ │ │ ├── arr-flatten@1.1.0
│ │ │ │ ├── array-unique@0.3.2 deduped
│ │ │ │ ├── extend-shallow@2.0.1 deduped
│ │ │ │ ├─┬ fill-range@4.0.0
│ │ │ │ │ ├── extend-shallow@2.0.1 deduped
│ │ │ │ │ ├─┬ is-number@3.0.0
│ │ │ │ │ │ └─┬ kind-of@3.2.2
│ │ │ │ │ │   └── is-buffer@1.1.6
│ │ │ │ │ ├── repeat-string@1.6.1 deduped
│ │ │ │ │ └─┬ to-regex-range@2.1.1
│ │ │ │ │   ├── is-number@3.0.0 deduped
│ │ │ │ │   └── repeat-string@1.6.1 deduped
│ │ │ │ ├── isobject@3.0.1
│ │ │ │ ├── repeat-element@1.1.4
│ │ │ │ ├─┬ snapdragon-node@2.1.1
│ │ │ │ │ ├─┬ define-property@1.0.0
│ │ │ │ │ │ └── is-descriptor@1.0.2 deduped
│ │ │ │ │ ├── isobject@3.0.1 deduped
│ │ │ │ │ └─┬ snapdragon-util@3.0.1
│ │ │ │ │   └─┬ kind-of@3.2.2
│ │ │ │ │     └── is-buffer@1.1.6
│ │ │ │ ├── snapdragon@0.8.2 deduped
│ │ │ │ ├─┬ split-string@3.1.0
│ │ │ │ │ └─┬ extend-shallow@3.0.2
│ │ │ │ │   ├── assign-symbols@1.0.0 deduped
│ │ │ │ │   └─┬ is-extendable@1.0.1
│ │ │ │ │     └── is-plain-object@2.0.4 deduped
│ │ │ │ └── to-regex@3.0.2 deduped
│ │ │ ├─┬ fsevents@1.2.13
│ │ │ │ ├─┬ bindings@1.5.0
│ │ │ │ │ └── file-uri-to-path@1.0.0
│ │ │ │ └── nan@2.17.0
│ │ │ ├─┬ glob-parent@3.1.0
│ │ │ │ ├─┬ is-glob@3.1.0
│ │ │ │ │ └── is-extglob@2.1.1 deduped
│ │ │ │ └── path-dirname@1.0.2
│ │ │ ├── inherits@2.0.4 deduped
│ │ │ ├─┬ is-binary-path@1.0.1
│ │ │ │ └── binary-extensions@1.13.1
│ │ │ ├── is-glob@4.0.3 deduped
│ │ │ ├── normalize-path@3.0.0 deduped
│ │ │ ├── path-is-absolute@1.0.1 deduped
│ │ │ ├─┬ readdirp@2.2.1
│ │ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ │ ├── micromatch@3.1.10 deduped
│ │ │ │ └── readable-stream@2.3.7 deduped
│ │ │ └── upath@1.2.0
│ │ ├── compression@1.7.4 deduped
│ │ ├── connect-history-api-fallback@1.6.0
│ │ ├─┬ debug@4.3.4
│ │ │ └── ms@2.1.2
│ │ ├─┬ del@4.1.1
│ │ │ ├─┬ @types/glob@7.2.0
│ │ │ │ ├── @types/minimatch@5.1.2 deduped
│ │ │ │ └── @types/node@18.11.9 deduped
│ │ │ ├─┬ globby@6.1.0
│ │ │ │ ├─┬ array-union@1.0.2
│ │ │ │ │ └── array-uniq@1.0.3
│ │ │ │ ├── glob@7.2.3 deduped
│ │ │ │ ├── object-assign@4.1.1 deduped
│ │ │ │ ├── pify@2.3.0
│ │ │ │ └─┬ pinkie-promise@2.0.1
│ │ │ │   └── pinkie@2.0.4
│ │ │ ├── is-path-cwd@2.2.0 deduped
│ │ │ ├─┬ is-path-in-cwd@2.1.0
│ │ │ │ └─┬ is-path-inside@2.1.0
│ │ │ │   └── path-is-inside@1.0.2 deduped
│ │ │ ├── p-map@2.1.0
│ │ │ ├── pify@4.0.1
│ │ │ └─┬ rimraf@2.7.1
│ │ │   └── glob@7.2.3 deduped
│ │ ├── express@4.18.2 deduped
│ │ ├── html-entities@1.4.0 deduped
│ │ ├─┬ http-proxy-middleware@0.19.1
│ │ │ ├── http-proxy@1.18.1 deduped
│ │ │ ├── is-glob@4.0.3 deduped
│ │ │ ├── lodash@4.17.21 deduped
│ │ │ └─┬ micromatch@3.1.10
│ │ │   ├── arr-diff@4.0.0 deduped
│ │ │   ├── array-unique@0.3.2 deduped
│ │ │   ├─┬ braces@2.3.2
│ │ │   │ ├── arr-flatten@1.1.0 deduped
│ │ │   │ ├── array-unique@0.3.2 deduped
│ │ │   │ ├── extend-shallow@2.0.1 deduped
│ │ │   │ ├─┬ fill-range@4.0.0
│ │ │   │ │ ├── extend-shallow@2.0.1 deduped
│ │ │   │ │ ├─┬ is-number@3.0.0
│ │ │   │ │ │ └─┬ kind-of@3.2.2
│ │ │   │ │ │   └── is-buffer@1.1.6
│ │ │   │ │ ├── repeat-string@1.6.1 deduped
│ │ │   │ │ └─┬ to-regex-range@2.1.1
│ │ │   │ │   ├── is-number@3.0.0 deduped
│ │ │   │ │   └── repeat-string@1.6.1 deduped
│ │ │   │ ├── isobject@3.0.1 deduped
│ │ │   │ ├── repeat-element@1.1.4 deduped
│ │ │   │ ├── snapdragon-node@2.1.1 deduped
│ │ │   │ ├── snapdragon@0.8.2 deduped
│ │ │   │ ├── split-string@3.1.0 deduped
│ │ │   │ └── to-regex@3.0.2 deduped
│ │ │   ├── define-property@2.0.2 deduped
│ │ │   ├─┬ extend-shallow@3.0.2
│ │ │   │ ├── assign-symbols@1.0.0 deduped
│ │ │   │ └─┬ is-extendable@1.0.1
│ │ │   │   └── is-plain-object@2.0.4 deduped
│ │ │   ├── extglob@2.0.4 deduped
│ │ │   ├── fragment-cache@0.2.1 deduped
│ │ │   ├── kind-of@6.0.3 deduped
│ │ │   ├── nanomatch@1.2.13 deduped
│ │ │   ├── object.pick@1.3.0 deduped
│ │ │   ├── regex-not@1.0.2 deduped
│ │ │   ├── snapdragon@0.8.2 deduped
│ │ │   └── to-regex@3.0.2 deduped
│ │ ├─┬ import-local@2.0.0
│ │ │ ├─┬ pkg-dir@3.0.0
│ │ │ │ └─┬ find-up@3.0.0
│ │ │ │   └─┬ locate-path@3.0.0
│ │ │ │     ├─┬ p-locate@3.0.0
│ │ │ │     │ └─┬ p-limit@2.3.0
│ │ │ │     │   └── p-try@2.2.0 deduped
│ │ │ │     └── path-exists@3.0.0
│ │ │ └─┬ resolve-cwd@2.0.0
│ │ │   └── resolve-from@3.0.0
│ │ ├─┬ internal-ip@4.3.0
│ │ │ ├─┬ default-gateway@4.2.0
│ │ │ │ ├─┬ execa@1.0.0
│ │ │ │ │ ├── cross-spawn@6.0.5 deduped
│ │ │ │ │ ├─┬ get-stream@4.1.0
│ │ │ │ │ │ └── pump@3.0.0 deduped
│ │ │ │ │ ├── is-stream@1.1.0
│ │ │ │ │ ├─┬ npm-run-path@2.0.2
│ │ │ │ │ │ └── path-key@2.0.1 deduped
│ │ │ │ │ ├── p-finally@1.0.0 deduped
│ │ │ │ │ ├── signal-exit@3.0.7 deduped
│ │ │ │ │ └── strip-eof@1.0.0 deduped
│ │ │ │ └── ip-regex@2.1.0
│ │ │ └── ipaddr.js@1.9.1 deduped
│ │ ├── ip@1.1.8
│ │ ├── is-absolute-url@3.0.3 deduped
│ │ ├── killable@1.0.1
│ │ ├── loglevel@1.8.1
│ │ ├─┬ opn@5.5.0
│ │ │ └── is-wsl@1.1.0
│ │ ├─┬ p-retry@3.0.1
│ │ │ └── retry@0.12.0 deduped
│ │ ├─┬ portfinder@1.0.32
│ │ │ ├─┬ async@2.6.4
│ │ │ │ └── lodash@4.17.21 deduped
│ │ │ ├── debug@3.2.7 deduped
│ │ │ └── mkdirp@0.5.6 deduped
│ │ ├─┬ schema-utils@1.0.0
│ │ │ ├── ajv-errors@1.0.1 deduped
│ │ │ ├── ajv-keywords@3.5.2 deduped
│ │ │ └── ajv@6.12.6 deduped
│ │ ├─┬ selfsigned@1.10.14
│ │ │ └── node-forge@0.10.0
│ │ ├── semver@6.3.0
│ │ ├─┬ serve-index@1.9.1
│ │ │ ├── accepts@1.3.8 deduped
│ │ │ ├── batch@0.6.1
│ │ │ ├─┬ debug@2.6.9
│ │ │ │ └── ms@2.0.0
│ │ │ ├── escape-html@1.0.3 deduped
│ │ │ ├─┬ http-errors@1.6.3
│ │ │ │ ├── depd@1.1.2
│ │ │ │ ├── inherits@2.0.3
│ │ │ │ ├── setprototypeof@1.1.0
│ │ │ │ └── statuses@1.5.0
│ │ │ ├── mime-types@2.1.35 deduped
│ │ │ └── parseurl@1.3.3 deduped
│ │ ├── sockjs-client@1.6.1 deduped
│ │ ├─┬ sockjs@0.3.24
│ │ │ ├── faye-websocket@0.11.4 deduped
│ │ │ ├── uuid@8.3.2
│ │ │ └─┬ websocket-driver@0.7.4
│ │ │   ├── http-parser-js@0.5.8
│ │ │   ├── safe-buffer@5.1.2 deduped
│ │ │   └── websocket-extensions@0.1.4
│ │ ├─┬ spdy@4.0.2
│ │ │ ├─┬ debug@4.3.4
│ │ │ │ └── ms@2.1.2
│ │ │ ├── handle-thing@2.0.1
│ │ │ ├── http-deceiver@1.2.7
│ │ │ ├── select-hose@2.0.0
│ │ │ └─┬ spdy-transport@3.0.0
│ │ │   ├─┬ debug@4.3.4
│ │ │   │ └── ms@2.1.2
│ │ │   ├── detect-node@2.1.0
│ │ │   ├─┬ hpack.js@2.1.6
│ │ │   │ ├── inherits@2.0.4 deduped
│ │ │   │ ├── obuf@1.1.2 deduped
│ │ │   │ ├── readable-stream@2.3.7 deduped
│ │ │   │ └── wbuf@1.7.3 deduped
│ │ │   ├── obuf@1.1.2
│ │ │   ├─┬ readable-stream@3.6.0
│ │ │   │ ├── inherits@2.0.4 deduped
│ │ │   │ ├── string_decoder@1.1.1 deduped
│ │ │   │ └── util-deprecate@1.0.2 deduped
│ │ │   └─┬ wbuf@1.7.3
│ │ │     └── minimalistic-assert@1.0.1
│ │ ├─┬ strip-ansi@3.0.1
│ │ │ └── ansi-regex@2.1.1
│ │ ├─┬ supports-color@6.1.0
│ │ │ └── has-flag@3.0.0
│ │ ├─┬ url@0.11.0
│ │ │ ├── punycode@1.3.2
│ │ │ └── querystring@0.2.0
│ │ ├── webpack-dev-middleware@3.7.3 deduped
│ │ ├── webpack-log@2.0.0 deduped
│ │ ├── webpack@4.46.0 deduped
│ │ ├─┬ ws@6.2.2
│ │ │ └── async-limiter@1.0.1
│ │ └─┬ yargs@13.3.2
│ │   ├─┬ cliui@5.0.0
│ │   │ ├── string-width@3.1.0 deduped
│ │   │ ├─┬ strip-ansi@5.2.0
│ │   │ │ └── ansi-regex@4.1.1
│ │   │ └─┬ wrap-ansi@5.1.0
│ │   │   ├─┬ ansi-styles@3.2.1
│ │   │   │ └─┬ color-convert@1.9.3
│ │   │   │   └── color-name@1.1.3
│ │   │   ├── string-width@3.1.0 deduped
│ │   │   └─┬ strip-ansi@5.2.0
│ │   │     └── ansi-regex@4.1.1
│ │   ├─┬ find-up@3.0.0
│ │   │ └─┬ locate-path@3.0.0
│ │   │   ├─┬ p-locate@3.0.0
│ │   │   │ └─┬ p-limit@2.3.0
│ │   │   │   └── p-try@2.2.0 deduped
│ │   │   └── path-exists@3.0.0
│ │   ├── get-caller-file@2.0.5 deduped
│ │   ├── require-directory@2.1.1 deduped
│ │   ├── require-main-filename@2.0.0 deduped
│ │   ├── set-blocking@2.0.0 deduped
│ │   ├─┬ string-width@3.1.0
│ │   │ ├── emoji-regex@7.0.3
│ │   │ ├── is-fullwidth-code-point@2.0.0 deduped
│ │   │ └─┬ strip-ansi@5.2.0
│ │   │   └── ansi-regex@4.1.1
│ │   ├── which-module@2.0.0 deduped
│ │   ├── y18n@4.0.3
│ │   └─┬ yargs-parser@13.1.2
│ │     ├── camelcase@5.3.1 deduped
│ │     └── decamelize@1.2.0 deduped
│ ├─┬ webpack-hot-middleware@2.25.3
│ │ ├── ansi-html-community@0.0.8 deduped
│ │ ├── html-entities@2.3.3
│ │ └─┬ strip-ansi@6.0.1
│ │   └── ansi-regex@5.0.1
│ ├─┬ webpack-merge@4.2.2
│ │ └── lodash@4.17.21 deduped
│ ├── webpack-stats-plugin@0.3.2
│ ├─┬ webpack-virtual-modules@0.2.2
│ │ └── debug@3.2.7 deduped
│ ├─┬ webpack@4.46.0
│ │ ├─┬ @webassemblyjs/ast@1.9.0
│ │ │ ├── @webassemblyjs/helper-module-context@1.9.0 deduped
│ │ │ ├── @webassemblyjs/helper-wasm-bytecode@1.9.0
│ │ │ └─┬ @webassemblyjs/wast-parser@1.9.0
│ │ │   ├── @webassemblyjs/ast@1.9.0 deduped
│ │ │   ├── @webassemblyjs/floating-point-hex-parser@1.9.0
│ │ │   ├── @webassemblyjs/helper-api-error@1.9.0 deduped
│ │ │   ├─┬ @webassemblyjs/helper-code-frame@1.9.0
│ │ │   │ └── @webassemblyjs/wast-printer@1.9.0 deduped
│ │ │   ├── @webassemblyjs/helper-fsm@1.9.0
│ │ │   └── @xtuc/long@4.2.2
│ │ ├─┬ @webassemblyjs/helper-module-context@1.9.0
│ │ │ └── @webassemblyjs/ast@1.9.0 deduped
│ │ ├─┬ @webassemblyjs/wasm-edit@1.9.0
│ │ │ ├── @webassemblyjs/ast@1.9.0 deduped
│ │ │ ├── @webassemblyjs/helper-buffer@1.9.0
│ │ │ ├── @webassemblyjs/helper-wasm-bytecode@1.9.0 deduped
│ │ │ ├─┬ @webassemblyjs/helper-wasm-section@1.9.0
│ │ │ │ ├── @webassemblyjs/ast@1.9.0 deduped
│ │ │ │ ├── @webassemblyjs/helper-buffer@1.9.0 deduped
│ │ │ │ ├── @webassemblyjs/helper-wasm-bytecode@1.9.0 deduped
│ │ │ │ └── @webassemblyjs/wasm-gen@1.9.0 deduped
│ │ │ ├─┬ @webassemblyjs/wasm-gen@1.9.0
│ │ │ │ ├── @webassemblyjs/ast@1.9.0 deduped
│ │ │ │ ├── @webassemblyjs/helper-wasm-bytecode@1.9.0 deduped
│ │ │ │ ├── @webassemblyjs/ieee754@1.9.0 deduped
│ │ │ │ ├── @webassemblyjs/leb128@1.9.0 deduped
│ │ │ │ └── @webassemblyjs/utf8@1.9.0 deduped
│ │ │ ├─┬ @webassemblyjs/wasm-opt@1.9.0
│ │ │ │ ├── @webassemblyjs/ast@1.9.0 deduped
│ │ │ │ ├── @webassemblyjs/helper-buffer@1.9.0 deduped
│ │ │ │ ├── @webassemblyjs/wasm-gen@1.9.0 deduped
│ │ │ │ └── @webassemblyjs/wasm-parser@1.9.0 deduped
│ │ │ ├── @webassemblyjs/wasm-parser@1.9.0 deduped
│ │ │ └─┬ @webassemblyjs/wast-printer@1.9.0
│ │ │   ├── @webassemblyjs/ast@1.9.0 deduped
│ │ │   ├── @webassemblyjs/wast-parser@1.9.0 deduped
│ │ │   └── @xtuc/long@4.2.2 deduped
│ │ ├─┬ @webassemblyjs/wasm-parser@1.9.0
│ │ │ ├── @webassemblyjs/ast@1.9.0 deduped
│ │ │ ├── @webassemblyjs/helper-api-error@1.9.0
│ │ │ ├── @webassemblyjs/helper-wasm-bytecode@1.9.0 deduped
│ │ │ ├─┬ @webassemblyjs/ieee754@1.9.0
│ │ │ │ └── @xtuc/ieee754@1.2.0
│ │ │ ├─┬ @webassemblyjs/leb128@1.9.0
│ │ │ │ └── @xtuc/long@4.2.2 deduped
│ │ │ └── @webassemblyjs/utf8@1.9.0
│ │ ├── acorn@6.4.2
│ │ ├─┬ ajv-keywords@3.5.2
│ │ │ └── ajv@6.12.6 deduped
│ │ ├── ajv@6.12.6 deduped
│ │ ├── chrome-trace-event@1.0.3
│ │ ├─┬ enhanced-resolve@4.5.0
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ ├─┬ memory-fs@0.5.0
│ │ │ │ ├── errno@0.1.8 deduped
│ │ │ │ └── readable-stream@2.3.7 deduped
│ │ │ └── tapable@1.1.3 deduped
│ │ ├─┬ eslint-scope@4.0.3
│ │ │ ├── esrecurse@4.3.0 deduped
│ │ │ └── estraverse@4.3.0
│ │ ├── json-parse-better-errors@1.0.2
│ │ ├── loader-runner@2.4.0
│ │ ├─┬ loader-utils@1.4.2
│ │ │ ├── big.js@5.2.2 deduped
│ │ │ ├── emojis-list@3.0.0 deduped
│ │ │ └─┬ json5@1.0.1
│ │ │   └── minimist@1.2.7 deduped
│ │ ├── memory-fs@0.4.1 deduped
│ │ ├─┬ micromatch@3.1.10
│ │ │ ├── arr-diff@4.0.0
│ │ │ ├── array-unique@0.3.2
│ │ │ ├─┬ braces@2.3.2
│ │ │ │ ├── arr-flatten@1.1.0 deduped
│ │ │ │ ├── array-unique@0.3.2 deduped
│ │ │ │ ├── extend-shallow@2.0.1 deduped
│ │ │ │ ├─┬ fill-range@4.0.0
│ │ │ │ │ ├── extend-shallow@2.0.1 deduped
│ │ │ │ │ ├─┬ is-number@3.0.0
│ │ │ │ │ │ └─┬ kind-of@3.2.2
│ │ │ │ │ │   └── is-buffer@1.1.6
│ │ │ │ │ ├── repeat-string@1.6.1 deduped
│ │ │ │ │ └─┬ to-regex-range@2.1.1
│ │ │ │ │   ├── is-number@3.0.0 deduped
│ │ │ │ │   └── repeat-string@1.6.1 deduped
│ │ │ │ ├── isobject@3.0.1 deduped
│ │ │ │ ├── repeat-element@1.1.4 deduped
│ │ │ │ ├── snapdragon-node@2.1.1 deduped
│ │ │ │ ├── snapdragon@0.8.2 deduped
│ │ │ │ ├── split-string@3.1.0 deduped
│ │ │ │ └── to-regex@3.0.2 deduped
│ │ │ ├─┬ define-property@2.0.2
│ │ │ │ ├─┬ is-descriptor@1.0.2
│ │ │ │ │ ├─┬ is-accessor-descriptor@1.0.0
│ │ │ │ │ │ └── kind-of@6.0.3 deduped
│ │ │ │ │ ├─┬ is-data-descriptor@1.0.0
│ │ │ │ │ │ └── kind-of@6.0.3 deduped
│ │ │ │ │ └── kind-of@6.0.3 deduped
│ │ │ │ └── isobject@3.0.1 deduped
│ │ │ ├─┬ extend-shallow@3.0.2
│ │ │ │ ├── assign-symbols@1.0.0
│ │ │ │ └─┬ is-extendable@1.0.1
│ │ │ │   └─┬ is-plain-object@2.0.4
│ │ │ │     └── isobject@3.0.1 deduped
│ │ │ ├─┬ extglob@2.0.4
│ │ │ │ ├── array-unique@0.3.2 deduped
│ │ │ │ ├─┬ define-property@1.0.0
│ │ │ │ │ └── is-descriptor@1.0.2 deduped
│ │ │ │ ├─┬ expand-brackets@2.1.4
│ │ │ │ │ ├─┬ debug@2.6.9
│ │ │ │ │ │ └── ms@2.0.0
│ │ │ │ │ ├─┬ define-property@0.2.5
│ │ │ │ │ │ └─┬ is-descriptor@0.1.6
│ │ │ │ │ │   ├─┬ is-accessor-descriptor@0.1.6
│ │ │ │ │ │   │ └─┬ kind-of@3.2.2
│ │ │ │ │ │   │   └── is-buffer@1.1.6
│ │ │ │ │ │   ├─┬ is-data-descriptor@0.1.4
│ │ │ │ │ │   │ └─┬ kind-of@3.2.2
│ │ │ │ │ │   │   └── is-buffer@1.1.6 deduped
│ │ │ │ │ │   └── kind-of@5.1.0
│ │ │ │ │ ├── extend-shallow@2.0.1 deduped
│ │ │ │ │ ├── posix-character-classes@0.1.1
│ │ │ │ │ ├── regex-not@1.0.2 deduped
│ │ │ │ │ ├── snapdragon@0.8.2 deduped
│ │ │ │ │ └── to-regex@3.0.2 deduped
│ │ │ │ ├── extend-shallow@2.0.1 deduped
│ │ │ │ ├── fragment-cache@0.2.1 deduped
│ │ │ │ ├── regex-not@1.0.2 deduped
│ │ │ │ ├── snapdragon@0.8.2 deduped
│ │ │ │ └── to-regex@3.0.2 deduped
│ │ │ ├─┬ fragment-cache@0.2.1
│ │ │ │ └── map-cache@0.2.2
│ │ │ ├── kind-of@6.0.3 deduped
│ │ │ ├─┬ nanomatch@1.2.13
│ │ │ │ ├── arr-diff@4.0.0 deduped
│ │ │ │ ├── array-unique@0.3.2 deduped
│ │ │ │ ├── define-property@2.0.2 deduped
│ │ │ │ ├─┬ extend-shallow@3.0.2
│ │ │ │ │ ├── assign-symbols@1.0.0 deduped
│ │ │ │ │ └─┬ is-extendable@1.0.1
│ │ │ │ │   └── is-plain-object@2.0.4 deduped
│ │ │ │ ├── fragment-cache@0.2.1 deduped
│ │ │ │ ├── is-windows@1.0.2 deduped
│ │ │ │ ├── kind-of@6.0.3 deduped
│ │ │ │ ├── object.pick@1.3.0 deduped
│ │ │ │ ├── regex-not@1.0.2 deduped
│ │ │ │ ├── snapdragon@0.8.2 deduped
│ │ │ │ └── to-regex@3.0.2 deduped
│ │ │ ├─┬ object.pick@1.3.0
│ │ │ │ └── isobject@3.0.1 deduped
│ │ │ ├─┬ regex-not@1.0.2
│ │ │ │ ├─┬ extend-shallow@3.0.2
│ │ │ │ │ ├── assign-symbols@1.0.0 deduped
│ │ │ │ │ └─┬ is-extendable@1.0.1
│ │ │ │ │   └── is-plain-object@2.0.4 deduped
│ │ │ │ └─┬ safe-regex@1.1.0
│ │ │ │   └── ret@0.1.15
│ │ │ ├─┬ snapdragon@0.8.2
│ │ │ │ ├─┬ base@0.11.2
│ │ │ │ │ ├─┬ cache-base@1.0.1
│ │ │ │ │ │ ├─┬ collection-visit@1.0.0
│ │ │ │ │ │ │ ├─┬ map-visit@1.0.0
│ │ │ │ │ │ │ │ └── object-visit@1.0.1 deduped
│ │ │ │ │ │ │ └─┬ object-visit@1.0.1
│ │ │ │ │ │ │   └── isobject@3.0.1 deduped
│ │ │ │ │ │ ├── component-emitter@1.3.0 deduped
│ │ │ │ │ │ ├── get-value@2.0.6
│ │ │ │ │ │ ├─┬ has-value@1.0.0
│ │ │ │ │ │ │ ├── get-value@2.0.6 deduped
│ │ │ │ │ │ │ ├─┬ has-values@1.0.0
│ │ │ │ │ │ │ │ ├─┬ is-number@3.0.0
│ │ │ │ │ │ │ │ │ └─┬ kind-of@3.2.2
│ │ │ │ │ │ │ │ │   └── is-buffer@1.1.6 deduped
│ │ │ │ │ │ │ │ └─┬ kind-of@4.0.0
│ │ │ │ │ │ │ │   └── is-buffer@1.1.6
│ │ │ │ │ │ │ └── isobject@3.0.1 deduped
│ │ │ │ │ │ ├── isobject@3.0.1 deduped
│ │ │ │ │ │ ├─┬ set-value@2.0.1
│ │ │ │ │ │ │ ├── extend-shallow@2.0.1 deduped
│ │ │ │ │ │ │ ├── is-extendable@0.1.1 deduped
│ │ │ │ │ │ │ ├── is-plain-object@2.0.4 deduped
│ │ │ │ │ │ │ └── split-string@3.1.0 deduped
│ │ │ │ │ │ ├─┬ to-object-path@0.3.0
│ │ │ │ │ │ │ └─┬ kind-of@3.2.2
│ │ │ │ │ │ │   └── is-buffer@1.1.6
│ │ │ │ │ │ ├─┬ union-value@1.0.1
│ │ │ │ │ │ │ ├── arr-union@3.1.0 deduped
│ │ │ │ │ │ │ ├── get-value@2.0.6 deduped
│ │ │ │ │ │ │ ├── is-extendable@0.1.1 deduped
│ │ │ │ │ │ │ └── set-value@2.0.1 deduped
│ │ │ │ │ │ └─┬ unset-value@1.0.0
│ │ │ │ │ │   ├─┬ has-value@0.3.1
│ │ │ │ │ │   │ ├── get-value@2.0.6 deduped
│ │ │ │ │ │   │ ├── has-values@0.1.4
│ │ │ │ │ │   │ └─┬ isobject@2.1.0
│ │ │ │ │ │   │   └── isarray@1.0.0 deduped
│ │ │ │ │ │   └── isobject@3.0.1 deduped
│ │ │ │ │ ├─┬ class-utils@0.3.6
│ │ │ │ │ │ ├── arr-union@3.1.0
│ │ │ │ │ │ ├─┬ define-property@0.2.5
│ │ │ │ │ │ │ └─┬ is-descriptor@0.1.6
│ │ │ │ │ │ │   ├─┬ is-accessor-descriptor@0.1.6
│ │ │ │ │ │ │   │ └─┬ kind-of@3.2.2
│ │ │ │ │ │ │   │   └── is-buffer@1.1.6
│ │ │ │ │ │ │   ├─┬ is-data-descriptor@0.1.4
│ │ │ │ │ │ │   │ └─┬ kind-of@3.2.2
│ │ │ │ │ │ │   │   └── is-buffer@1.1.6 deduped
│ │ │ │ │ │ │   └── kind-of@5.1.0
│ │ │ │ │ │ ├── isobject@3.0.1 deduped
│ │ │ │ │ │ └─┬ static-extend@0.1.2
│ │ │ │ │ │   ├─┬ define-property@0.2.5
│ │ │ │ │ │   │ └─┬ is-descriptor@0.1.6
│ │ │ │ │ │   │   ├─┬ is-accessor-descriptor@0.1.6
│ │ │ │ │ │   │   │ └─┬ kind-of@3.2.2
│ │ │ │ │ │   │   │   └── is-buffer@1.1.6
│ │ │ │ │ │   │   ├─┬ is-data-descriptor@0.1.4
│ │ │ │ │ │   │   │ └─┬ kind-of@3.2.2
│ │ │ │ │ │   │   │   └── is-buffer@1.1.6 deduped
│ │ │ │ │ │   │   └── kind-of@5.1.0
│ │ │ │ │ │   └─┬ object-copy@0.1.0
│ │ │ │ │ │     ├── copy-descriptor@0.1.1
│ │ │ │ │ │     ├─┬ define-property@0.2.5
│ │ │ │ │ │     │ └─┬ is-descriptor@0.1.6
│ │ │ │ │ │     │   ├─┬ is-accessor-descriptor@0.1.6
│ │ │ │ │ │     │   │ └── kind-of@3.2.2 deduped
│ │ │ │ │ │     │   ├─┬ is-data-descriptor@0.1.4
│ │ │ │ │ │     │   │ └── kind-of@3.2.2 deduped
│ │ │ │ │ │     │   └── kind-of@5.1.0
│ │ │ │ │ │     └─┬ kind-of@3.2.2
│ │ │ │ │ │       └── is-buffer@1.1.6
│ │ │ │ │ ├── component-emitter@1.3.0 deduped
│ │ │ │ │ ├─┬ define-property@1.0.0
│ │ │ │ │ │ └── is-descriptor@1.0.2 deduped
│ │ │ │ │ ├── isobject@3.0.1 deduped
│ │ │ │ │ ├─┬ mixin-deep@1.3.2
│ │ │ │ │ │ ├── for-in@1.0.2
│ │ │ │ │ │ └─┬ is-extendable@1.0.1
│ │ │ │ │ │   └── is-plain-object@2.0.4 deduped
│ │ │ │ │ └── pascalcase@0.1.1
│ │ │ │ ├─┬ debug@2.6.9
│ │ │ │ │ └── ms@2.0.0
│ │ │ │ ├─┬ define-property@0.2.5
│ │ │ │ │ └─┬ is-descriptor@0.1.6
│ │ │ │ │   ├─┬ is-accessor-descriptor@0.1.6
│ │ │ │ │   │ └─┬ kind-of@3.2.2
│ │ │ │ │   │   └── is-buffer@1.1.6
│ │ │ │ │   ├─┬ is-data-descriptor@0.1.4
│ │ │ │ │   │ └─┬ kind-of@3.2.2
│ │ │ │ │   │   └── is-buffer@1.1.6 deduped
│ │ │ │ │   └── kind-of@5.1.0
│ │ │ │ ├── extend-shallow@2.0.1 deduped
│ │ │ │ ├── map-cache@0.2.2 deduped
│ │ │ │ ├─┬ source-map-resolve@0.5.3
│ │ │ │ │ ├── atob@2.1.2
│ │ │ │ │ ├── decode-uri-component@0.2.0 deduped
│ │ │ │ │ ├── resolve-url@0.2.1
│ │ │ │ │ ├── source-map-url@0.4.1
│ │ │ │ │ └── urix@0.1.0
│ │ │ │ ├── source-map@0.5.7
│ │ │ │ └── use@3.1.1
│ │ │ └─┬ to-regex@3.0.2
│ │ │   ├── define-property@2.0.2 deduped
│ │ │   ├─┬ extend-shallow@3.0.2
│ │ │   │ ├── assign-symbols@1.0.0 deduped
│ │ │   │ └─┬ is-extendable@1.0.1
│ │ │   │   └── is-plain-object@2.0.4 deduped
│ │ │   ├── regex-not@1.0.2 deduped
│ │ │   └── safe-regex@1.1.0 deduped
│ │ ├── mkdirp@0.5.6 deduped
│ │ ├── neo-async@2.6.2
│ │ ├─┬ node-libs-browser@2.2.1
│ │ │ ├─┬ assert@1.5.0
│ │ │ │ ├── object-assign@4.1.1 deduped
│ │ │ │ └─┬ util@0.10.3
│ │ │ │   └── inherits@2.0.1
│ │ │ ├─┬ browserify-zlib@0.2.0
│ │ │ │ └── pako@1.0.11
│ │ │ ├─┬ buffer@4.9.2
│ │ │ │ ├── base64-js@1.5.1 deduped
│ │ │ │ ├── ieee754@1.2.1 deduped
│ │ │ │ └── isarray@1.0.0 deduped
│ │ │ ├── console-browserify@1.2.0
│ │ │ ├── constants-browserify@1.0.0
│ │ │ ├─┬ crypto-browserify@3.12.0
│ │ │ │ ├─┬ browserify-cipher@1.0.1
│ │ │ │ │ ├─┬ browserify-aes@1.2.0
│ │ │ │ │ │ ├── buffer-xor@1.0.3
│ │ │ │ │ │ ├── cipher-base@1.0.4 deduped
│ │ │ │ │ │ ├── create-hash@1.2.0 deduped
│ │ │ │ │ │ ├── evp_bytestokey@1.0.3 deduped
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ └── safe-buffer@5.1.2 deduped
│ │ │ │ │ ├─┬ browserify-des@1.0.2
│ │ │ │ │ │ ├── cipher-base@1.0.4 deduped
│ │ │ │ │ │ ├─┬ des.js@1.0.1
│ │ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ │ └── minimalistic-assert@1.0.1 deduped
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ └── safe-buffer@5.1.2 deduped
│ │ │ │ │ └─┬ evp_bytestokey@1.0.3
│ │ │ │ │   ├── md5.js@1.3.5 deduped
│ │ │ │ │   └── safe-buffer@5.1.2 deduped
│ │ │ │ ├─┬ browserify-sign@4.2.1
│ │ │ │ │ ├── bn.js@5.2.1
│ │ │ │ │ ├─┬ browserify-rsa@4.1.0
│ │ │ │ │ │ ├── bn.js@5.2.1 deduped
│ │ │ │ │ │ └── randombytes@2.1.0 deduped
│ │ │ │ │ ├── create-hash@1.2.0 deduped
│ │ │ │ │ ├── create-hmac@1.1.7 deduped
│ │ │ │ │ ├─┬ elliptic@6.5.4
│ │ │ │ │ │ ├── bn.js@4.12.0
│ │ │ │ │ │ ├── brorand@1.1.0
│ │ │ │ │ │ ├─┬ hash.js@1.1.7
│ │ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ │ └── minimalistic-assert@1.0.1 deduped
│ │ │ │ │ │ ├─┬ hmac-drbg@1.0.1
│ │ │ │ │ │ │ ├── hash.js@1.1.7 deduped
│ │ │ │ │ │ │ ├── minimalistic-assert@1.0.1 deduped
│ │ │ │ │ │ │ └── minimalistic-crypto-utils@1.0.1 deduped
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ ├── minimalistic-assert@1.0.1 deduped
│ │ │ │ │ │ └── minimalistic-crypto-utils@1.0.1
│ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ ├─┬ parse-asn1@5.1.6
│ │ │ │ │ │ ├─┬ asn1.js@5.4.1
│ │ │ │ │ │ │ ├── bn.js@4.12.0
│ │ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ │ ├── minimalistic-assert@1.0.1 deduped
│ │ │ │ │ │ │ └── safer-buffer@2.1.2 deduped
│ │ │ │ │ │ ├── browserify-aes@1.2.0 deduped
│ │ │ │ │ │ ├── evp_bytestokey@1.0.3 deduped
│ │ │ │ │ │ ├── pbkdf2@3.1.2 deduped
│ │ │ │ │ │ └── safe-buffer@5.1.2 deduped
│ │ │ │ │ ├─┬ readable-stream@3.6.0
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ ├── string_decoder@1.1.1 deduped
│ │ │ │ │ │ └── util-deprecate@1.0.2 deduped
│ │ │ │ │ └── safe-buffer@5.2.1
│ │ │ │ ├─┬ create-ecdh@4.0.4
│ │ │ │ │ ├── bn.js@4.12.0
│ │ │ │ │ └── elliptic@6.5.4 deduped
│ │ │ │ ├─┬ create-hash@1.2.0
│ │ │ │ │ ├─┬ cipher-base@1.0.4
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ └── safe-buffer@5.1.2 deduped
│ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ ├─┬ md5.js@1.3.5
│ │ │ │ │ │ ├─┬ hash-base@3.1.0
│ │ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ │ ├─┬ readable-stream@3.6.0
│ │ │ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ │ │ ├── string_decoder@1.1.1 deduped
│ │ │ │ │ │ │ │ └── util-deprecate@1.0.2 deduped
│ │ │ │ │ │ │ └── safe-buffer@5.2.1
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ └── safe-buffer@5.1.2 deduped
│ │ │ │ │ ├─┬ ripemd160@2.0.2
│ │ │ │ │ │ ├── hash-base@3.1.0 deduped
│ │ │ │ │ │ └── inherits@2.0.4 deduped
│ │ │ │ │ └─┬ sha.js@2.4.11
│ │ │ │ │   ├── inherits@2.0.4 deduped
│ │ │ │ │   └── safe-buffer@5.1.2 deduped
│ │ │ │ ├─┬ create-hmac@1.1.7
│ │ │ │ │ ├── cipher-base@1.0.4 deduped
│ │ │ │ │ ├── create-hash@1.2.0 deduped
│ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ ├── ripemd160@2.0.2 deduped
│ │ │ │ │ ├── safe-buffer@5.1.2 deduped
│ │ │ │ │ └── sha.js@2.4.11 deduped
│ │ │ │ ├─┬ diffie-hellman@5.0.3
│ │ │ │ │ ├── bn.js@4.12.0
│ │ │ │ │ ├─┬ miller-rabin@4.0.1
│ │ │ │ │ │ ├── bn.js@4.12.0
│ │ │ │ │ │ └── brorand@1.1.0 deduped
│ │ │ │ │ └── randombytes@2.1.0 deduped
│ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ ├─┬ pbkdf2@3.1.2
│ │ │ │ │ ├── create-hash@1.2.0 deduped
│ │ │ │ │ ├── create-hmac@1.1.7 deduped
│ │ │ │ │ ├── ripemd160@2.0.2 deduped
│ │ │ │ │ ├── safe-buffer@5.1.2 deduped
│ │ │ │ │ └── sha.js@2.4.11 deduped
│ │ │ │ ├─┬ public-encrypt@4.0.3
│ │ │ │ │ ├── bn.js@4.12.0
│ │ │ │ │ ├── browserify-rsa@4.1.0 deduped
│ │ │ │ │ ├── create-hash@1.2.0 deduped
│ │ │ │ │ ├── parse-asn1@5.1.6 deduped
│ │ │ │ │ ├── randombytes@2.1.0 deduped
│ │ │ │ │ └── safe-buffer@5.1.2 deduped
│ │ │ │ ├── randombytes@2.1.0 deduped
│ │ │ │ └─┬ randomfill@1.0.4
│ │ │ │   ├── randombytes@2.1.0 deduped
│ │ │ │   └── safe-buffer@5.1.2 deduped
│ │ │ ├── domain-browser@1.2.0
│ │ │ ├── events@3.3.0
│ │ │ ├── https-browserify@1.0.0
│ │ │ ├── os-browserify@0.3.0
│ │ │ ├── path-browserify@0.0.1
│ │ │ ├── process@0.11.10 deduped
│ │ │ ├── punycode@1.4.1
│ │ │ ├── querystring-es3@0.2.1
│ │ │ ├── readable-stream@2.3.7 deduped
│ │ │ ├─┬ stream-browserify@2.0.2
│ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ └── readable-stream@2.3.7 deduped
│ │ │ ├─┬ stream-http@2.8.3
│ │ │ │ ├── builtin-status-codes@3.0.0
│ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ ├── readable-stream@2.3.7 deduped
│ │ │ │ ├── to-arraybuffer@1.0.1
│ │ │ │ └── xtend@4.0.2 deduped
│ │ │ ├─┬ string_decoder@1.1.1
│ │ │ │ └── safe-buffer@5.1.2 deduped
│ │ │ ├─┬ timers-browserify@2.0.12
│ │ │ │ └── setimmediate@1.0.5
│ │ │ ├── tty-browserify@0.0.0
│ │ │ ├── url@0.11.0 deduped
│ │ │ ├─┬ util@0.11.1
│ │ │ │ └── inherits@2.0.3
│ │ │ └── vm-browserify@1.1.2
│ │ ├─┬ schema-utils@1.0.0
│ │ │ ├── ajv-errors@1.0.1 deduped
│ │ │ ├── ajv-keywords@3.5.2 deduped
│ │ │ └── ajv@6.12.6 deduped
│ │ ├── tapable@1.1.3
│ │ ├─┬ terser-webpack-plugin@1.4.5
│ │ │ ├─┬ cacache@12.0.4
│ │ │ │ ├── bluebird@3.7.2 deduped
│ │ │ │ ├── chownr@1.1.4 deduped
│ │ │ │ ├── figgy-pudding@3.5.2 deduped
│ │ │ │ ├── glob@7.2.3 deduped
│ │ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ │ ├── infer-owner@1.0.4 deduped
│ │ │ │ ├─┬ lru-cache@5.1.1
│ │ │ │ │ └── yallist@3.1.1
│ │ │ │ ├─┬ mississippi@3.0.0
│ │ │ │ │ ├─┬ concat-stream@1.6.2
│ │ │ │ │ │ ├── buffer-from@1.1.2 deduped
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ ├── readable-stream@2.3.7 deduped
│ │ │ │ │ │ └── typedarray@0.0.6
│ │ │ │ │ ├─┬ duplexify@3.7.1
│ │ │ │ │ │ ├── end-of-stream@1.4.4 deduped
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ ├── readable-stream@2.3.7 deduped
│ │ │ │ │ │ └── stream-shift@1.0.1
│ │ │ │ │ ├── end-of-stream@1.4.4 deduped
│ │ │ │ │ ├─┬ flush-write-stream@1.1.1
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ └── readable-stream@2.3.7 deduped
│ │ │ │ │ ├── from2@2.3.0 deduped
│ │ │ │ │ ├─┬ parallel-transform@1.2.0
│ │ │ │ │ │ ├── cyclist@1.0.1
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ └── readable-stream@2.3.7 deduped
│ │ │ │ │ ├── pump@3.0.0 deduped
│ │ │ │ │ ├─┬ pumpify@1.5.1
│ │ │ │ │ │ ├── duplexify@3.7.1 deduped
│ │ │ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ │ │ └─┬ pump@2.0.1
│ │ │ │ │ │   ├── end-of-stream@1.4.4 deduped
│ │ │ │ │ │   └── once@1.4.0 deduped
│ │ │ │ │ ├─┬ stream-each@1.2.3
│ │ │ │ │ │ ├── end-of-stream@1.4.4 deduped
│ │ │ │ │ │ └── stream-shift@1.0.1 deduped
│ │ │ │ │ └── through2@2.0.5 deduped
│ │ │ │ ├── mkdirp@0.5.6 deduped
│ │ │ │ ├── move-concurrently@1.0.1 deduped
│ │ │ │ ├── promise-inflight@1.0.1 deduped
│ │ │ │ ├─┬ rimraf@2.7.1
│ │ │ │ │ └── glob@7.2.3 deduped
│ │ │ │ ├─┬ ssri@6.0.2
│ │ │ │ │ └── figgy-pudding@3.5.2 deduped
│ │ │ │ ├── unique-filename@1.1.1 deduped
│ │ │ │ └── y18n@4.0.3
│ │ │ ├─┬ find-cache-dir@2.1.0
│ │ │ │ ├── commondir@1.0.1 deduped
│ │ │ │ ├─┬ make-dir@2.1.0
│ │ │ │ │ ├── pify@4.0.1
│ │ │ │ │ └── semver@5.7.1
│ │ │ │ └─┬ pkg-dir@3.0.0
│ │ │ │   └─┬ find-up@3.0.0
│ │ │ │     └─┬ locate-path@3.0.0
│ │ │ │       ├─┬ p-locate@3.0.0
│ │ │ │       │ └─┬ p-limit@2.3.0
│ │ │ │       │   └── p-try@2.2.0 deduped
│ │ │ │       └── path-exists@3.0.0
│ │ │ ├── is-wsl@1.1.0
│ │ │ ├── schema-utils@1.0.0 deduped
│ │ │ ├── serialize-javascript@4.0.0 deduped
│ │ │ ├── source-map@0.6.1
│ │ │ ├── terser@4.8.1 deduped
│ │ │ ├── webpack-sources@1.4.3 deduped
│ │ │ ├── webpack@4.46.0 deduped
│ │ │ └─┬ worker-farm@1.7.0
│ │ │   └── errno@0.1.8 deduped
│ │ ├─┬ watchpack@1.7.5
│ │ │ ├── chokidar@3.5.3 deduped
│ │ │ ├── graceful-fs@4.2.10 deduped
│ │ │ ├── neo-async@2.6.2 deduped
│ │ │ └─┬ watchpack-chokidar2@2.0.1
│ │ │   └─┬ chokidar@2.1.8
│ │ │     ├─┬ anymatch@2.0.0
│ │ │     │ ├─┬ micromatch@3.1.10
│ │ │     │ │ ├── arr-diff@4.0.0 deduped
│ │ │     │ │ ├── array-unique@0.3.2 deduped
│ │ │     │ │ ├── braces@2.3.2 deduped
│ │ │     │ │ ├── define-property@2.0.2 deduped
│ │ │     │ │ ├─┬ extend-shallow@3.0.2
│ │ │     │ │ │ ├── assign-symbols@1.0.0 deduped
│ │ │     │ │ │ └─┬ is-extendable@1.0.1
│ │ │     │ │ │   └── is-plain-object@2.0.4 deduped
│ │ │     │ │ ├── extglob@2.0.4 deduped
│ │ │     │ │ ├── fragment-cache@0.2.1 deduped
│ │ │     │ │ ├── kind-of@6.0.3 deduped
│ │ │     │ │ ├── nanomatch@1.2.13 deduped
│ │ │     │ │ ├── object.pick@1.3.0 deduped
│ │ │     │ │ ├── regex-not@1.0.2 deduped
│ │ │     │ │ ├── snapdragon@0.8.2 deduped
│ │ │     │ │ └── to-regex@3.0.2 deduped
│ │ │     │ └─┬ normalize-path@2.1.1
│ │ │     │   └── remove-trailing-separator@1.1.0 deduped
│ │ │     ├── async-each@1.0.3 deduped
│ │ │     ├─┬ braces@2.3.2
│ │ │     │ ├── arr-flatten@1.1.0 deduped
│ │ │     │ ├── array-unique@0.3.2 deduped
│ │ │     │ ├── extend-shallow@2.0.1 deduped
│ │ │     │ ├─┬ fill-range@4.0.0
│ │ │     │ │ ├── extend-shallow@2.0.1 deduped
│ │ │     │ │ ├─┬ is-number@3.0.0
│ │ │     │ │ │ └─┬ kind-of@3.2.2
│ │ │     │ │ │   └── is-buffer@1.1.6
│ │ │     │ │ ├── repeat-string@1.6.1 deduped
│ │ │     │ │ └─┬ to-regex-range@2.1.1
│ │ │     │ │   ├── is-number@3.0.0 deduped
│ │ │     │ │   └── repeat-string@1.6.1 deduped
│ │ │     │ ├── isobject@3.0.1 deduped
│ │ │     │ ├── repeat-element@1.1.4 deduped
│ │ │     │ ├── snapdragon-node@2.1.1 deduped
│ │ │     │ ├── snapdragon@0.8.2 deduped
│ │ │     │ ├── split-string@3.1.0 deduped
│ │ │     │ └── to-regex@3.0.2 deduped
│ │ │     ├─┬ fsevents@1.2.13
│ │ │     │ ├── bindings@1.5.0 deduped
│ │ │     │ └── nan@2.17.0 deduped
│ │ │     ├─┬ glob-parent@3.1.0
│ │ │     │ ├─┬ is-glob@3.1.0
│ │ │     │ │ └── is-extglob@2.1.1 deduped
│ │ │     │ └── path-dirname@1.0.2 deduped
│ │ │     ├── inherits@2.0.4 deduped
│ │ │     ├─┬ is-binary-path@1.0.1
│ │ │     │ └── binary-extensions@1.13.1
│ │ │     ├── is-glob@4.0.3 deduped
│ │ │     ├── normalize-path@3.0.0 deduped
│ │ │     ├── path-is-absolute@1.0.1 deduped
│ │ │     ├─┬ readdirp@2.2.1
│ │ │     │ ├── graceful-fs@4.2.10 deduped
│ │ │     │ ├── micromatch@3.1.10 deduped
│ │ │     │ └── readable-stream@2.3.7 deduped
│ │ │     └── upath@1.2.0 deduped
│ │ └── webpack-sources@1.4.3 deduped
│ ├── xstate@4.34.0 deduped
│ └─┬ yaml-loader@0.6.0
│   ├─┬ loader-utils@1.4.2
│   │ ├── big.js@5.2.2 deduped
│   │ ├── emojis-list@3.0.0 deduped
│   │ └─┬ json5@1.0.1
│   │   └── minimist@1.2.7 deduped
│   └── yaml@1.10.2
├── prism-themes@1.9.0
├── prismjs@1.29.0
├─┬ react-dom@17.0.2
│ ├─┬ loose-envify@1.4.0
│ │ └── js-tokens@4.0.0
│ ├── object-assign@4.1.1
│ ├── react@17.0.2 deduped
│ └─┬ scheduler@0.20.2
│   ├── loose-envify@1.4.0 deduped
│   └── object-assign@4.1.1 deduped
├─┬ react-helmet@6.1.0
│ ├── object-assign@4.1.1 deduped
│ ├── prop-types@15.8.1 deduped
│ ├── react-fast-compare@3.2.0
│ ├─┬ react-side-effect@2.1.2
│ │ └── react@17.0.2 deduped invalid: "15.x || 16.x || 16.4.0-alpha.0911da3" from node_modules/gatsby/node_modules/@reach/router
│ └── react@17.0.2 deduped
└─┬ react@17.0.2
  ├── loose-envify@1.4.0 deduped
  └── object-assign@4.1.1 deduped
```
