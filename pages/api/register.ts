import { prisma } from "@/util/db";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { registerUserSchema } from "@/util/validate";

type Data = {
  message: string;
};

export default async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, password } = req.body.values;
  // const y = registerUserSchema.parse(req.body.values);
  // console.log(y);

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
      // Handle other server errors
      console.error(error);
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }
}
