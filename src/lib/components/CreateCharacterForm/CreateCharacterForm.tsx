import { useForm, type SubmitHandler } from "react-hook-form"
import type { CreateCharacter } from "@/lib/types/Character"

const CreateCharacterForm = ({
    submitFunction,
}: {
    submitFunction: (character: CreateCharacter) => void
}) => {
    const { register, handleSubmit } = useForm<CreateCharacter>()

    const submitForm: SubmitHandler<CreateCharacter> = (data) => {
        submitFunction(data)
    }

    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-8"
        >
            <input
                placeholder="Name"
                {...register("name", { required: true })}
            />
            <section className="flex flex-col">
                <input
                    id="file"
                    type="file"
                    {...register("image", { required: true })}
                />
                <label htmlFor="file">Upload an image</label>
            </section>
            <button
                type="submit"
                className="bg-white text-black shadow hover:bg-white/90"
            >
                Submit
            </button>
        </form>
    )
}

export default CreateCharacterForm
