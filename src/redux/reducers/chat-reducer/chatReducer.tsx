import { Dispatch } from "redux";

import { MessagesPropsType } from "../../../api/apiTypes";
import { ChatActionsTypes, ChatThunkType } from "./chatReducerTypes";

import { chatAPI } from "../../../api/API";

const initialState = {
  messages: [] as MessagesPropsType[],
};

export const chatReducer = (state = initialState, action: ChatActionsTypes) => {
  switch (action.type) {
    case "SET-MESSAGES":
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      };
    default:
      return state;
  }
};

export const actions = {
  setMessagesAC: (messages: MessagesPropsType[]) => {
    return {
      type: "SET-MESSAGES",
      payload: { messages },
    };
  },
};

//? HOC для отримання dispatch
let _newMessageHandler: ((messages: MessagesPropsType[]) => void) | null = null; //? "_" - значає приватність, тобто цю перемінну не чіпати, а викор. її в HOC!

const newMessagesHandlerHOC = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.setMessagesAC(messages));
    };
  }

  return _newMessageHandler;
};

export const setMessagesTC = (): ChatThunkType => {
  return (dispatch) => {
    chatAPI.start();
    chatAPI.fetchMessages(newMessagesHandlerHOC(dispatch));
  };
};

export const removeMessagesTC = (): ChatThunkType => {
  return (dispatch) => {
    chatAPI.deleteMessages(newMessagesHandlerHOC(dispatch));
    chatAPI.stop();
  };
};

export const addNewMessageTC = (message: string): ChatThunkType => {
  return (dispatch) => {
    chatAPI.addNewMessage(message);
  };
};
