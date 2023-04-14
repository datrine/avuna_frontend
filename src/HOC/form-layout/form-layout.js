import React, { useEffect, useRef } from "react";
import "./form-layout.css";
import SignupMan from "../../assets/signup-img.png";
import Mobile from "../../assets/mobile.png";

const FormLayout = ({ children }) => {
  const myref = useRef();
  useEffect(() => {
    myref.current.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="signup-container" ref={myref}>
      <div className="signup-img">
        <img src={SignupMan} alt="signup man" />
        <img src={Mobile} alt="mobile" />
      </div>
      <div className="signup-wrapper">{children}</div>
    </div>
  );
};

export default FormLayout;
