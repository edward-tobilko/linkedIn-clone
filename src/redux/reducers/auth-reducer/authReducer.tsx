import { authAPI } from "../../../api/API";

import { ResultCodesEnum } from "../../../api/apiTypes";
import { AuthActionsTypes, AuthThunkType } from "./authReducerTypes";

type InitialStateType = typeof initialState; //? Так ми можемо переіспользувать тип

export const initialState = {
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
    case "SET-IS-AUTH":
      return {
        ...state,
        ...action.data,
      };

    case "CAPTCHA":
      return { ...state, ...action.payload };

    case "AUTH-LOGIN-BTN-LOADING":
      return { ...state, authLoginBtnLoading: action.authLoginBtnLoading };

    default:
      return state;
  }
};

export default authReducer;

// ACs
export const actions = {
  setIsAuthAC: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
  ) => {
    return {
      type: "SET-IS-AUTH",
      data: { id, email, login, isAuth },
    } as const;
  },

  setCaptchaAC: (captchaUrl: string) => {
    return {
      type: "CAPTCHA",
      payload: { captchaUrl },
    } as const;
  },

  setAuthLoginBtnLoadingAC: (authLoginBtnLoading: boolean) => {
    return {
      type: "AUTH-LOGIN-BTN-LOADING",
      authLoginBtnLoading,
    } as const;
  },
};

// TC: Thunk creator - anonym function and HOC: setIsAuthTC
//? Санка (thunk creator) для авторизації
export const setIsAuthTC = (): AuthThunkType => {
  return async (dispatch) => {
    try {
      const response = await authAPI.authorizationMe();

      if (response.data.resultCode === ResultCodesEnum.ResultCodeSuccess) {
        let { id, email, login } = response.data.data;

        dispatch(actions.setIsAuthAC(id, email, login, true));
      }
    } catch (error) {
      console.log("Authorization failed:", error);
    }
  };
};

//? TC для логірування користувача
export const setLoginTC = (
  email: string,
  password: string,
  rememberMe: boolean | undefined,
  captcha: string | undefined,
): AuthThunkType => {
  return async (dispatch) => {
    dispatch(actions.setAuthLoginBtnLoadingAC(true));

    try {
      const response = await authAPI.getLoginApi(
        email,
        password,
        (rememberMe = false),
        captcha,
      );

      if (response.data.resultCode === ResultCodesEnum.ResultCodeSuccess) {
        dispatch(setIsAuthTC());
      } else if (response.data.resultCode === ResultCodesEnum.ResultCodeError) {
        dispatch(setCaptchaTC());
      } else {
        console.error("Login failed:", response.data.messages);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      dispatch(actions.setAuthLoginBtnLoadingAC(false));
    }
  };
};

//? TC для вилогірування користувача
export const setLogoutTC = (): AuthThunkType => {
  return async (dispatch) => {
    try {
      const response = await authAPI.logoutApi();

      if (response.data.resultCode === ResultCodesEnum.ResultCodeSuccess) {
        dispatch(actions.setIsAuthAC(null, null, null, false));
      } else {
        console.error("Logout failed:", response.data.messages);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
};

//? TC для капчі
export const setCaptchaTC = (): AuthThunkType => async (dispatch) => {
  try {
    const response = await authAPI.getCaptchaUrl();

    dispatch(actions.setCaptchaAC(response.data.url));
  } catch (error) {
    console.log("Captcha failed:", error);
  }
};
