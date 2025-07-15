import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";

// components
import Button from "../../components/Button";
import InputField from "../../components/InputField";

import { z } from "zod";
import { LoginSchema } from "./LoginSchema";

type Inputs = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (user: { email: string }) => user.email === data.email.trim(),
    );

    if (!user) {
      setError("email", {
        type: "manual",
        message: "Email not found",
      });
      return;
    }

    if (user.password !== data.password) {
      setError("password", {
        type: "manual",
        message: "Incorrect password",
      });
      return;
    }

    console.log("Login successful!");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };
  return (
    <div className="w-full max-w-2xl rounded border-0 bg-white p-6 shadow-2xl">
      <h2 className="mb-6 bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-center text-4xl font-extrabold text-transparent">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email?.message}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
        />

        <Button text="Login" />

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
