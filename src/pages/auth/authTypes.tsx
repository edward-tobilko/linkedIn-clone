type AuthFormType = {
  email: string;
  password: string;
  rememberMe: any;
  captcha: any;
};

type AuthContainerProps = {
  isAuth: boolean;
  captchaUrl: string;
};

export { AuthFormType, AuthContainerProps };
