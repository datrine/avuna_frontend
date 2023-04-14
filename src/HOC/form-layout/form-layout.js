import React from "react";
import "./form-layout.css";
import SignupMan from "../../assets/signup-img.png";

const FormLayout = ({ children }) => {
  return (
    <div className="signup-container">
      <div className="signup-img">
        <img src={SignupMan} alt="signup man" />
      </div>
      <div className="signup-wrapper">{children}</div>
    </div>
  );
};

export default FormLayout;
