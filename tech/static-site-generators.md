---
layout: page
title: Static Site Generators
category: tech
tags:
- tools
- website
subject: websites
description: "Jekyll is a static site generator supported by Github. It can turn simple markdown text files into HTML web pages that can be served up anywhere — without a CMS."
image:
  alt: "OctoJekyll"
  caption: "Octojekyll"
  url: "images/icons/octojekyll.png"
  width: 100
  height: 100
---

[CMS](https://en.wikipedia.org/wiki/Web_content_management_system)-driven
websites make pages on-demand, pulling
data from a DBMS and doing some template content substitutions.
Every page is built again, every time a request is made.

For most clients, this is _way_ overkill. It’s overhead. It
makes digital life less scalable, and more complex;
less maintainable, and more expensive.

Usually websites only change when a story or graphic is edited or added
by a human—_right?_
So [static site generators](https://www.staticgen.com/)
leverage this by generating all pages of the website
when there’s an actual change made.
Boom, no moving parts. You get fast, maintainable, secure, and
reliable tech you can trust.

## Jekyll

Jekyll was a forerunner SSG with a massive network effect: Github hosts it for free.
Jekyll turns [markdown](https://daringfireball.net/projects/markdown/syntax#html)
text and [YAML]({{site.baseurl}}tech/yaml.html) configuration
into web pages that can be hosted anywhere.

* [Jekyllrb.com](https://jekyllrb.com/)
* [Jekyll.tips](http://jekyll.tips/)
* [Kramdown](http://kramdown.gettalong.org/syntax.html)
* [Liquid templating](http://liquidmarkup.org/)

### Jekyll education

* [video series](https://www.youtube.com/watch?v=oiNVQ9Zjy4o&list=PLWjCJDeWfDdfVEcLGAfdJn_HXyM4Y7_k-&index=1) by [Thomas Bradley](https://twitter.com/thomasjbradley)

### Jekyll on-the-go

* [MrHyde app](https://play.google.com/store/apps/details?id=org.faudroids.mrhyde) ([source](https://github.com/FauDroids/MrHyde))

### Jekyll as-a-service

* [Github](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
* [Gitlab](http://doc.gitlab.com/ee/pages/)
* [Amazon](https://github.com/laurilehmijoki/s3_website)
