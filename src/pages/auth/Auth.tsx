import { FC, MouseEvent } from "react";

import { AuthStyle } from "./authStyle";

import { AuthForm } from "../../components/forms/auth-form/AuthForm";

const Auth: FC = () => {
  const logIn = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setIsAuthAC(true);

    localStorage.setItem("isAuth", "true");
  };

  return (
    <AuthStyle>
      <AuthForm logIn={logIn} />
    </AuthStyle>
  );
};

export default Auth;
