import socialTypeNames from "../duck/typesName";
import { SetLoadingACType } from "../reducers/profile-reducer/profileReducerTypes";

import {
  SetCurrentPageACType,
  SetFollowUserACType,
  SetFollowingBlockedBtnACType,
  SetTotalUsersCountACType,
  SetUnFollowUserACType,
  SetUsersACType,
  SocialUserType,
} from "../reducers/social-reducer/socialReducerTypes";

// Social reducer
const setFollowUserAC = (userId: string): SetFollowUserACType => {
  return {
    type: socialTypeNames.FOLLOW,
    userId,
  };
};

const setUnFollowUserAC = (userId: string): SetUnFollowUserACType => {
  return {
    type: socialTypeNames.UN_FOLLOW,
    userId,
  };
};

const setUsersAC = (socialUsers: SocialUserType[]): SetUsersACType => {
  return {
    type: socialTypeNames.SET_USERS,
    socialUsers,
  };
};

const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => {
  return {
    type: socialTypeNames.SET_CURRENT_PAGE,
    currentPage,
  };
};

const setTotalUsersCountAC = (
  totalUsersCount: number,
): SetTotalUsersCountACType => {
  return {
    type: socialTypeNames.SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

const setLoadingAC = (loading: boolean): SetLoadingACType => {
  return {
    type: socialTypeNames.LOADING,
    loading,
  };
};

const setFollowingBlockedBtnAC = (
  loading: boolean,
  userId: string,
): SetFollowingBlockedBtnACType => {
  return {
    type: socialTypeNames.FOLLOWING_BLOCKED_BTN,
    loading,
    userId,
  };
};

export default {
  setFollowUserAC,
  setUnFollowUserAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setLoadingAC,
  setFollowingBlockedBtnAC,
};
