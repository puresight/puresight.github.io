---
layout: page
title: Polyfills and Libraries
category: tech
tags:
- polyfill
- library
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

Polyfills
--------

You could say that polyfill sets are Vanilla JS
un-[frameworks]({{site.baseurl}}tech/js-frameworks.html).

* URL [Polymer/URL](https://github.com/Polymer/URL)
* element.classList [eligrey/classList.js](https://github.com/eligrey/classList.js)
* element.closest [jonathantneal/closest](https://github.com/jonathantneal/closest)
* ES5 [es-shims/es5-shim](https://github.com/es-shims/es5-shim)

Libraries
--------

Some start addressing a software pattern or abstraction.
Others begin as polyfills that flock, and evolve.

* Utility: [Underscore](http://underscorejs.org/)/[Lodash](https://lodash.com/)
* Promises: [Bluebird](https://github.com/petkaantonov/bluebird/), [Creed](https://github.com/briancavalier/creed), [ES6-promise](https://github.com/jakearchibald/es6-promise)
* Ajax: [Axios](https://github.com/mzabriskie/axios), [fetch](https://github.github.io/fetch/)
* Loader: [SystemJS](https://github.com/systemjs/systemjs)
* NLS: [Polyglot](http://airbnb.io/polyglot.js/), [Jed](https://slexaxton.github.io/Jed/), [i18n-js](https://github.com/fnando/i18n-js)
* Dates: [Moment.js](http://momentjs.com/)
* Collections: [Immutable](https://facebook.github.io/immutable-js/)
* Functional Programming: [Ramda](http://Ramdajs.com/)
* Reactive: [Most.js](https://github.com/cujojs/most)
* Dataviz: [D3](https://d3js.org/)
* Realtime I/O: [Socket.io](http://socket.io/)
* Web Components: [webcomponents.js](http://webcomponents.org/polyfills/)

Blogs
-----
* 2016 [Tutorialzine: 15 Interesting Libraries for January](http://tutorialzine.com/2016/01/15-interesting-javascript-and-css-libraries-for-january-2016/)

Polyfills as a service
----------------------
* [Polyfill.io](http://Polyfill.io/)'s service reads the User-Agent header in the the request for their library and responds with only the polyfills needed for that browser.

Reference
---------

These websites have become _de facto_ references for documenting deficiencies:

* Kangax [compatibility tables](https://kangax.github.io/compat-table/es6/)
* [Can I Use](http://caniuse.com/)
* [Node.green](http://node.green/)
