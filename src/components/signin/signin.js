import React, { useState, useEffect } from "react";
import "./signin.css";
import Inputs from "../inputs/inputs";
import Button from "../button/button";
import SignupWith from "../signup-with/signupWith";
import { useNavigate } from "react-router-dom";
import Popup from "../popup/popup";
import OutsideClick from "../outside-click/outsideClick";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotLogo from "../../assets/forgot-password.svg";
import EmailLogo from "../../assets/email.svg";
import Lock from "../../assets/lock.svg";
import ClosedEye from "../../assets/close-eye.svg";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginSuccess, loginError } = useSelector((state) => state.loginReducer);
  const [overlay, setOverlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  // const [newpassword, setNewPassword] = useState("");
  // const [newemail, setNewEmail] = useState("");

  useEffect(() => {
    if (loginSuccess !== null) {
      window.sessionStorage.setItem("token", loginSuccess);
      navigate("/home");
    } else if (loginError !== null) {
      setLoading(false);
      toast.error(loginError.msg);
    }
  }, [loginSuccess, loginError, navigate]);
  return (
    <div className="signin-cont">
      <ToastContainer />
      <div className="signin-header">
        <h2>Sign In</h2>
        <p>Welcome Back</p>
      </div>
      <div className="signin-form">
        <div className="signin-single">
          <div>
            <Inputs
              labelName="Email Address"
              placeholder="Enter your email address"
              type="email"
              action={(e) => {
                setEmail(e.target.value);
              }}
              icon={EmailLogo}
            />
          </div>
        </div>
        <div className="signin-single">
          <div>
            <Inputs
              labelName="Password"
              placeholder="Enter your password"
              type={passwordType ? "text" : "password"}
              action={(e) => {
                setPassword(e.target.value);
              }}
              passwordAction={() => {
                setPasswordType(!passwordType);
              }}
              icon={Lock}
              password={passwordType ? ClosedEye : ClosedEye}
            />
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
            setLoading(true);
            const data = {
              email,
              password,
            };
            dispatch(loginAction(data));
          }}
          loading={loading}
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
          <div className="forgot-grey">
            <img src={ForgotLogo} alt="forgot-logo" />
          </div>
          <div className="forgot-text">
            <h2>Forgot Password</h2>
            <p>Please verify your email by clicking the button the below</p>
          </div>
          <div className="forgot-input">
            <Inputs
              labelName="Email"
              placeholder="Enter your email address"
              type="email"
              icon={EmailLogo}
              // action={(e) => {
              //   setNewEmail(e.target.value);
              // }}
            />
          </div>
          <div className="forgot-input">
            <Inputs
              labelName="New Password"
              placeholder="Enter your new Password"
              type="password"
              // action={(e) => {
              //   setNewPassword(e.target.value);
              // }}
            />
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
