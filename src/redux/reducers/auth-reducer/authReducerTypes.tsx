type InitialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  authLoginBtnLoading: boolean;
  captchaUrl: string;
};

export { InitialStateType };
