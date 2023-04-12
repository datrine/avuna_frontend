import React from "react";
import "./button.css";

const Button = ({ buttonText, action }) => {
  return <button onClick={action}>{buttonText}</button>;
};

export default Button;
