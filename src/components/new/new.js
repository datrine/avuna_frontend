import React, { useState, useEffect } from "react";
import "./new.css";
import CoursesContainer from "../courses-container/coursesContainer";
import SingleCourse from "../single-course/singleCourse";
import CourseCard from "../../assets/course-card.png";

const New = () => {
  const data = [
    {
      courseTitle: "Lorem Ipsum Sit",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "$10.56",
      number: "244",
    },
    {
      courseTitle: "Lorem Ipsum Sit",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "$10.56",
      number: "244",
    },
    {
      courseTitle: "Lorem Ipsum Sit",
      courseImg: CourseCard,
      courseText: "Lorem ipsum dolor sit amet consectetur. Feugia t blandit turpis malesuada ultrices ametmauris in in malesuada ultrices am.",
      duration: "1 hr 25 Mins",
      module: "20 Modules",
      price: "$10.56",
      number: "244",
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
    <CoursesContainer title="New Courses" pageCount={pageCount} setPageNumber={setPageNumber} pageNumber={pageNumber}>
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
  );
};

export default New;
