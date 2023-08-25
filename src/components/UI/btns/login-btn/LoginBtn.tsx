import { FC } from "react";

import { LoginBtnStyle } from "./loginBtnStyle";

import { LoginBtnProps } from "./loginBtnTypes";

const LoginBtn: FC<LoginBtnProps> = ({ children, authForm }) => {
  return (
    <LoginBtnStyle type="submit" disabled={!authForm.formState.isValid}>
      {children}
    </LoginBtnStyle>
  );
};

export default LoginBtn;
