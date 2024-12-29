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

    it("Calls submitFunction with correct data when form is submitted", async () => {
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

        await waitFor(() =>
            expect(mockSubmitFunction).toHaveBeenCalledWith({
                name: "Test Character",
                image: expect.any(FileList),
            })
        )
    })

    it("Doesn't call submitFunction when a name is not entered", async () => {
        const file = new File(["image"], "test.png", { type: "image/png" })
        render(<CreateCharacterForm submitFunction={mockSubmitFunction} />)

        const user = userEvent.setup()

        // Fill the inputs
        const fileInput = screen.getByLabelText("Upload an image")
        await user.upload(fileInput, file)

        // Submit the form
        fireEvent.click(screen.getByText("Submit"))

        await waitFor(() => expect(mockSubmitFunction).not.toHaveBeenCalled())
    })

    it("Doesn't call submitFunction when an image is not uploaded, and shows the expectted validation message", async () => {
        render(<CreateCharacterForm submitFunction={mockSubmitFunction} />)

        const user = userEvent.setup()

        // Fill the inputs
        const nameInput = screen.getByPlaceholderText("Name")
        await user.type(nameInput, "Test Character")

        // Submit the form
        fireEvent.click(screen.getByText("Submit"))

        await waitFor(() => expect(mockSubmitFunction).not.toHaveBeenCalled())
    })

    it("Doesn't call submitFunction when the wrong file type is uploaded", async () => {
        const file = new File(["textfile"], "test.txt", { type: "text/plain" })
        render(<CreateCharacterForm submitFunction={mockSubmitFunction} />)

        const user = userEvent.setup()

        // Fill the inputs
        const nameInput = screen.getByPlaceholderText("Name")
        await user.type(nameInput, "Test Character")

        const fileInput = screen.getByLabelText("Upload an image")
        await user.upload(fileInput, file)

        // Submit the form
        fireEvent.click(screen.getByText("Submit"))

        await waitFor(() =>
            expect(mockSubmitFunction).not.toHaveBeenCalledWith({
                name: "Test Character",
                image: expect.any(FileList),
            })
        )
    })
})
