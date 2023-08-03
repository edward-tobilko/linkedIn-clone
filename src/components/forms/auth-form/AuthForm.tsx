import { FC } from "react";

import { LoginBtn } from "../../UI/btns/login-btn/LoginBtn";

import { AuthFormStyle } from "./authFormStyle";

export const AuthForm: FC<any> = ({ logIn }) => {
  return (
    <AuthFormStyle onSubmit={logIn}>
      <div className="logo">
        <i className="bx bxs-id-card"></i>
      </div>

      <div className="container">
        <h1 className="container-title">Authorization</h1>
        <div className="container-field">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            className="container-field-input"
            autoComplete="off"
          />
        </div>
        <div className="container-field">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            className="container-field-input"
            autoComplete="off"
          />
        </div>
        <div className="container-field">
          <span className="psw">
            Forgot <a href="https://www.google.com/">password?</a>
          </span>
        </div>
        <div className="container-field">
          <label>
            <input type="checkbox" name="remember" /> <span>Remember me</span>
          </label>
          <LoginBtn type="submit">Log In</LoginBtn>
        </div>
      </div>
    </AuthFormStyle>
  );
};
