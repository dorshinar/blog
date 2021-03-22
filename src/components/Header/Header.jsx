import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import { ThemeButton } from "../ThemeButton/ThemeButton";

import "./Header.css";

const MotionLink = motion(Link);

export function Header() {
  return (
    <header>
      <span className="header-content">
        <MotionLink
          className="home-link"
          to="/"
          data-p="home-link"
          dragConstraints={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          drag
        >
          <h1>Dor Shinar</h1>
        </MotionLink>
        <ThemeButton />
      </span>
    </header>
  );
}
