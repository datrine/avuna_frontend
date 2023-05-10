import React, { useState, useEffect } from "react";
import "./userProfile.css";
import Layout from "../../HOC/layout/layout";
import ProfileSide from "../profile-side/profileSide";
import ProfileUser from "../../svgcomponents/profile-user/profileUser";
import CreditCard from "../../svgcomponents/credit-card/creditCard";
import ProfileInfo from "../profile-info/profileInfo";
import axios from "axios";
import { useCookies } from "react-cookie";
import Lock from "../../svgcomponents/lock/lock";
import ChangePassword from "../change-password/changePassword";
// import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  //   const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState("");

  const [cookies] = useCookies(["user"]);
  useEffect(() => {
    setToken(cookies.Name);
  }, [cookies]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.accessToken}`,
      },
    };
    const url = "https://avuna-backend.onrender.com/api/accounts/me";
    axios
      .get(url, config)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.err.msg);
        //   if (error.response.data.err.msg === "Access token not valid") {
        //     navigate("/login");
        //   }
      });
  }, [token]);
  const [activeProfile, setActiveProfile] = useState("Profile Information");

  const data = [
    {
      title: "Profile Information",
      img: <ProfileUser color={activeProfile === "Profile Information" ? "white" : "#066FE0"} />,
    },
    {
      title: "Change Password",
      img: <Lock color={activeProfile === "Change Password" ? "white" : "#066FE0"} />,
    },
    {
      title: "My Courses",
      img: <ProfileUser color={activeProfile === "My Courses" ? "white" : "#066FE0"} />,
    },
    {
      title: "Wishlist",
      img: <ProfileUser color={activeProfile === "My Cart" ? "white" : "#066FE0"} />,
    },
    {
      title: "Payment Information",
      img: <CreditCard color={activeProfile === "Payment Information" ? "white" : "#066FE0"} />,
    },
    {
      title: "Purchase History",
      img: <ProfileUser color={activeProfile === "Purchase History" ? "white" : "#066FE0"} />,
    },
  ];
  return (
    <Layout>
      <div className="user-profile-container">
        <div className="user-profile-side-head">
          <h2>Profile</h2>
          <p>Set up your profile down below</p>
        </div>
        <div className="user-profile-wrapper">
          <div className="user-profile-side">
            <ProfileSide
              data={data}
              activeProfile={activeProfile}
              action={(e) => {
                setActiveProfile(e.target.textContent);
              }}
              user={profile}
            />
          </div>
          <div className="user-profile-body">
            {activeProfile === "Profile Information" ? <ProfileInfo profile={profile} /> : activeProfile === "Change Password" ? <ChangePassword /> : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
