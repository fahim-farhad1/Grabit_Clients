import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCategories = () => {
  const instance = useAxios();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await instance.get("/categories");
      return res.data;
    },
  });
  return [categories];
};

export default useCategories;
