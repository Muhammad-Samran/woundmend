import axios from "axios";
import config from "config";

const API_URL = config.apiUrl;

const register = async (payload) => {
  return await axios.post(API_URL + "register", payload);
};

const login = async (payload) => {
  return await axios.post(API_URL + "login", payload).then((response) => {
    if (response?.data?.results?.access_token) {
      localStorage.setItem(
        "token",
        JSON.stringify(response?.data?.results?.access_token)
      );
      localStorage.setItem("user", JSON.stringify(response?.data?.results));
    }

    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
