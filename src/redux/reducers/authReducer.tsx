import { authAPI } from "../../api/API";

import { RootDispatch } from "../store";

const SET_IS_AUTH = "SET-IS-AUTH";
const SET_LOGIN_BLOCKED_BTN = "SET-LOGIN-BLOCKED-BTN";

type InitialStateType = {
  id: number | any;
  email: string | any;
  login: string | any;
  isAuth: boolean;
  loginBlockedBtn: any;
};

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  loginBlockedBtn: [],
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // Встановлюємо параметри (id, email, login, ) авторизації
    case SET_IS_AUTH:
      return {
        ...state,
        ...action.data,
      };

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
    type: SET_IS_AUTH,
    data: { id, email, login, isAuth },
  };
};

export const setLoginBlockedBtnAC = () => {
  return {
    type: SET_LOGIN_BLOCKED_BTN,
  };
};

// TC: Thunk creator - anonym function and HOC - setIsAuthTC

// Санка (thunk creator) для авторизації
export const setIsAuthTC = () => {
  return (dispatch: RootDispatch) => {
    authAPI.authorizationMe().then((response) => {
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
      .getLoginApi(email, password, rememberMe, captcha)
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
