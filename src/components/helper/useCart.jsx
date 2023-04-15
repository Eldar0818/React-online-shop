import { useQuery } from "react-query";
import { apiUrl } from "./apiCall";

export function useFetchCartItems(){
    const getCartItems = async () => {
        try {
            const resp = await apiUrl.get('/cart')
            const cartItems = resp.data

            return cartItems

        } catch (error) {
            console.log(error);
        }
    }

    const { isError, isLoading, data, error } = useQuery(["cartitems"], getCartItems)

    return { data }
}