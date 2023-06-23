import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "../redux/store";

// кастомный хук для получения постов с rootReducer
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
