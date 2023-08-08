import { authAPI } from "../../api/API";

const SET_IS_AUTH = "SET-IS-AUTH";

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
  id: number,
  email: string,
  login: string,
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
    authAPI.authorizationMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login, isAuth } = data.data;

        dispatch(setIsAuthAC(id, email, login, isAuth));
      }
    });
  };
};
