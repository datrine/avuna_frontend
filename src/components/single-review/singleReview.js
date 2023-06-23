import React from "react";
import "./singleReview.css";
import Rating from "../../assets/rating.svg";

const SingleReview = ({ name, img, testimony }) => {
  return (
    <div className="single-review-container">
      <div className="single-review-head">
        <img src={img} alt="testifiers" />
        <div>
          <h2>{name}</h2>
          <img src={Rating} alt="rating" />
        </div>
      </div>
      <p>{testimony}</p>
    </div>
  );
};

export default SingleReview;
