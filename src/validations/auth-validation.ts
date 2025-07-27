import z from "zod";

export const loginSchemaForm = z.object({
    email: z.string().min(1, 'Email is required').regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'),
    password: z.string().min(1, 'Password is required'),
});

export type LoginForm = z.infer<typeof loginSchemaForm>;