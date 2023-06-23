import React from "react";
import "./aboutCourse.css";
import Check from "../../assets/check.svg";
import BulletPoint from "../bullet-point/bulletPoint";

const AboutCourse = () => {
  return (
    <>
      <div className="course-description">
        <h2>Course Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Eget tortor volutpat malesuada libero. Vel proin morbi enim euismod hendrerit ac. Enim placerat potenti eget vestibulum maecenas
          in molestie dictum im euismod hendrerit ac. Enim placerat potenti eget vestibulum maecenas in molestie dictum.
        </p>
      </div>
      <div className="learn">
        <h2>What you’ll learn</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Eget tortor volutpat malesuada libero. Vel proin morbi enim euismod hendrerit ac.</p>
        <BulletPoint img={Check} text="Placerat potenti eget vestibulum" />
        <BulletPoint img={Check} text="Placerat potenti eget vestibulum" />
        <BulletPoint img={Check} text="Placerat potenti eget vestibulum" />
        <BulletPoint img={Check} text="Placerat potenti eget vestibulum" />
      </div>
      <div className="learn">
        <h2>Requirements</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Eget tortor volutpat malesuada libero. Vel proin morbi enim euismod hendrerit ac. Lorem ipsum dolor sit amet consectetur. Eget
          tortor volutpat malesuada libero. Vel proin morbi enim euismod hendrerit ac. Enim placerat potenti eget vesti
        </p>
        <BulletPoint img={Check} text="Placerat potenti eget vestibulum" />
        <BulletPoint img={Check} text="Placerat potenti eget vestibulum" />
        <BulletPoint img={Check} text="Placerat potenti eget vestibulum" />
        <BulletPoint img={Check} text="Placerat potenti eget vestibulum" />
      </div>
    </>
  );
};

export default AboutCourse;
