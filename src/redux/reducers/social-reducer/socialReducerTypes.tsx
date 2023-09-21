import socialTypeNames from "../../duck/typesName";

type SocialUserPhotosType = {
  small: string | null;
  large: string | null;
};

type SocialUserType = {
  name: string;
  id: number;
  uniqueUrlName?: string | null;
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

type fetchSocialUsersOnChangedPageDataType = {
  items: SocialUserType[];
  totalCount: number;
  error: string;
};

type SetFollowUserACType = {
  type: typeof socialTypeNames.FOLLOW;
  userId: number;
};

type SetUnFollowUserACType = {
  type: typeof socialTypeNames.UN_FOLLOW;
  userId: number;
};

type SetUsersACType = {
  type: typeof socialTypeNames.SET_USERS;
  socialUsers: SocialUserType[];
};

type SetCurrentPageACType = {
  type: typeof socialTypeNames.SET_CURRENT_PAGE;
  currentPage: number;
};

type SetTotalUsersCountACType = {
  type: typeof socialTypeNames.SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};

type SetLoadingACType = {
  type: typeof socialTypeNames.LOADING;
  loading: boolean;
};

type SetFollowingBlockedBtnACType = {
  type: typeof socialTypeNames.FOLLOWING_BLOCKED_BTN;
  loading: boolean;
  userId: number;
};

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
};
