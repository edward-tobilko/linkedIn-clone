import { ThunkAction } from "redux-thunk";

import {
  INITIALIZED_SUCCESS_ROOT_APP,
  SET_SERVER_ERROR,
} from "../../ducks/typesName";

import { RootState } from "../../store";

type InitialStateType = {
  initialized: boolean;
  serverError: Object | null;
};

type SetInitializedSuccessRootAppACType = {
  type: typeof INITIALIZED_SUCCESS_ROOT_APP; // such as "rootApp/duck/INITIALIZED-SUCCESS-ROOT-APP"
};

type SetServerErrorACType = {
  type: typeof SET_SERVER_ERROR;
  serverError: Object | null;
};

type RootAppActionsTypes =
  | SetInitializedSuccessRootAppACType
  | SetServerErrorACType;

type RootAppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // extra arguments
  RootAppActionsTypes
>;

export {
  InitialStateType,
  SetInitializedSuccessRootAppACType,
  SetServerErrorACType,
  RootAppActionsTypes,
  RootAppThunkType,
};
