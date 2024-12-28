type Character = {
    id: number
    name: string
    imageUrl: string
    score: number
}

export type CreateCharacter = {
    name: string
    image: FileList | null
}

export default Character
