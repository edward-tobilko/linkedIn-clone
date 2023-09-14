import { FC, useState } from "react";

import LoginBtn from "../../UI/btns/login-btn/LoginBtn";

import { AuthFormStyle } from "./authFormStyle";

import { AuthFormProps } from "./authFormTypes";

import AuthFormField from "./AuthFormField";
import Captcha from "./Captcha";

const AuthForm: FC<AuthFormProps> = ({
  authForm,
  onSubmit,
  captchaUrl,
  authLoginBtnLoading,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <AuthFormStyle onSubmit={authForm.handleSubmit(onSubmit)}>
      <div className="logo">
        <i className="bx bxs-id-card"></i>
      </div>

      <div className="container">
        <h1 className="container-title">Authorization</h1>
        <AuthFormField
          type="email"
          name="email"
          label="Email"
          className="container-field"
        />

        <div className="show__psw">
          <AuthFormField
            type={isPasswordVisible ? "text" : "password"}
            className="container-field"
            name="password"
            label="Password"
          />

          <label className="show__psw-label">
            <input
              type="checkbox"
              checked={isPasswordVisible}
              onChange={() => setIsPasswordVisible(!isPasswordVisible)}
              className="show__psw-label-check"
            />

            <p className="hover__text">Show password</p>
          </label>
        </div>

        <div className="psw">
          Forgot
          <a href="https://www.google.com/" target="blank">
            password?
          </a>
        </div>

        <div className="container-field">
          <label htmlFor="rememberMe"> Remember me </label>
          <input
            type="checkbox"
            name="rememberMe"
            className="checkbox"
            {...authForm.register("rememberMe")}
          />

          {authForm.formState.errors.rememberMe && (
            <p className="checkbox__error">
              {authForm.formState.errors["rememberMe"]?.message}
            </p>
          )}

          <LoginBtn authLoginBtnLoading={authLoginBtnLoading}>Log In</LoginBtn>
        </div>
      </div>

      <Captcha captchaUrl={captchaUrl} />
    </AuthFormStyle>
  );
};

export default AuthForm;
