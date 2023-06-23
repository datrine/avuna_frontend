import React, { useEffect, useRef, useState } from "react";
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
import axios from "axios";
import { useCookies } from "react-cookie";

const Home = () => {
  const [token, setToken] = useState("");
  const [preferences, setPreferences] = useState("");

  const [cookies] = useCookies(["user"]);
  useEffect(() => {
    setToken(cookies.Name);
  }, [cookies]);
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.accessToken}`,
      },
    };
    console.log(preferences);
    const url = "https://avuna-232c595f9bcf.herokuapp.com/api/preferences";
    axios
      .get(url, config)
      .then((response) => {
        setPreferences(response.data.preferences);
      })
      .catch((error) => {
        console.log(error.response.data.err.msg);
      });
  }, [token]);

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
