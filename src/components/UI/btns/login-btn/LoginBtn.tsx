import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { LoginBtnLoadingStyle, LoginBtnStyle } from "./loginBtnStyle";

import { LoginBtnProps } from "./loginBtnTypes";

const LoginBtn: FC<LoginBtnProps> = ({ children, authLoginBtnLoading }) => {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <LoginBtnStyle type="submit" disabled={!isValid || authLoginBtnLoading}>
      {authLoginBtnLoading ? (
        <LoginBtnLoadingStyle>
          <i className="bx bx-loader"></i>
        </LoginBtnLoadingStyle>
      ) : (
        children
      )}
    </LoginBtnStyle>
  );
};

export default LoginBtn;
