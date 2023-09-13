import { authAPI } from "../../../api/API";

import authTypeNames from "../../duck/typesName";

import { RootDispatch } from "../../store";

import { InitialStateType } from "./authReducerTypes";

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: "",
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // Встановлюємо параметри (id, email, login, ) авторизації
    case authTypeNames.SET_IS_AUTH:
      return {
        ...state,
        ...action.data,
      };

    case authTypeNames.CAPTCHA:
      return { ...state, ...action.payload };

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
) => {
  return {
    type: authTypeNames.SET_IS_AUTH,
    data: { id, email, login, isAuth },
  };
};

export const setCaptchaAC = (captchaUrl: string) => {
  return {
    type: authTypeNames.CAPTCHA,
    payload: { captchaUrl },
  };
};

// TC: Thunk creator - anonym function and HOC: setIsAuthTC

// Санка (thunk creator) для авторизації
export const setIsAuthTC = () => {
  return (dispatch: RootDispatch) => {
    return authAPI.authorizationMe().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login, isAuth } = response.data.data;

        dispatch(setIsAuthAC(id, email, login, (isAuth = true)));
      }
    });
  };
};

// CT для логірування користувача
export const setLoginTC = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: boolean,
) => {
  return (dispatch: RootDispatch) => {
    authAPI
      .getLoginApi(email, password, (rememberMe = false), captcha)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setIsAuthTC());
        } else if (response.data.resultCode === 10) {
          dispatch(setCaptchaTC());
        }
      });
  };
};

// CT для вилогірування користувача
export const setLogoutTC = () => {
  return (dispatch: RootDispatch) => {
    authAPI.logoutApi().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setIsAuthAC(null, null, null, false));
      }
    });
  };
};

// TC для капчі
export const setCaptchaTC = () => (dispatch: RootDispatch) => {
  return authAPI.getCaptchaUrl().then((response) => {
    const captchaURL = response.data.url;

    dispatch(setCaptchaAC(captchaURL));
  });
};
