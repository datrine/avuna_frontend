import React from "react";
import styled from "styled-components";
import Loader from "../loader/loader";

const ButtonStyle = styled.button`
  width: 100%;
  margin-top: ${(props) => props.margin};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 0;
  padding: 16px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border-radius: 8px;
  transition: 1s all ease;
`;
const Button = ({ buttonText, action, bgColor, color, margin, disabled, loading }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : disabled ? (
        <ButtonStyle disabled>{buttonText}</ButtonStyle>
      ) : (
        <ButtonStyle margin={margin} bgColor={bgColor} color={color} disabled={disabled} onClick={action}>
          {buttonText}
        </ButtonStyle>
      )}
    </>
  );
};

export default Button;
