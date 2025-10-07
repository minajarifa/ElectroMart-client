import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function useUsers() {
  const axiosSecureURL = useAxiosSecure();
  const { user } = useAuth();

  // All users Data
  const { data: users = [] ,refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecureURL.get("/users");
      return res.data;
    },
  });
  //  a single data 
  const { data: userOne = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecureURL.get(`/user/${user?.email}`);
      return res.data;
    },
  });

  return [users, userOne,refetch];
}
