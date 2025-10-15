import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

export default function useProducts() {
  const axiosURL = useAxios();

  const { data: products = [],refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosURL.get("/products")
      return res.data
    },
  });
  return [products,refetch];
}
