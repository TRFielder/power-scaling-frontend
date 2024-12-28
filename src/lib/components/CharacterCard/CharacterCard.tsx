import type Character from "../../types/Character"

const CharacterCard = ({
    character,
    disabled,
    selectAsWinner,
}: {
    character: Character
    disabled: boolean
    selectAsWinner: (id: number) => void
}) => {
    return (
        <button
            type="button"
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800
                dark:border-gray-700 cursor-pointer hover:dark:bg-gray-700
                hover:dark:border-gray-600"
            disabled={disabled}
            onClick={() => selectAsWinner(character.id)}
        >
            <img
                src={character.imageUrl}
                alt={character.name}
                className="rounded-t-lg"
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {character.name}
            </h5>
        </button>
    )
}

export default CharacterCard
