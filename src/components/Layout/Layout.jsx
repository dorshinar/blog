import React from "react";

import { Themer } from "../Theme/Theme";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import "./Layout.css";

const Layout = ({ children }) => {
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
};

export default Layout;
