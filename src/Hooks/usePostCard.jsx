import { useMutation } from "@tanstack/react-query";
import useAxios from "./useAxios";
import Swal from "sweetalert2";
import useCarts from "./useCarts";

const usePostCard = () => {
  const instance = useAxios();
  const [refetch, ] = useCarts()

  const { mutate } = useMutation({
    mutationFn: async (cartInfo) => {
      const res = await instance.post("/carts", cartInfo);
      console.log("cartData:", cartInfo);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("✅ User created successfully:", data);
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
