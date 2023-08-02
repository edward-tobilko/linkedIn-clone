import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

import type { RootState, RootDispatch } from "../redux/store";

// кастомний типизований діспатч
export const useTypeDispatch = () => useDispatch<RootDispatch>();

// кастомний хук для отримання постів с rootReducer
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
