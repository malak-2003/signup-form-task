// src/forms/SignupForm/signupSchema.ts
import { z } from "zod";

const today = new Date();
const minDOB = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate(),
);

export const RegisterSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full Name is required")
      .max(12, "Must be less than 12 characters"),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
    dob: z
      .string()
      .refine((val) => !isNaN(new Date(val).getTime()), "Invalid date")
      .refine(
        (val) => new Date(val) <= minDOB,
        "You must be at least 18 years old",
      ),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  });
