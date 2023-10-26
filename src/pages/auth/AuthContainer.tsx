import { FC } from "react";
import { Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { AuthStyle } from "./authStyle";

import AuthForm from "../../components/forms/auth-form/AuthForm";

import { authSchema } from "../../utils/validators/authFormSchema";
import {
  captchaSelector,
  isAuthSelector,
} from "../../utils/selectors/authSelectors";
import { useTypeDispatch, useTypeSelector } from "../../hooks/useTypeSelector";

import { setLoginTC } from "../../redux/reducers/auth-reducer/authReducer";

import { AuthFormType } from "./authTypes";

const AuthContainer: FC = () => {
  const isAuth = useTypeSelector(isAuthSelector);
  const captchaUrl = useTypeSelector(captchaSelector);
  const authLoginBtnLoading = useTypeSelector(
    (state) => state.authorization.authLoginBtnLoading,
  );

  const dispatch = useTypeDispatch();

  const authForm = useForm<AuthFormType>({
    resolver: yupResolver(authSchema),

    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
      captcha: "",
    },
    mode: "onChange",
  });

  // Submit your data into Redux store
  const onSubmit: SubmitHandler<AuthFormType> = (data) => {
    if (
      data.email !== "eduardtobilko@gmail.com" ||
      data.password !== "testAccount"
    ) {
      authForm.setError("password", {
        type: "manual",
        message: "Incorrect Email or Password",
      });
    }

    const { email, password, rememberMe, captcha } = data;

    dispatch(setLoginTC(email, password, rememberMe, captcha));
  };

  if (isAuth) return <Navigate to="/profile" />;

  return (
    <FormProvider {...authForm}>
      <AuthStyle>
        <AuthForm
          authForm={authForm}
          onSubmit={onSubmit}
          captchaUrl={captchaUrl}
          authLoginBtnLoading={authLoginBtnLoading}
        />
      </AuthStyle>
    </FormProvider>
  );
};

export default AuthContainer;
