import { Dispatch } from "redux";

import { MessagesPropsType } from "../../../api/apiTypes";
import {
  ChatActionsTypes,
  ChatThunkType,
  StatusType,
} from "./chatReducerTypes";

import { chatAPI } from "../../../api/API";

const initialState = {
  messages: [] as MessagesPropsType[],
  status: "pending" as StatusType, //? Стан для WebSocket каналу, щоб на початку підгрузився канал, а потім компонента, тобто в стані "pending" кнопка буде "disable".
};

export const chatReducer = (state = initialState, action: ChatActionsTypes) => {
  switch (action.type) {
    case "SET-MESSAGES":
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      };

    case "SET-STATUS":
      return {
        ...state,
        status: action.payload.status,
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
    } as const;
  },

  setStatusAC: (status: StatusType) => {
    return {
      type: "SET-STATUS",
      payload: { status },
    } as const;
  },
};

//? HOCs для отримання dispatch
let _newMessageHandler: ((messages: MessagesPropsType[]) => void) | null = null; //? "_" - означає приватність, тобто цю перемінну не чіпати, а викор. її тільки в HOC!
let _newStatusHandler: ((status: StatusType) => void) | null = null;

const newMessagesHandlerHOC = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.setMessagesAC(messages));
    };
  }

  return _newMessageHandler;
};

const newStatusHandlerHOC = (dispatch: Dispatch) => {
  if (_newStatusHandler === null) {
    _newStatusHandler = (status) => {
      dispatch(actions.setStatusAC(status));
    };
  }

  return _newStatusHandler;
};

export const setMessagesTC = (): ChatThunkType => {
  return async (dispatch) => {
    chatAPI.start();
    chatAPI.fetchSubscribeMessages(newMessagesHandlerHOC(dispatch));
    chatAPI.fetchStatus(newStatusHandlerHOC(dispatch));
  };
};

export const removeMessagesTC = (): ChatThunkType => {
  return async (dispatch) => {
    chatAPI.unsubscribeMessages(newMessagesHandlerHOC(dispatch));
    chatAPI.fetchStatus(newStatusHandlerHOC(dispatch));
    chatAPI.stop();
  };
};

export const addNewMessageTC = (message: string): ChatThunkType => {
  return async (dispatch) => {
    chatAPI.addNewMessage(message);
  };
};
