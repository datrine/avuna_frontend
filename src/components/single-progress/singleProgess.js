import React from "react";
import "./singleProgress.css";
import ProgressWidth from "../progress-width/progressWidth";
import Clock from "../../assets/clock.svg";
import Layers from "../../assets/layers.svg";

const SingleProgress = ({ img, width, text, time, lessonDone, totalLesson }) => {
  return (
    <div className="single-progress-cont">
      <div className="single-progress-wrap">
        <img src={img} alt="course" />
        <div>
          <h2>{text}</h2>
          <p>Completed: {width}</p>
          <div className="single-progress-width">
            <div className="single-progress-wrapper">
              <ProgressWidth width={width} />
            </div>
            <p>
              {lessonDone}/{totalLesson}
            </p>
          </div>
          <div className="progress-duration">
            <div>
              <img src={Clock} alt="clock" />
              <p>{time}</p>
            </div>
            <div>
              <img src={Layers} alt="layers" />
              <p>2 Lessons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProgress;
