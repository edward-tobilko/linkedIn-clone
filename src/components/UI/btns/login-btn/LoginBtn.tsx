import { FC } from "react";

import { LoginBtnStyle } from "./loginBtnStyle";

export const LoginBtn: FC<any> = ({ children }) => {
  return <LoginBtnStyle> {children} </LoginBtnStyle>;
};
