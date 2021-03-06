---
layout: page
title: Polyfills and Libraries
category: tech
tags:
- js
- www
subject: shims
description: "Some browsers have more complete JavaScript implementations than others, and you can manually “polyfill” the deficiencies you care about."
image:
  alt: "JavaScript"
  caption: ""
  url: "images/logos/js200.png"
  width: 200
  height: 200
---

{{ page.description }}

Polyfills
--------

Polyfills make vanilla JS awesome.

- URL [Polymer/URL](https://github.com/Polymer/URL)
- element.classList [eligrey/classList.js](https://github.com/eligrey/classList.js)
- element.closest [jonathantneal/closest](https://github.com/jonathantneal/closest)
- ES5 [es-shims/es5-shim](https://github.com/es-shims/es5-shim)

Polyfills as a service
----------------------
- [Polyfill.io](http://Polyfill.io/)'s service reads the User-Agent header in the the request for their library and responds with only the polyfills needed for that browser.

Libraries
--------

Some start addressing a software pattern or abstraction.
Others begin as polyfills that flock and evolve.

- Utility: [Underscore](http://underscorejs.org/)/[Lodash](https://lodash.com/)
- Promises: [Bluebird](https://github.com/petkaantonov/bluebird/), [Creed](https://github.com/briancavalier/creed), [RSVP](https://github.com/tildeio/rsvp.js)
- Ajax: [Axios](https://github.com/mzabriskie/axios), [fetch](https://github.github.io/fetch/)
- Loader: [SystemJS](https://github.com/systemjs/systemjs)
- NLS: [Polyglot](http://airbnb.io/polyglot.js/), [Jed](https://slexaxton.github.io/Jed/), [i18n-js](https://github.com/fnando/i18n-js)
- Dates: [Moment.js](http://momentjs.com/)
- Cookies: [Basil.js](https://wisembly.github.io/basil.js/)
- Data: [LocalForage](https://github.com/localForage/localForage), [Dexie.js](http://dexie.org/) IndexedDB API, [Pouchdb](https://pouchdb.com/) for CouchDB, [JayData](http://jaydata.org/)
- Collections: [Immutable](https://facebook.github.io/immutable-js/)
- Functional Programming: [Ramda](http://Ramdajs.com/)
- Reactive: [Most.js](https://github.com/cujojs/most)
- Device Motion: [Shake.js](https://github.com/alexgibson/shake.js/)
- Realtime I/O: [Socket.io](http://socket.io/)
- Web Components: [webcomponents.js](http://webcomponents.org/polyfills/)
- Background video: [Vidage.js](https://github.com/dvLden/Vidage)
- Dataviz: [D3](https://d3js.org/)
- Game/rendering: [Three.js](https://github.com/mrdoob/three.js)
- Physics: [Oimo.js](https://github.com/lo-th/Oimo.js/), [PhysiJS](https://chandlerprall.github.io/Physijs/)
- Generative Art: [P5.js](http://p5js.org/)
- Animation: [Flip.js](https://github.com/googlechrome/flipjs) by [Paul Lewis](https://mobile.twitter.com/aerotwist)
- AI: [neurolib](https://www.npmjs.com/package/neurolib) - neuron emulation tools by [Eric Elliot](https://mobile.twitter.com/_ericelliott) ([blog](https://medium.com/javascript-scene/how-to-build-a-neuron-exploring-ai-in-javascript-pt-2-2f2acb9747ed))

Blogs
-----
- 2016 [Tutorialzine’s Interesting Libraries for January](http://tutorialzine.com/2016/01/15-interesting-javascript-and-css-libraries-for-january-2016/)
- 2012 [JavaScript Physics Engines Comparison](http://buildnewgames.com/physics-engines-comparison/)

Reference
---------

These websites have become _de facto_ references for documenting deficiencies

- Kangax [compatibility tables](https://kangax.github.io/compat-table/es6/)
- [Can I Use](http://caniuse.com/)
- [Node.green](http://node.green/)
