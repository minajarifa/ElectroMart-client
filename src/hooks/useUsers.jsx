import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

export default function useUsers() {
  const axiosURL = useAxios();
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [userOne, setUserOne] = useState([]);
  // All users Data
  useEffect(() => {
    axiosURL.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, [axiosURL]);
  // single Users Data
  useEffect(() => {
    axiosURL.get(`/user/${user?.email}`).then((res) => {
      setUserOne(res.data);
    });
  }, [axiosURL, user.email]);

  return [users, userOne];
}
