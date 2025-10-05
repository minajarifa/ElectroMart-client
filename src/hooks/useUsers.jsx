import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function useUsers() {
  const axiosSecureURL = useAxiosSecure();
  const { user } = useAuth();
  // const [users, setUsers] = useState([]);
  const [userOne, setUserOne] = useState([]);
  // All users Data
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecureURL.get("/users");
      return res.data;
    },
  });

  // useEffect(() => {
  //   axiosSecureURL.get("/users").then((res) => {
  //     setUsers(res.data);
  //   });
  // }, [axiosSecureURL]);
  // single Users Data
  useEffect(() => {
    axiosSecureURL.get(`/user/${user?.email}`).then((res) => {
      setUserOne(res.data);
    });
  }, [axiosSecureURL, user.email]);

  return [users, userOne];
}
