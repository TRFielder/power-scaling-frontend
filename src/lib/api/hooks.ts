import { useQuery } from "@tanstack/react-query"
import type Character from "../types/Character"

export const useGetCharactersQuery = () =>
    useQuery<Character[]>({ queryKey: ["characters"], staleTime: 60 * 1000 })
