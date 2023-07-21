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

// получаем тип редюсора и с пом. RootState мы можем созд. кастомный хук useTypeSelector
export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;

// Store
const store = createStore(rootReducer);

window.store = store;

export default store;
