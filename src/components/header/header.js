import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.svg";
// import English from "../../assets/english.svg";
import Search from "../../assets/search.svg";
import Cart from "../../assets/cart.svg";
import Notification from "../../assets/notification.svg";
import Dropdown from "../../assets/dropdown.svg";
import User from "../../assets/user.svg";
import { NavLink } from "react-router-dom";
import Layout from "../../HOC/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../redux/actions/actions";

const Header = () => {
  const dispatch = useDispatch();
  const { userProfileSuccess } = useSelector((state) => state.userProfileReducer);
  const [profile, setProfile] = useState("");
  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);

  useEffect(() => {
    if (userProfileSuccess !== null) {
      setProfile(userProfileSuccess);
    }
  }, [userProfileSuccess]);
  return (
    <div className="header-wrapper">
      <Layout>
        <div className="header-container">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
            {/* <div className="header-country">
              <img src={English} alt="english" />
              <img src={Dropdown} alt="dropdown" />
            </div> */}
          </div>
          <div className="nav-links">
            <div className="nav-link">
              <NavLink to="about">Company</NavLink>
              <img src={Dropdown} alt="dropdown" />
            </div>
            <div className="nav-link">
              <NavLink to="about">Courses</NavLink>
              <img src={Dropdown} alt="dropdown" />
            </div>
            <NavLink to="about">Resources</NavLink>
            <NavLink to="about">Grant</NavLink>
          </div>
          <div className="nav-search">
            <img src={Search} alt="search" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-actions">
            <img src={Cart} alt="search" />
            <img src={Notification} alt="search" />
            <div className="profile-pic">
              <div className="">
                <div className="user-pic">
                  <img src={User} alt="user" />
                </div>
                <p>{profile?.f_name}</p>
              </div>
              <img src={Dropdown} alt="dropdown" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Header;
