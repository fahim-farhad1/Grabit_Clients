import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useTeamMembers = () => {
  const instance = useAxios();
  const { data: temMember = [] } = useQuery({
    queryKey: ["temMember"],
    queryFn: async () => {
      const res = await instance.get("/team-members");
      return res.data;
    },
  });
  return [temMember];
};

export default useTeamMembers;
