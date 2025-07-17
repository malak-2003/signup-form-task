import React from "react";

import TwoColumnLayout from "../layouts/TwoColumnLayout";
import LoginForm from "../forms/LoginForm/LoginForm";
const LoginPage = () => {
  console.log(localStorage.getItem("currentUser"));
  console.log(localStorage.getItem("isLoggedIn"));
  return (
    <TwoColumnLayout
      heading="Welcome Back!!"
      subheading1="We’ve missed you."
      subheading2="Log in to access your account and continue your journey."
    >
      <LoginForm />
    </TwoColumnLayout>
  );
};
export default LoginPage;
