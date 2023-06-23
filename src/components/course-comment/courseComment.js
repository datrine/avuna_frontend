import React from "react";
import "./courseComment.css";
import Commenter from "../../assets/commenter.png";
import SingleComment from "../single-comment/singleComment";

const CourseComment = () => {
  const comments = [
    {
      img: Commenter,
      name: "Jerry  Franklin",
      time: "3 Mins ago",
      comment: "Lorem ipsum dolor sit amet consectetur. Eget tortor volutpat malesuada libero. Vel proin morbi enimeuis mod hendrerit ac.",
    },
    {
      img: Commenter,
      name: "Jerry  Franklin",
      time: "3 Mins ago",
      comment: "Lorem ipsum dolor sit amet consectetur. Eget tortor volutpat malesuada libero. Vel proin morbi enimeuis mod hendrerit ac.",
    },
    {
      img: Commenter,
      name: "Jerry  Franklin",
      time: "3 Mins ago",
      comment: "Lorem ipsum dolor sit amet consectetur. Eget tortor volutpat malesuada libero. Vel proin morbi enimeuis mod hendrerit ac.",
    },
    {
      img: Commenter,
      name: "Jerry  Franklin",
      time: "3 Mins ago",
      comment: "Lorem ipsum dolor sit amet consectetur. Eget tortor volutpat malesuada libero. Vel proin morbi enimeuis mod hendrerit ac.",
    },
  ];
  return (
    <div className="course-comment-container">
      <h2>Comments</h2>
      <div className="course-write-comment">
        <textarea id="" placeholder="Write a comment..."></textarea>
        <div className="course-write-buttons">
          <div>
            <button>Submit</button>
            <button>Clear</button>
          </div>
        </div>
      </div>
      {comments?.map((item, index) => {
        return <SingleComment key={index} name={item.name} img={item.img} comment={item.comment} time={item.time} />;
      })}
    </div>
  );
};

export default CourseComment;
