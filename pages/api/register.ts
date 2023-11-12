import { prisma } from "@/util/db";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import bcrypt from "bcryptjs";

const registerUserSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(5, { message: "Name must be greater than 5 characters long" })
      .max(20, { message: "Name must be less than 20 characters long" }),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email("Invalid email address")
      .min(1, { message: "Required" })
      .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, "Invalid email"),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(8, { message: "Password must be greater than 8 characters long" })
      .max(20, { message: "Password must be less than 20 characters long" })
      .refine((value) => !/\s/.test(value), "Invalid Password"), // whitespace or tab check,
    cpassword: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["confirm_password"],
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
