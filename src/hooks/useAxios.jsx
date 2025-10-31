import axios from "axios"

export const axiosURL = axios.create({
    baseURL:"https://electromart-server.vercel.app",
     withCredentials: true,
})

export default function useAxios() {
  return axiosURL
}
