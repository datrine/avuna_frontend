import axios from "axios";
let token;
let loginToken = window.sessionStorage.getItem("token");
if (loginToken === undefined) {
  token = "";
} else if (loginToken === null) {
  token = "";
} else {
  let newLoginToken = JSON.parse(loginToken);
  token = newLoginToken?.accessToken;
}

const axiosInstance = axios.create({
  baseURL: "https://avuna-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
