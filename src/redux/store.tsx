import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

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

//? Отримуємо тип редюсора та за допомогою RootState ми можемо створити кастомний хук useTypeSelector
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

// Store
//? Підключаємо devtools розширення для Chrome browser (для роботи Redux)
const composeEnhancers =
  (typeof window !== undefined &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

window.store = store;

export default store;
