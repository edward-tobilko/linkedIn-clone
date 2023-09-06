import { settingReducerTypes } from "./settingReducerTypes";

import { RootDispatch } from "../../store";

const initialState: settingReducerTypes = {};

const settingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

// TC для оновлення інформації про користувача
export const updateProfilePageTC = (profile: any) => {
  return (dispatch: RootDispatch) => {
    console.log(profile);
  };
};

export default settingReducer;
