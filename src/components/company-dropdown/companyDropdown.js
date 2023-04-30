import React from "react";
import "./companyDropdown.css";
import { NavLink } from "react-router-dom";

const CompanyDropdown = () => {
  return (
    <div className="company-dropdown">
      <div className="company-dropdown-cont">
        <NavLink>About Us</NavLink>
        <NavLink>Our Blog</NavLink>
        <NavLink>Contact Us</NavLink>
      </div>
    </div>
  );
};

export default CompanyDropdown;
