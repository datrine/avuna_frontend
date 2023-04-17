import React from "react";
import styled from "styled-components";
import Loader from "../loader/loader";

const Button = ({ buttonText, action, bgColor, color, margin, disabled, loading }) => {
  const ButtonStyle = styled.button`
    width: 100%;
    margin-top: ${margin};
    background-color: ${bgColor};
    color: ${color};
    cursor: ${disabled ? "not-allowed" : "pointer"};
    border: 0;
    padding: 16px 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    border-radius: 8px;
    transition: 1s all ease;
  `;
  return <>{loading ? <Loader /> : disabled ? <ButtonStyle disabled>{buttonText}</ButtonStyle> : <ButtonStyle onClick={action}>{buttonText}</ButtonStyle>}</>;
};

export default Button;
