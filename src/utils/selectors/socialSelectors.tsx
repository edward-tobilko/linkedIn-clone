import { RootState } from "../../redux/store";

export const socialUsersSelector = (state: RootState) =>
  state.socialPage.socialUsers;

export const totalUsersCountSelector = (state: RootState) =>
  state.socialPage.totalUsersCount;

export const usersCountSelector = (state: RootState) =>
  state.socialPage.usersCount;

export const currentPageSelector = (state: RootState) =>
  state.socialPage.currentPage;

export const loadingSelector = (state: RootState) => state.socialPage.loading;

export const followingBlockedBtnSelector = (state: RootState) =>
  state.socialPage.followingBlockedBtn;

export const isAuthSelector = (state: RootState) => state.authorization.isAuth;
