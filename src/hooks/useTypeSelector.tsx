import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

import type { RootState, TypedDispatch } from "../redux/store";

//? Кастомний типизований хук dispatch
export const useTypeDispatch = () => useDispatch<TypedDispatch<RootState>>();

//? Кастомний хук для отримання state з rootReducer
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
