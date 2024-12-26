import { useMutation, useQuery } from "@tanstack/react-query"
import type Character from "../types/Character"
import { queries } from "./queries"

const { POST, PATCH, GET } = queries

const { getCharacters, getCharactersSorted } = GET
const { postCharacter } = POST
const { incrementScore, decrementScore } = PATCH

export const useGetCharactersQuery = () =>
    useQuery<Character[]>({
        queryFn: getCharacters,
        queryKey: ["characters"],
        staleTime: 60 * 1000,
    })

export const useGetCharactersSortedQuery = () =>
    useQuery<Character[]>({
        queryFn: getCharactersSorted,
        queryKey: ["characters"],
        staleTime: 60 * 1000,
    })

export const useGetPairQuery = () =>
    useQuery<Character[]>({ queryKey: ["characters/pair"] })

export const useGetSortedCharactersQuery = () =>
    useQuery<Character[]>({ queryKey: ["characters/sorted"] })

export const usePostCharacterMutation = () =>
    useMutation({ mutationFn: postCharacter })

export const useScoreUpMutation = () => {
    useMutation({ mutationFn: incrementScore })
}

export const useScoreDownMutation = () => {
    useMutation({ mutationFn: decrementScore })
}
