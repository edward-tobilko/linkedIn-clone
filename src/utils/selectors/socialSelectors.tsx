import { RootState } from "../../redux/store";

import { createSelector } from "reselect";

//? Примітивний селектор - просто вертає частину стейта, яка нам потрібна (наприклад socialUsers).
export const socialUsersSelector = (state: RootState) =>
  state.socialPage.socialUsers;

//? Складний селектор - потрібен для складних обчислень, щоб не викликався render компоненти за кожним разом при обновленні state.
export const socialUsersReselector = createSelector(
  socialUsersSelector,
  (socialUsers) => {
    return socialUsers.filter((user) => true);
  },
);

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

export const searchTermSelector = (state: RootState) =>
  state.socialPage.searchTerm.term;
