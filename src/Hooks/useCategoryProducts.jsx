import React from 'react'
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useCategoryProducts = (slug) => {
  const instance = useAxios();
  const {data : categoryProducts = [], isLoading} = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      const res = await instance.get(`/products/${slug}`);
      return res.data;
    },
  });
  return [categoryProducts, isLoading];
}

export default useCategoryProducts
