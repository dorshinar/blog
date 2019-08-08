import React, { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { rhythm } from "../../utils/typography";

const colorPalette = {
  primary: "#1ca086",
  light: "#5cd2b6",
  dark: "#007159"
};

const sizes = {
  contentWidth: rhythm(24)
};

const themes = {
  dark: {
    ...colorPalette,
    ...sizes,
    separatorColor: "rgba(255,255,255,0.20)",
    textColor: "white",
    backgroundColor: "#121212",
    headerBackgroundColor: "rgba(255,255,255,0.05)"
  },
  light: {
    ...colorPalette,
    ...sizes,
    separatorColor: "rgba(0,0,0,0.08)",
    textColor: "black",
    backgroundColor: "white",
    headerBackgroundColor: "#f6f6f6"
  }
};

export const ThemeSelectorContext = React.createContext({
  themeName: "dark",
  toggleTheme: () => {}
});

const setCSSVariables = theme => {
  for (const value in theme) {
    document.documentElement.style.setProperty(`--${value}`, theme[value]);
  }
};

export default ({ children }) => {
  const [themeName, setThemeName] = useState("dark");
  const [theme, setTheme] = useState(themes[themeName]);
  setCSSVariables(theme);

  const toggleTheme = useCallback(() => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      setThemeName("light");
      setCSSVariables(themes.light);
    } else {
      setTheme(themes.dark);
      setThemeName("dark");
      setCSSVariables(themes.dark);
    }
  }, [theme, setTheme, setThemeName]);

  return (
    <ThemeSelectorContext.Provider value={{ toggleTheme, themeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSelectorContext.Provider>
  );
};
