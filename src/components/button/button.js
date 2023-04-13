import React from "react";
import styled from "styled-components";

const Button = ({ buttonText, action, bgColor, color, margin }) => {
  const ButtonStyle = styled.button`
    width: 100%;
    margin-top: ${margin};
    background-color: ${bgColor};
    color: ${color};
    cursor: pointer;
    border: 0;
    padding: 16px 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    border-radius: 8px;
  `;
  return <ButtonStyle onClick={action}>{buttonText}</ButtonStyle>;
};

export default Button;
