import { z } from "zod";


export const loginSchema = z.object({
    email: z.string()
    .min(1, { message: "Email is mandatory" })
    .email({ message: "Invalid email address" }),

    password: z.string()
    .min(8, { message: "Password should be at least 8 characters long" }),
})


export const registerSchema = z.object({
    email: z.string()
        .min(1, { message: "Email is mandatory" })
        .email({ message: "Invalid email address" }),
        
        name: z.string()
        .min(1, { message: "Name is mandatory" }),
        
        password: z.string()
        .min(8, { message: "Password should be at least 8 characters long" }),
        
        passwordConfirm: z.string()
        .min(1, { message: "Password confirmation is mandatory" }),
    }).refine((data) => data.password === data.passwordConfirm, {
        message: "Passwords do not match",
    path: ["passwordConfirm"]
});
