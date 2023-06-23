import React from "react";
import "./courseReviews.css";
import Testifiers from "../../assets/testifier.png";
import SingleReview from "../single-review/singleReview";

const CourseReviews = () => {
  const review = [
    {
      name: "Akinfe Temitope",
      testimony: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis ma dolor si",
      img: Testifiers,
    },
    {
      name: "Akinfe Temitope",
      testimony: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis ma dolor si",
      img: Testifiers,
    },
    {
      name: "Akinfe Temitope",
      testimony: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis ma dolor si",
      img: Testifiers,
    },
    {
      name: "Akinfe Temitope",
      testimony: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis ma dolor si",
      img: Testifiers,
    },
    {
      name: "Akinfe Temitope",
      testimony: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis ma dolor si",
      img: Testifiers,
    },
    {
      name: "Akinfe Temitope",
      testimony: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis ma dolor si",
      img: Testifiers,
    },
    {
      name: "Akinfe Temitope",
      testimony: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis ma dolor si",
      img: Testifiers,
    },
    {
      name: "Akinfe Temitope",
      testimony: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis ma dolor si",
      img: Testifiers,
    },
  ];
  return (
    <div className="course-reviews-container">
      <h2>Course Reviews</h2>
      <div className="course-reviews-wrapper">
        {review?.map((item, index) => {
          return <SingleReview name={item.name} img={item.img} testimony={item.testimony} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CourseReviews;
