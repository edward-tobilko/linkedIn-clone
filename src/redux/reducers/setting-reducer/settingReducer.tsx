import {
  SettingThunkType,
  SettingStateTypes,
  SetAddNumberACType,
  SettingActionsTypes,
  SetRemoveTodoACType,
} from "./settingReducerTypes";

export const ADD_TODO = "ADD-TODO";
export const REMOVE_TODO = "REMOVE-TODO";

const initialState: SettingStateTypes = {
  todos: [],
};

const settingReducer = (
  state = initialState,
  action: SettingActionsTypes,
): SettingStateTypes => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().getTime(),
            ...action.payload,
          },
        ],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    default:
      return state;
  }
};

const setAddTodoAC = (text: string): SetAddNumberACType => {
  return {
    type: ADD_TODO,
    payload: { text },
  };
};

const setRemoveTodoAC = (id: number): SetRemoveTodoACType => {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
};

export const addTodoTC = (text: string): SettingThunkType => {
  return (dispatch) => {
    dispatch(setAddTodoAC(text));
  };
};

export const removeTodoTC = (id: number): SettingThunkType => {
  return (dispatch) => {
    dispatch(setRemoveTodoAC(id));
  };
};

export default settingReducer;
