import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mubswallet-backend.onrender.com",
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
  timeout: 15000, // Increase the timeout to 15 seconds (or adjust as needed)
});

