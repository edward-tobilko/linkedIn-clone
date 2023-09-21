type AuthFormType = {
  email: string;
  password: string;
  rememberMe: any;
  captcha: any;
};

type AuthContainerProps = {
  isAuth: boolean;
  authLoginBtnLoading: boolean;
  captchaUrl: string;
};

type MapDispatchToPropsType = {
  setLoginTC: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
  ) => void;
};

type OwnPropsType = {};

export {
  AuthFormType,
  AuthContainerProps,
  OwnPropsType,
  MapDispatchToPropsType,
};
