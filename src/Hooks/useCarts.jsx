import { useContext } from 'react';
import useAxios from './useAxios'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Components/Provider/AuthProvider';

const useCarts = () => {

  const instance = useAxios();
  const {user} = useContext(AuthContext)
  const { refetch, data : carts = []} = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email, 
    queryFn: async () =>{
        const res = await instance.get(`/carts?userEmail=${ user?.email}`)
       return res.data
    }
  })
  return [refetch ,carts]
}

export default useCarts
