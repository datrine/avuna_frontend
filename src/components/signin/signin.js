import React, { useState } from "react";
import "./signin.css";
import Inputs from "../inputs/inputs";
import Button from "../button/button";
import SignupWith from "../signup-with/signupWith";
import { useNavigate } from "react-router-dom";
import Popup from "../popup/popup";
import OutsideClick from "../outside-click/outsideClick";

const SignIn = () => {
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState(false);
  return (
    <div className="signup-cont">
      <div className="signup-header">
        <h2>Sign In</h2>
        <p>Welcome Back</p>
      </div>
      <div className="signup-form">
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
        <h3
          onClick={() => {
            setOverlay(true);
          }}>
          Forgot Password?
        </h3>
        <Button
          buttonText="Submit"
          action={() => {
            navigate("/verify");
          }}
          color="white"
          bgColor="#066fe0"
          margin="48px"
        />
        <p>
          Don’t have an account?
          <span
            onClick={() => {
              navigate("/");
            }}>
            Sign Up
          </span>
        </p>
        <SignupWith text="Or Login With:" />
      </div>
      <OutsideClick
        onClickOutside={() => {
          setOverlay(false);
        }}>
        <Popup
          overlay={overlay}
          action={() => {
            setOverlay(false);
          }}>
          <div className="forgot-grey"></div>
          <div className="forgot-text">
            <h2>Forgot Password</h2>
            <p>Please verify your email by clicking the button the below</p>
          </div>
          <div className="forgot-input">
            <Inputs labelName="Email" placeholder="Enter your email address" type="email" />
          </div>
          <Button
            buttonText="Reset Password"
            action={() => {
              navigate("/preferences");
            }}
            color="white"
            bgColor="#066fe0"
            margin="24px"
          />
        </Popup>
      </OutsideClick>
    </div>
  );
};

export default SignIn;
