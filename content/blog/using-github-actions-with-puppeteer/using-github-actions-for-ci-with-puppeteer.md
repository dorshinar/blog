---
title: Using Github Actions for Continuous Integration with Puppeteer
date: 2019-12-15
description: Using puppeteer for e2e testing is really awesome. I'll show you how to integrate it with github actions.
slug: /using-github-actions-for-ci-with-puppeteer
---

Hello!
Lately I've added continuous integration to my blog using puppeteer for end to end testing. My main goal was to allow automatic dependency update using [Dependabot](https://dependabot.com/). As my CI platform, I chose [Github Actions](https://github.com/features/actions), as it is super easy to work with, and it integrates beautifully with any Github repository you already have. The whole thing only took roughly two days of intermittent work, and I think the results are quite awesome.

I do want to give a shout-out to Nick Taylor, who published [his article on the subject](https://www.iamdeveloper.com/blog/2019-08-15-update-dependencies-with-dependabot-cypress-and-netlify/), and laid the ground work for my efforts here, so I encourage you to read his article as well.

My tech stack is quite different though. I chose [puppeteer](https://pptr.dev/) as my end-to-end framework for several reasons. The first is that it is written and maintained by the folks behind the chrome dev tools, so I'm guaranteed a life-time support (until Chrome dies out, which is not in the near future), and it is really easy to work with. Another reason is that at home I'm working on a windows laptop with WSL (on which I'm running zshell with oh-my-zsh), and setting up cypress is quite a bit more difficult (although in our world nothing is impossible). Both reasons led me to choose puppeteer, and so far I'm not regretting.

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

What we do here is very simple, we open the browser with `puppeteer.launch()`, create a new page with `browser.newPage()` and navigate to this blog with `page.goto()`, and then we print the title. There are a bunch of things we can do with the puppeteer API, such as:

Running code in the context of the page:

```js
(async () => {
  await page.evaluate(() =>
    document.querySelector('[data-p="home-link"]').getAttribute("href")
  );
})();
```

Clicking on elements in the screen using a CSS selector:

```js
(async () => {
  await page.click(".awesome-button");
})();
```

Making use of the `$` selector (jQuery style):

```js
(async () => {
  await page.$(".awesome-button");
})();
```

Taking a screenshot:

```js
(async () => {
  await page.screenshot({ path: "screenshot.png" });
})();
```

There is a bunch more you can do with the puppeteer API, and I suggest you take a look in it before diving into writing tests, but the examples I've shown should give you a solid ground to build from.

### Integrating puppeteer with Jest

[jest](https://jestjs.io/) is an awesome test runner and assertion library. From their docs:

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

Jest allows you to run tests, mock imports, and make complex assertion really easily. Jest is also bundled with create-react-app, so I use it often at work.

#### Writing your first Jest test

Jest tests are super easy to write, and might be familiar to those who know other testing frameworks, by utilizing `it`, `test`, `describe` and other familiar conventions.  
A basic test could look like:

```js
function subtract(a, b) {
  return a - b;
}

it("subtracts 4 from 6 and returns 2", () => {
  expect(subtract(6, 4)).toBe(2);
});
```

You can also group multiple tests under one `describe`, so you can run different describes, or for convenient reporting:

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Can't divide by zero!");
  }
  return a / b;
}

describe("divide", () => {
  it("throws when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrow();
  });
  it("returns 3 when dividing 6 by 3", () => {
    expect(divide(6, 3)).toBe(2);
  });
});
```

You can, of course, create much more complicated tests using mocks and other type of assertions (or expectations), but for now that's enough.

Running the tests is also very simple:

```bash
jest
```

Jest will look for test files with any of the following popular naming conventions:

- Files with `.js` suffix in `__tests__` folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

#### jest-puppeteer

Now, we need to make puppeteer play nicely with jest. This isn't a particularly hard job to do, as there is a great package names [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer) that can comes to our aid.  
First, we must install it as a dependency:

```bash
npm i jest-puppeteer
```

And now we must extend out jest configuration. If you don't have one yet, there are a number of ways to do it, i'll go with a config file. Create a file named `jest.config.js` in the root of your project:

```bash
touch jest.config.js
```

In the file we must tell jest to use `jest-puppeteer`'s preset, so add the following code to the file:

```js{2}
module.exports = {
  preset: "jest-puppeteer"
  // The rest of your file...
};
```

## Github Actions in a gist

This is a brief introduction to Github Actions, and how to setup a basic CI pipeline.
