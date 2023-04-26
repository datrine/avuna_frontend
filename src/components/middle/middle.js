import React from "react";
import "./middle.css";
import MiddleSingle from "../middle-single/middleSingle";
import Laughing from "../../assets/laughing-woman.png";
import System from "../../assets/system-guy.png";
import Layout from "../../HOC/layout/layout";

const Middle = () => {
  return (
    <Layout>
      <div className="middle-container">
        <div className="middle-wrapper">
          <MiddleSingle img={Laughing} title="Marketing" />
        </div>
        <div className="middle-wrapper">
          <MiddleSingle img={System} title="Marketing" />
        </div>
      </div>
    </Layout>
  );
};

export default Middle;
