"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getCategories = (limit?:number) => {
    const {data = [], isLoading, isError} = useQuery(({
        queryKey:['categories'],
        queryFn: () => instance().get("/categories/all", {params:{limit:1000}}).then(res => res.data)
    }))

    return{data, isLoading, isError}
}