import React from "react";

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register: any;
  name: string;
};

export default function InputField({
  label,
  type,
  placeholder = "",
  error,
  register,
  name,
}: Props) {
  return (
    <div className="mb-4">
      <label className={`block font-medium ${error ? "text-red-500" : ""}`}>
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded border p-2 pr-10 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
