import React from "react";
import "./inputs.css";

const Inputs = ({ labelName, type, placeholder, action, icon, password, passwordAction }) => {
  return (
    <>
      {icon ? (
        <div className="input-container">
          <label>{labelName}</label>
          <div className="input-div">
            <img src={icon} alt="icon" />
            <input type={type} placeholder={placeholder} onChange={action} />
            {password ? <img src={password} alt="icon" onClick={passwordAction} /> : null}
          </div>
        </div>
      ) : (
        <div className="input-container">
          <label>{labelName}</label>
          <input type={type} placeholder={placeholder} onChange={action} />
        </div>
      )}
    </>
  );
};

export default Inputs;
