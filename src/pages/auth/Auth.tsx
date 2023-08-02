import { FC, MouseEvent } from "react";

import { useMyContext } from "../../context/Context";

import { AuthStyle } from "./authStyle";

import { AuthForm } from "../../components/forms/auth-form/AuthForm";

const Auth: FC = () => {
  const props = useMyContext();

  const login = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    props?.setIsAuth(true);

    localStorage.setItem("isAuth", "true");
  };

  return (
    <AuthStyle>
      <AuthForm login={login} />
    </AuthStyle>
  );
};

export default Auth;
