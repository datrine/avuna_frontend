import React from "react";
import "./passwordReq.css";

const PasswordReq = ({ noCount, numbers, lowercase, uppercase, symbol }) => {
  return (
    <div className="password-requirements">
      <h2>Password Requirements</h2>
      <div className={noCount ? "single-password-reqt" : "single-password-req"}>
        <div></div>
        <p>At least 8 characters</p>
      </div>
      <div className={numbers ? "single-password-reqt" : "single-password-req"}>
        <div></div>
        <p>At least a number</p>
      </div>
      <div className={lowercase ? "single-password-reqt" : "single-password-req"}>
        <div></div>
        <p>A lowercase Letter</p>
      </div>
      <div className={uppercase ? "single-password-reqt" : "single-password-req"}>
        <div></div>
        <p>A uppercase Letter</p>
      </div>
      <div className={symbol ? "single-password-reqt" : "single-password-req"}>
        <div></div>
        <p>A special character</p>
      </div>
    </div>
  );
};

export default PasswordReq;
