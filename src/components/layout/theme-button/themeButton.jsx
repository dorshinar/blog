import React, { useContext } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.span
          key={themeName}
          initial={{ y: "1.6em" }}
          animate={{ y: 0 }}
          exit={{ y: "1.6em" }}
          transition={{
            y: { type: "spring", damping: 12, duration: 0.3 },
          }}
        >
          {themeName === "dark" ? (
            <FontAwesomeIcon className="moon" alt="dark theme" icon={faMoon} />
          ) : (
            <FontAwesomeIcon className="sun" alt="light theme" icon={faSun} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
