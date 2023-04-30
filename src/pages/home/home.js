import React, { useEffect, useRef } from "react";
import "./home.css";
import Header from "../../components/header/header";
import Welcome from "../../components/welcome/welcome";
import Progress from "../../components/progress/progress";
import Recommend from "../../components/recommend/recommend";
import Popular from "../../components/popular/popular";
import New from "../../components/new/new";
import Starter from "../../components/starter/starter";
import Recommended from "../../components/recommended/recommended";
import Middle from "../../components/middle/middle";
import Footer from "../../components/footer/footer";

const Home = () => {
  const myref = useRef();
  useEffect(() => {
    myref.current.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [myref]);
  return (
    <div ref={myref}>
      <Header />
      <Welcome />
      <Progress />
      <Recommend />
      <Middle />
      <Popular />
      <Recommended />
      <New />
      <Starter />
      <Footer />
    </div>
  );
};

export default Home;
