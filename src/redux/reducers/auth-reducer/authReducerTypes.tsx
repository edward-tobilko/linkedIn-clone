import { ThunkAction } from "redux-thunk";

import { RootState } from "../../store";

import {
  AUTH_LOGIN_BTN_LOADING,
  CAPTCHA,
  SET_IS_AUTH,
} from "../../duck/typesName";

// Types for action creators
type SetIsAuthACType = {
  type: typeof SET_IS_AUTH;
  data: {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
};

type SetCaptchaACType = {
  type: typeof CAPTCHA;
  payload: { captchaUrl: string };
};

type SetAuthLoginBtnLoadingACType = {
  type: typeof AUTH_LOGIN_BTN_LOADING;
  authLoginBtnLoading: boolean;
};

// Type for actions
type AuthActionsTypes =
  | SetIsAuthACType
  | SetCaptchaACType
  | SetAuthLoginBtnLoadingACType;

// Type for thunks
type AuthThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AuthActionsTypes
>;

export {
  SetIsAuthACType,
  SetCaptchaACType,
  SetAuthLoginBtnLoadingACType,
  AuthActionsTypes,
  AuthThunkType,
};
