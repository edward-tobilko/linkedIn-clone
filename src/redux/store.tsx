import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunkMiddleware from "redux-thunk";

import profileReducer from "./reducers/profile-reducer/profileReducer";
import socialReducer from "./reducers/social-reducer/socialReducer";
import authReducer from "./reducers/auth-reducer/authReducer";
import rootAppReducer from "./reducers/root-app-reducer/rootAppReducer";

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
});

// отримуємо тип редюсора та за допомогою RootState ми можемо створити кастомний хук useTypeSelector
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

// Store
// Підключаємо devtools розширення для Chrome browser (для роботи з Redux)
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

window.store = store;

export default store;
