import { defineConfig } from "vitest/config"
import path from "node:path"

export default defineConfig({
    test: {
        root: __dirname,
        setupFiles: ["./vitest.setup.ts"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
