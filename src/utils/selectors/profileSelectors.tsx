import { RootState } from "../../redux/store";

export const currentProfilePageSelector = (state: RootState) => {
  return state.profilePage.currentProfilePage;
};

export const loadingSelector = (state: RootState) => {
  return state.profilePage.loading;
};

export const statusSelector = (state: RootState) => {
  return state.profilePage.status;
};
