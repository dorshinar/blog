import React, { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

const themes = {
  dark: {
    color: "white"
  },
  light: {
    color: "white"
  }
};

export const ThemeSelectorContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

export default ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = useCallback(
    () => setTheme(theme === themes.dark ? themes.light : themes.dark),
    [theme, setTheme]
  );

  return (
    <ThemeSelectorContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSelectorContext.Provider>
  );
};
