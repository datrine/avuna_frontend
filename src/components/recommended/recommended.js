import React from "react";
import "./recommended.css";
import Layout from "../../HOC/layout/layout";

const Recommended = () => {
  const data = ["Marketing", "Finance & Accounting", "Operation Management", "Sales", "Digital Marketing", "Project Management", "Enterpreneurship"];
  return (
    <Layout>
      <div className="recommended-container">
        <div className="recommended-wrapper">
          <div className="recommended-text">
            <h2>Explore Courses</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Turpis lorem pellentesque congue vulputate in ultricies semper orci. Sit in molestie elementum fermentum elit.</p>
          </div>
          <div className="recommended-cont">
            {data?.map((item, index) => {
              return (
                <div className="recommended-single" key={index}>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recommended;
