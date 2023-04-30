import React from "react";
import "./singleMycourses.css";
import Layer from "../../assets/layers.svg";
import Clock from "../../assets/clock.svg";
import ProgressWidth from "../progress-width/progressWidth";
import Button from "../button/button";

const SingleMyCourses = ({ modules, duration, img, width, category, title }) => {
  return (
    <div className="single-mycourses-container">
      <div className="single-mycourses-wrapper">
        <img src={img} alt="course" />
        <h2>{category}</h2>
        <h1>{title}</h1>
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
        <div className="single-mycourses-progress">
          <ProgressWidth width={width} />
          <p className={width === "100" ? "single-mycourses-completed" : ""}>{width}%</p>
        </div>
        {width === "100" ? (
          <Button buttonText="View Certificate" bgColor="#27AE60" color="white" margin="17px" />
        ) : (
          <Button buttonText="Continue Course" bgColor="#0671E0" color="white" margin="17px" />
        )}
      </div>
    </div>
  );
};

export default SingleMyCourses;
