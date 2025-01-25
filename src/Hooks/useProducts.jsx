import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useProducts = () => {
  const instance = useAxios();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await instance.get("/products");
      return res.data;
    },
  });
  return [products];
};

export default useProducts;
