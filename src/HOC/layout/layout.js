import React from "react";
import LayoutStyle from "./layoutStyled";

const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
