type AuthFormType = {
  email: string;
  password: string;
  rememberMe: boolean | undefined;
  captcha: string | undefined;
};

type AuthContainerProps = {
  isAuth: boolean;
  authLoginBtnLoading: boolean;
  captchaUrl: string;
};

// Type for connect
type MapDispatchToPropsType = {
  setLoginTC: (
    email: string,
    password: string,
    rememberMe: boolean | undefined,
    captcha: string | undefined,
  ) => void;
};

type OwnPropsType = {};

export {
  AuthFormType,
  AuthContainerProps,
  OwnPropsType,
  MapDispatchToPropsType,
};
