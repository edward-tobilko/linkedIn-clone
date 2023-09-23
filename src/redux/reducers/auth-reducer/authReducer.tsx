import { authAPI } from "../../../api/API";

import { ResultCodesEnum } from "../../../api/apiTypes";
import {
  AuthActionsTypes,
  AuthThunkType,
  SetAuthLoginBtnLoadingACType,
  SetCaptchaACType,
  SetIsAuthACType,
} from "./authReducerTypes";

import {
  AUTH_LOGIN_BTN_LOADING,
  CAPTCHA,
  SET_IS_AUTH,
} from "../../duck/typesName";

type InitialStateType = typeof initialState; //? Так ми можемо переіспользувать тип

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: "" as string,
  authLoginBtnLoading: false as boolean,
};

const authReducer = (
  state = initialState,
  action: AuthActionsTypes,
): InitialStateType => {
  switch (action.type) {
    //? Встановлюємо параметри (id, email, login, ) авторизації
    case SET_IS_AUTH:
      return {
        ...state,
        ...action.data,
      };

    case CAPTCHA:
      return { ...state, ...action.payload };

    case AUTH_LOGIN_BTN_LOADING:
      return { ...state, authLoginBtnLoading: action.authLoginBtnLoading };

    default:
      return state;
  }
};

export default authReducer;

// ACs
export const setIsAuthAC = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): SetIsAuthACType => {
  return {
    type: SET_IS_AUTH,
    data: { id, email, login, isAuth },
  };
};

export const setCaptchaAC = (captchaUrl: string): SetCaptchaACType => {
  return {
    type: CAPTCHA,
    payload: { captchaUrl },
  };
};

export const setAuthLoginBtnLoadingAC = (
  authLoginBtnLoading: boolean,
): SetAuthLoginBtnLoadingACType => {
  return {
    type: AUTH_LOGIN_BTN_LOADING,
    authLoginBtnLoading,
  };
};

// TC: Thunk creator - anonym function and HOC: setIsAuthTC

// Санка (thunk creator) для авторизації
export const setIsAuthTC = (): AuthThunkType => {
  return (dispatch) => {
    return authAPI
      .authorizationMe()
      .then((response) => {
        if (response.data.resultCode === ResultCodesEnum.ResultCodeSuccess) {
          let { id, email, login } = response.data.data;

          dispatch(setIsAuthAC(id, email, login, true));
        }
      })
      .catch((error) => {
        console.error("Authorization failed:", error);
      });
  };
};

// TC для логірування користувача
export const setLoginTC = (
  email: string,
  password: string,
  rememberMe: boolean | undefined,
  captcha: string | undefined,
): AuthThunkType => {
  return (dispatch) => {
    dispatch(setAuthLoginBtnLoadingAC(true));

    authAPI
      .getLoginApi(email, password, (rememberMe = false), captcha)
      .then((response) => {
        if (response.data.resultCode === ResultCodesEnum.ResultCodeSuccess) {
          dispatch(setIsAuthTC());
        } else if (
          response.data.resultCode === ResultCodesEnum.ResultCodeError
        ) {
          dispatch(setCaptchaTC());
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      })
      .finally(() => {
        dispatch(setAuthLoginBtnLoadingAC(false));
      });
  };
};

// TC для вилогірування користувача
export const setLogoutTC = (): AuthThunkType => {
  return (dispatch) => {
    authAPI.logoutApi().then((response) => {
      if (response.data.resultCode === ResultCodesEnum.ResultCodeSuccess) {
        dispatch(setIsAuthAC(null, null, null, false));
      }
    });
  };
};

// TC для капчі
export const setCaptchaTC = (): AuthThunkType => (dispatch) => {
  return authAPI.getCaptchaUrl().then((response) => {
    dispatch(setCaptchaAC(response.data.url));
  });
};
