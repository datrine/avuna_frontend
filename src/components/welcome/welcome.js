import React, { useState, useEffect } from "react";
import "./welcome.css";
import Button from "../button/button";
import Layout from "../../HOC/layout/layout";
import Close from "../../svgcomponents/close/close";
import Arrow from "../../assets/right-arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../redux/actions/actions";

const Welcome = () => {
  const [newCourse, setNewCourse] = useState(true);
  const dispatch = useDispatch();
  const { userProfileSuccess } = useSelector((state) => state.userProfileReducer);
  const [profile, setProfile] = useState("");
  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);

  useEffect(() => {
    if (userProfileSuccess !== null) {
      setProfile(userProfileSuccess);
    }
  }, [userProfileSuccess]);
  return (
    <div className="welcome-wrapper">
      <div className="welcome-overlay"></div>
      <div className="welcome-cont">
        {newCourse ? (
          <div className="welcome-new-course">
            <Layout>
              <div className="welcome-new-single">
                <h2>
                  Explore New Courses Now in <span>Finance and Accounting</span>
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
