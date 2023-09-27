import { ThunkAction } from "redux-thunk";

import { RootState } from "../../store";

import {
  FOLLOW,
  UN_FOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  LOADING,
  FOLLOWING_BLOCKED_BTN,
} from "../../ducks/typesName";

type Null<T> = T | null;

// Types for initialState
type SocialUserPhotosType = {
  small: Null<string>; //? Теж саме, що і string | null
  large: Null<string>;
};

type SocialUserType = {
  name: string;
  id: number;
  uniqueUrlName?: Null<string>;
  photos?: SocialUserPhotosType;
  status?: string;
  followed?: boolean;
};

type InitialStateType = {
  socialUsers: SocialUserType[];
  totalUsersCount: number;
  usersCount: number;
  currentPage: number;
  loading: boolean;
  followingBlockedBtn: Array<number>; //? array of users' id
};

// Types for action creators
type SetFollowUserACType = {
  type: typeof FOLLOW;
  userId: number;
};

type SetUnFollowUserACType = {
  type: typeof UN_FOLLOW;
  userId: number;
};

type SetUsersACType = {
  type: typeof SET_USERS;
  socialUsers: SocialUserType[];
};

type SetCurrentPageACType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

type SetTotalUsersCountACType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};

type SetLoadingACType = {
  type: typeof LOADING;
  loading: boolean;
};

type SetFollowingBlockedBtnACType = {
  type: typeof FOLLOWING_BLOCKED_BTN;
  loading: boolean;
  userId: number;
};

// Types for data response
type fetchSocialUsersOnChangedPageDataType = {
  items: SocialUserType[];
  totalCount: number;
  error: string;
};

// Type for actions
type SocialActionsTypes =
  | SetFollowUserACType
  | SetUnFollowUserACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetTotalUsersCountACType
  | SetLoadingACType
  | SetFollowingBlockedBtnACType;

// Type for thunks
type SocialThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // extra arguments
  SocialActionsTypes
>;

export {
  SocialUserType,
  InitialStateType,
  fetchSocialUsersOnChangedPageDataType,
  SetFollowUserACType,
  SetUnFollowUserACType,
  SetUsersACType,
  SetCurrentPageACType,
  SetTotalUsersCountACType,
  SetLoadingACType,
  SetFollowingBlockedBtnACType,
  SocialThunkType,
  SocialActionsTypes,
};
