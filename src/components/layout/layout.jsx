import React from "react";

import { Wrapper, ContentWrapper, Footer } from "./layout.styled";
import { Header } from "./header";
import { Themer } from "../themer";

import "./layout.css";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Themer>
        <Wrapper>
          <Header />
          <ContentWrapper>
            <main>{children}</main>
            <Footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Footer>
          </ContentWrapper>
        </Wrapper>
      </Themer>
    );
  }
}

export default Layout;
