import ReactDOM from "react-dom/client"
import {
    RouterProvider,
    createRouter,
    createHashHistory,
} from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import "./index.css"

// Set up memory history
const hashHistory = createHashHistory()

// Set up a Router instance
const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    history: hashHistory,
})

// Register things for typesafety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

// biome-ignore lint: This element is always going to be here
const rootElement = document.getElementById("app")!

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(<RouterProvider router={router} />)
}
