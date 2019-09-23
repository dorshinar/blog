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

```css
:root {
  --primary: #1ca086;
}

.primary {
  color: var(--primary);
}
```

What happens here?  
Using the `--{varName}` notation we can tell our browser to store a unique variable called `varName` (or in the example above, `primary`), and then we can use it with the `var(--{varName})` notation anywhere in our `css` files.

Seems really simple? Because it is. There's not much to it (we'll get to setting CSS variables from javascript later on). According to [caniuse.com](https://caniuse.com/#feat=css-variables) over 92% of users world wide use a browser that supports css variables (unless you really need IE support, in which case you're out of luck), so for the most part they're completely safe to use.

If you want to read more, you can find more information in the [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

## React Context in a Gist

The `React Context API` is the only way provided by react to pass props indirectly from one component to a descendent. In this guide I'll use the `useContext` hook, which you can read more about [here](https://reactjs.org/docs/hooks-reference.html#usecontext), but the principle is the same with class components.

First, we must initialize a context object:

```jsx
import React from "react";

export const ThemeSelectorContext = React.createContext({
  themeName: "dark"
});
```

The parameters passed to the `React.createContext` function are the default parameters of the context. Now that we have a context object, we can use it to "inject" props to our indirect descendants:

```jsx
export default ({ children }) => {
  <ThemeSelectorContext.Provider value={{ themeName: "dark" }}>
    {children}
  </ThemeSelectorContext.Provider>;
};
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

  <ThemeSelectorContext.Provider value={{ themeName, setThemeName }}>
    {children}
  </ThemeSelectorContext.Provider>;
};
```

And to use it:

```jsx
import React, { useContext } from "react";
import { ThemeSelectorContext } from "./themer";

export const () => {
  const { themeName, setThemeName } = useContext(ThemeSelectorContext);

  return <>
    <div>My theme is {themeName}</div>
    <button onClick={setThemeName}>Change Theme!</button>
  </>
};
```
