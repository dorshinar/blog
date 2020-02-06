---
title: "Awesome Chrome Dev Tools Tips and Tricks!"
date: "2020-02-15"
description: "The Chrome dev tools are super powerful, and most people don't use them to their full extent. I'll try to help with that."
slug: "/awesome-chrome-dev-tools-tips"
---

## Introduction

The Chrome Developer Tools are a super powerful suite of tools for developing web application. They can do so much, from very basic operations like traversing the DOM, to checking out network requests or even profiling your application performance.

Among the big, everyday features they expose, there are quite a lot of gems to be found if you look deep enough. Features that might save you a click or two, and isn't that what we're all about here?

## jQuery style DOM queries in the console

jQuery is awesome. It has ruled the web for over a decade, with some statistics talking about [more than 70% of the most popular web pages in the world](https://en.wikipedia.org/wiki/JQuery#Popularity) running some version of jQuery in them. That's crazy for a library dating all the way back to 2006.

The most popular API jQuery provides is the `$`, used for selecting DOM elements. The Chrome dev tools console allows you to make use of that `$` selector, and more. Under the hood, `$` is an alias to `javascript>document.querySelector()`.

For example, if you want to simulate a click on an element you can do:

![Using the $ selector to click a button]($-selector.png)

Similarly, `$$` is an alias to `javascript>document.querySelectorAll()`:

![Using the $$ selector to print classnames]($$-selector.png)

There are a few more tricks up the `$` sleeve. Sometimes, a selector might be too complicated to write by heart, or you just don't know a selector specific enough. If you select an element in the Elements tab you can select it with the `$0` variable in the console:

![A gif showing usage of the $0 selector in console]($0-selector.gif)

The console goes even further, allowing us to access not only the last selection, but the last 5, in order. The selections are exposed through the `$0` - `$4` variables:

![A gif showing usage of the $0 - $4 selector in console]($0-4-selector.gif)

## Copying an element's properties

The elements tab is a really useful tab. It stores our website DOM tree, it allows us to see the CSS applied to each element, and we can make changes to elements on the fly from it. A really cool trick I've found is the ability to copy properties of an element (and not only properties) from the context menu.

For example, you can copy an element's selector:

![A gif showing how to copy an element's selector](copy-selector.gif)

This selector might not be specific enough, or too specific for production, but should make your life a little easier when debugging.

As you can see in the previous gif, the `Copy` context menu hides a few more nifty things you can copy. You can copy the element's styles, JS path (`javascript>document.querySelector(SELECTOR)`) or XPath.

## Filtering network requests

Sometimes, you work on a page that has a lot of requests. I mean, A LOT.

![Scrolling through very long list of network requests](lots-of-requests.gif)

Working your way through all those requests can be difficult when you look for something specific. Thankfully, you can very easily filter the requests. The filter toolbar has quick toggles for various request types, such as XHR/Fetch, stylesheets, JS scripts, images and more:

![Using toolbar filters to filter network requests](toolbar-filters.gif)

If you need to be even more specific, or you might find it quicker, you can just write a filter criteria in the `filter` input right above the toolbar to search in the requests' names:

![Filtering network requests by name](filter-by-name.gif)

## Emulating different network speeds

Using the `Network` tab again we can test our site in various internet speeds. The default preset is `online`, and you'll enjoy the full bandwidth of your internet connection.

Beside `online`, there are a few more presets available: `Fast 3G`, `Slow 3G` and `offline`, which vary in upload speed, download speed and latency. If you need to emulate a different, more exotic speed, you can add your own profile through the `Add...` button:

![Adding a custom throttling profile](custom-throttling-profile.png)

## Using Live Expressions in console

What are `Live Expressions`?

`Live Expressions` are expression which are evaluated constantly and appear at the top of you console. Say, you want to track a variable's value over time. You can log it over and over and over again:

![Printing a variable over and over again](print-over-and-over.png)

With `Live Expressions`, you can focus on your code, and let chrome do the monitoring:

![Storing a variable in a live expression](live-expression.gif)
