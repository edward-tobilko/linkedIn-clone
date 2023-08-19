import { FC } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { AuthStyle } from "./authStyle";

import AuthForm from "../../components/forms/auth-form/AuthForm";

import { authSchema } from "../../utils/validators/authFormValidator";
import { isAuthSelector } from "../../utils/selectors/authSelectors";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { setLoginTC } from "../../redux/reducers/authReducer";
import { RootState } from "../../redux/store";

export type AuthFormType = {
  email: string;
  password: string;
  rememberMe: any;
  captcha: boolean;
};

type AuthContainerProps = {
  isAuth: boolean;
};

const mapStateToProps = (state: RootState) => ({
  isAuth: isAuthSelector(state),
});

const AuthContainer: FC<AuthContainerProps> = ({ isAuth }) => {
  const dispatch = useTypeDispatch();

  const authForm = useForm<AuthFormType>({
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
  const onSubmit: SubmitHandler<AuthFormType> = ({
    email,
    password,
    rememberMe,
    captcha,
  }) => {
    if (
      email !== "1992eduard777clone@gmail.com" ||
      password !== "email4769PageClone"
    ) {
      authForm.setError("password", {
        type: "manual",
        message: "Incorrect Email or Password",
      });
    }

    dispatch(setLoginTC(email, password, rememberMe, captcha));
  };

  if (isAuth) return <Navigate to="/profile" />;

  return (
    <FormProvider {...authForm}>
      <AuthStyle>
        <AuthForm authForm={authForm} onSubmit={onSubmit} />
      </AuthStyle>
    </FormProvider>
  );
};

// Connect your component with redux
export default connect(mapStateToProps, {
  // CT для логірування користувача
  setLoginTC,
})(AuthContainer);
