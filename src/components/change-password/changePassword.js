import React, { useState, useRef, useEffect } from "react";
import "./changePassword.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import Inputs from "../inputs/inputs";
import Lock from "../../assets/lock.svg";
import ClosedEye from "../../assets/close-eye.svg";
import OpenedEye from "../../assets/opened-eye.svg";
import Button from "../button/button";

const ChangePassword = () => {
  const [passwordType, setPasswordType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordType1, setPasswordType1] = useState(false);
  const [passwordType2, setPasswordType2] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfPassword, setNewConfPassword] = useState("");

  const navigate = useNavigate();

  const myref = useRef();
  useEffect(() => {
    myref.current.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [myref]);
  const [token, setToken] = useState("");

  const [cookies] = useCookies(["user"]);
  useEffect(() => {
    setToken(cookies.Name);
  }, [cookies]);
  return (
    <div className="change-password-container" ref={myref}>
      <ToastContainer />
      <h2>Change Password</h2>
      <div className="change-password-form">
        <div className="create-password-input">
          <Inputs
            labelName="Current Password"
            placeholder="Enter Current Password"
            icon={Lock}
            password={passwordType ? OpenedEye : ClosedEye}
            type={passwordType ? "text" : "password"}
            action={(e) => {
              setPassword(e.target.value);
            }}
            passwordAction={() => {
              setPasswordType(!passwordType);
            }}
          />
        </div>
        <div className="create-password-input">
          <Inputs
            labelName="Create New Password"
            placeholder="Enter New Password"
            icon={Lock}
            password={passwordType1 ? OpenedEye : ClosedEye}
            type={passwordType1 ? "text" : "password"}
            action={(e) => {
              setNewPassword(e.target.value);
            }}
            passwordAction={() => {
              setPasswordType1(!passwordType1);
            }}
          />
        </div>
        <div className="create-password-input">
          <Inputs
            labelName="Confirm New Password"
            placeholder="Retype New Password"
            icon={Lock}
            password={passwordType2 ? OpenedEye : ClosedEye}
            type={passwordType2 ? "text" : "password"}
            action={(e) => {
              setNewConfPassword(e.target.value);
            }}
            passwordAction={() => {
              setPasswordType2(!passwordType2);
            }}
          />
        </div>
      </div>
      <div className="change-password-button">
        <Button
          buttonText="Update"
          bgColor="#066FE0"
          color="white"
          action={async () => {
            setLoading(true);
            if (newPassword === newConfPassword) {
              const data = {
                new_password: newPassword,
                old_password: password,
              };
              const config = {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token?.accessToken}`,
                },
              };
              const url = "https://avuna-232c595f9bcf.herokuapp.com/api/accounts/password/change";
              try {
                await axios.post(url, data, config).then((response) => {
                  toast.success("Changed Successfully");
                  setLoading(false);
                });
              } catch (error) {
                setLoading(false);
                if (error.response.data.err.msg === "Access token not valid") {
                  navigate("/login");
                } else {
                  toast.error(error.response.data.err.msg);
                }
              }
            } else {
              toast.error("New Password and Confirm Password must match");
              setLoading(false);
            }
          }}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ChangePassword;
