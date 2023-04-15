import { useQuery } from "react-query";
import { apiUrl } from './apiCall'

export function useFetchProducts () {

    const fetchAllProducts = async () => {
        try {
            const resp = await apiUrl.get('/products')
            const data = resp.data

            return data
            
        } catch (error) {
            console.log(error);
        }
    }

    const { isError, isLoading, data, error } = useQuery(["products"], fetchAllProducts)

    return { data }
}