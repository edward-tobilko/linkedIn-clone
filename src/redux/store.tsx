import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  AnyAction,
} from "redux";
import thunkMiddleware, { ThunkDispatch, ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import profileReducer from "./reducers/profile-reducer/profileReducer";
import socialReducer from "./reducers/social-reducer/socialReducer";
import authReducer from "./reducers/auth-reducer/authReducer";
import rootAppReducer from "./reducers/root-app-reducer/rootAppReducer";
import settingReducer from "./reducers/setting-reducer/settingReducer";

declare global {
  interface Window {
    store: any;
  }
}

// Reducer
const rootReducer = combineReducers({
  profilePage: profileReducer,
  socialPage: socialReducer,
  authorization: authReducer,
  rootApp: rootAppReducer,
  settingPage: settingReducer,
});

// Store
//? Підключаємо devtools розширення для Chrome browser (для роботи Redux)
// const composeEnhancers =
//   (typeof window !== undefined &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

//? Отримуємо тип редюсора та за допомогою RootState ми можемо створити кастомний хук useTypeSelector
export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

window.store = store;

export default store;
