import React, { useState, useEffect } from "react";
import "./coursesPage.css";
import Layout from "../../HOC/layout/layout";
import Course from "../../assets/course-single.svg";
import CourseActive from "../../assets/course-active.svg";
import SingleCourse from "../single-course/singleCourse";
import CourseCard from "../../assets/course-card.png";
import Search from "../../assets/search.svg";
import Filter from "../../assets/filter.svg";
import axios from "axios";
import { useCookies } from "react-cookie";
import CoursesContainer from "../courses-container/coursesContainer";
import Loader from "../loader/loader";
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [courses, setCourses] = useState("");
  const [categories, setCategories] = useState([]);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [stillLoading, setStillLoading] = useState(false);
  console.log(courses);
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
    const url = "https://avuna-backend.onrender.com/api/courses/categories";
    axios
      .get(url, config)
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.log(error.response.data.err.msg);
        //   if (error.response.data.err.msg === "Access token not valid") {
        //     navigate("/login");
        //   }
      });
  }, [token]);
  const subCourses = [
    {
      courseTitle: "Mastering Social Media Marketing: Strategies for Success",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "$10.56",
      number: "244",
      id: 1,
    },
    {
      courseTitle: "Mastering Social Media Marketing: Strategies for Success",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "Free",
      number: "244",
      id: 1,
    },
    {
      courseTitle: "Mastering Social Media Marketing: Strategies for Success",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "$10.56",
      number: "244",
      id: 1,
    },
    {
      courseTitle: "Mastering Social Media Marketing: Strategies for Success",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "Free",
      number: "244",
      id: 1,
    },
    {
      courseTitle: "Mastering Social Media Marketing: Strategies for Success",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "$10.56",
      number: "244",
      id: 1,
    },
    {
      courseTitle: "Mastering Social Media Marketing: Strategies for Success",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "$10.56",
      number: "244",
      id: 1,
    },
  ];
  const [activeCourse, setActiveCourse] = useState(categories[0]);
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
          {categories?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={async () => {
                  setActiveCourse(item);
                  setStillLoading(true);
                  const config = {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token?.accessToken}`,
                    },
                  };
                  const url = `https://avuna-backend.onrender.com/api/courses/categories/:${item}/courses`;
                  axios
                    .get(url, config)
                    .then((response) => {
                      setCourses(response.data.courses);
                      setStillLoading(false);
                      setFinishedLoading(true);
                    })
                    .catch((error) => {
                      console.log(error.response.data.err.msg);
                      if (error.response.data.err.msg === "Access token not valid") {
                        navigate("/login");
                      }
                    });
                }}
                className={activeCourse === item ? "courses-page-active" : ""}>
                <img src={activeCourse === item ? CourseActive : Course} alt="courses" />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        {finishedLoading ? (
          <div className="courses-page-body">
            <div className="courses-page-head">
              <h2>{activeCourse}</h2>
              <div className="courses-page-search">
                <img src={Search} alt="search" />
                <input type="text" placeholder="Search" />
                <img src={Filter} alt="filter" />
              </div>
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
                      action={() => {
                        navigate(`/courses-detail?id=${item.id}`);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {stillLoading ? <Loader /> : null}
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
