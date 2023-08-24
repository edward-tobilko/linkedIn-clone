import socialTypeNames from "../duck/typesName";

import { SocialUserType } from "../reducers/social-reducer/socialReducerTypes";

// Social reducer
const setFollowUserAC = (userId: string) => {
  return {
    type: socialTypeNames.FOLLOW,
    userId,
  };
};

const setUnFollowUserAC = (userId: string) => {
  return {
    type: socialTypeNames.UN_FOLLOW,
    userId,
  };
};

const setUsersAC = (socialUsers: SocialUserType[]) => {
  return {
    type: socialTypeNames.SET_USERS,
    socialUsers,
  };
};

const setCurrentPageAC = (currentPage: number) => {
  return {
    type: socialTypeNames.SET_CURRENT_PAGE,
    currentPage,
  };
};

const setTotalUsersCountAC = (totalUsersCount: number) => {
  return {
    type: socialTypeNames.SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

const setLoadingAC = (loading: boolean) => {
  return {
    type: socialTypeNames.LOADING,
    loading,
  };
};

const setFollowingBlockedBtnAC = (loading: boolean, userId: string) => {
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
