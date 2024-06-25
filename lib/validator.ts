import { z } from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(3, {
      message: "Title must be at least 3 character",
    }),

    description: z.string().min(10, {message: "Description too short, 10 characters required"}).max(1000, "Description too long, max 1000 characthers"),

    location: z.string().min(3, {
        message: "Location needs to be more precise",
      }),
    imageUrl: z.string(),
    startDateTime:  z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()

})    