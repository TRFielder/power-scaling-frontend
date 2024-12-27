import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { describe, it, expect, vi, afterEach, beforeEach } from "vitest"
import { faker } from "@faker-js/faker"
import type Character from "../types/Character"
import CharacterCard from "./CharacterCard"

describe("CharacterCard component", () => {
    const mockCharacter: Character = {
        id: faker.number.int(),
        imageUrl: faker.image.url(),
        name: faker.person.fullName(),
        score: faker.number.int(),
    }

    const mockSelectAsWinner = vi.fn()

    beforeEach(() => {
        render(
            <CharacterCard
                character={mockCharacter}
                disabled={false}
                selectAsWinner={mockSelectAsWinner}
            />
        )
    })

    afterEach(() => {
        cleanup()
    })

    it("Renders correctly with the provided character data", () => {
        expect(screen.getByRole("button")).toBeInTheDocument()
        expect(
            screen.getByRole("heading", { name: mockCharacter.name })
        ).toBeInTheDocument()
        expect(screen.getByRole("img")).toHaveAttribute(
            "src",
            mockCharacter.imageUrl
        )
        expect(screen.getByRole("img")).toHaveAttribute(
            "alt",
            mockCharacter.name
        )
    })

    it("Calls selectAsWinner when button is clicked", () => {
        const button = screen.getByRole("button")

        fireEvent.click(button)

        expect(mockSelectAsWinner).toHaveBeenCalledOnce()
        expect(mockSelectAsWinner).toHaveBeenCalledWith(mockCharacter.id)
    })

    it("Applies the disabled attribute to the button", () => {
        // Remove the existing component set up in beforeEach
        cleanup()

        render(
            <CharacterCard
                character={mockCharacter}
                disabled={true}
                selectAsWinner={mockSelectAsWinner}
            />
        )
        const button = screen.getByRole("button")

        expect(button).toHaveAttribute("disabled")
    })
})
