import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import tailwindcss from "tailwindcss"
import path from "node:path"

const baseUrl = process.env.VITE_BASE_URL

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [TanStackRouterVite({}), react()],
    base: baseUrl,
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
