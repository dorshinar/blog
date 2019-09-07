---
title: Linting Your React+Typescript Project With ESlint and Prettier
date: "2019-01-21T20:00:00.000Z"
description: "ESlint and Prettier are a bless for the JS world, and up until now there was no proper solution to achieving the same greatness with typescript. In this guide I'll walk you through how you can drink the cool kids juice as well."
published: true
slug: /linting-your-react+typescript-project-with-eslint-and-prettier
---

Lately we started a new project at work, written in React + Typescript. Of course, like any other project we wanted it to be automatically linted and style checked, so we don’t have to worry about that ourselves.

The two largest, most familiar tools for Typescript linting are [TSLint](https://palantir.github.io/tslint/) and [ESLint](https://eslint.org/). While ESLint exists for a longer period, it never had proper, production ready support for Typescript, so most Typescript projects were written with TSLint.

I was tasked with finding the right tool for our project. It is a completely new project, so no code migration or rule migration is necessary. First I looked at TSLint. It has great support for TypeScript, plus an excellent [VSCode extension](https://marketplace.visualstudio.com/items?itemName=eg2.tslint). It definitely seemed like the right choice, until I stumbled upon [this](https://eslint.org/blog/2019/01/future-typescript-eslint) article. I found it quite interesting, but If you don’t feel like reading, I’ll give you the gist here.

On Microsoft’s [TypeScript roadmap for the first 6 months of 2019](https://github.com/Microsoft/TypeScript/issues/29288) they provide an entire section about the growing demand among Typescript developers to have proper ESLint support. Furthermore, they talk about how ESLint’s architecture is more suitable to their needs, and finally they say they intend to fully embrace ESLint as the linting tool for the Typescript project, and guarantee to improve ESLint’s Typescript support in an effort to match TSLint’s support.

The rest of the article talks about a new [repository](https://github.com/typescript-eslint/typescript-eslint) that aims to contain the core projects needed for ESLint to be able to parse and lint Typescript code.

After some further testing and comparisons, I believe that ESLint is in fact the right tool for the job (not only because I trust the Typescript’s team 😉).

Update - May 10th:
[Create React App v3](https://github.com/facebook/create-react-app/releases/tag/v3.0.0) started linting TypeScript projects with `@typescript/eslint` as well, so I firmly believe I've made the right choice.

!["Featured Image"](featured-image.png)

Wow, this was a long introduction. Let’s get coding!

First things first, we need to create a new project. For this article I’ll be using `create-react-app`, but whichever boilerplate you choose (or create on your own) will do just fine.

```bash
npx create-react-app eslint-react-intro --typescript
```

For those who are not familiar, `npx` is a tool first introduced with `npm@5.2.0`. In a sentence, it allows us to run binaries of npm packages with ease without global installation. It actually does a little more than that, you’re encouraged to read more in [this](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) great article.

Now we have a basic react app, but we’re here for the linting, so let’s install a few dependencies:

```bash
npm i -D eslint @typescript-eslint/parser typescript-eslint/eslint-plugin
```

`eslint` is an obvious dependency, but what are `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`?

ESLint by default depends on a parser to read Javascript code and “translate” it to a language ESLint can understand (also called `ESTree`). By default ESLint uses [Espree](https://github.com/eslint/espree), which is great for reading JS code, but fails to read Typescript. `@typescript-eslint/parser` is an alternative parser that can read Typescript code and produce said ESTree, so we can tell ESLint to use it instead. `@typescript-eslint/eslint-plugin` is simply a list of rules you can turn on or off.

So we have our basic dependencies, lets configure ESLint.

ESLint has a nice interactive tool that you can run:

```bash
eslint --init
```

It will ask you a series of questions to help you configure it. I prefer defining the configuration on my own, so I’ll create the configuration file — `.eslintrc.js` (ESLint supports JSON and YAML as well). with the following content:

```javascript
module.exports = {
  parser: {},
  extends: [],
  plugins: [],
  rules: {}
};
```

Now we’ll make sure ESLint will work with the packages we’ve installed. We need to configure the parser, make sure the plugin is configured and the rule set applied is extended by the ones we’ve downloaded. Modify the file to look like so:

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {}
};
```

We’ve told ESLint to parse out Typescript code properly, and to use a recommended set of rules (under the ‘extends’ field, this part is optional) from an installed plugin.

Next we’ll add basic rules for React, courtesy of the Create React App development team. Add them to the file like so:

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "react-app"],
  plugins: ["@typescript-eslint", "react"],
  rules: {}
};
```

So we have linting for both Typescript and React, let’s add a code formatter. [Prettier](https://prettier.io/) is my weapon of choice, as it does a great job at detecting and fixing style errors, and has superb ESLint integration.

To add Prettier support, we need to install a few dependencies:

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) will disable any linting rule that might interfere with an existing Prettier rule, and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) will run Prettier analysis as part of ESLint.

Let’s add them to our ESLint config:

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {}
};
```

Go ahead, write poorly formatted code and you’ll see how Prettier is yelling at you. You are welcome to add your own custom Prettier configuration!

Basically we’re done. It should all work nice and easy, allowing us to keep our code linted and formatted like pros!

ESLint and Prettier are very powerful tools, and my article scratches the surface of their abilities, but it should get you started easily. I encourage you to explore more abilities and plugins that are available.

If you’d like a basic working project with my configuration, you’re welcome to take a look [here](https://github.com/dorshinar/eslint-react-intro).

A little bonus for those who stuck around and work with the all-mighty [Visual Studio Code](https://code.visualstudio.com/) (my go-to IDE for web development) — ESLint and Prettier both have excellent integration with VSCode.

First, install the ESLint and Prettier VSCode extensions:

```bash
ext install esbenp.prettier-vscode dbaeumer.vscode-eslint
```

Both come with various configuration options to play with, but their defaults are pretty good. The only thing we need to change is ESLint’s default behavior to only inspect _.JS and _.JSX files. Add this configuration option to your settings:

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
]
```

the autoFix key speaks for itself I believe, ESLint will try to fix all the errors it can (some are impossible to fix automatically). You can of course disable it if you prefer fixing the errors yourself. Now you’ll see all of the errors right in your IDE, so no one can miss them. I recommend combining ESLint with [Husky](https://github.com/typicode/husky) to make linting a must for every commit, but that’s up to you and your team.

Thank you for reading!

This article is a result of a quite frustrating personal experience trying to configure ESLint with no proper guide to help me through (except for the packages’ documentations). After struggling for several hours for something that felt like it should have taken five minutes, I decided to write this article so other developers won’t face the same struggle.
