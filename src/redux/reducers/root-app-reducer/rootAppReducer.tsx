import rootAppTypeNames from "../../duck/typesName";

import { RootDispatch } from "../../store";

import { setIsAuthTC } from "../auth-reducer/authReducer";

import { InitialStateType } from "./rootAppReducerTypes";

const initialState: InitialStateType = {
  initialized: false,
};

const rootAppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case rootAppTypeNames.INITIALIZED_SUCCESS_ROOT_APP:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

export default rootAppReducer;

export const setInitializedSuccessRootAppAC = () => {
  return {
    type: rootAppTypeNames.INITIALIZED_SUCCESS_ROOT_APP,
  };
};

export const setInitializedSuccessRootAppTC =
  () => (dispatch: RootDispatch) => {
    const dispatchResult = dispatch(setIsAuthTC()); //? dispatch вертає результат санки (в санкі setIsAuthTC ми вертаємо authorizationMe (return authAPI.authorizationMe))

    console.log(dispatchResult); //? dispatchResult вертає promise

    Promise.all([dispatchResult]).then(() => {
      dispatch(setInitializedSuccessRootAppAC());
    });
  };
