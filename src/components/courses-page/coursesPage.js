import React, { useState, useEffect } from "react";
import "./coursesPage.css";
import Layout from "../../HOC/layout/layout";
import Course from "../../assets/course-single.svg";
import CourseActive from "../../assets/course-active.svg";
import SingleCourse from "../single-course/singleCourse";
import CourseCard from "../../assets/course-card.png";
import axios from "axios";
import { useCookies } from "react-cookie";
import CoursesContainer from "../courses-container/coursesContainer";
// import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
  //   const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [courses, setCourses] = useState("");

  const [cookies] = useCookies(["user"]);
  useEffect(() => {
    setToken(cookies.Name);
  }, [cookies]);
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.accessToken}`,
      },
    };
    const url = "https://avuna-backend.onrender.com/api/courses";
    axios
      .get(url, config)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.err.msg);
        //   if (error.response.data.err.msg === "Access token not valid") {
        //     navigate("/login");
        //   }
      });
  }, [token]);
  console.log(courses);
  const data = [
    "Marketing",
    "Digital Marketing",
    "Business Management",
    "Sales",
    "Customer Service",
    "Project Management",
    "Human Resource Manangement",
    "Marketing",
    "Business Communcation",
    "Marketing",
  ];
  const subCourses = [
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
  const [activeCourse, setActiveCourse] = useState(data[0]);
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
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(subCourses.length / usersPerPage);
  return (
    <div className="courses-page-container">
      <Layout>
        <div className="courses-page-header">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveCourse(item);
                }}
                className={activeCourse === item ? "courses-page-active" : ""}>
                <img src={activeCourse === item ? CourseActive : Course} alt="courses" />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div className="courses-page-body">
          <div className="courses-page-head">
            <h2>{activeCourse}</h2>
          </div>
          <div className="courses-page-all">
            {subCourses?.map((item, index) => {
              return (
                <div key={index} className="courses-page-single">
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
          </div>
        </div>
      </Layout>
      <div className="course-pages-all">
        <CoursesContainer title={`Popular In  ${activeCourse}`} type="true" pageCount={pageCount} setPageNumber={setPageNumber}>
          {subCourses?.slice(pagesVisited, pagesVisited + usersPerPage)?.map((item, index) => {
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
      <div className="course-pages-all">
        <CoursesContainer title={`Popular In  ${activeCourse}`} type="true" pageCount={pageCount} setPageNumber={setPageNumber}>
          {subCourses?.slice(pagesVisited, pagesVisited + usersPerPage)?.map((item, index) => {
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
    </div>
  );
};

export default CoursesPage;
