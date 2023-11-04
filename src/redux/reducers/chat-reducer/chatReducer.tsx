import { Dispatch } from "redux";
import { v1 } from "uuid";

import { MessagesPropsType } from "../../../api/apiTypes";
import {
  ChatActionsTypes,
  ChatThunkType,
  MessagesWithId,
  StatusType,
} from "./chatReducerTypes";

import { chatAPI } from "../../../api/API";
import { SocialUserType } from "../social-reducer/socialReducerTypes";

const initialState = {
  messages: [] as MessagesWithId[],
  status: "pending" as StatusType, //? Стан для WebSocket каналу, щоб на початку підгрузився канал, а потім компонента, тобто в стані "pending" кнопка буде "disable".
  file: null as File | null,
  chatUsers: [] as SocialUserType[],
};

export const chatReducer = (state = initialState, action: ChatActionsTypes) => {
  switch (action.type) {
    case "SET_MESSAGES":
      //? Проходимо по повідомленнях та додаємо кожному смс "id". Це потрібно, щоб при зміщенні повідомлень в масиві не дублювався "index", так як в массиві у нас буде max = 100 повідомлень, тобто коли буде 100 повідомлень - старі (верхні) будут видалятися, а нові (нижні) додаватися і так у нас буде в кожному повідомленні унікальний "id".
      const messagesWithIdAndDate = action.payload.messages.map((msg) => {
        const uniqueId = v1();

        return {
          ...msg,
          id: uniqueId,
        };
      });

      const messagesCompose = [...state.messages, ...messagesWithIdAndDate];

      const last100messages = messagesCompose.filter(
        (msg, index, arr) => index >= arr.length - 100,
      );

      return {
        ...state,
        messages: last100messages,
      };

    case "SET_STATUS":
      return {
        ...state,
        status: action.payload.status,
      };

    case "SET_FILE":
      return {
        ...state,
        file: action.payload.file,
      };

    case "SET_CHATUSERS":
      return {
        ...state,
        chatUsers: action.payload.chatUsers,
      };

    default:
      return state;
  }
};

export const actions = {
  setMessagesAC: (messages: MessagesPropsType[]) => {
    return {
      type: "SET_MESSAGES",
      payload: { messages },
    } as const;
  },

  setStatusAC: (status: StatusType) => {
    return {
      type: "SET_STATUS",
      payload: { status },
    } as const;
  },

  setFileAC: (file: File | null) => {
    return {
      type: "SET_FILE",
      payload: { file },
    } as const;
  },

  setChatUsersAC: (chatUsers: SocialUserType[]) => {
    return {
      type: "SET_CHATUSERS",
      payload: { chatUsers },
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

export const addNewFileTC = (file: File | null): ChatThunkType => {
  return async (dispatch) => {
    dispatch(actions.setFileAC(file));
  };
};

export const getChatUsersTC = (): ChatThunkType => {
  return (dispatch) => {
    chatAPI
      .fetchChatUsers()
      .then((data) => dispatch(actions.setChatUsersAC(data.items)));
  };
};
