import React from "react";
import "./verify.css";
import SignupMan from "../../assets/signup-img.png";
import ClosedEnvelope from "../../assets/closed-envelope.svg";
import Signup from "../../components/signup/signup";
import Popup from "../../components/popup/popup";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  return (
    <div className="signup-container">
      <div className="signup-img">
        <img src={SignupMan} alt="signup man" />
      </div>
      <div className="signup-wrapper">
        <Signup />
      </div>
      <Popup overlay="true">
        <img src={ClosedEnvelope} alt="closed-envelope" className="envelope" />
        <div className="popup-text">
          <h2>Verify your email</h2>
          <p>Please verify your email by clicking the button the below</p>
        </div>
        <Button
          buttonText="Proceed"
          action={() => {
            navigate("/login");
          }}
        />
      </Popup>
    </div>
  );
};

export default Verify;
