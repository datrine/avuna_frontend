import axios from "axios";
let loginToken;
loginToken = window.sessionStorage.getItem("token");
let newLoginToken = JSON.parse(loginToken);

const axiosInstance = axios.create({
  baseURL: "https://avuna-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${newLoginToken?.accessToken}`,
  },
});

export default axiosInstance;
