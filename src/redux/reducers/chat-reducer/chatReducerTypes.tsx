import { ThunkAction } from "redux-thunk";

import { MessagesPropsType } from "../../../api/apiTypes";

import { RootState, TypedActions } from "../../store";

import { actions } from "./chatReducer";

type ChatActionsTypes = TypedActions<typeof actions>;

type ChatThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // extra arguments
  ChatActionsTypes
>;

type StatusType = "pending" | "ready";

type MessagesWithId = MessagesPropsType & { id: string };

export { ChatActionsTypes, ChatThunkType, StatusType, MessagesWithId };
