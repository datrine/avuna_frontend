import React from "react";
import "./inputs.css";

const Inputs = ({ labelName, type, placeholder, action }) => {
  return (
    <div className="input-container">
      <label>{labelName}</label>
      <input type={type} placeholder={placeholder} onChange={action} />
    </div>
  );
};

export default Inputs;
