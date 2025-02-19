import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useSingleProduct = (category,name, id) => {
    const instance = useAxios();
    const { data: product = [],isLoading } = useQuery({
        queryKey: ['product', id,category ],
        queryFn: async () => {
            const res = await instance.get(`/products/${category}/${name}/${id}`);
            return res.data;
        },
        
        // enabled: !!id, // Only run the query if id is truthy
    });

    return [ product, isLoading];
};

export default useSingleProduct;
