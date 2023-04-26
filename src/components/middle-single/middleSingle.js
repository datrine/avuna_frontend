import React from "react";
import "./middleSingle.css";

const MiddleSingle = ({ img, title }) => {
  return (
    <div className="middle-single-container">
      <img src={img} alt="woman" />
      <div className="middle-single-text">
        <h3>{title}</h3>
        <h2>Recommended Courses</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Turpis lorem pellentesque congue vulputate in ultricies semper orci. Sit in molestie elementum fermentum elit.</p>
        <h4>Learn More</h4>
      </div>
    </div>
  );
};

export default MiddleSingle;
