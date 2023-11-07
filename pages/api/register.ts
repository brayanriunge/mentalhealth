import { prisma } from "@/util/db";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import bcrypt from "bcryptjs";

const registerUserSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, "Invalid email"),
  password: z.string().min(5, "Minimum characters should be 5 "),
});

export default async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  console.log(registerUserSchema.parse(req.body));
  const { name, email, password } = registerUserSchema.parse(req.body);

  if (req.method === "POST") {
    try {
      const userExists = await prisma.user.findUnique({
        where: { email },
      });
      //check if user exists
      if (userExists) {
        return res.status(409).json({ message: "User already exists" });
      }

      //hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      //create user
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      //successful message
      if (user) {
        return res.status(201).json({ message: "User created" });
      } else {
        return res.status(500).json({ message: "failed to register user" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Server error try again later" });
    }
  }
}
