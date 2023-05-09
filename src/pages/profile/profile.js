import React from "react";
import "./profile.css";
import Header from "../../components/header/header";
import UserProfile from "../../components/user-profile/userProfile";
import Footer from "../../components/footer/footer";

const Profile = () => {
  return (
    <>
      <Header />
      <UserProfile />
      <Footer />
    </>
  );
};
export default Profile;
