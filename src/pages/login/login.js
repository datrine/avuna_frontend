import React from "react";
import "./login.css";
import FormLayout from "../../HOC/form-layout/form-layout";
import SignIn from "../../components/signin/signin";

const Login = () => {
  return (
    <FormLayout>
      <SignIn />
    </FormLayout>
  );
};

export default Login;
