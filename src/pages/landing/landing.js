import React from "react";
import "./landing.css";
import Signup from "../../components/signup/signup";
import FormLayout from "../../HOC/form-layout/form-layout";

const Landing = () => {
  return (
    <FormLayout>
      <Signup />
    </FormLayout>
  );
};

export default Landing;
