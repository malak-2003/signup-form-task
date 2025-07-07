import React from "react";

type ButtonProps = {
  text?: string;
};

const Button = ({ text = "Sign Up" }: ButtonProps) => {
  return (
    <button
      className="w-full rounded-2xl bg-indigo-500 p-2 text-white transition hover:bg-indigo-600"
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
