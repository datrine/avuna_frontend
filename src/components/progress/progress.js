import React, { useEffect, useState } from "react";
import "./progress.css";
import SingleProgress from "../single-progress/singleProgess";
import CourseImg from "../../assets/course-img.png";
import CoursesContainer from "../courses-container/coursesContainer";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const navigate = useNavigate();
  const data = [
    {
      img: CourseImg,
      text: "Lead Development in Marketing",
      width: "82%",
      time: "30mins",
      lessonDone: "23",
      totalLesson: "25",
    },
    {
      img: CourseImg,
      text: "Lead Development in Marketing",
      width: "82%",
      time: "30mins",
      lessonDone: "23",
      totalLesson: "25",
    },
    {
      img: CourseImg,
      text: "Lead Development in Marketing",
      width: "82%",
      time: "30mins",
      lessonDone: "23",
      totalLesson: "25",
    },
    {
      img: CourseImg,
      text: "Lead Development in Marketings",
      width: "82%",
      time: "30mins",
      lessonDone: "23",
      totalLesson: "25",
    },
    {
      img: CourseImg,
      text: "Lead Development in Marketing",
      width: "82%",
      time: "30mins",
      lessonDone: "23",
      totalLesson: "25",
    },
    {
      img: CourseImg,
      text: "Lead Development in Marketing",
      width: "82%",
      time: "30mins",
      lessonDone: "23",
      totalLesson: "25",
    },
  ];
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
  const pageCount = Math.ceil(data.length / usersPerPage);
  return (
    <CoursesContainer
      title="InProgress"
      action={() => {
        navigate("/my-courses");
      }}
      pageCount={pageCount}
      setPageNumber={setPageNumber}
      pageNumber={pageNumber}>
      {data?.slice(pagesVisited, pagesVisited + usersPerPage)?.map((item, index) => {
        return (
          <div key={index}>
            <SingleProgress img={item.img} text={item.text} width={item.width} lessonDone={item.lessonDone} totalLesson={item.totalLesson} time={item.time} />
          </div>
        );
      })}
    </CoursesContainer>
  );
};

export default Progress;
