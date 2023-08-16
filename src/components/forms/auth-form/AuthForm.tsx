import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { LoginBtn } from "../../UI/btns/login-btn/LoginBtn";

import { AuthFormStyle } from "./authFormStyle";

import { setLoginTC } from "../../../redux/reducers/authReducer";

type AuthFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: boolean;
};

// const mapStateToProps = (state: any) => ({
//   email: state.authorization.email,
//   password: state.authorization.password,
//   rememberMe: state.authorization.rememberMe,
//   captcha: state.authorization.captcha,
// });

const AuthFormContainer = connect(
  ({ email, password, rememberMe, captcha }) => ({
    email,
    password,
    rememberMe,
    captcha,
  }),
  {
    // CT для логірування користувача
    setLoginTC,
  },
);

const AuthForm: FC = () => {
  const dispatch: any = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormType>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
      captcha: false,
    },
  });

  // Submit your data into Redux store
  const onSubmit: SubmitHandler<AuthFormType> = ({
    email,
    password,
    rememberMe,
    captcha,
  }) => {
    dispatch(setLoginTC(email, password, rememberMe, captcha));

    localStorage.setItem("isAuth", "true");

    console.log(email, password, rememberMe, captcha);
  };

  return (
    <AuthFormStyle onSubmit={handleSubmit(onSubmit)}>
      <div className="logo">
        <i className="bx bxs-id-card"></i>
      </div>

      <div className="container">
        <h1 className="container-title">Authorization</h1>
        <div className="container-field">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="container-field-input"
            {...register("email", {
              required: "Email Address is required",
              maxLength: 30,
              minLength: 7,
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />

          {errors.email && (
            <p role="alert" className="email__error">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="container-field">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="container-field-input"
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
          />

          {errors.password && (
            <p role="alert" className="password__error">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="container-field">
          <span className="psw">
            Forgot
            <a href="https://www.google.com/" target="blank">
              password?
            </a>
          </span>
        </div>
        <div className="container-field">
          <div className="container-field-checkbox">
            <label>Remember me</label>
            <input
              type="checkbox"
              {...register("rememberMe", { required: true })}
              aria-invalid={errors.rememberMe ? "true" : "false"}
            />

            {errors.rememberMe?.type === "required" && (
              <p role="alert" className="checkbox__error">
                Authorization is required!
              </p>
            )}
          </div>

          <LoginBtn type="submit">Log In</LoginBtn>
        </div>
      </div>
    </AuthFormStyle>
  );
};

// Connect your component with redux
export default AuthFormContainer(AuthForm);
