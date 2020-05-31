import React from "react";

import { Themer } from "../themer/themer";

import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Wrapper, ContentWrapper } from "./layout.styled";

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
