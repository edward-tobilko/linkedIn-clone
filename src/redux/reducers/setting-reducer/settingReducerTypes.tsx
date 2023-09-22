import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { RootState } from "../../store";
import { ADD_TODO, REMOVE_TODO } from "./settingReducer";

// Type for initial state
export type TodoItemType = {
  id: number;
  text: string;
};
export type SettingStateTypes = {
  todos: Array<TodoItemType>;
};

// Types for action creators
export type SetAddNumberACType = {
  type: typeof ADD_TODO;
  payload: {
    text: string;
  };
};

export type SetRemoveTodoACType = {
  type: typeof REMOVE_TODO;
  payload: {
    id: number;
  };
};

// Type for actions
export type SettingActionsTypes = SetAddNumberACType | SetRemoveTodoACType;

// Type for thunks
export type SettingThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
