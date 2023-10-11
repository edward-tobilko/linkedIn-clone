import {
  INITIALIZED_SUCCESS_ROOT_APP,
  SET_SERVER_ERROR,
} from "../../ducks/typesName";

import { setIsAuthTC } from "../auth-reducer/authReducer";

import {
  InitialStateType,
  RootAppActionsTypes,
  RootAppThunkType,
  SetInitializedSuccessRootAppACType,
  SetServerErrorACType,
} from "./rootAppReducerTypes";

const initialState: InitialStateType = {
  initialized: false,
  serverError: null,
};

const rootAppReducer = (
  state = initialState,
  action: RootAppActionsTypes,
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS_ROOT_APP:
      return { ...state, initialized: true };

    case SET_SERVER_ERROR:
      return { ...state, serverError: action.serverError };

    default:
      return state;
  }
};

export default rootAppReducer;

// ACs
export const setInitializedSuccessRootAppAC =
  (): SetInitializedSuccessRootAppACType => {
    return {
      type: INITIALIZED_SUCCESS_ROOT_APP,
    };
  };

export const setServerErrorAC = (serverError: Object): SetServerErrorACType => {
  return {
    type: SET_SERVER_ERROR,
    serverError,
  };
};

// TCs
export const setInitializedSuccessRootAppTC =
  (): RootAppThunkType => async (dispatch) => {
    const dispatchResult = dispatch(setIsAuthTC()); //? dispatch вертає результат санки: promise (в санкі setIsAuthTC ми вертаємо authorizationMe (return authAPI.authorizationMe))

    await Promise.all([dispatchResult]).then(() => {
      dispatch(setInitializedSuccessRootAppAC());
    });
  };

export const setServerErrorTC =
  (serverError: Object): RootAppThunkType =>
  (dispatch) => {
    dispatch(setServerErrorAC(serverError));
  };
