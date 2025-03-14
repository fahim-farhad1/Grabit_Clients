import { useMutation } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { data } from "react-router";
import useCarts from "./useCarts";

const usePatchCart = () => {
  const instance = useAxios();
  const [refetch] = useCarts();
  const { mutate: removeCart } = useMutation({
    mutationFn: async (data) => {
      const res = await instance.patch("/cart", data);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("✅ Product removed successfully:", data);
      refetch();
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  return [removeCart];
};

export default usePatchCart;
