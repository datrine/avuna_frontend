import React, { useEffect, useState } from "react";
import "./welcome.css";
import Button from "../button/button";
import Layout from "../../HOC/layout/layout";
import Close from "../../svgcomponents/close/close";
import Arrow from "../../assets/right-arrow.svg";
import Overlay from "../overlay/overlay";

const Welcome = () => {
  const [newCourse, setNewCourse] = useState(true);
  const [profile, setProfile] = useState("");
  let loginToken = window.sessionStorage.getItem("user");
  useEffect(() => {
    if (loginToken === undefined) {
      setProfile("");
    } else if (loginToken === null) {
      setProfile("");
    } else {
      let newLoginToken = JSON.parse(loginToken);
      setProfile(newLoginToken);
    }
  }, [loginToken]);
  return (
    <div className="welcome-wrapper">
      <Overlay />
      <div className="welcome-cont">
        {newCourse ? (
          <div className="welcome-new-course">
            <Layout>
              <div className="welcome-new-single">
                <h2>
                  <span>Explore</span> New Courses Now in <span>Finance and Accounting</span>
                </h2>
                <img src={Arrow} alt="arrow" />
                <div>
                  <button>Go To Course</button>
                  <Close
                    color="#F5F7FA"
                    action={() => {
                      setNewCourse(false);
                    }}
                  />
                </div>
              </div>
            </Layout>
          </div>
        ) : null}
        <Layout>
          <div className="welcome-text">
            <h2>Welcome {profile?.f_name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Fringilla aliquam euismod curabitur ullamcorper id rhoncus auctor cursus. Dolor egesta.</p>
            <div className="welcome-button">
              <Button bgColor="#066FE0" color="white" buttonText="Enroll For Courses" />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Welcome;
