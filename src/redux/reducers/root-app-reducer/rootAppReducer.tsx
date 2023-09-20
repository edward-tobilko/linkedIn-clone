import rootAppTypeNames from "../../duck/typesName";

import { RootDispatch } from "../../store";

import { setIsAuthTC } from "../auth-reducer/authReducer";

import {
  InitialStateType,
  SetInitializedSuccessRootAppACType,
  SetServerErrorACType,
} from "./rootAppReducerTypes";

const initialState: InitialStateType = {
  initialized: false,
  serverError: null,
};

const rootAppReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case rootAppTypeNames.INITIALIZED_SUCCESS_ROOT_APP:
      return { ...state, initialized: true };

    case rootAppTypeNames.SET_SERVER_ERROR:
      return { ...state, serverError: action.serverError };

    default:
      return state;
  }
};

export default rootAppReducer;

export const setInitializedSuccessRootAppAC =
  (): SetInitializedSuccessRootAppACType => {
    return {
      type: rootAppTypeNames.INITIALIZED_SUCCESS_ROOT_APP,
    };
  };

export const setServerErrorAC = (serverError: Object): SetServerErrorACType => {
  return {
    type: rootAppTypeNames.SET_SERVER_ERROR,
    serverError,
  };
};

export const setInitializedSuccessRootAppTC = () => (dispatch: any) => {
  const dispatchResult = dispatch(setIsAuthTC()); //? dispatch вертає результат санки: promise (в санкі setIsAuthTC ми вертаємо authorizationMe (return authAPI.authorizationMe))

  Promise.all([dispatchResult]).then(() => {
    dispatch(setInitializedSuccessRootAppAC());
  });
};

export const setServerErrorTC = (serverError: Object) => (dispatch: any) => {
  dispatch(setServerErrorAC(serverError));
};
