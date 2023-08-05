import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunkMiddleware from "redux-thunk";

import profileReducer from "./reducers/profileReducer";
import socialReducer from "./reducers/socialReducer";
import authReducer from "./reducers/authReducer";

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
});

// отримуємо тип редюсора та за допомогою RootState ми можемо створити кастомний хук useTypeSelector
export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;

// Store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
