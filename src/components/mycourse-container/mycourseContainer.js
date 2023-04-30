import React, { useState } from "react";
import "./mycourseContainer.css";
import Inprogress from "../inprogress/inprogress";
import Layout from "../../HOC/layout/layout";
import Course from "../../assets/my-course.png";
import Search from "../../assets/header-search.svg";
import Filter from "../../assets/filter.svg";

const MycourseContainer = () => {
  const data = {
    inProgress: [
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
    ],
    saved: [
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "90",
      },
    ],
    completed: [
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "100",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "100",
      },
      {
        img: Course,
        category: "Marketing",
        title: "Lead Development Marketing: Strategies For Sucess.",
        modules: "2 lessons",
        duration: "30mins",
        width: "100",
      },
    ],
  };
  const [type, setType] = useState("In Progress");
  return (
    <Layout>
      <div className="mycourse-container">
        <div className="mycourse-container-header">
          <div className="mycourse-container-title">
            <h2
              className={type === "In Progress" ? "mycourse-active" : ""}
              onClick={() => {
                setType("In Progress");
              }}>
              In Progress
            </h2>
            <h2
              className={type === "Saved" ? "mycourse-active" : ""}
              onClick={() => {
                setType("Saved");
              }}>
              Saved Courses
            </h2>
            <h2
              className={type === "Completed" ? "mycourse-active" : ""}
              onClick={() => {
                setType("Completed");
              }}>
              Completed
            </h2>
          </div>
          <div className="mycourse-container-search">
            <img src={Search} alt="search" />
            <input type="text" placeholder="Search" />
            <img src={Filter} alt="filter" />
          </div>
        </div>
        {type === "In Progress" ? (
          <Inprogress text="In Progress" data={data.inProgress} />
        ) : type === "Saved" ? (
          <Inprogress text="Saved Courses" data={data.saved} />
        ) : type === "Completed" ? (
          <Inprogress text="Completed" data={data.completed} />
        ) : null}
      </div>
    </Layout>
  );
};

export default MycourseContainer;
