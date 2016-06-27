---
layout: page
title: CSS
category: tech
tags:
- languages
- css
subject: front-end design
description: "Cascading Style Sheets is a declarative language for describing the presentation of a document written in a markup language."
image:
  alt: "CSS"
  caption: ""
  url: "images/icons/css3.svg"
  width: 600
  height: 600
todo:
- like HTML({{site.baseurl}}tech/html.html)
---

{{ page.description }}

Reference
-----
* [W3C](https://www.w3.org/TR/CSS/)
* [Mozilla’s Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Safari Web Content Guide](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/IntroductiontoCSS/IntroductiontoCSS.html)

Taxonomies
----------
* [BEM](https://en.bem.info/methodology/) - Block, Element, Modifier naming convention for classes
    * [CSS-Tricks BEM 101](https://css-tricks.com/bem-101/)
    * 2015: [Keeping the Front-End Modular with BEM](https://robots.thoughtbot.com/keeping-the-frontend-modular-with-bem) by [Connie Chan](https://mobile.twitter.com/conchan)

Responsive Frameworks
----
* [Bootstrap](https://getbootstrap.com/) - standard
* [Skeleton](http://getskeleton.com/) - featherweight
* [Google’s Material Design](http://materializecss.com/about.html) - android’s theme
* [Zurb’s Foundation](http://foundation.zurb.com/) - agnostic

Tools
-----
* [Chrome devTools](https://developer.chrome.com/devtools/docs/elements-styles)
* [Sass](http://sass-lang.com/) - stylesheet language which compiles to CSS
* [Less](http://lesscss.org/) - a CSS pre-processor that extends the CSS language, adding features that allow variables, mixins, functions, et. al. with the goal to enable stylesheets that are more maintainable, themable and extendable
* [Stylus](http://stylus-lang.com/) - stylesheet language that uses indentation, instead of braces, to encompass style declarations
* [PostCSS](http://postcss.org/) is for transforming CSS with JavaScript
    * Increase code readability. Add vendor prefixes to CSS rules using values from Can I Use: [Autoprefixer](https://github.com/postcss/autoprefixer) will use the data based on current browser popularity and property support to apply prefixes for you.
    * [cssnext](http://cssnext.io/) transforms new CSS specs into more compatible CSS so you don't need to wait for browser support. You can literally write future-proof CSS and forget old preprocessor specific syntax.
    * The end of global CSS: [CSS Modules](https://github.com/css-modules/css-modules) means you never need to worry about your names being too generic, just use whatever makes the most sense.
    * Enforce consistent conventions and avoid errors in your stylesheets with [stylelint](http://stylelint.io/), a modern CSS linter. It supports the latest CSS syntax, as well as CSS-like syntaxes, such as SCSS.

Tutorials
----
* [Flexbox Froggy](http://flexboxfroggy.com/)

Blogs
----
* [CSS-Tricks Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* 2014 [RWD Frameworks: Just Because You Can, Should You?](https://www.smashingmagazine.com/2014/02/responsive-design-frameworks-just-because-you-can-should-you/) by Jen Kramer
* 2013 [Packt: Introduction to RWD frameworks](https://www.packtpub.com/books/content/introduction-rwd-frameworks) by Thoriq Firdaus
* 2013 [Design Instruct: Best Responsive HTML5 Frameworks](http://designinstruct.com/roundups/html5-frameworks/) by [Jacob Gube](https://mobile.twitter.com/sixrevisions)

2017
----
* [CSS Grids](https://drafts.csswg.org/css-grid/)

Community
----
* [W3C](http://csswg.org/)
* [CSS Dev Conference](http://cssdevconf.com)

Historic practices
-----
* [Browser Specific Hacks](https://css-tricks.com/snippets/css/browser-specific-hacks/)
* [960 grid system](http://960.gs/) by [Nathan Smith](https://mobile.twitter.com/nathansmith)
