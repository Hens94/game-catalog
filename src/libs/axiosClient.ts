import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  function (config) {
    config.params = {
      ...config.params,
      key: process.env.NEXT_PUBLIC_API_KEY,
    };
    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);

