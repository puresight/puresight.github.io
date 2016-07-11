---
layout: page
title: Authors
category: business
subject: authors
description: "Authors that I find noteworthy or interesting."
tags:
- authors
todo:
correlations:
- kairos/authors
image:
  alt: "Mark Twain"
  caption: ""
  url: "images/icons/twain.png"
  width: 190
  height: 190
---

{{ page.description }}

- [Seth Godin](http://sethgodin.typepad.com/) - _Linchpin,_ _Tribes,_ _The Dip,_ _Purple Cow_
- [Simon Sinek](https://www.startwithwhy.com/About) - _Start With Why_
- [David Heinemeier Hansson](https://twitter.com/dhh) - Basecamp, _[REWORK](http://david.heinemeierhansson.com/#rework)_
- [Tim Ferriss](https://twitter.com/tferriss) - _The 4-Hour Workweek_
- [Brené Brown](http://brenebrown.com/) - _The Gifts of Imperfection_, _Daring Greatly,_ _Rising String_
- [Malcolm Gladwell](https://mobile.twitter.com/Gladwell) - _Blink_
- [Dan Pink](https://mobile.twitter.com/danielpink) - _A Whole New Mind,_ _DRiVE_

{% if page.correlations %}

### See also:

<ul class="correlations">
  {% for slug in page.correlations %}
    <li class=""><a href="{{ site.baseurl }}{{ slug }}.html">{{ slug }}</a></li>
  {% endfor %}
</ul>
{% endif %}
