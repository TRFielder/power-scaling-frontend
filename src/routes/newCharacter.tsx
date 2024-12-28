import { usePostCharacterMutation } from "@/lib/api/hooks"
import CreateCharacterForm from "@/lib/components/CreateCharacterForm/CreateCharacterForm"
import { createFileRoute } from "@tanstack/react-router"
import type { CreateCharacter } from "@/lib/types/Character"

export const Route = createFileRoute("/newCharacter")({
    component: CreateCharacterComponent,
})

function CreateCharacterComponent() {
    const { mutate } = usePostCharacterMutation()

    const submitNewCharacter = (character: CreateCharacter) => {
        if (!character.image) return

        console.log(character.image[0])

        // Turn the character into a new FormData
        const submission = new FormData()
        submission.append("name", character.name)
        submission.append("file", character.image[0])

        mutate(submission)
    }

    return <CreateCharacterForm submitFunction={submitNewCharacter} />
}
