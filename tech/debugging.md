---
layout: page
title: Debugging
category: tech
tags:
- js
- tools
subject: "debugging"
description: "Debugging is finding and fixing of defects in software."
image:
  alt: "JavaScript"
  caption: ""
  url: "images/icons/js200.png"
  width: 200
  height: 200
todo:
- feature detection
---

{{ page.description }}
The optimal context for debugging is a
[test driven development]({{site.baseurl}}tech/testing.html)
environment and the best time to debug is immediately
after making any small change.

Client devTools
-----
* [Chrome devTools](https://developer.chrome.com/devtools/index)
* [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
* [Edge F12 Tools](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/)
* [Safari Web Inspector](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html)
* [Opera Dragonfly](https://www.opera.com/dragonfly/)

Server devTools
----
* [node-inspector](https://github.com/node-inspector/node-inspector) by [StrongLoop](https://strongloop.com/)
* [devtool](https://github.com/Jam3/devtool)
* [iron-node](https://github.com/s-a/iron-node)

Developer Sites
-----
* [Google](https://developers.google.com/)
* [Mozilla](https://developer.mozilla.org/)

VM images
-----
* [Windows IE](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)

Test sites
-----
* [Browserstack.com](https://www.browserstack.com/)
* [Browsershots.org](http://browsershots.org/)
* [Browserling.com](https://www.browserling.com/)

[Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
-----
* [Google’s Lighthouse diagnostic tool](https://github.com/GoogleChrome/lighthouse)
    * in the browser: [Chrome extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk "Requires Chrome version 52 or higher")
    * ```npm install -g GoogleChrome/lighthouse```
