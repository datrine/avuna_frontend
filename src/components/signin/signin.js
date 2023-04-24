import React, { useState } from "react";
import "./signin.css";
import Inputs from "../inputs/inputs";
import Button from "../button/button";
import SignupWith from "../signup-with/signupWith";
import { useNavigate } from "react-router-dom";
import Popup from "../popup/popup";
import OutsideClick from "../outside-click/outsideClick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotLogo from "../../assets/forgot-password.svg";
import EmailLogo from "../../assets/email.svg";
import Lock from "../../assets/lock.svg";
import ClosedEye from "../../assets/close-eye.svg";
import OpenedEye from "../../assets/opened-eye.svg";
import axiosInstance from "../../redux/helper/apiClient";

const SignIn = () => {
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  const [newemail, setNewEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const loginAction = async (code) => {
    try {
      await axiosInstance.post("/login/basic", code).then((response) => {
        window.sessionStorage.setItem("token", JSON.stringify(response.data));
        navigate("/home");
      });
    } catch (error) {
      toast.error(error.response.data.err.msg);
      setLoading(false);
    }
  };
  const resetAction = async (code) => {
    try {
      await axiosInstance.get(`/accounts/password/recovery/request?email=${newemail}`, code).then((response) => {
        setLoadings(false);
        setEmailSent(true);
      });
    } catch (error) {
      toast.error(error.response.data.err.msg);
      setLoadings(false);
    }
  };
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
              password={passwordType ? OpenedEye : ClosedEye}
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
            loginAction(data);
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
          {emailSent ? (
            <>
              <div className="forgot-grey">
                <img src={ForgotLogo} alt="forgot-logo" />
              </div>
              <div className="forgot-text">
                <h2>Password Reset</h2>
                <p>A verification email has been sent to your inbox, please follow the instructions to complete the process</p>
              </div>
              <Button
                buttonText="Back To Login"
                action={() => {
                  setOverlay(false);
                  setEmailSent(false);
                }}
                color="white"
                bgColor="#066fe0"
                margin="24px"
              />
            </>
          ) : (
            <>
              <div className="forgot-grey">
                <img src={ForgotLogo} alt="forgot-logo" />
              </div>
              <div className="forgot-text">
                <h2>Forgot Password</h2>
                <p>Please verify your email by clicking the button below</p>
              </div>
              <div className="forgot-input">
                <Inputs
                  labelName="Email"
                  placeholder="Enter your email address"
                  type="email"
                  icon={EmailLogo}
                  action={(e) => {
                    setNewEmail(e.target.value);
                  }}
                />
              </div>
              <Button
                buttonText="Verify Email"
                action={() => {
                  setLoadings(true);
                  const data = { newemail };
                  resetAction(data);
                }}
                color="white"
                bgColor="#066fe0"
                margin="24px"
                loading={loadings}
              />
            </>
          )}
        </Popup>
      </OutsideClick>
    </div>
  );
};

export default SignIn;
