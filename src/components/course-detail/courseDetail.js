import React, { useState, useEffect } from "react";
import "./courseDetail.css";
import Layout from "../../HOC/layout/layout";
import Stars from "../../assets/rating.svg";
import Save from "../../assets/save.svg";
import Share from "../../assets/share.svg";
import Course from "../../assets/course-detail.png";
import AboutCourse from "../about-course/aboutCourse";
import BulletPoint from "../bullet-point/bulletPoint";
import Video from "../../assets/video.svg";
import Articles from "../../assets/articles.svg";
import Download from "../../assets/download.svg";
import Access from "../../assets/key.svg";
import Assignments from "../../assets/zap.svg";
import Award from "../../assets/award.svg";
import CourseReviews from "../course-reviews/courseReviews";
import CoursesContainer from "../courses-container/coursesContainer";
import SingleCourse from "../single-course/singleCourse";
import CourseCard from "../../assets/course-card.png";
import CourseContent from "../course-content/courseContent";
import Dropright from "../../assets/drop-right.svg";
import CourseComment from "../course-comment/courseComment";

const CourseDetail = ({ id, name, cat }) => {
  console.log(id);
  const data = [
    {
      courseTitle: "Mastering Social Media Marketing: Strategies for Success",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "$10.56",
      number: "244",
    },
    {
      courseTitle: "Mastering Social Media Marketing: Strategies for Success",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "Free",
      number: "244",
    },
    {
      courseTitle: "Mastering Social Media Marketing: Strategies for Success",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "$10.56",
      number: "244",
    },
  ];
  const [type, setType] = useState("About Course");
  const [pageNumber, setPageNumber] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(3);
  const [windowSize, setWindowSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  useEffect(() => {
    if (windowSize < 501) {
      setUsersPerPage(1);
    } else {
      setUsersPerPage(3);
    }
  }, [windowSize]);
  const related = ["Digital Marketing", "Email Marketing", "Social-Media Advertising", "Marketing", "Marketing Strategy", "Email Marketing"];
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  return (
    <>
      <Layout>
        <div className="page-accordion">
          <p>Home </p>
          <img src={Dropright} alt="dropright" />
          <h3>{name}</h3>
        </div>
        <div className="course-detail-cont">
          <div className="course-detail-wrapper">
            <div className="course-detail-head">
              <div className="course-detail-title">
                <div className="course-detail-name">
                  <h2>{name}</h2>
                  <div>
                    <p>Basic</p>
                  </div>
                </div>
                <div className="reviews">
                  <img src={Stars} alt="" />
                  <h2 className="reviews">4.5 (2321 Reviews)</h2>
                </div>
                <h3>{cat}</h3>
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
            <div className="course-detail-container">
              <img src={Course} alt="course" />
            </div>
          </div>
          <div className="course-detail-action">
            <div className="course-detail-price">
              <h2>$35.00</h2>
              <div className="sub-prices">
                <p>$35.00</p>
                <h3>$35.00</h3>
              </div>
              <button className="add-cart">Add To Cart</button>
              <button className="buy-now">Buy Now</button>
              <div className="include">
                <h2>This Course Includes</h2>
                <BulletPoint type="true" img={Video} text="2 Hours on-demand video" />
                <BulletPoint type="true" img={Articles} text="3 Articles" />
                <BulletPoint type="true" img={Download} text="5 Downloadable resources" />
                <BulletPoint type="true" img={Access} text="Full lifetime access" />
                <BulletPoint type="true" img={Assignments} text="Assignments" />
                <BulletPoint type="true" img={Award} text="Certificate of completion." />
              </div>
            </div>
          </div>
        </div>
        <div className="course-detail-bodys">
          <div className="course-detail-body">
            <div className="course-detail-about">
              <h2
                onClick={() => {
                  setType("About Course");
                }}
                className={type === "About Course" ? "active" : ""}>
                About Course
              </h2>
              <h2
                onClick={() => {
                  setType("Course Content");
                }}
                className={type === "Course Content" ? "active" : ""}>
                Course Content
              </h2>
              <h2
                onClick={() => {
                  setType("Comments");
                }}
                className={type === "Comments" ? "active" : ""}>
                Comments
              </h2>
            </div>
            <div className="course-detail-content">
              {type === "About Course" ? <AboutCourse /> : type === "Course Content" ? <CourseContent /> : type === "Comments" ? <CourseComment /> : null}
            </div>
          </div>
          <div className="course-detail-white">
            <h2>Related Searches</h2>
            <div>
              {related?.map((item, index) => {
                return <h3 key={index}>{item}</h3>;
              })}
            </div>
          </div>
        </div>
        <div className="course-reviews">
          <CourseReviews />
        </div>
      </Layout>
      <div className="related-courses">
        <CoursesContainer title="Related Courses" pageCount={pageCount} setPageNumber={setPageNumber} type="true">
          {data?.slice(pagesVisited, pagesVisited + usersPerPage)?.map((item, index) => {
            return (
              <div key={index}>
                <SingleCourse
                  number={item.number}
                  img={item.courseImg}
                  courseTitle={item.courseTitle}
                  courseText={item.courseText}
                  duration={item.duration}
                  modules={item.module}
                  price={item.price}
                />
              </div>
            );
          })}
        </CoursesContainer>
      </div>
    </>
  );
};

export default CourseDetail;
