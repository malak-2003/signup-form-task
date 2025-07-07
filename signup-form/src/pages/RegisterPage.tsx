import TwoColumnLayout from "../layouts/TwoColumnLayout";
import RegisterForm from "../forms/RegisterForm/RegisterForm";
const RegisterPage = () => {
  return (
    <TwoColumnLayout
      heading="Welcome!!"
      subheading1="You’re one step away from something awesome."
      subheading2="Register now to start your journey with us. It only takes a minute!"
    >
      <RegisterForm />
    </TwoColumnLayout>
  );
};
export default RegisterPage;
