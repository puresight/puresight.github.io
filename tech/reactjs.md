---
layout: page
title: React JS
category: tech
tags:
- js
subject: javascript
description: "Declare how your app should look at any given point in time, and React manages UI updates when data changes."
image:
  alt: "ReactJS Logo"
  caption: "React JS"
  url: "images/icons/react200.png"
  width: 200
  height: 200
---

{{ page.description }}
React enables building reusable components.

* [React](https://facebook.github.io/react/) features functional components, view-model bindings, Virtual DOM, et cetera
* [React Router](https://github.com/reactjs/react-router) does lazy code loading, dynamic route matching, location transition handling
* [Relay](https://facebook.github.io/relay/) manages contextual database queries through declarative ajax calls with optimistic updates and error handling; see [cartoons](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-4-aef7d819a8ed).
* [Flux](https://facebook.github.io/flux/)  is a pattern for handling data in your application; [see cartoon guide](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207).
* [Redux](http://redux.js.org/) flux plus hot reloading & time travel debugging (thanks to the [elm]({{site.baseurl}}tech/elm.html) architecture) see [cartoon guide](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6).
* [GraphQL](http://graphql.org/)  is a data query language with client and server parts
* [Flow](http://flowtype.org/) lets you gradually opt-in to statically type checking your code
* [React Native](https://facebook.github.io/react-native/) enables building mobile apps on mobile with JS + React

Values
------
* Immutable Data
* Functional Programming
* Declarative API's
* Implicit Parallelism
* Horizontal Platform

Tools
-----
* [Nuclide](https://nuclide.io/) extends the Atom [editor]({{site.baseurl}}tech/editors.html) to support React Native, Hack, & Flow
* [react-devtools](https://github.com/facebook/react-devtools) is the devtools extension for debugging
* [progressive web App Shell with iFixit](https://github.com/GoogleChrome/sw-precache/tree/master/app-shell-demo) by Jeff Posnick ([slides](https://speakerdeck.com/jeffposnick/instant-loading-with-service-workers-chrome-dev-summit-15))

Community
---------
* [/r/reactjs/](https://www.reddit.com/r/reactjs/)
* [React JS News](https://reactjsnews.com/) ← [contribute](https://github.com/Legitcode/ReactJSNews/)
* [Periscope](https://www.periscope.tv/ReactJSNews) @ReactJSNews curated by @zachcodes, @jedwatson, and @browniefed check out @reactpodcast
* [Twitter](https://mobile.twitter.com/reactjs)
* [Facebook developer videos](https://developers.facebook.com/videos)
* [React Europe](https://www.react-europe.org/)
* [React US](http://conf.reactjs.com/)

Education
------
* [React For Beginners](https://reactforbeginners.com/) course $127
* [Learn Redux](https://learnredux.com/) course
* [Full Stack React](https://www.fullstackreact.com/) $99 course (videos book source) [blog](https://www.fullstackreact.com/articles/)
* [React JS newsletter](http://reactjsnewsletter.com/issues) curated by Tyler McGinnis + Ean Platter
* [Building the F8 App](http://makeitopen.com/)

## Open Source

transparency & openness:

### Code Governance

* [principles](https://reactcommunity.org/)
* [community](https://github.com/reactjs)
* [core notes](https://github.com/reactjs/core-notes)

### Intellectual Property

* Copyright Facebook License [BSD-3](https://en.wikipedia.org/wiki/BSD_licenses#3-clause)
* [Patents](https://en.wikipedia.org/wiki/React_(JavaScript_library)#Patents_clause_controversy)

Quotes
------

Some quotes from the React blogosphere

[Andrew Ray](https://mobile.twitter.com/andrewray),
[ReactJS For Stupid People](http://blog.andrewray.me/reactjs-for-stupid-people/):

> The concept "Flux" is simply that your view triggers an event (say, after user types a name in a text field), that event updates a model, then the model triggers an event, and the view responds to that model's event by re-rendering with the latest data. That's it.
