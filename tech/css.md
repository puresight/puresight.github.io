---
layout: page
title: CSS
category: tech
tags:
- css
subject: front-end design
description: "Cascading Style Sheets"
noindex: true
---

{{ page.description }}

TODO
----
* image
* description

Tools
-----
* [PostCSS](http://postcss.org/) is for transforming CSS with JavaScript
    * Increase code readability. Add vendor prefixes to CSS rules using values from Can I Use: [Autoprefixer](https://github.com/postcss/autoprefixer) will use the data based on current browser popularity and property support to apply prefixes for you.
    * [cssnext](http://cssnext.io/) transforms new CSS specs into more compatible CSS so you don't need to wait for browser support. You can literally write future-proof CSS and forget old preprocessor specific syntax.
    * The end of global CSS: [CSS Modules](https://github.com/css-modules/css-modules) means you never need to worry about your names being too generic, just use whatever makes the most sense.
    * Enforce consistent conventions and avoid errors in your stylesheets with [stylelint](http://stylelint.io/), a modern CSS linter. It supports the latest CSS syntax, as well as CSS-like syntaxes, such as SCSS.
