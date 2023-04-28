import React from "react";
import "./singleCourse.css";
import Rating from "../../assets/rating.svg";
import Layer from "../../assets/layers.svg";
import Clock from "../../assets/clock.svg";
import Eye from "../../assets/opened-eye.svg";
import Button from "../button/button";

const SingleCourse = ({ img, courseText, courseTitle, modules, duration, price, number }) => {
  return (
    <div className="single-course-container">
      <div className="single-course-wrapper">
        <div className="single-course-img">
          <img src={img} alt="course" />
        </div>
        <div className="single-course-text">
          <div className="single-course-rating">
            <div className="stars">
              <h2>{courseTitle}</h2>
              <img src={Rating} alt="rating" />
            </div>
            <div className="single-course-view">
              <img src={Eye} alt="eye" />
              <p>{number}</p>
            </div>
          </div>
          <p>{courseText}</p>
          <div className="single-course-duration">
            <div>
              <img src={Layer} alt="layer" />
              <p>{modules}</p>
            </div>
            <div>
              <img src={Clock} alt="time" />
              <p>{duration}</p>
            </div>
          </div>
          <div className="single-course-price">
            <div className="single-course-button">
              <Button buttonText="Enroll Course" color="white" bgColor="#0671E0" />
            </div>
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
