import { useForm, type SubmitHandler } from "react-hook-form"
import type { CreateCharacter } from "@/lib/types/Character"

const CreateCharacterForm = ({
    submitFunction,
}: {
    submitFunction: (character: CreateCharacter) => void
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateCharacter>()

    const submitForm: SubmitHandler<CreateCharacter> = (data) => {
        submitFunction(data)
    }

    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-8 mt-8"
        >
            <section className="flex flex-col">
                <input
                    placeholder="Name"
                    {...register("name", {
                        required: "A name is required",
                    })}
                />
                {errors.name && (
                    <span className="text-red-500 text-sm">
                        {errors.name.message}
                    </span>
                )}
            </section>
            <section className="flex flex-col">
                <input
                    id="file"
                    type="file"
                    accept="image/*"
                    {...register("image", {
                        required: true,
                        validate: (fileList) => {
                            if (!fileList || !fileList.length)
                                return "An image file is required"
                            const file = fileList[0]
                            const isImage = file.type.startsWith("image/")

                            return isImage || "Only image files are allowed"
                        },
                    })}
                />
                <label htmlFor="file">Upload an image</label>
                {errors.image && (
                    <span className="text-red-500 text-sm">
                        {errors.image.message}
                    </span>
                )}
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
