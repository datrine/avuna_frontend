import React from "react";
import "./inprogress.css";
import SingleMyCourses from "../single-mycourses/singleMycourses";

const Inprogress = ({ text, data }) => {
  return (
    <div className="inprogress-container">
      <div className="inprogress-header">
        <h2>{text}</h2>
        <div>
          <p>{data.length}</p>
        </div>
      </div>
      <div className="inprogress-body">
        {data?.map((item, index) => {
          return (
            <div className="inprogress-body-single" key={index}>
              <SingleMyCourses img={item.img} width={item.width} duration={item.duration} modules={item.modules} category={item.category} title={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inprogress;
