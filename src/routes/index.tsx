import {
    useGetPairQuery,
    useScoreUpMutation,
    useScoreDownMutation,
} from "@/lib/api/hooks"
import { createFileRoute } from "@tanstack/react-router"
import CharacterCard from "@/lib/components/CharacterCard/CharacterCard"

export const Route = createFileRoute("/")({
    component: HomeComponent,
})

function HomeComponent() {
    const {
        data: characterPair,
        isError,
        isLoading,
        refetch,
    } = useGetPairQuery()
    const {
        mutate: incrementScore,
        isPending: scoreUpPending,
        isSuccess: scoreUpSuccess,
    } = useScoreUpMutation()
    const {
        mutate: decrementScore,
        isPending: scoreDownPending,
        isSuccess: scoreDownSuccess,
    } = useScoreDownMutation()

    if (isLoading)
        return (
            <div className="p-2">
                <h3>Loading a new pair of characters</h3>
            </div>
        )

    if (isError || !characterPair || characterPair.length !== 2) {
        return (
            <div className="p-2">
                <h3>We were unable to load a pair of characters...</h3>
            </div>
        )
    }

    const selectWinner = (id: number) => {
        // Select this id as the winner, mark the other one as the loser
        const otherId = characterPair.filter(
            (character) => character.id !== id
        )[0].id

        incrementScore(id)
        decrementScore(otherId)

        // Get a new pair and go again
        if (scoreDownSuccess && scoreUpSuccess) {
            refetch()
        }
    }

    return (
        <div className="p-2 flex flex-row gap-6">
            <CharacterCard
                character={characterPair[0]}
                disabled={scoreUpPending || scoreDownPending}
                selectAsWinner={selectWinner}
            />
            <CharacterCard
                character={characterPair[1]}
                disabled={scoreUpPending || scoreDownPending}
                selectAsWinner={selectWinner}
            />
        </div>
    )
}
