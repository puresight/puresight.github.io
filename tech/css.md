---
layout: page
title: CSS
category: tech
tags:
- www
- languages
- css
subject: front-end design
description: "Cascading Style Sheets is a declarative language for prescribing the presentation of a document written in HTML."
image:
  alt: "CSS"
  caption: ""
  url: "images/logos/css3.svg"
  width: 600
  height: 600
todo:
---

Cascading Style Sheets is a declarative language for prescribing the presentation of a document written in
[HTML]({{site.baseurl}}tech/html.html).

Features
-----
- Media Queries: [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), [Google](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/use-media-queries)
- [Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
- [Grids](https://drafts.csswg.org/css-grid/) - 2017

Blogs & Games
----
- [Flexbox Froggy](http://flexboxfroggy.com/) - game for learning flexbox
- 2014 [RWD Frameworks: Just Because You Can, Should You?](https://www.smashingmagazine.com/2014/02/responsive-design-frameworks-just-because-you-can-should-you/) by Jen Kramer
- 2013 [Packt: Introduction to RWD frameworks](https://www.packtpub.com/books/content/introduction-rwd-frameworks) by Thoriq Firdaus
- 2013 [Design Instruct: Best Responsive HTML5 Frameworks](http://designinstruct.com/roundups/html5-frameworks/) by [Jacob Gube](https://mobile.twitter.com/sixrevisions)
- 2013 [Masking](http://www.html5rocks.com/en/tutorials/masking/adobe/)
- 2012 [Set Text On A Circle](http://blog.grayghostvisuals.com/css/text-me-up-circle/)
- 2010 [Quick guide to webfonts via @font-face](http://www.html5rocks.com/en/tutorials/webfonts/quick/)
- [The Languages Which Almost Became CSS](https://eager.io/blog/the-languages-which-almost-were-css/) by [Zack Bloom](https://mobile.twitter.com/zackbloom)
- [CSS Animation Rocks: Clocks](https://cssanimation.rocks/clocks/) taught me to make a clock

Taxonomies
----------
- [BEM](https://en.bem.info/methodology/) - Block, Element, Modifier naming convention for classes
    - [CSS-Tricks BEM 101](https://css-tricks.com/bem-101/)
    - 2015: [Keeping the Front-End Modular with BEM](https://robots.thoughtbot.com/keeping-the-frontend-modular-with-bem) by [Connie Chan](https://mobile.twitter.com/conchan)

Responsive Frameworks
----
- [Bootstrap](https://getbootstrap.com/) - standard
- [Skeleton](http://getskeleton.com/) - featherweight
- [Google’s Material Design](http://materializecss.com/about.html) - android’s theme
- [Zurb’s Foundation](http://foundation.zurb.com/) - agnostic

Tools
-----
- [Chrome devTools](https://developer.chrome.com/devtools/docs/elements-styles)
- [Sass](http://sass-lang.com/) - stylesheet language which compiles to CSS
- [Less](http://lesscss.org/) - a CSS pre-processor that extends the CSS language, adding features that allow variables, mixins, functions, et. al. with the goal to enable stylesheets that are more maintainable, themable and extendable
- [Stylus](http://stylus-lang.com/) - stylesheet language that uses indentation, instead of braces, to encompass style declarations
- [PostCSS](http://postcss.org/) is for transforming CSS with JavaScript
    * Increase code readability. Add vendor prefixes to CSS rules using values from Can I Use: [Autoprefixer](https://github.com/postcss/autoprefixer) will use the data based on current browser popularity and property support to apply prefixes for you.
    - [cssnext](http://cssnext.io/) transforms new CSS specs into more compatible CSS so you don't need to wait for browser support. You can literally write future-proof CSS and forget old preprocessor specific syntax.
    * The end of global CSS: [CSS Modules](https://github.com/css-modules/css-modules) means you never need to worry about your names being too generic, just use whatever makes the most sense.
    * Enforce consistent conventions and avoid errors in your stylesheets with [stylelint](http://stylelint.io/), a modern CSS linter. It supports the latest CSS syntax, as well as CSS-like syntaxes, such as SCSS.

Community
----
- [W3C](http://csswg.org/)
- [CSS Dev Conference](http://cssdevconf.com)

Historic practices
-----
- [Browser Specific Hacks](https://css-tricks.com/snippets/css/browser-specific-hacks/)
- [960 grid system](http://960.gs/) by [Nathan Smith](https://mobile.twitter.com/nathansmith)

Reference
-----
- [W3C](https://www.w3.org/TR/CSS/)
- [Mozilla’s Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Safari Web Content Guide](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/IntroductiontoCSS/IntroductiontoCSS.html)
