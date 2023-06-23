import React, { useState } from "react";
import "./courseContent.css";
import Video from "../../assets/video-blue.svg";
import Doc from "../../assets/my-courses.svg";
import Down from "../../assets/select-dropdown.svg";
import Up from "../../assets/dropup.svg";

const CourseContent = () => {
  const [active, setActive] = useState("");
  const content = [
    {
      title: "Introduction to Marketing",
      content: [
        {
          title: "Introduction",
          type: "video",
          duration: "5:04",
        },
        {
          title: "How to become better at public speaking",
          type: "video",
          duration: "5:04",
        },
        {
          title: "8 Tips to Improve Your Public Speaking Skills",
          type: "video",
          duration: "5:04",
        },
        {
          title: "Steps in Preparing a Presentation",
          type: "video",
          duration: "5:04",
        },
        {
          title: "Developing a Marketing Plan",
          type: "doc",
          duration: "3 Pages",
        },
      ],
    },
    {
      title: "Mastering Marketing",
      content: [
        {
          title: "Introduction",
          type: "video",
          duration: "5:04",
        },
        {
          title: "How to become better at public speaking",
          type: "video",
          duration: "5:04",
        },
        {
          title: "8 Tips to Improve Your Public Speaking Skills",
          type: "video",
          duration: "5:04",
        },
        {
          title: "Steps in Preparing a Presentation",
          type: "video",
          duration: "5:04",
        },
        {
          title: "Developing a Marketing Plan",
          type: "doc",
          duration: "3 Pages",
        },
      ],
    },
    {
      title: "Learning the Fundamentals of Business",
      content: [
        {
          title: "Introduction",
          type: "video",
          duration: "5:04",
        },
        {
          title: "How to become better at public speaking",
          type: "video",
          duration: "5:04",
        },
        {
          title: "8 Tips to Improve Your Public Speaking Skills",
          type: "video",
          duration: "5:04",
        },
        {
          title: "Steps in Preparing a Presentation",
          type: "video",
          duration: "5:04",
        },
        {
          title: "Developing a Marketing Plan",
          type: "doc",
          duration: "3 Pages",
        },
      ],
    },
  ];
  return (
    <div className="course-content-container">
      <div className="course-content-head">
        <h2>Course Description</h2>
        <p>10 Sections</p>
      </div>
      <div className="course-content-body">
        {content?.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={active === item.title ? "course-content-active" : "course-content-single"}
                onClick={() => {
                  if (active === item.title) {
                    setActive("");
                  } else {
                    setActive(item.title);
                  }
                }}>
                <div>
                  <h1>
                    {index + 1}. {item.title}
                  </h1>
                  {active === item.title ? (
                    <div className="course-content-number">
                      <p>{item.content.length}</p>
                    </div>
                  ) : null}
                </div>
                <img src={active === item.title ? Up : Down} alt="up" />
              </div>
              {active === item.title ? (
                <div className="course-content-wrapper">
                  {item.content?.map((items, index) => {
                    return (
                      <div className="course-content-single" key={index}>
                        <div>
                          {items.type === "video" ? <img src={Video} alt="video" /> : <img src={Doc} alt="doc" />}
                          <h2>
                            <span>Module {index + 1}:</span> {items.title}
                          </h2>
                        </div>
                        <h3>{items.duration}</h3>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;
