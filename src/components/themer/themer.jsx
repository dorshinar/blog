import React, { useState } from "react";

export const ThemeSelectorContext = React.createContext({
  themeName: "dark",
  toggleTheme: () => {}
});

export default ({ children }) => {
  const [themeName, setThemeName] = useState("dark");

  const toggleTheme = () => {
    const newTheme = themeName === "dark" ? "light" : "dark";
    setThemeName(newTheme);
    document.body.className = newTheme;
  };

  return (
    <ThemeSelectorContext.Provider value={{ toggleTheme, themeName }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};
