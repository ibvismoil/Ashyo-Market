"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getSinglePage = (id:number | string) => {
    const {data = [], isLoading, isError} = useQuery(({
        queryKey:['single_page', id],
        queryFn: () => instance().get(`/products/${id}`).then(res => res.data)
    }))

    return{data, isLoading, isError}
}