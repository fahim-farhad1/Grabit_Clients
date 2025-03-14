import Swal from "sweetalert2";
import useAxios from "./useAxios";
import { useMutation } from "@tanstack/react-query";
import useWishlist from "./useWishlist";

const usePostwishList = () => {
  const instance = useAxios();
  const [refetch] = useWishlist();

  // tost
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (wishListInfo) => {
      const res = await instance.post("/wishlist", wishListInfo);
      return res.data;
    },
    onSuccess: async (data) => {
      console.log("wishlist data:-", data);
      if (data.modifiedCount != 0) {
        Toast.fire({
          icon: "success",
          title: "products added successfully",
          timer: 900,
        });
        refetch();
      } else {
        Toast.fire({
          icon: "error",
          title: "products already in wishlist!",
          timer: 900,
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
