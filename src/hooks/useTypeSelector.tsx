import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

import { RootDispatch, RootState } from "../redux/store";

// кастомный хук для получения постов с rootReducer
export const useTypeDispatch = () => useDispatch<RootDispatch>();
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
