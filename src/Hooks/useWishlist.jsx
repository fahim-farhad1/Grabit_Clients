import { useContext } from 'react';
import useAxios from './useAxios'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Components/Provider/AuthProvider';


const useWishlist = () => {
  const instance = useAxios();
  const {user} = useContext(AuthContext)
  // const {user} = useContext(AuthContext);
  const {refetch, data : wishlist = [] , isLoading} = useQuery({
    queryKey: ["wishlist",user?.email],
    enabled: !!user?.email, 
    queryFn: async () =>{
        const res = await instance.get(`/wishlist?userEmail=${user?.email}`)
       return res.data
    }
  })
  return [refetch,wishlist, isLoading]
}

export default useWishlist
