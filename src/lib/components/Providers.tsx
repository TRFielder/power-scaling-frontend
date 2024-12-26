import type { ReactNode } from "react"
import { QueryProvider } from "../api/queryclient"

export const Providers = ({ children }: { children: ReactNode }) => (
    <QueryProvider>{children}</QueryProvider>
)

export default Providers
