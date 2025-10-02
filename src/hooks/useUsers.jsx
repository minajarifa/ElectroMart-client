import { useEffect, useState } from "react";
import useAxios from "./useAxios";

export default function useUsers() {
  const axiosURL = useAxios();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosURL.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, [axiosURL]);
  return users;
}
