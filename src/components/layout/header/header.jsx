import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ThemeSelectorContext } from "../../themer";

import {
  Wrapper,
  Content,
  Title,
  HomeLink,
  StyledToggle,
  StyledSun,
  StyledMoon
} from "./header.styled";

import "react-toggle/style.css";
import "./header.css";

export default () => {
  const data = useStaticQuery(graphql`
    query ThemeToggleQuery {
      sun: file(absolutePath: { regex: "/sun/" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      moon: file(absolutePath: { regex: "/moon/" }) {
        childImageSharp {
          fixed(width: 18, height: 18) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { toggleTheme, themeName } = useContext(ThemeSelectorContext);

  return (
    <Wrapper>
      <Content>
        <HomeLink to="/">
          <Title>Dor Shinar</Title>
        </HomeLink>
        <StyledToggle
          defaultChecked={themeName === "dark"}
          onClick={toggleTheme}
          aria-label={"Toggle Theme"}
          icons={{
            checked: (
              <StyledMoon
                fixed={data.moon.childImageSharp.fixed}
                alt={"dark theme"}
              />
            ),
            unchecked: (
              <StyledSun
                fixed={data.sun.childImageSharp.fixed}
                alt={"light theme"}
              />
            )
          }}
        />
      </Content>
    </Wrapper>
  );
};
