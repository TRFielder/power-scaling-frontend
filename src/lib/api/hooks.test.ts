import { renderHook, waitFor } from "@testing-library/react"
import { useGetCharactersQuery, useGetPairQuery } from "./hooks"
import { describe, expect, it } from "vitest"
import { QueryProvider } from "./queryclient"

const createWrapper = () => QueryProvider

describe("useGetCharactersQuery", () => {
    const characterShape = expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        imageUrl: expect.any(String),
        score: expect.any(Number),
    })

    it("Fetches and returns characters successfully", async () => {
        const { result } = renderHook(() => useGetCharactersQuery(), {
            wrapper: createWrapper(),
        })

        await waitFor(() => expect(result.current.isSuccess).toBe(true))

        expect(result.current.data).toBeDefined()
        expect(result.current.data).toStrictEqual(
            expect.arrayContaining([characterShape])
        )
    })
})

describe("useGetCharactersSortedQuery", () => {
    const characterShape = expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        imageUrl: expect.any(String),
        score: expect.any(Number),
    })

    it("Fetches and returns an array of characters sorted by score", async () => {
        const { result } = renderHook(() => useGetCharactersQuery(), {
            wrapper: createWrapper(),
        })

        await waitFor(() => expect(result.current.isSuccess).toBe(true))

        expect(result.current.data).toBeDefined()
        expect(result.current.data).toStrictEqual(
            expect.arrayContaining([characterShape])
        )
    })
})
