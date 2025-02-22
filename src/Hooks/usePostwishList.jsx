import Swal from "sweetalert2";
import useAxios from "./useAxios";
import { useMutation } from "@tanstack/react-query";
import useWishlist from "./useWishlist";

const usePostwishList = () => {
  const instance = useAxios();
  const [refetch,] = useWishlist()

  const { mutate } = useMutation({
    mutationFn: async (wishListInfo) => {
      const res = await instance.post("/wishlist", wishListInfo);
      return res.data;
    },
    onSuccess: async (data) => {
      console.log("wishlist data:-", data);
      if (data.modifiedCount != 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Products added!  ",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Products already added!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    onError: async (error) => {
      console.error(
        "❌ Error creating user:",
        error.response?.data || error.message
      );
    },
  });
  return [mutate];
};

export default usePostwishList;
