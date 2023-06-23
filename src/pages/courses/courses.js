import React, { useRef, useEffect } from "react";
import "./courses.css";
import Header from "../../components/header/header";
import PagesBanner from "../../components/pages-banner/pagesBanner";
import Footer from "../../components/footer/footer";
import CourseImg from "../../assets/courses-banner.png";
import CoursesPage from "../../components/courses-page/coursesPage";

const Courses = () => {
  const myref = useRef();
  useEffect(() => {
    myref.current.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [myref]);
  return (
    <div ref={myref}>
      <Header />
      <PagesBanner text="Courses" img={CourseImg} />
      <CoursesPage />
      <Footer />
    </div>
  );
};

export default Courses;
