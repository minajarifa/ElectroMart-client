import { useEffect, useState } from "react";
import useAxios from "./useAxios";

export default function useProducts() {
  const axiosURL = useAxios();
  const [products, setProducts] = useState();
  useEffect(() => {
    axiosURL.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, [axiosURL]);
  return [products];
}