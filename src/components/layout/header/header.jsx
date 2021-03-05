import React from "react";
import { Link } from "gatsby";

import "react-toggle/style.css";
import "./header.css";
import { ThemeButton } from "../theme-button/themeButton";

export function Header() {
  return (
    <header>
      <span className="header-content">
        <Link className="home-link" to="/" data-p="home-link">
          <h1>Dor Shinar</h1>
        </Link>
        <ThemeButton />
      </span>
    </header>
  );
}
