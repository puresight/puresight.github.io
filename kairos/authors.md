---
layout: page
title: Authors
category: kairos
subject: spirituality
description: "Authors that I find beloved, noteworthy, or, just interesting."
tags:
- authors
todo:
correlations:
- business/authors
image:
  alt: "Mark Twain"
  caption: ""
  url: "images/icons/twain.png"
  width: 190
  height: 190
---

{{ page.description }}

Gospel
-----
- [René Noël Théophile Girard (1923—2015)](http://www.iep.utm.edu/girard/)
- Jean-Luc Marion - [Wikipedia](https://en.wikipedia.org/wiki/Jean-Luc_Marion), [UChicago](http://philosophy.uchicago.edu/faculty/marion.html), [Amazon](https://amazon.com/e/e/B001IXMWUY/)
- [Graham Cooke](https://mobile.twitter.com/GrahamCookeBBH), [Brilliant Book House](https://www.brilliantbookhouse.com/)
- [Mark Chironna](https://mobile.twitter.com/markchironna) - books, TV, pastor, certified life coach
- [C. Baxter Kruger](http://perichoresis.org/): [Perichoresis Ministries](http://perichoresis.org/), _The Shack Revisited_, _The Great Dance_, _Jesus and the Undoing of Adam_, _Across All Worlds_
- [William Paul Young](http://wmpaulyoung.com/paul-young-blog/), _The Shack_
- [Rob Bell](https://robbell.com/), _How To Be Here_, _Love Wins_, _What We Talk About When We Talk About God_, _The Zimzum of Love_
- [Andre Rabe](https://mobile.twitter.com/AndreRabe1), website [AlwaysLoved](http://alwaysloved.net/).net
- [Francois Du Toit](https://mobile.twitter.com/francoislydia) ([website](http://www.mirrorword.net/)) - _[The Mirror Bible](http://www.mirrorbible.com/)_
- [Jeremiah Johnson](https://mobile.twitter.com/gracepoint555), _Freedom_, _Staying Connected_
- [Bertie Brits](https://mobile.twitter.com/BertieBrits), website [Dynamic Love Ministries](https://www.dynamicministries.com/)

Zen
-----
- [Eckhart Tolle](https://mobile.twitter.com/EckhartTolle), website [EckhartTolleNow.com](http://www.eckharttollenow.com/)
- [Elle Luna](https://mobile.twitter.com/elleluna), _The Crossroads of Should and Must: Find and Follow Your Passion_
- [Jordan Harbinger](http://theartofcharm.com/jordan-harbinger/), _The Art of Charm_
- [Brett Mckay](https://mobile.twitter.com/brettmckay), website [The Art of Manliness](http://www.artofmanliness.com/)

Psychology & Neurology
-----
- [Dan Siegel](http://www.drdansiegel.com/)
- [Steven Kotler](https://mobile.twitter.com/steven_kotler) - [The Rise of Superman](http://riseofsuperman.com/)
- [Mihaly Csikszentmihalyi](https://amazon.com/e/e/B000AQ1KVM/) - _Flow: The Psychology of Optimal Experience_
- [Jon Kabat-Zinn](http://www.mindfulnesscds.com/pages/about-the-author)
- [Joey Klein](https://mobile.twitter.com/JoeyKleinCT)
- [Umair Haque](https://umairhaque.com/)
- [Joe Dispenza](https://mobile.twitter.com/DrJoeDispenza)

Science
-----
- [Eric P. Dollard](http://ericpdollard.com/)

Fiction
-----
- [Justine Musk](https://mobile.twitter.com/justinemusk) ([website](http://justinemusk.com/)) - some dark-fantasy novels
- [Ted Dekker](http://teddekker.com/) - some dark fiction novels

{% if page.correlations %}

### See also:

<ul class="correlations">
  {% for slug in page.correlations %}
    <li class=""><a href="{{ site.baseurl }}{{ slug }}.html">{{ slug }}</a></li>
  {% endfor %}
</ul>
{% endif %}
