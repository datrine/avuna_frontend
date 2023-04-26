import React from "react";
import ProgressWidthCont from "./progressWidthStyled";
import styled from "styled-components";

const ProgressWidth = ({ width }) => {
  const ProgressWidthConts = styled.div`
    width: ${width};
    background: #066fe0;
    border-radius: 70px;
    height: 100%;
  `;
  return (
    <ProgressWidthCont>
      <ProgressWidthConts></ProgressWidthConts>
    </ProgressWidthCont>
  );
};

export default ProgressWidth;
