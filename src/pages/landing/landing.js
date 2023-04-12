import React from "react";
import "./landing.css";
import SignupMan from "../../assets/signup-img.png";
import Google from "../../assets/google.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Inputs from "../../components/inputs/inputs";
import Button from "../../components/button/button";

const Landing = () => {
  return (
    <div className="signup-container">
      <div className="signup-img">
        <img src={SignupMan} alt="signup man" />
      </div>
      <div className="signup-wrapper">
        <div className="signup-cont">
          <div className="signup-header">
            <h2>Sign Up</h2>
            <p>Create your Avuna account quick and easy:</p>
          </div>
          <div className="signup-form">
            <div className="signup-double">
              <div>
                <Inputs labelName="First Name" placeholder="Enter your first name" type="text" />
              </div>
              <div>
                <Inputs labelName="Last Name" placeholder="Enter your last name" type="text" />
              </div>
            </div>
            <div className="signup-single">
              <div>
                <Inputs labelName="Email Address" placeholder="Enter your email address" type="email" />
              </div>
            </div>
            <div className="signup-single">
              <div>
                <Inputs labelName="Password" placeholder="Enter your password" type="password" />
              </div>
            </div>
            <Button buttonText="Submit" />
            <p>
              Already have an account? <span>Sign In</span>
            </p>
            <div className="signup-with">
              <p>Or Sign Up With:</p>
              <div className="social-signup">
                <div className="social-single">
                  <img src={Google} alt="google" />
                </div>
                <div className="social-single">
                  <img src={Facebook} alt="google" />
                </div>
                <div className="social-single">
                  <img src={Twitter} alt="google" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
