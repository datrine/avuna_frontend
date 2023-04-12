import React from "react";
import "./signup.css";
import Inputs from "../inputs/inputs";
import Button from "../button/button";
import SignupWith from "../signup-with/signupWith";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
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
        <Button
          buttonText="Submit"
          action={() => {
            navigate("/verify");
          }}
        />
        <p>
          Already have an account? <span>Sign In</span>
        </p>
        <SignupWith />
      </div>
    </div>
  );
};

export default Signup;
