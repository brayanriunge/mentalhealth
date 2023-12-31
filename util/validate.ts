import { z } from "zod";

export const registerUserSchema = z
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
        required_error: "password is required",
        invalid_type_error: "password must be string",
      })
      .min(8, { message: "Password must be greater than 8 characters long" })
      .max(20, { message: "password must be less than 20 characters long" }),
    cpassword: z.string({
      required_error: "Confirm password is required",
      invalid_type_error: "Password must be a string",
    }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords don't match",
    path: ["cpassword"],
  });
