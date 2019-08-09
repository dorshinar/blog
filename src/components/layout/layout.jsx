import React from "react";

import { Themer } from "../themer";

import { Header } from "./header";
import { Footer } from "./footer";
import { Wrapper, ContentWrapper } from "./layout.styled";

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
            <Footer />
          </ContentWrapper>
        </Wrapper>
      </Themer>
    );
  }
}

export default Layout;
