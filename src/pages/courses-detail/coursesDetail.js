import React, { useMemo, useRef, useEffect } from "react";
import "./coursesDetail.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useLocation } from "react-router-dom";
import CourseDetail from "../../components/course-detail/courseDetail";

const CoursesDetail = () => {
  const myref = useRef();
  useEffect(() => {
    myref.current.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [myref]);
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  const id = query.get("id");
  const courseName = query.get("name");
  const cat = query.get("cat");
  return (
    <div ref={myref}>
      <Header />
      <CourseDetail id={id} name={courseName} cat={cat} />
      <Footer />
    </div>
  );
};

export default CoursesDetail;
