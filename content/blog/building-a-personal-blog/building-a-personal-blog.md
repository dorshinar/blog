---
title: Building a Personal Blog
date: "2019-06-26T19:46:00.000Z"
description: "A journey toward a professional-ish blog for my articles and thoughts."
published: false
slug: /building-a-personal-blog
---

It all started from the beginning of 2019. It was a gloomy day at the office as I was struggling to get ESLint and Prettier to work nicely with React and Typescript. After battling with it for a couple of hours, I've decided to write an article about it. (/_ Link to Linting... _/).

Time moved on and I've written a couple more (even though neither of them got the traction of the first, beginners luck I guess). I've started to really like the concept of writing articles. After publishing a few articles, I've started getting more into the world of publishing technological articles. A lot of buzzwords were thrown in the air - cross-posting, SEO, canonical links and more. I've noticed that most of the serious people who post articles have a blog of their own from which they share (or cross-post, as the lingo goes) to other platforms.

I was thinking to myself - Why shouldn't I have one? You could say it's not really worth the hassle (I don't have a clear vision as to how many articles I plan to write, and I certainly don't have the time to write every week or so), but I thought it would be a fun project, and I hoped to learn something from it.

I have a decent experience with web development, mostly in [React](https://reactjs.org/) and I was thinking I could make a use of it in my blog. Around that time I stumbled upon [this post](https://mike.biful.co/gatsby-dev-to-cross-poster-brainstorm), where the author suggested using [Gatsby.js](https://www.gatsbyjs.org/) for such things. I've never really worked with Gatsby before, and most of my experience in web development comes from the component age (quite a noob, I know), but after a quick look through the documentation (which is superb!) I figured it would be a perfect solution for my blog.

So here it goes, let's build a blog!
I'm not going to explain every little implementation details (this is not a Gatsby intro!) - mostly because I feel everything I can write wouldn't be as clear as the official docs.

I started by going through the Gatsby [step-by-step tutorial](https://www.gatsbyjs.org/tutorial/). And after getting a good-enough grip on the matter, I've decided to jump right in. I used a starter built for blogs by gatsby ([it's right here!](https://github.com/gatsbyjs/gatsby-starter-blog)), which gave me a solid skeleton to begin with. I know I could've made it myself, but I still don't feel confident enough with gatsby, so I considered it a template - much like projects bootstrapped with [Create-React-App](https://facebook.github.io/create-react-app/).

First things first, I've removed some bloat I didn't need and replaced it with my own articles and profile pic. The next thing I did was formalize my posts. Now that I was using a starter (which relies on good markdown practices), I've found out that my articles were not up-to-snuff - for example - missing subtitle, description et cetera. Another thing I added was a reading time measure (Don't you just love to see an estimate to how long it would take you to read a post?). Ready to push and deploy (Just kidding, but it was this fast to get it to work).

A few more minor modifications took place - I added a link to my [GitHub profile](https://github.com/dorshinar) and my [Linkedin profile](https://www.linkedin.com/in/dor-shinar-82b00b144/). I've also started writing this very article, as I wanted it to be written more as a blog post describing the process rather than a technical article about setting up a gatsby site. I've converted all the inline CSS to [Styled Components](https://www.styled-components.com/), as I simply love the way SC enables you to write semantic HTML in a way that suites each and every component in your code. ESLint + Prettier + Husky + Lint-Staged were a welcome addition as well at this stage, as it drove me nuts to manually fix code and style errors. A custom scroll indicator and shorter post URIs were the last addition at this stage.
