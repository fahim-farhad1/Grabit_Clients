import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useWishListProducts = (id, key) => {
  const instance = useAxios();
  const { data: wishListProducts = [], isLoading} = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await instance.get(`/product?_id=${id}`);
      if(!res.data){
        throw new Error("Product not found")
      }
      return res.data;
    },
    enabled: !!id,
  });
  return [wishListProducts, isLoading];
};

export default useWishListProducts;
