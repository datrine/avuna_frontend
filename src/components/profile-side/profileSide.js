import React, { useState, useEffect } from "react";
import "./profileSide.css";
import DropRight from "../../svgcomponents/drop-right/dropRight";
import Logout from "../../assets/logout.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileSide = ({ data, activeProfile, action, user }) => {
  let loginToken = window.sessionStorage.getItem("token");
  const [token, setToken] = useState("");
  useEffect(() => {
    if (loginToken === undefined) {
      setToken("");
    } else if (loginToken === null) {
      setToken("");
    } else {
      let newLoginToken = JSON.parse(loginToken);
      setToken(newLoginToken);
    }
  }, [loginToken]);
  const navigate = useNavigate();
  return (
    <div className="user-profile-side-body">
      {data?.map((item, index) => {
        return (
          <div className={activeProfile === item.title ? "user-profile-active" : "user-profile-single"} key={index}>
            <div className="user-profile-cont">
              <div>
                {item.img}
                <p onClick={action}>{item.title}</p>
              </div>
              <DropRight color={activeProfile === item.title ? "white" : "#066FE0"} />
            </div>
          </div>
        );
      })}
      <div className="user-profile-logout">
        <img src={Logout} alt="logout" />
        <p
          onClick={async () => {
            const url = `https://avuna-backend.onrender.com/api/logout?${user?.accountID}&${token?.sessID}&${token?.clientID}`;
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token?.accessToken}`,
              },
            };
            try {
              await axios.get(url, config).then((response) => {
                navigate("/login");
              });
            } catch (error) {
              if (error.response.data.err.msg === "Access token not valid") navigate("/login");
            }
          }}>
          Log Out
        </p>
      </div>
    </div>
  );
};

export default ProfileSide;
