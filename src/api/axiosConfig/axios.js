import axios from "axios";
import config from "config";

const API_URL = config.apiUrl;

const axiosApiInstance = axios.create({
  baseURL: API_URL,
});

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const value = await JSON.parse(localStorage.getItem("token"));
    if (value) {
      config.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${value}`,
      };
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosApiInstance;
