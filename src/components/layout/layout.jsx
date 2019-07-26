import React from "react";

import { Wrapper, ContentWrapper } from "./layout.styled";
import { Header } from "./header";
import { createGlobalStyle } from "styled-components";
import { Themer } from "../themer";

const GlobalStyled = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Themer>
        <Wrapper>
          <Header />
          <ContentWrapper>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </ContentWrapper>
          <GlobalStyled />
        </Wrapper>
      </Themer>
    );
  }
}

export default Layout;
