import { useMutation, useQuery } from "@tanstack/react-query"
import type Character from "../types/Character"
import { queries } from "./queries"

const { POST, PATCH, GET } = queries

const { getCharacters, getCharactersSorted, getPair } = GET
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
    useQuery<Character[]>({
        queryFn: getPair,
        queryKey: ["pair"],
    })

export const usePostCharacterMutation = () =>
    useMutation({ mutationFn: postCharacter })

export const useScoreUpMutation = () =>
    useMutation({ mutationFn: incrementScore })

export const useScoreDownMutation = () =>
    useMutation({ mutationFn: decrementScore })
