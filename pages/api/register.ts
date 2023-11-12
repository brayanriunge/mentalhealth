import { prisma } from "@/util/db";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import bcrypt from "bcryptjs";

type Data = {
  message: string;
};

const registerUserSchema = z.object({
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
      required_error: "password is required",
      invalid_type_error: "password must be string",
    })
    .min(8, { message: "Password must be greater than 8 characters long" })
    .max(20, { message: "password must be less than 20 characters long" }),
  // cpassword: z.string({
  //   required_error: "Password is required",
  //   invalid_type_error: "Password must be a string",
  // }),
});

// .refine((data) => data.password === data.cpassword, {
//   message: "Passwords do not match",
//   path: ["cpassword"],
// });

export default async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
      if (error instanceof z.ZodError) {
        // Handle Zod validation errors
        const issues = error.errors.map((issue) => ({
          code: issue.code,
          message: issue.message,
        }));
        return res.status(400).json({ issues });
      } else {
        // Handle other server errors
        console.error(error);
        return res
          .status(500)
          .json({ message: "Server error, try again later" });
      }
    }
  }
}
