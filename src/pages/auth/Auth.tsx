import { FC } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { AuthStyle } from "./authStyle";

import AuthForm from "../../components/forms/auth-form/AuthForm";
import { authSchema } from "../../utils/validators/authFormValidator";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { setLoginTC } from "../../redux/reducers/authReducer";

export type AuthFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: boolean;
};

type AuthContainerProps = {
  isAuth: boolean;
};

const mapStateToProps = (state: any) => ({
  isAuth: state.authorization.isAuth,
});

const AuthContainer = connect(mapStateToProps, {
  // CT для логірування користувача
  setLoginTC,
});

const Auth: FC<AuthContainerProps> = ({ isAuth }) => {
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
    dispatch(setLoginTC(email, password, rememberMe, captcha));

    console.log(email, password, rememberMe, captcha);
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
export default AuthContainer(Auth);
