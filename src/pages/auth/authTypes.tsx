type AuthFormType = {
  email: string;
  password: string;
  rememberMe: any;
  captcha: boolean;
};

type AuthContainerProps = {
  isAuth: boolean;
  captchaUrl: string;
};

export { AuthFormType, AuthContainerProps };
