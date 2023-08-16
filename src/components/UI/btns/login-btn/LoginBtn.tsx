import { FC, ReactNode } from "react";

import { LoginBtnStyle } from "./loginBtnStyle";

type LoginBtnProps = {
  children: ReactNode;
  authForm: any;
};

export const LoginBtn: FC<LoginBtnProps> = ({ children, authForm }) => {
  return (
    <LoginBtnStyle type="submit" disabled={!authForm.formState.isValid}>
      {children}
    </LoginBtnStyle>
  );
};
