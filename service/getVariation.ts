"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getVariation = (id:number | string) => {
    const {data = [], isLoading, isError} = useQuery(({
        queryKey:['variations', id],
        queryFn: () => instance().get(`/variations/${id}`).then(res => res.data)
    }))

    return{data, isLoading, isError}
}