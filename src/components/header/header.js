import React from "react";
import "./header.css";
import Logo from "../../assets/logo.svg";
import English from "../../assets/english.svg";
import Search from "../../assets/search.svg";
import Cart from "../../assets/cart.svg";
import Notification from "../../assets/notification.svg";
import Dropdown from "../../assets/dropdown.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
        <div className="header-country">
          <img src={English} alt="english" />
          <img src={Dropdown} alt="dropdown" />
        </div>
      </div>
      <div className="nav-links">
        <NavLink to="about">About Us</NavLink>
        <NavLink to="about">Courses</NavLink>
        <NavLink to="about">Resources</NavLink>
        <NavLink to="about">Blog</NavLink>
        <NavLink to="about">Contact Us</NavLink>
      </div>
      <div className="nav-actions">
        <img src={Search} alt="search" />
        <img src={Cart} alt="search" />
        <img src={Notification} alt="search" />
        <div className="profile-pic">
          <div></div>
          <img src={Dropdown} alt="dropdown" />
        </div>
      </div>
    </div>
  );
};

export default Header;
