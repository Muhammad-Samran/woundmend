import axios from "axios";
import config from "config";

const API_URL = config.apiUrl;

const axiosFileApi = axios.create({
  baseURL: API_URL,
});

axiosFileApi.interceptors.request.use(
  async (config) => {
    const value = await JSON.parse(localStorage.getItem("token"));
    if (value) {
      config.headers = {
        "Content-Type": "multipart/form-data",
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

export default axiosFileApi;
