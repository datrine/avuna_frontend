import React from "react";
import "./signupWith.css";
import Google from "../../assets/google.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";

const SignupWith = () => {
  return (
    <div className="signup-with">
      <p>Or Sign Up With:</p>
      <div className="social-signup">
        <div className="social-single">
          <img src={Google} alt="google" />
        </div>
        <div className="social-single">
          <img src={Facebook} alt="google" />
        </div>
        <div className="social-single">
          <img src={Twitter} alt="google" />
        </div>
      </div>
    </div>
  );
};

export default SignupWith;
