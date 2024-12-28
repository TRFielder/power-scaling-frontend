import { useGetPairQuery } from "@/lib/api/hooks"
import { createFileRoute } from "@tanstack/react-router"
import CharacterCard from "@/lib/components/CharacterCard/CharacterCard"

export const Route = createFileRoute("/")({
    component: HomeComponent,
})

function HomeComponent() {
    const { data: characterPair, isError, isLoading } = useGetPairQuery()

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

    return (
        <div className="p-2 flex flex-row gap-6">
            <CharacterCard
                character={characterPair[0]}
                disabled={false}
                selectAsWinner={() =>
                    window.alert(`You selected ${characterPair[0].name}`)
                }
            />
            <CharacterCard
                character={characterPair[1]}
                disabled={false}
                selectAsWinner={() =>
                    window.alert(`You selected ${characterPair[1].name}`)
                }
            />
        </div>
    )
}
