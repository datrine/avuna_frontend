import React, { useEffect, useRef } from "react";
import "./myCourses.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import PagesBanner from "../../components/pages-banner/pagesBanner";
import Banner from "../../assets/banner-my.png";
import MycourseContainer from "../../components/mycourse-container/mycourseContainer";

const MyCourses = () => {
  const myref = useRef();
  useEffect(() => {
    myref.current.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [myref]);
  return (
    <div ref={myref}>
      <Header />
      <PagesBanner text="My Courses" img={Banner} />
      <MycourseContainer />
      <Footer />
    </div>
  );
};

export default MyCourses;
