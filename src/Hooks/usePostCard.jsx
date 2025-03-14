import { useMutation } from "@tanstack/react-query";
import useAxios from "./useAxios";
import Swal from "sweetalert2";
import useCarts from "./useCarts";

const usePostCard = () => {
  const instance = useAxios();
  const [refetch, ] = useCarts()
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const { mutate } = useMutation({
    mutationFn: async (cartInfo) => {
      const res = await instance.post("/carts", cartInfo);
      console.log("cartData:", cartInfo);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("✅ User created successfully:", data);
      if (data.modifiedCount != 0) {
        Toast.fire({
          icon: "success",
          title: "products added successfully", 
          timer: 900

        });
        refetch()
      } else {
        Toast.fire({
          icon: "error",
          title: "product already in cart",
          timer: 900
        });
      }
    },
    onError: (error) => {
      console.error(
        "❌ Error creating user:",
        error.response?.data || error.message
      );
    },
  });
  return [mutate];
};

export default usePostCard;
