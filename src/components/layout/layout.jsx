import React from "react";

import { Themer } from "../themer";

import { Header } from "./header";
import { Footer } from "./footer";
import { Wrapper, ContentWrapper } from "./layout.styled";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    if (!document.body.className) {
      document.body.className = "dark";
    }

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
