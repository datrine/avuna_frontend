import React, { useState, useEffect } from "react";
import "./profileDropdown.css";
import User from "../user/user";
import { NavLink, useNavigate } from "react-router-dom";
import Courses from "../../assets/my-courses.svg";
import Analysis from "../../assets/analysis.svg";
import Certificate from "../../assets/certificate.svg";
import Help from "../../assets/help.svg";
import Logout from "../../assets/logout.svg";
import axios from "axios";
import { useCookies } from "react-cookie";

const ProfileDropdown = ({ name, user }) => {
  const data = [
    {
      img: Courses,
      name: "My Courses",
      link: "/my-courses",
    },
    {
      img: Courses,
      name: "My Assignments",
      link: "/",
    },
    {
      img: Analysis,
      name: "Analysis",
      link: "/",
    },
    {
      img: Certificate,
      name: "Certificates",
      link: "/",
    },
    {
      img: Help,
      name: "Help",
      link: "/",
    },
    {
      img: Logout,
      name: "Log Out",
    },
  ];
  const [cookies, setCookies] = useCookies(["user"]);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(cookies.Name);
  }, [cookies]);
  const navigate = useNavigate();

  return (
    <div className="profile-drop">
      <div className="profile-drop-cont">
        <div className="profile-manage">
          <User />
          <div className="profile-manage-name">
            <h2>{name}</h2>
            <NavLink to="/profile">Manage Profile</NavLink>
          </div>
        </div>
        <div className="profile-drop-links">
          {data?.map((item, index) => {
            return (
              <div className="profile-drop-link" key={index}>
                <img src={item.img} alt="items" />
                <p
                  onClick={async () => {
                    const url = `https://avuna-232c595f9bcf.herokuapp.com/api/logout?${user?.accountID}&${token?.sessID}&${token?.clientID}`;
                    const config = {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token?.accessToken}`,
                      },
                    };
                    if (item.name === "Log Out") {
                      try {
                        await axios.get(url, config).then((response) => {
                          navigate("/login");
                          setCookies("Name", "");
                          window.sessionStorage.removeItem("user");
                          window.sessionStorage.removeItem("token");
                        });
                      } catch (error) {
                        if (error.response.data.err.msg === "Access token not valid") navigate("/login");
                      }
                    } else {
                      navigate(item.link);
                    }
                  }}>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
