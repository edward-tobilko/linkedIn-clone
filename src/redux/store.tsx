import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./reducers/profileReducer";

declare global {
  interface Window {
    store: any;
  }
}

// Reducer
const rootReducer = combineReducers({
  profilePage: profileReducer,
});

// получаем тип редюсора и с пом. RootState мы можем созд. кастомный хук useTypeSelector
export type RootState = ReturnType<typeof rootReducer>;

// Store
const store = createStore(rootReducer);

window.store = store;

export default store;
