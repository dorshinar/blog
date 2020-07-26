import React, { useContext } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";
import Toggle from "react-toggle";

import { ThemeSelectorContext } from "../../themer/themer";

import "react-toggle/style.css";
import "./header.css";

export function Header() {
  const data = useStaticQuery(graphql`
    query ThemeToggleQuery {
      sun: file(absolutePath: { regex: "/sun/" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      moon: file(absolutePath: { regex: "/moon/" }) {
        childImageSharp {
          fixed(width: 18, height: 18) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const { themeName } = useContext(ThemeSelectorContext);

  return (
    <header>
      <span className="header-content">
        <Link className="home-link" to="/" data-p="home-link">
          <h1>Dor Shinar</h1>
        </Link>
        <Toggle
          className="theme-toggle"
          checked={themeName === "dark"}
          onChange={(e) =>
            window.__setPreferredTheme(e.target.checked ? "dark" : "light")
          }
          aria-label={"Toggle Theme"}
          icons={{
            checked: (
              <Image
                className="moon"
                fixed={data.moon.childImageSharp.fixed}
                alt={"dark theme"}
              />
            ),
            unchecked: (
              <Image
                className="sun"
                fixed={data.sun.childImageSharp.fixed}
                alt={"light theme"}
              />
            ),
          }}
          data-p="theme-switcher"
        />
      </span>
    </header>
  );
}
