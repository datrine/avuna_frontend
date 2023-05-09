import React, { useState } from "react";
import "./changePassword.css";
import { ToastContainer } from "react-toastify";
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
  return (
    <div className="change-password-container">
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
            const data = {
              password,
              newPassword,
              newConfPassword,
            };

            console.log(data);
            // const config = {
            //   headers: {
            //     "Content-Type": "application/json",
            //     Authorization: `Bearer ${token?.accessToken}`,
            //   },
            // };
            // const url = "https://avuna-backend.onrender.com/api/accounts/me/profile/edit";
            // const data = {
            //   sex,
            //   country,
            //   age_range: age,
            // };
            // try {
            //   await axios.post(url, data, config).then((response) => {
            //     toast.success("Changed Successfully");
            //     setLoading(false);
            //   });
            // } catch (error) {
            //   setLoading(false);
            //   if (error.response.data.err.msg === "Access token not valid") {
            //     navigate("/login");
            //   } else {
            //     toast.error(error.response.data.err.msg);
            //   }
            // }
          }}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ChangePassword;
