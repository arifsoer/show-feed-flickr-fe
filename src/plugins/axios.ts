import axios from "axios";

// TODO : change to backend url before build
const API_URL = "http://localhost:3001/api/v1";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
