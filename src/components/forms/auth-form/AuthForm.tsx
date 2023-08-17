import { FC, useState } from "react";

import { LoginBtn } from "../../UI/btns/login-btn/LoginBtn";

import { AuthFormStyle } from "./authFormStyle";

import AuthFormField from "./AuthFormField";

const AuthForm: FC<any> = ({ authForm, onSubmit }) => {
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
          <AuthFormField
            type="checkbox"
            name="rememberMe"
            label="Remember me"
            className="checkbox"
          />
          <LoginBtn authForm={authForm}>Log In</LoginBtn>
        </div>
      </div>
    </AuthFormStyle>
  );
};

export default AuthForm;
