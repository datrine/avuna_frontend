import React from "react";
import "./user.css";
import UserPic from "../../assets/user.svg";

const User = () => {
  return (
    <div className="user-pic">
      <img src={UserPic} alt="user" />
    </div>
  );
};

export default User;
