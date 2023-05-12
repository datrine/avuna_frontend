import React from "react";
import "./courseDetail.css";
import Layout from "../../HOC/layout/layout";
import Stars from "../../assets/rating.svg";
import Save from "../../assets/save.svg";
import Share from "../../assets/share.svg";
import Course from "../../assets/course-detail.png";

const CourseDetail = ({ id }) => {
  console.log(id);
  return (
    <Layout>
      <div className="course-detail-cont">
        <div className="course-detail-wrapper">
          <div className="course-detail-head">
            <div className="course-detail-title">
              <h2>
                Lorem Ipsum Sit Dolor
                <span className="stars">
                  <img src={Stars} alt="" />
                </span>
                <span className="reviews">4.5 (2321 Reviews)</span>
              </h2>
              <p>Courses Lorem ipsum dolor sit amet consectetur. Eget tortor volutpat malesuada libero. Vel proin morbi enim euismod hendrerit</p>
            </div>
            <div className="course-detail-wrap">
              <div>
                <img src={Save} alt="save" />
                <p>Save</p>
              </div>
              <div>
                <img src={Share} alt="Share" />
                <p>Share</p>
              </div>
            </div>
          </div>
          <div className="course-detail-body">
            <img src={Course} alt="course" />
          </div>
        </div>
        <div className="course-detail-action">
          <div className="course-detail-price"></div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
