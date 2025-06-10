// src/components/SignupForm.tsx
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
  terms: boolean;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData) => {
    alert("Signup Successful!\n\n" + JSON.stringify(data, null, 2));
  };

  const password = watch("password");

  return (
    <div className="container">
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-400">
        Trial
      </button>
    </div>
  );
}
// <h2 className="text-2xl font-bold mb-6 text-center">Signup Form</h2>
// <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//   {/* Full Name */}
//   <div>
//     <label className="block font-medium">Full Name</label>
//     <input
//       type="text"
//       {...register("fullName", { required: "Full Name is required" })}
//       className={`w-full p-2 border rounded ${
//         errors.fullName ? "border-red-500" : "border-gray-300"
//       }`}
//     />
//     {errors.fullName && (
//       <p className="text-red-500 text-sm">{errors.fullName.message}</p>
//     )}
//   </div>

//   {/* Email */}
//   <div>
//     <label className="block font-medium">Email Address</label>
//     <input
//       type="email"
//       {...register("email", {
//         required: "Email is required",
//         pattern: {
//           value: /^\S+@\S+$/i,
//           message: "Invalid email address",
//         },
//       })}
//       className={`w-full p-2 border rounded ${
//         errors.email ? "border-red-500" : "border-gray-300"
//       }`}
//     />
//     {errors.email && (
//       <p className="text-red-500 text-sm">{errors.email.message}</p>
//     )}
//   </div>

//   {/* Password */}
//   <div>
//     <label className="block font-medium">Password</label>
//     <input
//       type="password"
//       {...register("password", {
//         required: "Password is required",
//         minLength: {
//           value: 6,
//           message: "Minimum 6 characters required",
//         },
//         validate: {
//           hasNumberOrSymbol: (value) =>
//             /[0-9!@#$%^&*]/.test(value) ||
//             "Must include at least 1 number or symbol",
//         },
//       })}
//       className={`w-full p-2 border rounded ${
//         errors.password ? "border-red-500" : "border-gray-300"
//       }`}
//     />
//     {errors.password && (
//       <p className="text-red-500 text-sm">{errors.password.message}</p>
//     )}
//   </div>

//   {/* Confirm Password */}
//   <div>
//     <label className="block font-medium">Confirm Password</label>
//     <input
//       type="password"
//       {...register("confirmPassword", {
//         required: "Please confirm your password",
//         validate: (value) =>
//           value === password || "Passwords do not match",
//       })}
//       className={`w-full p-2 border rounded ${
//         errors.confirmPassword ? "border-red-500" : "border-gray-300"
//       }`}
//     />
//     {errors.confirmPassword && (
//       <p className="text-red-500 text-sm">
//         {errors.confirmPassword.message}
//       </p>
//     )}
//   </div>

//   {/* Age */}
//   <div>
//     <label className="block font-medium">Age</label>
//     <input
//       type="number"
//       {...register("age", {
//         required: "Age is required",
//         min: {
//           value: 13,
//           message: "You must be at least 13 years old",
//         },
//         max: {
//           value: 120,
//           message: "Please enter a valid age",
//         },
//       })}
//       className={`w-full p-2 border rounded ${
//         errors.age ? "border-red-500" : "border-gray-300"
//       }`}
//     />
//     {errors.age && (
//       <p className="text-red-500 text-sm">{errors.age.message}</p>
//     )}
//   </div>

//   {/* Terms & Conditions */}
//   <div className="flex items-center gap-2">
//     <input
//       type="checkbox"
//       {...register("terms", {
//         required: "You must accept the terms",
//       })}
//       className="accent-blue-600"
//     />
//     <label className="text-sm">
//       I accept the <span className="underline">Terms & Conditions</span>
//     </label>
//   </div>
//   {errors.terms && (
//     <p className="text-red-500 text-sm">{errors.terms.message}</p>
//   )}

//   {/* Submit Button */}
//   <button
//     type="submit"
//     disabled={!isValid}
//     className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//   >
//     Register
//   </button>
// </form>
