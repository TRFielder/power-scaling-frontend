import * as React from "react"
import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <main
            className="border-gray-200 bg-gray-50 text-gray-950 dark:border-gray-800 dark:bg-gray-900
                dark:text-gray-200"
        >
            <div className="flex gap-2 p-2 text-lg">
                <Link
                    to="/"
                    activeProps={{
                        className: "font-bold",
                    }}
                    activeOptions={{ exact: true }}
                >
                    Home
                </Link>{" "}
                <Link
                    to="/about"
                    activeProps={{
                        className: "font-bold",
                    }}
                >
                    About
                </Link>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
        </main>
    )
}
