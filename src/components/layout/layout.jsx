import React from "react";

import {
  PrimaryHeader,
  LinkHome,
  SecondaryHeader,
  Wrapper
} from "./layout.styled";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    const link = <LinkHome to={`/`}>{title}</LinkHome>;

    header =
      location.pathname === rootPath ? (
        <PrimaryHeader>{link}</PrimaryHeader>
      ) : (
        <SecondaryHeader>{link}</SecondaryHeader>
      );

    return (
      <Wrapper>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        <GlobalStyled />
      </Wrapper>
    );
  }
}

export default Layout;
