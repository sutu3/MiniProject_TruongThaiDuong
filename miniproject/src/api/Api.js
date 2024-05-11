import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://26.232.136.42:8080/api`,
  responseType: `json`,
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (resopnes) => {
    if (resopnes && resopnes.data) {
      return resopnes.data;
    }
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
