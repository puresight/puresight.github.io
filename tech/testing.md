---
layout: page
title: Test/QA
category: tech
tags:
- software
- js
- tools
subject: schools
description: "Test-driven development is a method of creating or changing software through iterations."
image:
  alt: "JavaScript"
  caption: ""
  url: "images/logos/js200.png"
  width: 200
  height: 200
todo:
---

{{ page.description }}

1. Write an automated (failing, initially) test case to define the new or modified function;
2. Write and [debug]({{site.baseurl}}tech/debugging.html) code til it passes;
3. Refactor for purity, readability, elegance, extensibility, & performance;
4. Pass automated, and manual cross-browser, testing before submission.

Caveats
------
* “Program testing can be an effective way to show the presence of bugs, but it is inadequate for showing their absence.” -[Dijkstra](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD03xx/EWD303.html)

TDD in Node Back-end
-------------
- [Mocha](https://mochajs.org/) tests run serially for flexible & accurate reporting; mapping uncaught exceptions to the correct test cases
- [Istanbul](https://www.npmjs.com/package/istanbul) code coverage tool
- [Should](https://www.npmjs.com/package/should) assertions with a fluent interface
- [Chai](http://chaijs.com/) assertions

TDD in Browser Front-end
-----------------
- [Mocha](https://mochajs.org/) testing framework makes asynchronous testing fun
- [Jasmine](https://github.com/jasmine/jasmine) testing framework for JavaScript
- [Phantom](http://phantomjs.org/) headless browser with a JS & DOM API, CSS selectors, JSON, Canvas, SVG, and more.

TDD in Desktop Apps
-----
- [Spectron](http://electron.atom.io/spectron) integration testing framework for Electron

Commercial TDD frameworks
----------
- [Wallaby.js](https://wallabyjs.com/) - continuous testing, code coverage etc
- [Codecov](https://codecov.io/) - "Code coverage done right"
- [Track.js](https://trackjs.com/) - "Track Error Context, Actually Fix Bugs"
- [CodeClimate](https://codeclimate.com/pricing)
- [CircleCI](https://circleci.com/pricing/)

Source scanners
-----
- [ESLint](http://eslint.org/) - configurable linter tool for finding patterns in the source
- [Paciello Group’s Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) - assesses against [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG20/ "WCAG 2.0") and simulates color-blindness & cataracts
- [Google’s Lighthouse](https://github.com/GoogleChrome/lighthouse) - scans for [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) recommendations
- [Node Security Platform](https://nodesecurity.io/) - looks for vulnerabilities in node.js source & dependencies

## Functional testing

- [Selenium](http://docs.seleniumhq.org/) automates browsers for testing web applications. Selenium has support from browser vendors who have integrated hooks.

## Load testing

- [Apache’s JMeter](https://jmeter.apache.org/) is open source.

Virtual Machine test images
-----
- [Windows Edge & IE 11 browsers](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)

Test sites
-----
- [Browserstack.com](https://www.browserstack.com/)
- [Browsershots.org](http://browsershots.org/)
- [Browserling.com](https://www.browserling.com/)

Blogs
-----
- 2015 [ESLint: The Next-Generation JavaScript Linter](https://www.smashingmagazine.com/2015/09/eslint-the-next-generation-javascript-linter/) by Nicholas C. Zakas
- 2014 [nVisium: Javascript Security Tools](https://nvisium.com/blog/2014/06/27/javascript-security-tools/)
- [tuts+: Testing Your JavaScript with Jasmine](http://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229) (2011)
- [Wikipedia: Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)
