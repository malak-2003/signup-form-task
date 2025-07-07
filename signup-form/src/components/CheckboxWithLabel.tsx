// src/components/CheckboxWithLabel.tsx
import React from "react";

type Props = {
  register: any;
  name: string;
  error?: string;
};

export default function CheckboxWithLabel({ register, name, error }: Props) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <input
          {...register(name)}
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
        </label>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
