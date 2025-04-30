"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactNode, useState } from "react"

export const QueryProvider = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1,// agar request reject bolsa, qayta bajarish soni
                staleTime: 1000 * 60 * 5,// qayta 5 daqiqa request beriladi
                // @ts-ignore
                cacheTime: 1000 * 60 * 10, // Keshda saqlanish vaqti
                refetchOnWindowFocus: true,// rerender bolganda qayta ishlashi
                enabled: true,
            }
        }
    }))

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
