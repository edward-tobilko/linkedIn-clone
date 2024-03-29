import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  AnyAction,
} from "redux";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension"; //? Підключаємо devtools розширення для Chrome browser (для роботи з Redux)

import profileReducer from "./reducers/profile-reducer/profileReducer";
import socialReducer from "./reducers/social-reducer/socialReducer";
import authReducer from "./reducers/auth-reducer/authReducer";
import rootAppReducer from "./reducers/root-app-reducer/rootAppReducer";
import { chatReducer } from "./reducers/chat-reducer/chatReducer";

// Reducer
const rootReducer = combineReducers({
  profilePage: profileReducer,
  socialPage: socialReducer,
  authorization: authReducer,
  rootApp: rootAppReducer,
  chatPage: chatReducer,
});

//? Підключаємо devtools розширення для Chrome browser (для роботи з Redux)
// const composeEnhancers =
//   (typeof window !== undefined &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

//? Отримуємо загальні типи для state, action creators, dispatch and thunks, та вказуємо їх в кастомних хуках та редюсорах для більш зручної розробки
export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export type TypedActions<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never; //? [key: string] - ключ (назва) AC, наприклад: setIsAuthAC. За допомогою infer ми виводимо значення U - наша ф-я цього ж AC: (id, email) => { return {type, data} }.

// declare global {
//   interface Window {
//     store: any;
//   }
// }

// @ts-ignore
window.store = store;

export default store;
