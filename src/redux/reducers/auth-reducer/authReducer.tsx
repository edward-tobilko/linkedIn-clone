import { authAPI } from "../../../api/API";

import authTypeNames from "../../duck/typesName";

import { RootDispatch } from "../../store";

import { InitialStateType } from "./authReducerTypes";

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
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
  id: number | any,
  email: string | any,
  login: string | any,
  isAuth: boolean,
) => {
  return {
    type: authTypeNames.SET_IS_AUTH,
    data: { id, email, login, isAuth },
  };
};

export const setCaptchaAC = (captcha: any) => {
  return {
    type: authTypeNames.CAPTCHA,
    payload: { captcha },
  };
};

// TC: Thunk creator - anonym function and HOC - setIsAuthTC

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
  captcha: any,
) => {
  return (dispatch: RootDispatch) => {
    authAPI
      .getLoginApi(email, password, (rememberMe = false), captcha)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setIsAuthTC());
        }
      });
  };
};

// CT для вилогірування користувача
export const setLogoutTC = () => {
  return (dispatch: RootDispatch) => {
    authAPI.logoutApi().then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(setIsAuthAC(null, null, null, false));
      }
    });
  };
};

// // TC для капчі
// export const setCaptchaTC = () => (dispatch: RootDispatch) => {
//   return authAPI.getCaptchaUrl().then((response: any) => {
//     console.log(response.data.url);
//   });
// };
