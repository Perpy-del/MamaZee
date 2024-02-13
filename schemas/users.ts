import * as z from "zod";

export const SignupSchema = z.object({
    email: z.string({required_error: "Email is required"}).email({message: "Invalid email address. Please enter a valid email address"}).trim().toLowerCase(),
    password: z.string({required_error: "Password is required"}).trim()
})

export type Signup = z.infer<typeof SignupSchema>