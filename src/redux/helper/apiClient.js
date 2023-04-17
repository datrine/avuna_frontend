import axios from "axios";

const loginToken = window.sessionStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "https://avuna-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    token: loginToken,
  },
});

export default axiosInstance;
