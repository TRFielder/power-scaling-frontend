import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"

const baseUrl = import.meta.env.VITE_API_URL

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            queryFn: async ({ queryKey: [url] }) => {
                try {
                    const data = await fetch(`${baseUrl}/${url}`)

                    const response = data.json()

                    return response
                } catch (error) {
                    console.error(error)
                }
            },
        },
    },
})

export const QueryProvider = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
