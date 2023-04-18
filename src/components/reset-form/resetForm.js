import React, { useState, useMemo } from "react";
import "./resetForm.css";
import Inputs from "../inputs/inputs";
import Button from "../button/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lock from "../../assets/lock.svg";
import ClosedEye from "../../assets/close-eye.svg";
import OpenedEye from "../../assets/opened-eye.svg";
import axiosInstance from "../../redux/helper/apiClient";
import validator from "validator";

const ResetForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  const [passwordType2, setPasswordType2] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [noCount, setNoCount] = useState(false);
  const [lowercase, setLowercase] = useState(false);

  const handlePwd = (e) => {
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 1,
      })
    ) {
      setSymbol(true);
    } else {
      setSymbol(false);
    }
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setUppercase(true);
    } else {
      setUppercase(false);
    }

    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setNumbers(true);
    } else {
      setNumbers(false);
    }

    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setNoCount(true);
    } else {
      setNoCount(false);
    }
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setLowercase(true);
    } else {
      setLowercase(false);
    }
    setPassword(e.target.value);
  };
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  const token = query.get("token");
  const linkEmail = query.get("email");
  const loginAction = (code) => {
    if (password !== newPassword) {
      setLoading(false);
      toast.error("Passwords have to match");
    } else {
      try {
        axiosInstance.post(`/accounts/password/recovery/change?${token}&${linkEmail}`, code).then((response) => {
          navigate("/login");
        });
      } catch (error) {
        toast.error(error.response.data.err.msg);
        setLoading(false);
      }
    }
  };
  return (
    <div className="reset-cont">
      <ToastContainer />
      <div className="reset-header">
        <h2>Change Your Password</h2>
        <p>Enter your new password and confirm it to reset your account</p>
      </div>
      <div className="reset-form">
        <div className="reset-single">
          <div>
            <Inputs
              labelName="Password"
              placeholder="Enter your password"
              type={passwordType ? "text" : "password"}
              action={handlePwd}
              passwordAction={() => {
                setPasswordType(!passwordType);
              }}
              icon={Lock}
              password={passwordType ? OpenedEye : ClosedEye}
            />
          </div>
        </div>
        <div className="reset-single">
          <div>
            <Inputs
              labelName="Confirm Password"
              placeholder="Retype your password"
              type={passwordType2 ? "text" : "password"}
              action={(e) => {
                setNewPassword(e.target.value);
              }}
              passwordAction={() => {
                setPasswordType2(!passwordType2);
              }}
              icon={Lock}
              password={passwordType2 ? OpenedEye : ClosedEye}
            />
          </div>
        </div>
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
        <Button
          buttonText="Change My Password"
          action={() => {
            setLoading(true);
            const data = {
              password,
            };
            loginAction(data);
          }}
          loading={loading}
          color="white"
          bgColor="#066fe0"
          margin="48px"
        />
        {/* <p>
          Don’t have an account?
          <span
            onClick={() => {
              navigate("/");
            }}>
            Sign Up
          </span>
        </p>
        <SignupWith text="Or Login With:" /> */}
      </div>
    </div>
  );
};

export default ResetForm;
