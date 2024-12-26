import { useGetPairQuery } from "@/lib/api/hooks"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/list")({
    component: RouteComponent,
})

function RouteComponent() {
    const { data: characters } = useGetPairQuery()
    return (
        <div>
            {characters?.map((character) => (
                <p key={character.id}>{character.name}</p>
            ))}
        </div>
    )
}
