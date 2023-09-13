import { FC } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { AuthStyle } from "./authStyle";

import AuthForm from "../../components/forms/auth-form/AuthForm";

import { authSchema } from "../../utils/validators/authFormSchema";
import {
  captchaSelector,
  isAuthSelector,
} from "../../utils/selectors/authSelectors";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { setLoginTC } from "../../redux/reducers/auth-reducer/authReducer";
import { RootState } from "../../redux/store";

import { AuthContainerProps, AuthFormType } from "./authTypes";

const mapStateToProps = (state: RootState) => ({
  isAuth: isAuthSelector(state),
  captchaUrl: captchaSelector(state),
});

const AuthContainer: FC<AuthContainerProps> = ({ isAuth, captchaUrl }) => {
  const dispatch = useTypeDispatch();
  // const [captchaValue, setCaptchaValue] = useState("");
  // const [captchaState, setCaptchaState] = useState(false);

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
  const onSubmit: SubmitHandler<AuthFormType> = (data) => {
    if (
      data.email !== "1992eduard777clone@gmail.com" ||
      data.password !== "email4769PageClone"
    ) {
      authForm.setError("password", {
        type: "manual",
        message: "Incorrect Email or Password",
      });
    }

    const { email, password, rememberMe, captcha } = data;
    console.log(data);

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
        />
      </AuthStyle>
    </FormProvider>
  );
};

// Connect your component with redux
export default connect(mapStateToProps, {
  // CT для логірування користувача
  setLoginTC,
})(AuthContainer);
