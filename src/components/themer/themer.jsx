import React, { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

const colorPalette = {
  primary: "#1ca086",
  light: "#5cd2b6",
  dark: "#007159"
};

const themes = {
  dark: {
    ...colorPalette,
    separatorColor: "rgba(255,255,255,0.20)",
    textColor: "white",
    backgroundColor: "#121212",
    headerBackgroundColor: "rgba(255,255,255,0.05)"
  },
  light: {
    ...colorPalette,
    separatorColor: "rgba(0,0,0,0.08)",
    textColor: "black",
    backgroundColor: "white",
    headerBackgroundColor: "#f6f6f6"
  }
};

export const ThemeSelectorContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

export default ({ children }) => {
  const [themeName, setThemeName] = useState("dark");
  const [theme, setTheme] = useState(themes[themeName]);
  const toggleTheme = useCallback(() => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      setThemeName("light");
    } else {
      setTheme(themes.dark);
      setThemeName("dark");
    }
  }, [theme, setTheme, setThemeName]);

  return (
    <ThemeSelectorContext.Provider value={{ toggleTheme, themeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSelectorContext.Provider>
  );
};
