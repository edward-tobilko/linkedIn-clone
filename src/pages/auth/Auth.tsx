import { FC } from "react";

import { AuthStyle } from "./authStyle";

import AuthForm from "../../components/forms/auth-form/AuthForm";

const Auth: FC<any> = () => {
  return (
    <AuthStyle>
      <AuthForm />
    </AuthStyle>
  );
};

export default Auth;
