import { ThunkAction } from "redux-thunk";

import { RootState, TypedActions } from "../../store";

import { actions } from "./chatReducer";

type ChatActionsTypes = TypedActions<typeof actions>;

type ChatThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // extra arguments
  ChatActionsTypes
>;

export { ChatActionsTypes, ChatThunkType };
