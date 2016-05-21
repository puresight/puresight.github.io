---
layout: page
title: JS frameworks
category: tech
tags:
- framework
subject: software libraries
description: "Java has its SE & EE Classes. Microsoft .NET has its Framework Class Library. Ruby has its Rails. And JavaScript? has a multiverse of programming frameworks."
image:
  alt: "JavaScript"
  caption: ""
  url: "images/icons/js200.png"
  width: 200
  height: 200
---

{{ page.description }}

> _“But because there is no canonical way to do events / component communication, you'll have to build large [components]({{site.baseurl}}tech/web-components.html) libraries from scratch. Does your application have dropdowns, resizable windows, or lightboxes? You'll probably have to write those all from scratch.” — [Andrew Ray](https://twitter.com/andrewray), 2015_

Mainstream
----------
* [Backbone.js](http://backbonejs.org/) and [Underscore](http://underscorejs.org/)
    * __Pro:__ mature, MVC
    * __Con:__ old, slow, overly simple, almost but not quite MVC, not opinionated enough, non-isometric
    * __Extensions:__ [Chaplin](http://chaplinjs.org/), [Marionette](http://marionettejs.com/)
* [Ember.js](http://emberjs.com/)
    * __Pro:__ enterprise, evolving, continuity, community, open source, devops
    * __Con:__ slower to adopt latest coolness, some bloat, steep learning curve
* [Google's Angular 1](https://angularjs.org/)
    * __Pro:__ popular
    * __Con:__ deprecated
* [Facebook's React]({{site.baseurl}}tech/reactjs.html)
    * __Pro:__ simple, fast, community, open source, mature, evolving
    * __Con:__ IP

Interesting
-----------
* [Google's Angular 2](https://angular.io/)
    * __Pro:__ fast, popular
    * __Con:__ IP, new, not true open source
* [Durandal's Aurelia](http://aurelia.io/)
    * __Pro:__ pro-standards, advanced, sleek, simple
    * __Con:__ IP, new, unpopular
* [Google's Polymer](https://www.polymer-project.org/1.0/)
    * __Pro:__ pro-standards, “Material Design” theme
    * __Con:__ experimental
* [Meteor](https://www.meteor.com/)
    * __Pro:__ rapid prototyping
    * __Con:__ laggard, some non-standard stuff
* [Cycle.js](http://cycle.js.org/) and [RxJS](http://reactivex.io/)
    * __Pro:__ reactive, advanced
    * __Con:__ complex
    * Example: [RxJS 5 operators](https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#withlatestfrom)

Historic
--------
* [Dojo](https://dojotoolkit.org/) [+ Dijit](https://dojotoolkit.org/reference-guide/dijit/info.html)
* [jQuery](https://jquery.com/)

Catalogs
--------
* [JSter](http://jster.net/) is a catalog of JS libraries curated by [Juho Vepsäläinen](https://twitter.com/bebraw)

Non-JS inspirations
---------------
* [Elm]({{site.baseurl}}tech/elm.html)
* [ClojureScript Om](https://github.com/omcljs/om#om)
