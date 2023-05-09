import React, { useState, useEffect, useRef } from "react";
import "./profileInfo.css";
import User from "../../assets/profile-pic.png";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";

const ProfileInfo = ({ profile }) => {
  const navigate = useNavigate();

  const myref = useRef();
  useEffect(() => {
    myref.current.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [myref]);
  const [token, setToken] = useState("");

  const [cookies] = useCookies(["user"]);
  useEffect(() => {
    setToken(cookies.Name);
  }, [cookies]);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  return (
    <div className="profile-info-cont" ref={myref}>
      <ToastContainer />
      <div className="profile-info-head">
        <div className="profile-info-pic">
          <img src={User} alt="user" />
          <div>
            <h2>Avatar</h2>
            <p>Min 200 x 20000px. PNG or.JPEG</p>
          </div>
        </div>
        <label>
          <input type="file" />
          Change Picture
        </label>
      </div>
      <div className="profile-info-body">
        <div className="profile-info-form">
          <div className="profile-info-group">
            <div className="profile-form-group">
              <label>First Name</label>
              <input type="text" defaultValue={profile.f_name} disabled />
            </div>
            <div className="profile-form-group">
              <label>Last Name</label>
              <input type="text" defaultValue={profile.l_name} disabled />
            </div>
          </div>
          <div className="profile-info-single">
            <div className="profile-form-group">
              <label>Email</label>
              <input type="email" defaultValue={profile.email} disabled />
            </div>
          </div>
          <div className="profile-info-single">
            <div className="profile-form-group">
              <label>Country</label>
              <select
                onChange={(e) => {
                  setCountry(e.target.value);
                }}>
                {profile.country === null ? <option value="">Choose Country</option> : <option value={profile.country}>{profile.country}</option>}
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
          </div>
          <div className="profile-info-group">
            <div className="profile-form-group">
              <label>Age</label>
              <select
                onChange={(e) => {
                  setAge(e.target.value);
                }}>
                {profile.age_range === null ? <option value="">Choose Age Range</option> : <option value={profile.age_range}>{profile.age_range}</option>}
                <option value="Under 18">Under 18</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-64">55-64</option>
                <option value="65 and over">65 and over</option>
              </select>
            </div>
            <div className="profile-form-group">
              <label>Sex</label>
              <select
                onChange={(e) => {
                  setSex(e.target.value);
                }}>
                {profile.sex === null ? <option value="">Choose Sex</option> : <option value={profile.sex}>{profile.sex}</option>}

                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="profile-info-button">
          <Button
            buttonText="Update"
            bgColor="#066FE0"
            color="white"
            action={async () => {
              setLoading(true);
              const config = {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token?.accessToken}`,
                },
              };
              const url = "https://avuna-backend.onrender.com/api/accounts/me/profile/edit";
              const data = {
                sex,
                country,
                age_range: age,
              };
              try {
                await axios.post(url, data, config).then((response) => {
                  toast.success("Changed Successfully");
                  setLoading(false);
                });
              } catch (error) {
                setLoading(false);
                if (error.response.data.err.msg === "Access token not valid") {
                  navigate("/login");
                } else {
                  toast.error(error.response.data.err.msg);
                }
              }
            }}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
