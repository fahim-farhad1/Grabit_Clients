import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";

const useUsers = () => {
  const instance = useAxios();
  const {user} = useContext(AuthContext);
  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user?.email, 
    queryFn: async () => {
      const res = await instance.get(`/users/${user?.email}`);
      return res.data;
    },

  });
  return [users];
};

export default useUsers;
