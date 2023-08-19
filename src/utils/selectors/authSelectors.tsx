import { RootState } from "../../redux/store";

export const isAuthSelector = (state: RootState) => state.authorization.isAuth;
