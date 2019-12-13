---
title: Using Github Actions for Continuous Integration with Puppeteer
date: "2019-10-25"
description: "Using puppeteer for e2e testing is really awesome. I'll show you how to integrate it with github actions."
slug: /using-github-actions-for-ci-with-puppeteer
---

Hello!
Lately I've added continuous integration to my blog using puppeteer for end to end testing. My main goal was to allow automatic dependency update using [Dependabot](https://dependabot.com/). As my CI platform, I chose [Github Actions](https://github.com/features/actions), as it is super easy to work with, and it integrates beautifully with any Github repository you already have. The whole thing only took roughly two days of intermittent work, and I think the results are quite awesome.

I do want to give a shout-out to Nick Taylor, who published [his article on the subject](https://www.iamdeveloper.com/blog/2019-08-15-update-dependencies-with-dependabot-cypress-and-netlify/), and laid the ground work for my efforts here, so I encourage you to read his article as well.

My tech stack is quite different though. I chose [puppeteer](https://pptr.dev/) as my end-to-end framework for several reasons. The first is that it is written and maintained by the folks behind the chrome dev tools, so I'm guaranteed a life-time support (until Chrome dies out, which is not in the near future), and it is really easy to work with. Another reason is that at home I'm working on a windows laptop with WSL 2 (on which I'm running oh-my-zsh), and setting up cypress is quite a bit more difficult (although in our world nothing is impossible). Both reasons led me to choose puppeteer, and so far I'm not regretting.

## End to end testing

End to end tests are different from other types of automated tests. E2E tests simulate a real user, performing actions on the screen. This kind of tests should help fill the blank space between "static" tests - such as unit tests, where you usually don't bootstrap the entire application, and component testing - which usually run against a single component (or a service in a micro-service architecture). By simulating user interaction, you get to tests the experience your user is receiving, while using your application or service.

The mantra that we try to follow is that it does not matter if your code performs perfect, if the button the user should press is hidden due to some css quirk. The end result is that the user will never get to feel the greatness of your code.

## Getting started with puppeteer

Puppeteer has a few configuration options that make it really awesome to write and validate tests.

Puppeteer tests can run in a "head-full" state, i.e. run a real instance of chrome, navigate to the site being tested, and perform actions on the given page. This way you - the developers writing the tests can see exactly what happens in the test, what button are being pressed and what the resulting UI looks like.

The opposite of "head-full" would be headless, where puppeteer does not open a chrome instance, making the tests significantly faster, and less CPU-intensive. That's a great feature as we don't really need the chrome UI open when we run our tests in CI.

Puppeteer is quite easy to work with, but you'll be surprised with the amount of actions you can perform using an automated tool.

We'll start with a basic scraper that prints the page title when we go to [https://dorshinar.me](https://dorshinar.me). In order to run puppeteer tests, we obviously must install it as a dependency:

```bash
npm i puppeteer
```

Now, our basic scraper looks like this:

```js
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://dorshinar.me");
  console.log(await page.title());

  await browser.close();
})();
```

There are a bunch of things we can do with the puppeteer API, such as:

- running code in the context of the page:

```js
(async () => {
  await page.evaluate(() =>
    document.querySelector('[data-p="home-link"]')   .getAttribute("href");
  );
})();
```

-- brief explanation about how to write puppeteer tests, basic API examples

### Integrating puppeteer with Jest

-- brief explanation about jest

#### Writing your first Jest tests

-- this will be a dummy test, to get to know the library

#### jest-puppeteer

-- Explain how to configure jest-puppeteer for easy integration

## Github Actions in a gist

This is a brief introduction to Github Actions, and how to setup a basic CI pipeline.
