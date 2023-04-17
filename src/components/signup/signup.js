import React, { useState, useEffect } from "react";
import "./signup.css";
import Inputs from "../inputs/inputs";
import Button from "../button/button";
import { registeration } from "../../redux/actions/actions";
import SignupWith from "../signup-with/signupWith";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailLogo from "../../assets/email.svg";
import Lock from "../../assets/lock.svg";
import ClosedEye from "../../assets/close-eye.svg";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { registerSuccess, registerError } = useSelector((state) => state.registerReducer);
  const [email, setEmail] = useState("");
  const [l_name, setLastName] = useState("");
  const [f_name, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState(false);

  useEffect(() => {
    if (registerSuccess !== null) {
      setLoading(false);
      toast.success("Created Successfully");
    } else if (registerError !== null) {
      setLoading(false);
      toast.error(registerError.msg);
    }
  }, [registerSuccess, registerError]);
  return (
    <div className="signup-cont">
      <ToastContainer />
      <div className="signup-header">
        <h2>Sign Up</h2>
        <p>Create your Avuna account quick and easy:</p>
      </div>
      <div className="signup-form">
        <div className="signup-double">
          <div>
            <Inputs
              labelName="First Name"
              placeholder="Enter your first name"
              type="text"
              action={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div>
            <Inputs
              labelName="Last Name"
              placeholder="Enter your last name"
              type="text"
              action={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="signup-single">
          <div>
            <Inputs
              labelName="Email Address"
              placeholder="Enter your email address"
              type="email"
              action={(e) => {
                setEmail(e.target.value);
              }}
              icon={EmailLogo}
            />
          </div>
        </div>
        <div className="signup-single">
          <div>
            <Inputs
              labelName="Password"
              placeholder="Enter your password"
              type={passwordType ? "text" : "password"}
              action={(e) => {
                setPassword(e.target.value);
              }}
              passwordAction={() => {
                setPasswordType(!passwordType);
              }}
              icon={Lock}
              password={passwordType ? ClosedEye : ClosedEye}
            />
          </div>
        </div>
        <Button
          buttonText="Submit"
          loading={loading}
          action={() => {
            const data = {
              email,
              f_name,
              l_name,
              password,
            };
            dispatch(registeration(data));
            setLoading(true);
          }}
          color="white"
          bgColor="#066fe0"
          margin="48px"
        />
        <p>
          Already have an account?
          <span
            onClick={() => {
              navigate("/login");
            }}>
            Sign In
          </span>
        </p>
        <SignupWith text="Or Sign Up With:" />
      </div>
    </div>
  );
};

export default Signup;
