import { RootState } from "../../redux/store";

export const initializedSelector = (state: RootState) =>
  state.rootApp.initialized;

export const serverErrorSelector = (state: RootState) =>
  state.rootApp.serverError;
