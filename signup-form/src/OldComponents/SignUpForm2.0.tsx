// [^A-Za-z0-9] means "any character not a letter or number"

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const today = new Date();
const minDOB = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate(),
);

const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full Name is required")
      .max(50, "Must be less than 12 characters"),
    email: z.string().email().min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
    age: z.number().min(18, "Age must be above 18"),
    dob: z.date().max(minDOB, "You must be at least 18 years old"),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  });

type Inputs = z.infer<typeof signUpSchema>;

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert("Signup Successful!\n\n" + JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg rounded bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">Signup Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              className={`block font-medium ${errors.fullName ? "text-red-500" : ""}`}
            >
              Full Name
            </label>
            <input
              {...register("fullName")}
              className={`w-full rounded border p-2 pr-10 ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>
          {/* Email */}
          <div>
            <label
              className={`block font-medium ${errors.email ? "text-red-500" : ""}`}
            >
              Email Address
            </label>
            <input
              {...register("email")}
              className={`w-full rounded border p-2 pr-10 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          {/* Password */}
          <div>
            <label
              className={`block font-medium ${errors.password ? "text-red-500" : ""}`}
            >
              Password
            </label>
            <input
              {...register("password")}
              className={`w-full rounded border p-2 pr-10 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          {/* Confirm Password  */}
          <label
            className={`block font-medium ${errors.confirmPassword ? "text-red-500" : ""} `}
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            className={`w-full rounded border p-2 pr-10 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
