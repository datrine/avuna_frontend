import React, { useState, useMemo, useEffect } from "react";
import "./verify.css";
import ClosedEnvelope from "../../assets/closed-envelope.svg";
import OpenedEnvelope from "../../assets/opened-envelope.svg";
import Signup from "../../components/signup/signup";
import Popup from "../../components/popup/popup";
import Button from "../../components/button/button";
import { useNavigate, useLocation } from "react-router-dom";
import FormLayout from "../../HOC/form-layout/form-layout";

const Verify = () => {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  const token = query.get("token");
  useEffect(() => {
    if (token !== null) {
      setVerify(true);
    } else {
      setVerify(false);
    }
  }, [query, token, navigate]);
  return (
    <FormLayout>
      <Signup />
      <Popup overlay="true">
        <img src={verify ? OpenedEnvelope : ClosedEnvelope} alt="closed-envelope" className="envelope" />
        <div className="popup-text">
          <h2>{verify ? "Email Verified" : "Confirm Your Email Now"}</h2>
          <p>
            {verify
              ? "Congratulations! Your email has been verified. Unlock new opportunities by completing your profile."
              : "A verification email has been sent to your inbox, please follow the instructions to complete the process"}
          </p>
        </div>
        {verify ? (
          <Button
            buttonText="Proceed"
            action={() => {
              navigate("/login");
            }}
            color="white"
            bgColor="#066fe0"
            margin="24px"
          />
        ) : (
          <Button
            buttonText="Proceed"
            action={() => {
              navigate("/");
            }}
            color="white"
            bgColor="#066fe0"
            margin="24px"
          />
        )}
      </Popup>
    </FormLayout>
  );
};

export default Verify;
