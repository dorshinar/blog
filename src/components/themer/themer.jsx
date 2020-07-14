import React, { useState, useEffect } from "react";

export const ThemeSelectorContext = React.createContext({
  themeName: "dark",
  toggleTheme: () => {},
});

export function Themer({ children }) {
  const [themeName, setThemeName] = useState("dark");

  useEffect(() => {
    setThemeName(window.__theme);

    window.__onThemeChange = () => {
      setThemeName(window.__theme);
    };
  }, []);

  return (
    <ThemeSelectorContext.Provider value={{ themeName }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
}
