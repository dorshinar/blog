import React, { useState, useEffect, useContext } from "react";

const ThemeSelectorContext = React.createContext({
  themeName: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  const { themeName } = useContext(ThemeSelectorContext);

  return themeName;
}

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
