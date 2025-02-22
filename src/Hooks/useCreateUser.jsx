import { useMutation } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCreateUser = () => {
  const instance = useAxios();
  const { mutate } = useMutation({
    mutationKey: ["newUsers"],
    mutationFn: async (newUser) => {
      console.log("Sending user data to server:", newUser);
      const response = await instance.post("/users", newUser);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("✅ Add to cart successfully:", data);
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

export default useCreateUser;
