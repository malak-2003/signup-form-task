import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  heading?: string;
  subheading1?: string;
  subheading2?: string;
};

const RegisterLayout = ({
  children,
  heading,
  subheading1,
  subheading2,
}: Props) => {
  return (
    <div className="grid grid-cols-2">
      {/* Right Side */}
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-teal-400">
        <h1 className="text-8xl font-bold text-white">{heading}</h1>
        <p className="p-7 text-center text-xl text-white">{subheading1}</p>
        <p className="text-center text-xl text-white">{subheading2}</p>
      </div>

      {/* Left Side */}
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default RegisterLayout;
