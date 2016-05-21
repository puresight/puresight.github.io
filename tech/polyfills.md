---
layout: page
title: Polyfills
category: tech
subject: shims
description: "Some browsers have more complete JavaScript implementations than others, and you can manually “polyfill” the deficiencies you care about."
image:
  alt: "JavaScript"
  caption: ""
  url: "images/icons/js200.png"
  width: 200
  height: 200
---

{{ page.description }}

Individuals
-----------
* Promises [jakearchibald/es6-promise](https://github.com/jakearchibald/es6-promise)
* URL [Polymer/URL](https://github.com/Polymer/URL)
* element.classList [eligrey/classList.js](https://github.com/eligrey/classList.js)
* element.closest [jonathantneal/closest](https://github.com/jonathantneal/closest)
* ES5 [es-shims/es5-shim](https://github.com/es-shims/es5-shim)

Sets
------
* [webcomponents.js](http://webcomponents.org/polyfills/) for [web components]({{site.baseurl}}tech/web-components.html)
* [systemjs](https://github.com/systemjs/systemjs) for module loading

You could say that polyfill sets are Vanilla JS
“un-[frameworks]({{site.baseurl}}tech/js-frameworks.html).”

Polyfills as a service
----------------------
* [Polyfill.io](http://Polyfill.io/)'s service reads the User-Agent header in the the request for their library and responds with only the polyfills needed for that browser.

Reference
---------

These websites have become _de facto_ references for documenting deficiencies:

* Kangax [compatibility tables](https://kangax.github.io/compat-table/es6/)
* [Can I Use](http://caniuse.com/)
* [Node.green](http://node.green/)
