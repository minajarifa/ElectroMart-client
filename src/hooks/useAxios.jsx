import axios from "axios"

export const axiosURL = axios.create({
    baseURL:"http://localhost:5000"
})

export default function useAxios() {
  return axiosURL
}
