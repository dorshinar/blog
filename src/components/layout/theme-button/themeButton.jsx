import React, { useContext } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ThemeSelectorContext } from "../../themer/themer";

import "./themeButton.css";

export function ThemeButton() {
  const { themeName } = useContext(ThemeSelectorContext);

  const onClick = () => {
    window.__setPreferredTheme(themeName === "light" ? "dark" : "light");
  };

  const label =
    themeName === "dark" ? "Activate light mode" : "Activate dark mode";

  return (
    <button
      className="unstyled"
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      {themeName === "dark" ? (
        <FontAwesomeIcon className="moon" alt="dark theme" icon={faMoon} />
      ) : (
        <FontAwesomeIcon className="sun" alt="light theme" icon={faSun} />
      )}
    </button>
  );
}
