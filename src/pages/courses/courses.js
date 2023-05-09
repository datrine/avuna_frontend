import React from "react";
import "./courses.css";
import Header from "../../components/header/header";
import PagesBanner from "../../components/pages-banner/pagesBanner";
import Footer from "../../components/footer/footer";
import CourseImg from "../../assets/courses-banner.png";
import CoursesPage from "../../components/courses-page/coursesPage";

const Courses = () => {
  return (
    <div>
      <Header />
      <PagesBanner text="Courses" img={CourseImg} />
      <CoursesPage />
      <Footer />
    </div>
  );
};

export default Courses;
