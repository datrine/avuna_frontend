import React, { useMemo } from "react";
import "./coursesDetail.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useLocation } from "react-router-dom";
import CourseDetail from "../../components/course-detail/courseDetail";

const CoursesDetail = () => {
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  const id = query.get("id");
  return (
    <>
      <Header />
      <CourseDetail id={id} />
      <Footer />
    </>
  );
};

export default CoursesDetail;
