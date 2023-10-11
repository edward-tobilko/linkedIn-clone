import { SetLoadingACType } from "../reducers/profile-reducer/profileReducerTypes";
import {
  SetCurrentPageACType,
  SetFollowUserACType,
  SetFollowingBlockedBtnACType,
  SetSearchTermACType,
  SetTotalUsersCountACType,
  SetUnFollowUserACType,
  SetUsersACType,
  SocialUserType,
} from "../reducers/social-reducer/socialReducerTypes";

import {
  FOLLOW,
  UN_FOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  LOADING,
  FOLLOWING_BLOCKED_BTN,
  SEARCH_TERM,
} from "./typesName";

const setFollowUserAC = (userId: number): SetFollowUserACType => {
  return {
    type: FOLLOW,
    userId,
  };
};

const setUnFollowUserAC = (userId: number): SetUnFollowUserACType => {
  return {
    type: UN_FOLLOW,
    userId,
  };
};

const setUsersAC = (socialUsers: SocialUserType[]): SetUsersACType => {
  return {
    type: SET_USERS,
    socialUsers,
  };
};

const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

const setTotalUsersCountAC = (
  totalUsersCount: number,
): SetTotalUsersCountACType => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

const setLoadingAC = (loading: boolean): SetLoadingACType => {
  return {
    type: LOADING,
    loading,
  };
};

const setFollowingBlockedBtnAC = (
  loading: boolean,
  userId: number,
): SetFollowingBlockedBtnACType => {
  return {
    type: FOLLOWING_BLOCKED_BTN,
    loading,
    userId,
  };
};

const setSearchTermAC = (term: string): SetSearchTermACType => {
  return {
    type: SEARCH_TERM,
    payload: { term },
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
  setSearchTermAC,
};
