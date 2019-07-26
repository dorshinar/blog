import React, { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

const themes = {
  dark: {
    textColor: "white",
    color: "black",
    headerBackgroundColor: "#353535"
  },
  light: {
    textColor: "black",
    color: "white",
    headerBackgroundColor: "#f6f6f6"
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
