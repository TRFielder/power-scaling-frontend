import {
    render,
    screen,
    fireEvent,
    waitFor,
    cleanup,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi, describe, beforeEach, expect, it, afterEach } from "vitest"
import CreateCharacterForm from "@/lib/components/CreateCharacterForm/CreateCharacterForm"

describe("CreateCharacterForm", () => {
    const mockSubmitFunction = vi.fn()

    beforeEach(() => {
        mockSubmitFunction.mockClear()
    })

    afterEach(() => {
        cleanup()
    })

    it("renders the form inputs and submit button", () => {
        render(<CreateCharacterForm submitFunction={mockSubmitFunction} />)

        expect(screen.getByPlaceholderText("Name")).toBeInTheDocument()
        expect(screen.getByText("Submit")).toBeInTheDocument()
    })

    it("calls submitFunction with correct data when form is submitted", async () => {
        const file = new File(["image"], "test.png", { type: "image/png" })
        render(<CreateCharacterForm submitFunction={mockSubmitFunction} />)

        const user = userEvent.setup()

        // Fill the inputs
        const nameInput = screen.getByPlaceholderText("Name")
        await user.type(nameInput, "Test Character")

        const fileInput = screen.getByLabelText("Upload an image")
        await user.upload(fileInput, file)

        // Submit the form
        fireEvent.click(screen.getByText("Submit"))

        await waitFor(() => expect(mockSubmitFunction).toHaveBeenCalled())
    })
})
