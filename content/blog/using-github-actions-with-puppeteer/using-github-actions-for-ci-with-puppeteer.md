---
title: Using Github Actions for Continuous Integration with Puppeteer
date: "2019-10-25"
description: "Using puppeteer for e2e testing is really awesome. I'll show you how to integrate it with github actions."
slug: /using-github-actions-for-ci-with-puppeteer
---

Hello!
Lately I've added continuous integration to my blog using puppeteer for end to end testing. I don't think I should tell you why automated testing is important, and how much you can benefit from it. My main goal was to allow automatic dependency update using [Dependabot](https://dependabot.com/). I might write about it later, but in this article I chose to focus on running the tests on pull requests.
