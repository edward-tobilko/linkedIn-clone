import { ThunkAction } from "redux-thunk";

import { RootState, TypedActions } from "../../store";
import { actions } from "./authReducer";

// Type for actions
type AuthActionsTypes = TypedActions<typeof actions>;

// Type for thunks
type AuthThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // extra arguments
  AuthActionsTypes
>;

export { AuthActionsTypes, AuthThunkType };
