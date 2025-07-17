import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";

// components
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import CheckboxWithLabel from "../../components/CheckboxWithLabel";

import { z } from "zod";
import { RegisterSchema } from "./RegisterSchema";

type Inputs = z.infer<typeof RegisterSchema>;

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const newUser = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      dob: data.dob,
      terms: data.terms,
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("isLoggedIn", "true");

    console.log(users);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl rounded border-0 bg-white p-6 shadow-2xl">
      <h2 className="mb-6 bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-center text-4xl font-extrabold text-transparent">
        User Register
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName?.message}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="name@gmail.com"
          register={register}
          error={errors.email?.message}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Must be at least 8 characters"
          register={register}
          error={errors.password?.message}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Re-enter password"
          register={register}
          error={errors.confirmPassword?.message}
        />
        <InputField
          label="Date of Birth"
          name="dob"
          type="date"
          register={register}
          error={errors.dob?.message}
        />
        <CheckboxWithLabel
          name="terms"
          register={register}
          error={errors.terms?.message}
          label=" I agree to the"
          link="/terms"
          linkText="Terms & Conditions"
        />
        <Button text="Sign up" />

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
