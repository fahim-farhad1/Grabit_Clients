import { useMutation } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useWishlist from "./useWishlist";

const usePatchWishList = () => {
  const [refetch, ,] = useWishlist();
  const instance = useAxios();
  const { mutate: removeProduct } = useMutation({
    mutationFn: async (data) => {
      const res = await instance.patch("/wishlist", data);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("✅ Product removed successfully:", data);
      refetch();
    },
    onError: (error) => {
      console.error(
        "❌ Error removing product:",
        error.response?.data || error.message
      );
    },
  });
  return [removeProduct];
};

export default usePatchWishList;
