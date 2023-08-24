import { FC } from "react";

import { LoginBtnStyle } from "./loginBtnStyle";

import { LoginBtnProps } from "./loginBtnTypes";

export const LoginBtn: FC<LoginBtnProps> = ({ children, authForm }) => {
  return (
    <LoginBtnStyle type="submit" disabled={!authForm.formState.isValid}>
      {children}
    </LoginBtnStyle>
  );
};
