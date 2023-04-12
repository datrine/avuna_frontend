import React from "react";
import "./landing.css";
import SignupMan from "../../assets/signup-img.png";
import Signup from "../../components/signup/signup";

const Landing = () => {
  return (
    <div className="signup-container">
      <div className="signup-img">
        <img src={SignupMan} alt="signup man" />
      </div>
      <div className="signup-wrapper">
        <Signup />
      </div>
    </div>
  );
};

export default Landing;
