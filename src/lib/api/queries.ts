import type Character from "../types/Character"

const baseUrl = import.meta.env.VITE_API_URL

export const queries = {
    GET: {
        getCharacters: async (): Promise<Character[]> => {
            const response = await fetch(`${baseUrl}/characters`, {
                method: "GET",
            })

            if (!response.ok) {
                throw new Error(
                    `Error getting characters: ${response.statusText}`
                )
            }

            return response.json()
        },
        getCharactersSorted: async (): Promise<Character[]> => {
            const response = await fetch(`${baseUrl}/characters`, {
                method: "GET",
            })

            if (!response.ok) {
                throw new Error(
                    `Error getting sorted list of characters: ${response.statusText}`
                )
            }

            return response.json()
        },
        getPair: async (): Promise<Character[]> => {
            const response = await fetch(`${baseUrl}/characters/pair`, {
                method: "GET",
            })

            if (!response.ok) {
                throw new Error(
                    `Error getting pair of characters: ${response.statusText}`
                )
            }

            return response.json()
        },
    },
    POST: {
        postCharacter: async (formData: FormData) => {
            const response = await fetch(`${baseUrl}/characters`, {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                throw new Error(
                    `Error creating new character: ${response.statusText}`
                )
            }

            return response.json()
        },
    },
    PATCH: {
        incrementScore: async (id: number) => {
            const response = await fetch(`${baseUrl}/characters/${id}/up`, {
                method: "PATCH",
            })

            if (!response.ok) {
                throw new Error(
                    `Error incrementing score for character with ID ${id}: ${response.statusText}`
                )
            }

            return response.json()
        },
        decrementScore: async (id: number) => {
            const response = await fetch(`${baseUrl}/characters/${id}/down`, {
                method: "PATCH",
            })

            if (!response.ok) {
                throw new Error(
                    `Error decrementing score for character with ID ${id}: ${response.statusText}`
                )
            }

            return response.json()
        },
    },
}
