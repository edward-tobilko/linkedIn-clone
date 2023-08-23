import { INITIALIZED_SUCCESS_ROOT_APP } from "../../utils/reducer-types-name/reducerTypesName";

import { RootDispatch } from "../store";
import { setIsAuthTC } from "./authReducer";

// Type
type InitialStateType = {
  initialized: boolean;
};

// State
const initialState: InitialStateType = {
  initialized: false,
};

// Reducer
const rootAppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS_ROOT_APP:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

export default rootAppReducer;

// ACs
export const setInitializedSuccessRootAppAC = () => {
  return {
    type: INITIALIZED_SUCCESS_ROOT_APP,
  };
};

// TCs
export const setInitializedSuccessRootAppTC =
  () => (dispatch: RootDispatch) => {
    const dispatchResult = dispatch(setIsAuthTC()); //? dispatch вертає результат санки (в санкі setIsAuthTC ми вертаємо authorizationMe (return authAPI.authorizationMe))

    console.log(dispatchResult); //? dispatchResult вертає promise

    Promise.all([dispatchResult]).then(() => {
      dispatch(setInitializedSuccessRootAppAC());
    });
  };
