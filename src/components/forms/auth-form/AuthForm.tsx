import { FC } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginBtn } from "../../UI/btns/login-btn/LoginBtn";
import { authSchema } from "../../../utils/validators/authFormValidator";

import { AuthFormStyle } from "./authFormStyle";

import { setLoginTC } from "../../../redux/reducers/authReducer";
import AuthFormField from "./AuthFormField";

export type AuthFormProps = {
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

  const authForm = useForm<AuthFormProps>({
    resolver: yupResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
      captcha: false,
    },
    mode: "onChange",
  });

  // Submit your data into Redux store
  const onSubmit: SubmitHandler<AuthFormProps> = ({
    email,
    password,
    rememberMe,
    captcha,
  }) => {
    dispatch(setLoginTC(email, password, rememberMe, captcha));

    console.log(email, password, rememberMe, captcha);

    localStorage.setItem("isAuth", "true");
  };

  return (
    <FormProvider {...authForm}>
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
          <AuthFormField
            type="password"
            name="password"
            label="Password"
            className="container-field"
          />

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
    </FormProvider>
  );
};

// Connect your component with redux
export default AuthFormContainer(AuthForm);
