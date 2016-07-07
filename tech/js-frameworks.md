---
layout: page
title: JS frameworks
category: tech
tags:
- js
subject: software libraries
description: "Java has SE & EE Classes, dotNET has Framework Class Library, Ruby has its Rails, and JavaScript has a multiverse of programming frameworks."
image:
  alt: "JavaScript"
  caption: ""
  url: "images/logos/js200.png"
  width: 200
  height: 200
---

{{ page.description }}

ES2015, aka ES6 [JavaScript]({{site.baseurl}}tech/js.html),
is a amazing language that no longer needs a library
just to smooth out the differences & deficiencies of web browsers.
[Polyfills]({{site.baseurl}}tech/polyfills.html) do that!

Because today you do not need a JS framework, you are free to opt-in
to one that fits your software engineering organization’s objectives.

> _“But because there is no canonical way to do events / component communication, you'll have to build large [components]({{site.baseurl}}tech/web-components.html) libraries from scratch. Does your application have dropdowns, resizable windows, or lightboxes? You'll probably have to write those all from scratch.” — [Andrew Ray](https://mobile.twitter.com/andrewray), 2015_

Mainstream
----------
* [Ember.js](http://emberjs.com/)
    * __Pro:__ enterprise, evolving, continuity, community, open source, devops, cli, interoperable
    * __Con:__ slower to adopt latest coolness, some bloat, steep learning curve, less performant
* [Facebook's React]({{site.baseurl}}tech/reactjs.html)
    * __Pro:__ simple, fast, community, open source, mature, evolving
    * __Con:__ IP
* [Google's Angular 2](https://angular.io/)
    * __Pro:__ fast, popular, cli
    * __Con:__ IP, new

Interesting
-----------
* [Google's Angular 1](https://angularjs.org/)
    * __Pro:__ popular
    * __Con:__ deprecated
* [Google's Polymer](https://www.polymer-project.org/1.0/)
    * __Pro:__ standards, [web components]({{site.baseurl}}tech/web-components.html), cli, interoperable
    * __Con:__ new
* [Durandal's Aurelia](http://aurelia.io/)
    * __Pro:__ pro-standards, advanced, sleek, simple, [web components]({{site.baseurl}}tech/web-components.html), interoperable
    * __Con:__ IP, new
* [Vue.js](https://vuejs.org/)
    * __Pro:__ simple, docs, reactive
    * __Con:__ new, no server-side renderer
    * __Extensions:__ [router](http://router.vuejs.org/en/), [flux](https://github.com/vuejs/vuex)
* [Meteor](https://www.meteor.com/)
    * __Pro:__ rapid prototyping
    * __Con:__ laggard, some non-standard stuff
* [Bacon.js](https://baconjs.github.io/) small functional reactive programming lib
    * __Pro:__ FRP
    * __Con:__ new
* [Cycle.js](http://cycle.js.org/) and [RxJS](http://reactivex.io/)
    * __Pro:__ reactive, advanced
    * __Con:__ hard, complex
    * Example: [RxJS 5 operators](https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#withlatestfrom)
* [Knockout.js](http://knockoutjs.com/)
    * __Pro:__ mature
    * __Con:__ free part of a commercial product

Historic
--------
* [Dojo](https://dojotoolkit.org/) [+ Dijit](https://dojotoolkit.org/reference-guide/dijit/info.html) ([demo](http://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/themes/themeTester-orig.html))
* [jQuery](https://jquery.com/)
* [Backbone.js](http://backbonejs.org/docs/backbone.html) and [Underscore](http://underscorejs.org/docs/underscore.html)
    * __Pro:__ mature, MVC
    * __Con:__ old, slow, overly simple, almost but not quite MVC, not opinionated enough, non-isometric
    * __Extensions:__ [Chaplin](http://chaplinjs.org/), [Marionette](http://marionettejs.com/)

Combo’s
------
* [MEAN](http://meanjs.org/) = [MongoDB]({{site.baseurl}}tech/databases.html) + Express.js + [Angular.js]({{site.baseurl}}tech/js-frameworks.html) + Node.js

Catalogs
--------
* [JSter](http://jster.net/) is a catalog of JS libraries curated by [Juho Vepsäläinen](https://mobile.twitter.com/bebraw)

Comparison and contrast
--------
* [by Vue](https://vuejs.org/guide/comparison.html)

Non-JS inspirations
---------------
* [ClojureScript Om](https://github.com/omcljs/om#om)
