import React from "react";
import "./singleComment.css";
import Like from "../../assets/like.svg";
import Unlike from "../../assets/unlike.svg";

const SingleComment = ({ img, name, time, comment }) => {
  return (
    <div className="single-comment-container">
      <div className="single-comment-head">
        <div>
          <img src={img} alt="man" />
          <h2>{name}</h2>
        </div>
        <p>{time}</p>
      </div>
      <p>{comment}</p>
      <div className="single-comment-action">
        <div>
          <img src={Unlike} alt="unlike" />
          <img src={Like} alt="unlike" />
        </div>
        <h2>Reply</h2>
      </div>
    </div>
  );
};

export default SingleComment;
