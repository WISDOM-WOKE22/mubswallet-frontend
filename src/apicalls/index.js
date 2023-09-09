import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mubswallet-backend.onrender.com", //place your locl host url of backend
  //http://localhost:4000
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});
