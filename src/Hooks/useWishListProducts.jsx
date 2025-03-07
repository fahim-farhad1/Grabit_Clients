import { data } from "react-router";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import useWishlist from "./useWishlist";

const useWishListProducts = (id) => {
  const instance = useAxios();
  const { data: wishListProducts = [], isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const res = await instance.get(`/product?_id=${id}`);
      return res.data;
    },
  });
  return [wishListProducts, isLoading];
};

export default useWishListProducts;
