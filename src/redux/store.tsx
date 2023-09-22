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
import settingReducer from "./reducers/setting-reducer/settingReducer";

// Reducer
const rootReducer = combineReducers({
  profilePage: profileReducer,
  socialPage: socialReducer,
  authorization: authReducer,
  rootApp: rootAppReducer,
  settingPage: settingReducer,
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

//? Отримуємо типи для state, dispatch thunk та вказуємо їх в кастомних хуках та редюсорах для більш зручної розробки
export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
// export type TypedThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   AnyAction
// >;

// declare global {
//   interface Window {
//     store: any;
//   }
// }

// @ts-ignore
window.store = store;

export default store;
