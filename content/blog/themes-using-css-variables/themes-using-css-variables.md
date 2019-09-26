---
title: Themes Using CSS Variables and React Context
date: "2019-09-23"
description: "CSS variables are awesome! We can integrate them beautifully with react Context for a super easy way to theme our application."
slug: /themes-using-css-variables-and-react-context
---

CSS variables are really cool. You can use them for a lot of things, one of which is applying themes in your application with ease. In this tutorial I'll show you how to integrate them with react to create a `ThemeComponent` (with context!).

## CSS Variables in a Gist

So first of all, I'd like to explain briefly what CSS variables (or in their formal name - CSS custom properties) are, and how to use them.

CSS variables are a way for us to defined variables, that will be applied throughout our application. The syntax is as follows:

![CSS Variables](cover.png)

What happens here?  
Using the `--{varName}` notation we can tell our browser to store a unique variable called `varName` (or in the example above, `primary`), and then we can use it with the `var(--{varName})` notation anywhere in our `.css` files.

Seems really simple? Because it is. There's not much to it. According to [caniuse.com](https://caniuse.com/#feat=css-variables) over 92% of users world wide use a browser that supports css variables (unless you really need IE support, in which case you're out of luck), so for the most part they're completely safe to use.

If you want to read more, you can find more information in the [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

## Setting CSS Variables from Javascript

Setting and using CSS variables from javascript is just as easy as setting and using them in css. To get a value defined on an element:

```js
const primary = getComputedStyle(element).getPropertyValue("--primary");
```

Will give us the value of the `primary` custom css property defined for the `element`.

Setting a custom css property works like so:

```js
element.style.setProperty("--light", "#5cd2b6");
```

Or, if we want to set the property for the entire application, we can do:

```js
document.documentElement.style.setProperty("--light", "#5cd2b6");
```

And now the `light` property will be accessible to all of our code.

## React Context in a Gist

The `React Context API` is the only way provided by react to pass props indirectly from one component to a descendent component. In this guide I'll use the `useContext` hook, which you can read more about [here](https://reactjs.org/docs/hooks-reference.html#usecontext), but the principle is the same with class components.

First, we must initialize a context object:

```jsx
import React from "react";

export const ThemeSelectorContext = React.createContext({
  themeName: "dark"
});
```

The parameters passed to the `React.createContext` function are the default parameters of the context. Now that we have a context object, we can use it to "inject" props to our indirect descendants:

```jsx
export default ({ children }) => (
  <ThemeSelectorContext.Provider value={{ themeName: "dark" }}>
    {children}
  </ThemeSelectorContext.Provider>
);
```

And now anyone who wants to read the values in our context can do it:

```jsx
import React, { useContext } from "react";
import { ThemeSelectorContext } from "./themer";

export const () => {
  const { themeName } = useContext(ThemeSelectorContext);

  return <div>My theme is {themeName}</div>
};
```

A Voila! No matter where in the component hierarchy our component lies, it has access to the `themeName` variable. If we want to allow editing the value in our context, we can pass a function like so:

```jsx
export default ({ children }) => {
  const [themeName, setThemeName] = useState("dark");

  const toggleTheme = () => {
    themeName === "dark" ? setThemeName("light") : setThemeName("dark");
  };

  <ThemeSelectorContext.Provider value={{ themeName, toggleTheme }}>
    {children}
  </ThemeSelectorContext.Provider>;
};
```

And to use it:

```jsx
import React, { useContext } from "react";
import { ThemeSelectorContext } from "./themer";

export const () => {
  const { themeName, toggleTheme } = useContext(ThemeSelectorContext);

  return <>
    <div>My theme is {themeName}</div>
    <button onClick={toggleTheme}>Change Theme!</button>
  </>
};
```

That's enough for our needs, but if you want you can further read on the [Official React Context Documentation](https://reactjs.org/docs/context.html).

## Putting Everything Together

Now that we know how to set css custom properties from javascript, and we can pass props down our component tree, we can make a really nice and simple "theme engine" for out application. First up we'll define our themes:

```js
const themes = {
  dark: {
    primary: "#1ca086",
    separatorColor: "rgba(255,255,255,0.20)",
    textColor: "white",
    backgroundColor: "#121212",
    headerBackgroundColor: "rgba(255,255,255,0.05)",
    blockquoteColor: "rgba(255,255,255,0.20)",
    icon: "white"
  },
  light: {
    primary: "#1ca086",
    separatorColor: "rgba(0,0,0,0.08)",
    textColor: "black",
    backgroundColor: "white",
    headerBackgroundColor: "#f6f6f6",
    blockquoteColor: "rgba(0,0,0,0.80)",
    icon: "#121212"
  }
};
```

This just happens to be the color pallette I use for my blog, but really the sky is the limit when it comes to themes, so feel free to experiment.

Now we create our `ThemeSelectorContext`:

```jsx
export const ThemeSelectorContext = React.createContext({
  themeName: "dark",
  toggleTheme: () => {}
});
```

And our theme component:

```jsx
export default ({ children }) => {
  const [themeName, setThemeName] = useState("dark");
  const [theme, setTheme] = useState(themes[themeName]);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      setThemeName("light");
    } else {
      setTheme(themes.dark);
      setThemeName("dark");
    }
  };

  return (
    <ThemeSelectorContext.Provider value={{ toggleTheme, themeName }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};
```

In this component we store our selected theme object, and the selected theme name, and we defined a function to toggle our selected theme.

The last bit left is actually setting the css custom properties from our theme. We can easily do it using the `.style.setProperty` API:

```js
const setCSSVariables = theme => {
  for (const value in theme) {
    document.documentElement.style.setProperty(`--${value}`, theme[value]);
  }
};
```

Now for each value in our `theme` object we can access a css property with the same name (prefixed with `--` of course). The last thing we need is to run the `setCSSVariables` function every time the theme is toggled, so in our `Theme` component we can use the `useEffect` hook like so:

```jsx
export default ({ children }) => {
  // code...

  useEffect(() => {
    setCSSVariables(theme);
  });

  // code...
};
```

The full source can be found [on github](https://github.com/dorshinar/blog/blob/master/src/components/themer/themer.jsx).

Using our theme is super convenient:

```css
.title {
  color: var(--primary);
}
```

And updating our theme is just as easy:

```jsx
import Toggle from "react-toggle";

export default () => {
  const { toggleTheme, themeName } = useContext(ThemeSelectorContext);

  <Toggle defaultChecked={themeName === "dark"} onClick={toggleTheme} />;
};
```

For this example I'm using the `Toggle` component from `react-toggle`, but any toggle/button component would do just fine. Clicking the `Toggle` will call the `toggleTheme` function, and will update our theme for the entire app, no more configuration needed.

That's it! That's all you need to do to create a super simple, super clean theme engine for your application. If you want to see a real live example, you can check out the [source code](https://github.com/dorshinar/blog/blob/master/src/components/themer/themer.jsx) of my blog.

Thank you for reading and I hope you enjoyed it!
