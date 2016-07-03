---
layout: page
title: Progressive Web Apps
category: tech
tags:
- www
- software
subject: software
description: "Progressive Web Applications use modern web platform capabilities to deliver fast, smooth, responsive, secure, and engaging user experiences."
image:
  alt: "HTML5"
  caption: ""
  url: "images/icons/HTML5_Badge.svg"
  source: "https://www.w3.org/html/logo/downloads/HTML5_Badge.svg"
  license: "Creative Commons Attribution 3.0"
  width: 512
  height: 512
todo:
---

{{ page.description }}

Progressive Web Apps [are](https://developers.google.com/web/progressive-web-apps/ "Google’s PWA Portal")
-----
- [Progressive](http://alistapart.com/article/understandingprogressiveenhancement)
- [Responsive](https://developers.google.com/web/fundamentals/design-and-ui/responsive/)
- [Offline first](https://developers.google.com/web/fundamentals/getting-started/your-first-offline-web-app/)
- [Mobile first](http://www.html5rocks.com/en/mobile/responsivedesign/)
- [Performant](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail "RAIL Performance Model")
- [Secure]({{site.baseurl}}tech/security.html)

Progressive Web Apps [have](https://developer.mozilla.org/en-US/Apps/Progressive "Mozilla’s PWA Portal")
-----
- [App shell](https://medium.com/google-developers/instant-loading-web-apps-with-an-application-shell-architecture-7c0c2f10c73) - minimum viable [HTML]({{site.baseurl}}tech/html.html), [CSS]({{site.baseurl}}tech/css.html), and [JavaScript]({{site.baseurl}}tech/js.html) for a user interface
- [manifest.json](https://developer.mozilla.org/en-US/docs/Web/Manifest) - web application manifest
- [Signed Certificate](https://letsencrypt.org/getting-started/) - TLS x509 SSL certificate signed by a reputable CA
- [Service Worker](https://serviceworke.rs/) handles caching, fetching, notifications, offline state ([examples](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker))

Books, Video, & Blogs
-----
- [DIVE INTO HTML5](http://diveintohtml5.info/) by [Mark Pilgrim](https://github.com/diveintomark)
* 2016 [Progressive Web App Dev Summit](https://www.youtube.com/playlist?list=PLNYkxOF6rcIAWWNR_Q6eLPhsyx6VvYjVb) (The Netherlands)
* 2015 [Getting started with Progressive Web Apps](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/) by [Addy Osmani](https://twitter.com/addyosmani)

[HTML5]({{site.baseurl}}tech/html.html) Features
-----
- [Form widgets](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms_in_HTML)
- [Drag & Drop (DND)](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Canvas](http://www.html5canvastutorials.com/) - bitmap/painting
- [Hyperlink protocol handlers](https://developer.mozilla.org/en-US/docs/Web-based_protocol_handlers)
- [Files](http://www.html5rocks.com/en/tutorials/file/filesystem/) - on the client computer
- [History](https://css-tricks.com/using-the-html5-history-api/) - the back button
- [Device sensors](https://developers.google.com/web/fundamentals/native-hardware/ "Google") ([MobiForge](https://mobiforge.com/design-development/sense-and-sensor-bility-access-mobile-device-sensors-with-javascript))
- [Device location](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) - GPS geolocation
- [Device motion](https://developers.google.com/web/fundamentals/native-hardware/device-orientation/dev-motion) - accelerometer
- [Device orientation](https://developers.google.com/web/fundamentals/native-hardware/device-orientation/dev-orientation) - gyroscope
- [Device direction](https://developer.mozilla.org/en-US/Apps/Fundamentals/gather_and_modify_data/responding_to_device_orientation_changes) - compass
- Touch events: [Apple](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html), [Google](http://www.html5rocks.com/en/mobile/touch/)
- [Server-sent events](https://www.igvita.com/2011/08/26/server-sent-event-notifications-with-html5/) ([SSE](http://html5doctor.com/server-sent-events/)) - push notifications
- [Web Sockets](http://www.html5rocks.com/en/tutorials/websockets/basics/) - I/O without the overhead
- [WebRTC](http://www.html5rocks.com/en/tutorials/webrtc/basics/) - realtime communication
- [Session & Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) - better than cookies
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) - database in the browser

Dead
-----
- 2015 [Pointer events](https://mobiforge.com/design-development/html5-pointer-events-api-combining-touch-mouse-and-pen) was an attempt to abstract mouse/touch/pen input <!-- by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events), [Microsoft](https://msdn.microsoft.com/en-us/ie/dn433244(v=vs.85).aspx) -->

2017 Features
-----
- [Web Components]({{site.baseurl}}tech/web-components.html)
- [Background synchronization](https://github.com/WICG/repo-manager/blob/master/explainer.md)
- [Physical Web](https://google.github.io/physical-web/) & [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- Stylus (pen/pencil) - stay tuned
