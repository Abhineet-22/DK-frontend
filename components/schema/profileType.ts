import * as z from "zod";

export const nameUpdateSchema = z.object({
    name: z.string().min(1, {
        message: 'Name is mandatory'
    }),
    email: z.string()
})

export const passwordChangeSchema = z.object({
    old_password: z.string()
    .min(8, { message: "Password should be at least 8 characters long" }),
    new_password: z.string()
    .min(8, { message: "Password should be at least 8 characters long" }),

    new_password_confirm: z.string()
    .min(1, { message: "Password confirmation is mandatory" }),
}).refine((data) => data.new_password === data.new_password_confirm, {
    message: "Passwords do not match",
    path: ["new_password_confirm"]
});