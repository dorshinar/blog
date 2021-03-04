import React, { useContext } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Toggle from "react-toggle";

import { ThemeSelectorContext } from "../../themer/themer";

import "react-toggle/style.css";
import "./header.css";

export function Header() {
  const data = useStaticQuery(graphql`
    query ThemeToggleQuery {
      sun: file(absolutePath: { regex: "/sun/" }) {
        childImageSharp {
          gatsbyImageData(width: 20, height: 20, layout: FIXED)
        }
      }
      moon: file(absolutePath: { regex: "/moon/" }) {
        childImageSharp {
          gatsbyImageData(width: 18, height: 18, layout: FIXED)
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
              <GatsbyImage
                image={data.moon.childImageSharp.gatsbyImageData}
                className="moon"
                alt={"dark theme"}
              />
            ),
            unchecked: (
              <GatsbyImage
                image={data.sun.childImageSharp.gatsbyImageData}
                className="sun"
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
