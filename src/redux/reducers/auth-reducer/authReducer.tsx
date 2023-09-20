import { authAPI } from "../../../api/API";

import authTypeNames from "../../duck/typesName";

import {
  SetAuthLoginBtnLoadingType,
  SetCaptchaACType,
  SetIsAuthACType,
} from "./authReducerTypes";

import { RootDispatch } from "../../store";

type InitialStateType = typeof initialState; //? Так ми можемо переіспользувать тип

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: "" as string,
  authLoginBtnLoading: false as boolean,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    //? Встановлюємо параметри (id, email, login, ) авторизації
    case authTypeNames.SET_IS_AUTH:
      return {
        ...state,
        ...action.data,
      };

    case authTypeNames.CAPTCHA:
      return { ...state, ...action.payload };

    case "AUTH-LOGIN-BTN-LOADING":
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
    type: authTypeNames.SET_IS_AUTH,
    data: { id, email, login, isAuth },
  };
};

export const setCaptchaAC = (captchaUrl: string): SetCaptchaACType => {
  return {
    type: authTypeNames.CAPTCHA,
    payload: { captchaUrl },
  };
};

export const setAuthLoginBtnLoading = (
  authLoginBtnLoading: boolean,
): SetAuthLoginBtnLoadingType => {
  return {
    type: "AUTH-LOGIN-BTN-LOADING",
    authLoginBtnLoading,
  };
};

// TC: Thunk creator - anonym function and HOC: setIsAuthTC

// Санка (thunk creator) для авторизації
export const setIsAuthTC = () => {
  return (dispatch: RootDispatch) => {
    return authAPI
      .authorizationMe()
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login, isAuth } = response.data.data;

          dispatch(setIsAuthAC(id, email, login, (isAuth = true)));
        }
      })
      .catch((error) => {
        console.error("Authorization failed:", error);
      });
  };
};

// CT для логірування користувача
export const setLoginTC = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string,
) => {
  return (dispatch: any) => {
    dispatch(setAuthLoginBtnLoading(true));

    authAPI
      .getLoginApi(email, password, (rememberMe = false), captcha)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setIsAuthTC());
        } else if (response.data.resultCode === 10) {
          dispatch(setCaptchaTC());
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      })
      .finally(() => {
        dispatch(setAuthLoginBtnLoading(false));
      });
  };
};

// CT для вилогірування користувача
export const setLogoutTC = () => {
  return (dispatch: any) => {
    authAPI.logoutApi().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setIsAuthAC(null, null, null, false));
      }
    });
  };
};

// TC для капчі
export const setCaptchaTC = () => (dispatch: any) => {
  return authAPI.getCaptchaUrl().then((response) => {
    dispatch(setCaptchaAC(response.data.url));
  });
};
