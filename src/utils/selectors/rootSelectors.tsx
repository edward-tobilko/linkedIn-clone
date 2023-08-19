import { RootState } from "../../redux/store";

export const initializedSelector = (state: RootState) =>
  state.rootApp.initialized;
