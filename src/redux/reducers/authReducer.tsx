import { authAPI } from "../../api/API";

const SET_IS_AUTH = "SET-IS-AUTH";

type InitialStateType = {
  id: number;
  email: string;
  login: string;
  isAuth: boolean;
};

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    // Встановлюємо параметри (id, email, login, ) авторизації
    case SET_IS_AUTH:
      return {
        ...state,
        ...action.data,
        isAuth: true,
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

// TC: Thunk creator - anonym function and HOC - setIsAuthTC

// Санка (thunk creator) для авторизації
export const setIsAuthTC = () => {
  return (dispatch: any) => {
    authAPI.authorizationMe().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login, isAuth } = response.data.data;

        dispatch(setIsAuthAC(id, email, login, isAuth));
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
  return (dispatch: any) => {
    authAPI
      .getLoginApi(email, password, rememberMe, captcha)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setIsAuthTC);
        }
      });
  };
};

// CT для вилогірування користувача
export const setLogoutTC = () => {
  return (dispatch: any) => {
    authAPI.logoutApi().then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(setIsAuthAC(null, null, null, false));
      }
    });
  };
};
