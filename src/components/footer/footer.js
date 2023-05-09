import React from "react";
import "./footer.css";
import Logo from "../../assets/footer-logo.svg";
import Layout from "../../HOC/layout/layout";
import { NavLink } from "react-router-dom";
import Link from "../../assets/link-white.svg";
import Twitter from "../../assets/twitter-white.svg";
import Facebook from "../../assets/facebook-white.svg";

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer-container">
      <div className="footer-body">
        <Layout>
          <div className="footer-wrapper">
            <div className="footer-text">
              <img src={Logo} alt="logo" />
              <p>Lorem ipsum dolor sit amet consectetur. Sollicitudin sapien sed neque leo elit neque ac. Lectus sed proin imperdiet potenti mauris nunc pulvinar habitasse.</p>
            </div>
            <div className="footer-links">
              <div className="footer-single-links">
                <h2>Company</h2>
                <NavLink to="/">About Us</NavLink>
                <NavLink to="/">Blog</NavLink>
                <NavLink to="/">Contact Us</NavLink>
              </div>
              <div className="footer-single-links">
                <h2>Resources</h2>
                <NavLink to="/">FAQs</NavLink>
                <NavLink to="/">Privacy Policy</NavLink>
              </div>
              <div className="footer-single-links">
                <h2>Company</h2>
                <NavLink to="/">About Us</NavLink>
                <NavLink to="/">Blog</NavLink>
                <NavLink to="/">Contact Us</NavLink>
              </div>
              <div className="footer-single-links">
                <h2>Company</h2>
                <NavLink to="/">About Us</NavLink>
                <NavLink to="/">Blog</NavLink>
                <NavLink to="/">Contact Us</NavLink>
              </div>
            </div>
          </div>
          <div className="footer-socials">
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="facebook" />
            <img src={Link} alt="facebook" />
          </div>
        </Layout>
      </div>
      <div className="footer-copyright">
        <Layout>
          <div className="footer-copy">
            <p>© {date?.getFullYear()} Avuna Business Academy. All Rights Reserved</p>
            <NavLink to="/home">Terms & Conditions</NavLink>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Footer;
