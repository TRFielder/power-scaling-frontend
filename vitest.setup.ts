import { server } from "@/test/mocks/node"
import { afterAll, afterEach, beforeAll } from "vitest"
import "@testing-library/jest-dom/matchers"

beforeAll(() => {
    console.log("Setting up for tests")
    console.log("🔧 Launching Mock Service Worker")
    server.listen()
})

afterEach(() => {
    console.log("🔧 Resetting Mock Service Worker handlers")
    server.resetHandlers()
})

afterAll(() => {
    console.log("🔧 Closing Mock service worker")
    server.close()
})
