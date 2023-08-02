import { combineReducers, legacy_createStore as createStore } from "redux";

import profileReducer from "./reducers/profileReducer";
import socialReducer from "./reducers/socialReducer";

declare global {
  interface Window {
    store: any;
  }
}

// Reducer
const rootReducer = combineReducers({
  profilePage: profileReducer,
  socialPage: socialReducer,
});

// отримуємо тип редюсора та за допомогою RootState ми можемо створити кастомний хук useTypeSelector
export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;

// Store
const store = createStore(rootReducer);

window.store = store;

export default store;
