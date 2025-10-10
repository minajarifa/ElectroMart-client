import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecureURL = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials:true
});
export default function useAxiosSecure() {
  const navigate = useNavigate()
    const {  logout} = useAuth();
  // request interceptor to add authentication header for every secure to teh api
  axiosSecureURL.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stoped by interceptor", token);
      config.headers.authorization= `Bearer ${token}`
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // intercepts 401 ,403 status
  axiosSecureURL.interceptors.response.use(function(response){
    return response
  },async(error)=>{
    const status = error.response.status;
    // console.log('status error in the interceptor arifa',status)
    if(status===401 || status===403){
    //   await logout()
    //  navigate('/Login')
    }
    return Promise.reject(error)
  })
  return axiosSecureURL;
}