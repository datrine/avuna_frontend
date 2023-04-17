import React from "react";
import "./interest-single.css";
import CheckBox from "../../assets/checkbox.svg";
import FilledCheckBox from "../../assets/filled-checkbox.svg";

const InterestSingle = ({ text, icon, no, action, className }) => {
  return (
    <div className={no === true ? "interest-container2" : "interest-container"} onClick={action}>
      <div className="checkbox">{className === "interest-text" ? <img src={FilledCheckBox} alt="checkbox" /> : <img src={CheckBox} alt="checkbox" />}</div>
      {icon}
      <h2 className={className}>{text}</h2>
    </div>
  );
};

export default InterestSingle;
