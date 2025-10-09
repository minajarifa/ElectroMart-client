import axios from "axios";

export const axiosSecureURL = axios.create({
  baseURL: "http://localhost:5000",
});
export default function useAxiosSecure() {
  axiosSecureURL.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stoped by interceptor", token);
      config.headers.authorization= `Bearer ${token}`
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return axiosSecureURL;
}
