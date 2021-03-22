import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { useTheme } from "../Theme/Theme";

import "./ThemeButton.css";

export function ThemeButton() {
  const themeName = useTheme();
  const prefersReducedMotion = useReducedMotion();

  const onClick = () => {
    window.__setPreferredTheme(themeName === "light" ? "dark" : "light");
  };

  const label =
    themeName === "dark" ? "Activate light mode" : "Activate dark mode";

  const initial = prefersReducedMotion ? { opacity: 0 } : { y: "2em" };
  const animate = prefersReducedMotion ? { opacity: 1 } : { y: 0 };

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
          initial={initial}
          animate={animate}
          exit={initial}
          transition={{
            y: { type: "spring", stiffness: 250, damping: 18 },
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
