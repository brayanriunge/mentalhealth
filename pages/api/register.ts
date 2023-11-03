import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const registerUserSchema= z.object({
    name: z.string(),
    email: z.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, "Invalid email"),
    password: z.string().min(5,"Minimum characters should be 5 ")
})

export default async function registerUser(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const{name, email, password}= registerUserSchema.parse(req.body)
}