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
import validator from "validator";
import PasswordReq from "../password-req/passwordReq";
import Popup from "../popup/popup";
import CheckMark from "../../assets/check-mark.svg";
import axios from "axios";

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
  const [typed, setTyped] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const handlePwd = (e) => {
    const count = e.target.value.length;
    if (count > 0) {
      setTyped(true);
    } else {
      setTyped(false);
    }
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
  const axiosInstance = axios.create({
    baseURL: "https://avuna-backend.onrender.com/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const linkEmail = query.get("email");
  const loginAction = async (code) => {
    if (password !== newPassword) {
      setLoading(false);
      toast.error("Passwords have to match");
    } else {
      if (!numbers) {
        setLoading(false);
        toast.error("Password must contain a Number");
      } else if (!symbol) {
        setLoading(false);
        toast.error("Password must contain a Special Character");
      } else if (!noCount) {
        setLoading(false);
        toast.error("Password must be up to 8 Characters");
      } else if (!lowercase) {
        setLoading(false);
        toast.error("Password must contain a Lower Case Character");
      } else if (!uppercase) {
        setLoading(false);
        toast.error("Password must contain a Upper Case Character");
      } else {
        try {
          await axiosInstance.post(`/accounts/password/recovery/change?token=${token}&email=${linkEmail}`, code).then((response) => {
            setLoading(false);
            setOverlay(true);
          });
        } catch (error) {
          toast.error(error.response.data.err.msg);
          setLoading(false);
        }
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
        {typed ? <PasswordReq numbers={numbers} lowercase={lowercase} uppercase={uppercase} symbol={symbol} noCount={noCount} /> : null}
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
        <Popup
          overlay={overlay}
          action={() => {
            setOverlay(false);
          }}>
          <div className="reset-logo">
            <img src={CheckMark} alt="forgot-logo" />
          </div>
          <div className="reset-text">
            <h2>Password Updated</h2>
            <p>You can can now log in with your new password</p>
          </div>
          <Button
            buttonText="Go to Login Page"
            action={() => {
              navigate("/login");
            }}
            color="white"
            bgColor="#066fe0"
            margin="24px"
          />
        </Popup>
      </div>
    </div>
  );
};

export default ResetForm;
