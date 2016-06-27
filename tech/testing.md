---
layout: page
title: Test/QA
category: tech
tags:
- tools
- devops
subject: schools
description: "Test-driven development on JavaScript in the client and server"
image:
  alt: "JavaScript"
  caption: ""
  url: "images/icons/js200.png"
  width: 200
  height: 200
todo:
- talk about debugging in devTools
- feature detection
- cross-browser testing (IE in virtualbox)
- the two-step of development (build test, build test, build test)
---

_{{ page.description }}_

“Test-driven development is a software development process that relies on the repetition of a very short development cycle: first an (initially failing) automated test case is written that defines a desired improvement or new function. Then, the minimum amount of code is written to pass that test, and finally one refactors the new code to acceptable standards” (Wikipedia).

Caveats
------
* “Program testing can be an effective way to show the presence of bugs, but it is inadequate for showing their absence.” -[Dijkstra](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD03xx/EWD303.html)

Back-end
-------------
* [Mocha](https://mochajs.org/) tests run serially for flexible & accurate reporting; mapping uncaught exceptions to the correct test cases
* [Istanbul](https://www.npmjs.com/package/istanbul) code coverage tool
* [Should](https://www.npmjs.com/package/should) test-framework agnostic assertions with a fluent interface

Front-end
-----------------
* [Mocha](https://mochajs.org/) testing framework makes asynchronous testing fun
* [Jasmine](https://github.com/jasmine/jasmine) testing framework for JavaScript
* [Phantom](http://phantomjs.org/) headless browser with a JS & DOM API, CSS selectors, JSON, Canvas, SVG, and more.
* [Chai](http://chaijs.com/) assertion library can be paired with any testing framework

Commercial tools
----------
* [Wallaby.js](https://wallabyjs.com/) - continuous testing, code coverage etc
* [Codecov](https://codecov.io/) - "Code coverage done right"
* [Track.js](https://trackjs.com/) - "Track Error Context, Actually Fix Bugs"
* [CodeClimate](https://codeclimate.com/pricing)
* [CircleCI](https://circleci.com/pricing/)

Container tools
---------------
* [SysDig](http://www.sysdig.org/)

Blogs
-----
* [tuts+: Testing Your JavaScript with Jasmine](http://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229) (2011)
* [Wikipedia: Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)
