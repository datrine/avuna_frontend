import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.svg";
import Bars from "../../assets/bars.svg";
import Search from "../../assets/search.svg";
import HeaderSearch from "../../assets/header-search.svg";
import Cart from "../../assets/cart.svg";
import Notification from "../../assets/notification.svg";
import Close from "../../assets/times.svg";
import Dropdown from "../../assets/dropdown.svg";
import DropRight from "../../assets/drop-right.svg";
import { NavLink } from "react-router-dom";
import Layout from "../../HOC/layout/layout";
import ProfileDropdown from "../profile-dropdown/profileDropdown";
import User from "../user/user";
import OutsideClick from "../outside-click/outsideClick";
import CompanyDropdown from "../company-dropdown/companyDropdown";

const Header = () => {
  const [profile, setProfile] = useState("");
  const [mobile, setMobile] = useState(true);
  const [userProfile, setUserProfile] = useState(false);
  const [company, setCompany] = useState(false);

  const mobileAction = () => {
    setMobile(!mobile);
  };
  let loginToken = window.sessionStorage.getItem("user");
  useEffect(() => {
    if (loginToken === undefined) {
      setProfile("");
    } else if (loginToken === null) {
      setProfile("");
    } else {
      let newLoginToken = JSON.parse(loginToken);
      setProfile(newLoginToken);
    }
  }, [loginToken]);
  return (
    <div className="header-wrapper">
      <Layout>
        <div className="header-container">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
            <div className="header-wrap">
              {mobile ? <img src={HeaderSearch} alt="search" /> : null}
              {mobile ? <img src={Bars} alt="close" onClick={mobileAction} /> : <img src={Close} alt="close" onClick={mobileAction} />}
            </div>
          </div>
          <div className={!mobile ? "header-conts" : "header-cont"}>
            <div className="mobile-profile-pic">
              <div className="">
                <User />
                <p>{profile?.l_name + " " + profile?.f_name}</p>
              </div>
              <img src={DropRight} alt="dropdown" />
            </div>
            <div className="nav-links">
              <div
                className="nav-link"
                onClick={() => {
                  setCompany(!company);
                }}>
                <p>Company</p>
                <img src={Dropdown} alt="dropdown" className="img-dropdown" />
                <img src={DropRight} alt="dropdown" className="drop-right" />
                {company ? (
                  <OutsideClick
                    onClickOutside={() => {
                      setCompany(false);
                    }}>
                    <CompanyDropdown />
                  </OutsideClick>
                ) : null}
              </div>
              <NavLink to="/courses">Courses</NavLink>
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
              <NavLink to="about">Notification</NavLink>
              <NavLink to="about">Store</NavLink>
              <div className="nav-a">
                <NavLink to="about">Contact Us</NavLink>
                <img src={DropRight} alt="dropdown" />
              </div>
              <div
                className="profile-pic"
                onClick={() => {
                  setUserProfile(!userProfile);
                }}>
                <div className="profile-pics">
                  <User />
                  <p>{profile?.f_name}</p>
                </div>
                <img src={Dropdown} alt="dropdown" />
                {userProfile ? (
                  <OutsideClick
                    onClickOutside={() => {
                      setUserProfile(false);
                    }}>
                    <ProfileDropdown name={profile?.l_name + " " + profile?.f_name} user={profile} />
                  </OutsideClick>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Header;
