import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

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

type Inputs = z.infer<typeof signUpSchema>;

const OnlyCSS = () => {
  const [showAlert, setShowAlert] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.alert("Registration successful!");
    console.log(data);
  };
  return (
    <div className="grid grid-cols-2">
      {/* Right Side */}
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-teal-400">
        <h1 className="text-8xl font-bold text-white">WELCOME!! </h1>
        <p className="p-7 text-center text-xl text-white">
          You’re one step away from something awesome.{" "}
        </p>
        <p className="text-center text-xl text-white">
          Register now to begin your journey with us — it only takes a minute to
          get started.
        </p>
      </div>
      {/* Left Side */}

      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-2xl rounded border-0 bg-white p-6 shadow-2xl">
          <h2 className="mb-6 bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-center text-4xl font-extrabold text-transparent">
            User Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div className="mb-4">
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
                <p className="text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                className={`block font-medium ${errors.email ? "text-red-500" : ""}`}
              >
                Email
              </label>
              <input
                {...register("email")}
                className={`w-full rounded border p-2 pr-10 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="name.name@gmail.com"
                type="email"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                className={`block font-medium ${errors.password ? "text-red-500" : ""}`}
              >
                Password
              </label>
              <input
                className={`w-full rounded border p-2 pr-10 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Must be at least 8 characters"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
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
                placeholder="Please enter the same password again"
                type="password"
              />{" "}
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* DOB */}
            {/* <div className="mb-4">
              <label className="mb-1 block font-medium">Birthday</label>
              <div className="grid grid-cols-3 gap-x-2.5">
                <input
                  className="w-full rounded border p-2"
                  placeholder="Day"
                  type="number"
                  min="1"
                  max="31"
                />
                <input
                  className="w-full rounded border p-2"
                  placeholder="Month"
                  type="number"
                  min="1"
                  max="12"
                />
                <input
                  className="w-full rounded border p-2"
                  placeholder="Year"
                  type="number"
                  min="1940"
                  max="2025"
                />
              </div>
            </div> */}

            {/* DOB 2 */}
            <div className="mb-4">
              <label
                className={`block font-medium ${errors.dob ? "text-red-500" : ""}`}
              >
                Date of Birth{" "}
              </label>
              <input
                {...register("dob")}
                type="date"
                className={`w-full rounded border p-2 pr-10 ${errors.dob ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.dob && (
                <p className="text-sm text-red-500">{errors.dob.message}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="mb-4 flex items-center gap-2">
              <input
                {...register("terms")}
                type="checkbox"
                className="accent-indigo-500"
              />
              <label className="font-medium">
                I agree to the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Terms & Conditions
                </a>
              </label>{" "}
            </div>
            {errors.terms && (
              <p className="text-sm text-red-500">{errors.terms.message}</p>
            )}

            {/* Submit Button */}
            <button
              className="w-full rounded-2xl bg-indigo-500 p-2 text-white transition hover:bg-indigo-600"
              type="submit"
            >
              Sign Up
            </button>

            {/* Alert notification */}

            {showAlert && (
              <div className="mb-4 rounded bg-green-100 p-4 text-green-800">
                <CheckIcon className="mr-2" />
                Registration successful!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnlyCSS;
