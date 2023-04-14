import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  const LayoutStyle = styled.div`
    width: 84%;
    margin: 32px auto 0px;
    max-width: 1269px;
  `;
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
