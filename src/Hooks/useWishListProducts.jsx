import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useWishListProducts = (id, key) => {
  const instance = useAxios();
  const { data: wishListProducts = [], isLoading , isError, error} = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await instance.get(`/product?_id=${id}`);
      if(!res.data){
        throw new Error("Product not found")
      }
      return res.data;
    },
    enabled: !!id,
    retry: 0,
  });
  return [wishListProducts, isLoading , isError, error];
};

export default useWishListProducts;
