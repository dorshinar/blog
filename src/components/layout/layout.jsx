import React from "react";

import { Themer } from "../themer/themer";

import { Header } from "./header/header";
import { Footer } from "./footer/footer";

import "./layout.css";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Themer>
        <div className="layout-wrapper">
          <Header />
          <div className="content-wrapper">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </Themer>
    );
  }
}

export default Layout;
