---
title: Fun with polyfills
date: 2020-12-31
abstract: How to remove the equivalent of multiple football fields from your JavaScript bundles by customizing <code class="language-text">@babel/preset-env</code>.
---

Using new JavaScript syntax or features while still supporting older browsers requires us to transpile and polyfill our code before deployment. The tool of choice is usually [Babel](https://babeljs.io/). Its [preset-env](https://babeljs.io/docs/en/babel-preset-env) plugin hides most of the complexity and allows us to simply specify a list of browsers to support, sit back and enjoy the ride. However, the ride might take an unexpected turn when analyzing the generated code.

![Dee and Dennis on a ride in episode 'The Gang Goes to the Jersey Shore' of 'It's Always Sunny in Philadelphia](media/ride.png)

Let's say we want to log all links on a page:

```js
const links = document.querySelectorAll("a");

links.forEach((link) => {
  console.log(link.href);
});
```

For this to work in IE 11, we would want to rewrite it to the following code:

```js
// Polyfill missing `.forEach` on `NodeList`
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// Use `var` over `const`
var links = document.querySelectorAll("a");

// Replace arrow function
links.forEach(function (link) {
  console.log(link.href);
});
```

Babel slightly disagrees and rewrites it to the following code instead:

<details open>
	<summary>Toggle code</summary>

```
!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){var n={exports:{}};return t(n,n.exports),n.exports}function u(t){try{return!!t()}catch(t){return!0}}function r(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}function e(t){return S.call(t).slice(8,-1)}function m(t){if(null==t)throw TypeError("Can't call method on "+t);return t}function f(t){return w(m(t))}function o(t){return"object"==typeof t?null!==t:"function"==typeof t}function i(t,n){if(!o(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!o(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}function a(t,n){return b.call(t,n)}function c(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}function l(n,e){try{P(s,n,e)}catch(t){s[n]=e}return e}var s=(H=function(t){return t&&t.Math==Math&&t})("object"==typeof globalThis&&globalThis)||H("object"==typeof window&&window)||H("object"==typeof self&&self)||H("object"==typeof t&&t)||function(){return this}()||Function("return this")(),p=!u(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),y={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,g={f:h&&!y.call({1:2},1)?function(t){t=h(this,t);return!!t&&t.enumerable}:y},S={}.toString,d="".split,w=u(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==e(t)?d.call(t,""):Object(t)}:Object,b={}.hasOwnProperty,v=s.document,L=o(v)&&o(v.createElement),O=!p&&!u(function(){return 7!=Object.defineProperty(L?v.createElement("div"):{},"a",{get:function(){return 7}}).a}),E=Object.getOwnPropertyDescriptor,T={f:p?E:function(t,n){if(t=f(t),n=i(n,!0),O)try{return E(t,n)}catch(t){}if(a(t,n))return r(!g.f.call(t,n),t[n])}},j=Object.defineProperty,M={f:p?j:function(t,n,e){if(c(t),n=i(n,!0),c(e),O)try{return j(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},P=p?function(t,n,e){return M.f(t,n,r(1,e))}:function(t,n,e){return t[n]=e,t},A=s[H="__core-js_shared__"]||l(H,{}),C=Function.toString;function x(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++q+z).toString(36)}"function"!=typeof A.inspectSource&&(A.inspectSource=function(t){return C.call(t)});var k,N,D,G,I,V,F,R,_=A.inspectSource,y="function"==typeof(t=s.WeakMap)&&/native code/.test(_(t)),H=n(function(t){(t.exports=function(t,n){return A[t]||(A[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.1",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),q=0,z=Math.random(),W=H("keys"),B={},t=s.WeakMap;function K(t){return"function"==typeof t?t:void 0}function Y(t){return isNaN(t=+t)?0:(0<t?ut:it)(t)}function J(t){return 0<t?ct(Y(t),9007199254740991):0}function Q(r,o,t){if(!function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(r),void 0===o)return r;switch(t){case 0:return function(){return r.call(o)};case 1:return function(t){return r.call(o,t)};case 2:return function(t,n){return r.call(o,t,n)};case 3:return function(t,n,e){return r.call(o,t,n,e)}}return function(){return r.apply(o,arguments)}}function U(t,n){var e;return Lt(t)&&("function"==typeof(e=t.constructor)&&(e===Array||Lt(e.prototype))||o(e)&&null===(e=e[Tt]))&&(e=void 0),new(void 0===e?Array:e)(0===n?0:n)}function X(t){throw t}F=y?(k=A.state||(A.state=new t),N=k.get,D=k.has,G=k.set,I=function(t,n){return n.facade=t,G.call(k,t,n),n},V=function(t){return N.call(k,t)||{}},function(t){return D.call(k,t)}):(R=W[Z="state"]||(W[Z]=x(Z)),B[R]=!0,I=function(t,n){return n.facade=t,P(t,R,n),n},V=function(t){return a(t,R)?t[R]:{}},function(t){return a(t,R)});var Z,$,tt,nt,et={set:I,get:V,has:F,enforce:function(t){return F(t)?V(t):I(t,{})},getterFor:function(e){return function(t){var n;if(!o(t)||(n=V(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},rt=n(function(t){var n=et.get,c=et.enforce,f=String(String).split("String");(t.exports=function(t,n,e,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet;"function"==typeof e&&("string"!=typeof n||a(e,"name")||P(e,"name",n),(r=c(e)).source||(r.source=f.join("string"==typeof n?n:""))),t!==s?(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=e:P(t,n,e)):i?t[n]=e:l(n,e)})(Function.prototype,"toString",function(){return"function"==typeof this&&n(this).source||_(this)})}),ot=s,it=Math.ceil,ut=Math.floor,ct=Math.min,ft=Math.max,at=Math.min,lt={includes:(t=function(c){return function(t,n,e){var r,o=f(t),i=J(o.length),u=function(t,n){t=Y(t);return t<0?ft(t+n,0):at(t,n)}(e,i);if(c&&n!=n){for(;u<i;)if((r=o[u++])!=r)return!0}else for(;u<i;u++)if((c||u in o)&&o[u]===n)return c||u||0;return!c&&-1}})(!0),indexOf:t(!1)}.indexOf,st=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var e,r=f(t),o=0,i=[];for(e in r)!a(B,e)&&a(r,e)&&i.push(e);for(;n.length>o;)a(r,e=n[o++])&&(~lt(i,e)||i.push(e));return i}(t,st)}},yt={f:Object.getOwnPropertySymbols},ht=function(t,n){return arguments.length<2?K(ot[t])||K(s[t]):ot[t]&&ot[t][n]||s[t]&&s[t][n]}("Reflect","ownKeys")||function(t){var n=pt.f(c(t)),e=yt.f;return e?n.concat(e(t)):n},gt=/#|\.prototype\./,St=(t=function(t,n){t=dt[St(t)];return t==vt||t!=bt&&("function"==typeof n?u(n):!!n)}).normalize=function(t){return String(t).replace(gt,".").toLowerCase()},dt=t.data={},bt=t.NATIVE="N",vt=t.POLYFILL="P",mt=t,wt=T.f,Lt=Array.isArray||function(t){return"Array"==e(t)},Ot=!!Object.getOwnPropertySymbols&&!u(function(){return!String(Symbol())}),t=Ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Et=H("wks"),y=s.Symbol,W=t?y:y&&y.withoutSetter||x,Tt=(a(Et,Z="species")||(Ot&&a(y,Z)?Et[Z]=y[Z]:Et[Z]=W("Symbol."+Z)),Et[Z]),jt=[].push,t={forEach:(H=function(p){var y=1==p,h=2==p,g=3==p,S=4==p,d=6==p,b=7==p,v=5==p||d;return function(t,n,e,r){for(var o,i,u=Object(m(t)),c=w(u),f=Q(n,e,3),a=J(c.length),l=0,r=r||U,s=y?r(t,a):h||b?r(t,0):void 0;l<a;l++)if((v||l in c)&&(i=f(o=c[l],l,u),p))if(y)s[l]=i;else if(i)switch(p){case 3:return!0;case 5:return o;case 6:return l;case 2:jt.call(s,o)}else switch(p){case 4:return!1;case 7:jt.call(s,o)}return d?-1:g||S?S:s}})(0),map:H(1),filter:H(2),some:H(3),every:H(4),find:H(5),findIndex:H(6),filterOut:H(7)},Mt=Object.defineProperty,Pt={},At=t.forEach,H=!!(tt=[]["forEach"])&&u(function(){tt.call(null,$||function(){throw 1},1)}),t=function(t,n){if(a(Pt,t))return Pt[t];var e=[][t],r=!!a(n=n||{},"ACCESSORS")&&n.ACCESSORS,o=a(n,0)?n[0]:X,i=a(n,1)?n[1]:void 0;return Pt[t]=!!e&&!u(function(){if(r&&!p)return 1;var t={length:-1};r?Mt(t,1,{enumerable:!0,get:X}):t[1]=1,e.call(t,o,i)})}("forEach"),Ct=H&&t?[].forEach:function(t){return At(this,t,1<arguments.length?arguments[1]:void 0)};for(nt in!function(t,n){var e,r,o,i=t.target,u=t.global,c=t.stat,f=u?s:c?s[i]||l(i,{}):(s[i]||{}).prototype;if(f)for(e in n){if(r=n[e],o=t.noTargetGet?(o=wt(f,e))&&o.value:f[e],!mt(u?e:i+(c?".":"#")+e,t.forced)&&void 0!==o){if(typeof r==typeof o)continue;!function(t,n){for(var e=ht(n),r=M.f,o=T.f,i=0;i<e.length;i++){var u=e[i];a(t,u)||r(t,u,o(n,u))}}(r,o)}(t.sham||o&&o.sham)&&P(r,"sham",!0),rt(f,e,r,t)}}({target:"Array",proto:!0,forced:[].forEach!=Ct},{forEach:Ct}),{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var xt=s[nt],kt=xt&&xt.prototype;if(kt&&kt.forEach!==Ct)try{P(kt,"forEach",Ct)}catch(t){kt.forEach=Ct}}document.querySelectorAll("a").forEach(function(t){console.log(t.href)})}();!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function v(r,o,t){if(!function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(r),void 0===o)return r;switch(t){case 0:return function(){return r.call(o)};case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}function u(t){try{return!!t()}catch(t){return!0}}function e(t){return y.call(t).slice(8,-1)}function L(t){return Object(function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}(t))}function w(t){return 0<t?d((t=t,isNaN(t=+t)?0:(0<t?S:p)(t)),9007199254740991):0}function o(t){return"object"==typeof t?null!==t:"function"==typeof t}function r(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}function c(t,e){return V.call(t,e)}function T(t,e){var n;return b(t)&&("function"==typeof(n=t.constructor)&&(n===Array||b(n.prototype))||o(n)&&null===(n=n[H]))&&(n=void 0),new(void 0===n?Array:n)(0===e?0:e)}function f(t){throw t}var n,i,l,a,s=(G=function(t){return t&&t.Math==Math&&t})("object"==typeof globalThis&&globalThis)||G("object"==typeof window&&window)||G("object"==typeof self&&self)||G("object"==typeof t&&t)||function(){return this}()||Function("return this")(),y={}.toString,h="".split,E=u(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==e(t)?h.call(t,""):Object(t)}:Object,p=Math.ceil,S=Math.floor,d=Math.min,b=Array.isArray||function(t){return"Array"==e(t)},g=!u(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),m=s.document,O=o(m)&&o(m.createElement),j=!g&&!u(function(){return 7!=Object.defineProperty(O?m.createElement("div"):{},"a",{get:function(){return 7}}).a}),M=Object.defineProperty,C={f:g?M:function(t,e,n){if(r(t),e=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(e,!0),r(n),j)try{return M(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},A=g?function(t,e,n){return C.f(t,e,{enumerable:!((e=1)&e),configurable:!(2&e),writable:!(4&e),value:n})}:function(t,e,n){return t[e]=n,t},P=s[G="__core-js_shared__"]||function(e,n){try{A(s,e,n)}catch(t){s[e]=n}return n}(G,{}),t=(function(t){(t.exports=function(t,e){return P[t]||(P[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.1",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}(n={exports:{}}),n.exports),V={}.hasOwnProperty,k=0,x=Math.random(),D=!!Object.getOwnPropertySymbols&&!u(function(){return!String(Symbol())}),G=D&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,N=t("wks"),R=s.Symbol,_=G?R:R&&R.withoutSetter||function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++k+x).toString(36)},H=(c(N,n="species")||(D&&c(R,n)?N[n]=R[n]:N[n]=_("Symbol."+n)),N[n]),F=[].push,G={forEach:(t=function(y){var h=1==y,p=2==y,S=3==y,d=4==y,b=6==y,g=7==y,m=5==y||b;return function(t,e,n,r){for(var o,i,u=L(t),c=E(u),f=v(e,n,3),l=w(c.length),a=0,r=r||T,s=h?r(t,l):p||g?r(t,0):void 0;a<l;a++)if((m||a in c)&&(i=f(o=c[a],a,u),y))if(h)s[a]=i;else if(i)switch(y){case 3:return!0;case 5:return o;case 6:return a;case 2:F.call(s,o)}else switch(y){case 4:return!1;case 7:F.call(s,o)}return b?-1:S||d?d:s}})(0),map:t(1),filter:t(2),some:t(3),every:t(4),find:t(5),findIndex:t(6),filterOut:t(7)},I=Object.defineProperty,q={},z=G.forEach,t=!!(l=[]["forEach"])&&u(function(){l.call(null,i||function(){throw 1},1)}),G=function(t,e){if(c(q,t))return q[t];var n=[][t],r=!!c(e=e||{},"ACCESSORS")&&e.ACCESSORS,o=c(e,0)?e[0]:f,i=c(e,1)?e[1]:void 0;return q[t]=!!n&&!u(function(){if(r&&!g)return 1;var t={length:-1};r?I(t,1,{enumerable:!0,get:f}):t[1]=1,n.call(t,o,i)})}("forEach"),B=t&&G?[].forEach:function(t){return z(this,t,1<arguments.length?arguments[1]:void 0)};for(a in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var J=s[a],K=J&&J.prototype;if(K&&K.forEach!==B)try{A(K,"forEach",B)}catch(t){K.forEach=B}}document.querySelectorAll("a").forEach(function(t){console.log(t.href)})}();
```

</details>

Why oh why? Let's see how we got there.

![Mac explaining things in 'Reynolds vs. Reynolds: The Cereal Defense' of 'It's Always Sunny in Philadelphia'](media/analysis.png)

## Basic setup

An exemplary Babel setup as specified in a `babel.config.js` file could look the following:

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // Which browsers to support
        // See https://github.com/browserslist/browserslist
        targets: "> 0.5%, last 2 versions, Firefox ESR, not dead",

        // Add polyfills where needed
        // See https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage
        useBuiltIns: "usage",

        // Use latest core-js
        // See https://babeljs.io/docs/en/babel-preset-env#corejs
        corejs: 3,

        // Log transforms and added polyfills
        // See https://babeljs.io/docs/en/babel-preset-env#debug
        debug: true,
      },
    ],
  ],
};
```

The `targets` option is the most relevant one as it tells Babel which browsers we care about. It uses [Browserslist](https://github.com/browserslist/browserslist) under the hood, allowing us to specify reasonable versions without the need to be very explicit. This prevents us from, shall we say, accidentally depriving [200 million Opera users](https://investor.opera.com/news-releases/news-release-details/opera-news-sets-new-record-200-million-users) of the joy of using our fancy website since we forgot about that browser.

_Note:_ This configuration is usually extracted into a separate `.browserslistrc` file which can be used by other tools like [autoprefixer](https://github.com/postcss/autoprefixer), too.

Based on this list of browsers, Babel will decide which features to transpile to older syntax as well as which polyfills to include. The polyfills themselves are provided by [core-js](https://github.com/zloirock/core-js).

## Default output

So what happens with our example? Babel logs the following debugging information:

<details open>
	<summary>Toggle log</summary>

```
Using targets:
{
	"android": "86",
	"chrome": "85",
	"edge": "86",
	"firefox": "78",
	"ie": "11",
	"ios": "12.2",
	"opera": "71",
	"safari": "13.1",
	"samsung": "12"
}

Using modules transform: auto

Using plugins:
	proposal-numeric-separator { "ie":"11", "ios":"12.2" }
	proposal-logical-assignment-operators { "edge":"86", "firefox":"78", "ie":"11", "ios":"12.2", "opera":"71", "safari":"13.1", "samsung":"12" }
	proposal-nullish-coalescing-operator { "ie":"11", "ios":"12.2", "samsung":"12" }
	proposal-optional-chaining { "ie":"11", "ios":"12.2", "samsung":"12" }
	proposal-json-strings { "ie":"11" }
	proposal-optional-catch-binding { "ie":"11" }
	transform-parameters { "ie":"11" }
	proposal-async-generator-functions { "ie":"11" }
	proposal-object-rest-spread { "ie":"11" }
	transform-dotall-regex { "ie":"11" }
	proposal-unicode-property-regex { "ie":"11" }
	transform-named-capturing-groups-regex { "ie":"11" }
	transform-async-to-generator { "ie":"11" }
	transform-exponentiation-operator { "ie":"11" }
	transform-template-literals { "ie":"11", "ios":"12.2" }
	transform-literals { "ie":"11" }
	transform-function-name { "ie":"11" }
	transform-arrow-functions { "ie":"11" }
	transform-classes { "ie":"11" }
	transform-object-super { "ie":"11" }
	transform-shorthand-properties { "ie":"11" }
	transform-duplicate-keys { "ie":"11" }
	transform-computed-properties { "ie":"11" }
	transform-for-of { "ie":"11" }
	transform-sticky-regex { "ie":"11" }
	transform-unicode-escapes { "ie":"11" }
	transform-unicode-regex { "ie":"11" }
	transform-spread { "ie":"11" }
	transform-destructuring { "ie":"11" }
	transform-block-scoping { "ie":"11" }
	transform-typeof-symbol { "ie":"11" }
	transform-new-target { "ie":"11" }
	transform-regenerator { "ie":"11" }
	proposal-export-namespace-from { "firefox":"78", "ie":"11", "ios":"12.2", "safari":"13.1" }
	syntax-dynamic-import { "android":"86", "chrome":"85", "edge":"86", "firefox":"78", "ie":"11", "ios":"12.2", "opera":"71", "safari":"13.1", "samsung":"12" }
	syntax-export-namespace-from { "android":"86", "chrome":"85", "edge":"86", "firefox":"78", "ie":"11", "ios":"12.2", "opera":"71", "safari":"13.1", "samsung":"12" }
	syntax-top-level-await { "android":"86", "chrome":"85", "edge":"86", "firefox":"78", "ie":"11", "ios":"12.2", "opera":"71", "safari":"13.1", "samsung":"12" }

Using polyfills with `usage` option:

Added following core-js polyfills:
	es.array.for-each { "ie":"11" }
	web.dom-collections.for-each { "ie":"11" }
```

</details>

We are interested in the last three lines, stating that two polyfills were added. The second one, `web.dom-collections.for-each` is expected as IE 11 does not support `.forEach` on `NodeList`. But the first one is peculiar: Why would we polyfill `Array.forEach`? Based on the [MDN compatibility table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Browser_compatibility), this has been supported since IE 9.

Via [a comment](https://github.com/babel/babel/issues/11713#issuecomment-648287888) in a corresponding issue in Babel's Github repository we can see that [core-js decided to polyfill](https://github.com/zloirock/core-js/commit/fb6bd7fb4145399cfb8b6add18eb83109686699a) `forEach` and similar methods in every IE version (and old versions of other browsers) due to presumably spec-incompliant "early" implementations. Based on the [code examples](https://github.com/zloirock/core-js/commit/fb6bd7fb4145399cfb8b6add18eb83109686699a#diff-28c6bedfb82cc6b7bfaab08c2e803bf59681c4654ba0555592030fd34980d06a) I'm bravely assuming that this is irrelevant for my use case. So how to remove this polyfill?

## Optimized output

Luckily, Babel's got us covered. `preset-env` provides an additional [exclude](https://babeljs.io/docs/en/babel-preset-env#exclude) option for both Babel plugins and core-js polyfills:

```js
exclude: ["es.array.for-each"];
```

So how big is our remaining output?

<details open>
	<summary>Toggle code</summary>

```
!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function v(r,o,t){if(!function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(r),void 0===o)return r;switch(t){case 0:return function(){return r.call(o)};case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}function u(t){try{return!!t()}catch(t){return!0}}function e(t){return y.call(t).slice(8,-1)}function L(t){return Object(function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}(t))}function w(t){return 0<t?d((t=t,isNaN(t=+t)?0:(0<t?S:p)(t)),9007199254740991):0}function o(t){return"object"==typeof t?null!==t:"function"==typeof t}function r(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}function c(t,e){return V.call(t,e)}function T(t,e){var n;return b(t)&&("function"==typeof(n=t.constructor)&&(n===Array||b(n.prototype))||o(n)&&null===(n=n[H]))&&(n=void 0),new(void 0===n?Array:n)(0===e?0:e)}function f(t){throw t}var n,i,l,a,s=(G=function(t){return t&&t.Math==Math&&t})("object"==typeof globalThis&&globalThis)||G("object"==typeof window&&window)||G("object"==typeof self&&self)||G("object"==typeof t&&t)||function(){return this}()||Function("return this")(),y={}.toString,h="".split,E=u(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==e(t)?h.call(t,""):Object(t)}:Object,p=Math.ceil,S=Math.floor,d=Math.min,b=Array.isArray||function(t){return"Array"==e(t)},g=!u(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),m=s.document,O=o(m)&&o(m.createElement),j=!g&&!u(function(){return 7!=Object.defineProperty(O?m.createElement("div"):{},"a",{get:function(){return 7}}).a}),M=Object.defineProperty,C={f:g?M:function(t,e,n){if(r(t),e=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(e,!0),r(n),j)try{return M(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},A=g?function(t,e,n){return C.f(t,e,{enumerable:!((e=1)&e),configurable:!(2&e),writable:!(4&e),value:n})}:function(t,e,n){return t[e]=n,t},P=s[G="__core-js_shared__"]||function(e,n){try{A(s,e,n)}catch(t){s[e]=n}return n}(G,{}),t=(function(t){(t.exports=function(t,e){return P[t]||(P[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.1",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}(n={exports:{}}),n.exports),V={}.hasOwnProperty,k=0,x=Math.random(),D=!!Object.getOwnPropertySymbols&&!u(function(){return!String(Symbol())}),G=D&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,N=t("wks"),R=s.Symbol,_=G?R:R&&R.withoutSetter||function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++k+x).toString(36)},H=(c(N,n="species")||(D&&c(R,n)?N[n]=R[n]:N[n]=_("Symbol."+n)),N[n]),F=[].push,G={forEach:(t=function(y){var h=1==y,p=2==y,S=3==y,d=4==y,b=6==y,g=7==y,m=5==y||b;return function(t,e,n,r){for(var o,i,u=L(t),c=E(u),f=v(e,n,3),l=w(c.length),a=0,r=r||T,s=h?r(t,l):p||g?r(t,0):void 0;a<l;a++)if((m||a in c)&&(i=f(o=c[a],a,u),y))if(h)s[a]=i;else if(i)switch(y){case 3:return!0;case 5:return o;case 6:return a;case 2:F.call(s,o)}else switch(y){case 4:return!1;case 7:F.call(s,o)}return b?-1:S||d?d:s}})(0),map:t(1),filter:t(2),some:t(3),every:t(4),find:t(5),findIndex:t(6),filterOut:t(7)},I=Object.defineProperty,q={},z=G.forEach,t=!!(l=[]["forEach"])&&u(function(){l.call(null,i||function(){throw 1},1)}),G=function(t,e){if(c(q,t))return q[t];var n=[][t],r=!!c(e=e||{},"ACCESSORS")&&e.ACCESSORS,o=c(e,0)?e[0]:f,i=c(e,1)?e[1]:void 0;return q[t]=!!n&&!u(function(){if(r&&!g)return 1;var t={length:-1};r?I(t,1,{enumerable:!0,get:f}):t[1]=1,n.call(t,o,i)})}("forEach"),B=t&&G?[].forEach:function(t){return z(this,t,1<arguments.length?arguments[1]:void 0)};for(a in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var J=s[a],K=J&&J.prototype;if(K&&K.forEach!==B)try{A(K,"forEach",B)}catch(t){K.forEach=B}}document.querySelectorAll("a").forEach(function(t){console.log(t.href)})}();
```

</details>

Better, but still pretty big. Turns out even a single polyfill like `web.dom-collections.for-each` will generate a lot of boilerplate code.

## Further optimizations

Assuming we care about 4 kB of boilerplate code (coming from the guy serving five tons of JavaScript with his static blog), we can polyfill `NodeList.foreach` on our own:

```js
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const links = document.querySelectorAll("a");

links.forEach((link) => {
  console.log(link.href);
});
```

Additionally adding `web.dom-collections.for-each` to the `exclude` option will finally give us the following output:

```js
(window.NodeList &&
  !NodeList.prototype.forEach &&
  (NodeList.prototype.forEach = Array.prototype.forEach),
  document.querySelectorAll("a").forEach(function (o) {
    console.log(o.href);
  }));
```

![Glenn Howerton, Rob McElhenney and Charlie Day giving the thumbs up](media/success.png)

However, as we don't want to go back to manually copying polyfills, we could at least import something like [mdn-polyfills](https://github.com/msn0/mdn-polyfills) instead:

```js
import "mdn-polyfills/NodeList.prototype.forEach";

const links = document.querySelectorAll("a");

links.forEach((link) => {
  console.log(link.href);
});
```

Or we could manually "optimize" our loop:

```js
const links = document.querySelectorAll("a");

[].forEach.call(links, (link) => {
  console.log(link.href);
});
```

The latter will reduce code maintainability, though, as removing IE 11 support will take more time than just deleting some `import`s.

## Takeaways

- Babel and core-js are extremely helpful tools and I am very grateful for them.
- There are situations where the default output might be bigger than necessary. Spending some time analyzing the generated code allows us to reduce the bundle size.
- Using `@babel/preset-env`'s `debug` options tells us which polyfills are added. Some polyfills might not be relevant for "standard" use cases as they rather focus on fixing edge cases. These can be removed via the `exclude` option.
- When size is crucial, e.g. when building libraries for consumption by others, manual polyfilling with the help of libraries like `mdn-polyfills` can be advisable. However, the `debug` output can still be used to tell us which polyfills we need to add.

<br />
<small>
  Photo credits: [FX
  Networks](https://www.fxnetworks.com/shows/its-always-sunny-in-philadelphia)
</small>
