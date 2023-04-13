import React, { useState } from "react";
import "./verify.css";
import SignupMan from "../../assets/signup-img.png";
import ClosedEnvelope from "../../assets/closed-envelope.svg";
import OpenedEnvelope from "../../assets/opened-envelope.svg";
import Signup from "../../components/signup/signup";
import Popup from "../../components/popup/popup";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  return (
    <div className="signup-container">
      <div className="signup-img">
        <img src={SignupMan} alt="signup man" />
      </div>
      <div className="signup-wrapper">
        <Signup />
      </div>

      <Popup overlay="true">
        <img src={verify ? OpenedEnvelope : ClosedEnvelope} alt="closed-envelope" className="envelope" />
        <div className="popup-text">
          <h2>{verify ? "Email Verified" : "Confirm Your Email Now"}</h2>
          <p>
            {verify
              ? "Congratulations! Your email has been verified. Unlock new opportunities by completing your profile."
              : "A verification email has been sent to your inbox, please follow the instructions to complete the process"}
          </p>
        </div>
        {verify ? (
          <Button
            buttonText="Proceed"
            action={() => {
              navigate("/preferences");
            }}
            color="white"
            bgColor="#066fe0"
            margin="24px"
          />
        ) : (
          <Button
            buttonText="Proceed"
            action={() => {
              setVerify(true);
            }}
            color="white"
            bgColor="#066fe0"
            margin="24px"
          />
        )}
      </Popup>
    </div>
  );
};

export default Verify;
