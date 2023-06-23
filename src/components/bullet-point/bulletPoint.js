import React from "react";
import "./bulletPoint.css";

const BulletPoint = ({ img, text, type }) => {
  return (
    <div className={type ? "bullet-active" : "bullet-point"}>
      <img src={img} alt="bullet" />
      <p>{text}</p>
    </div>
  );
};

export default BulletPoint;
