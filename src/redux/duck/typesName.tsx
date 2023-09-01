// Profile reducer
const CREATE_NEW_POST = "profile/duck/CREATE-NEW-POST";
const CHANGE_POST = "profile/duck/CHANGE-POST";
const UPDATE_SEARCH_POST = "profile/duck/UPDATE-SEARCH-POST";
const SET_CURRENT_USER_PAGE = "profile/duck/SET-CURRENT-USER-PAGE";
const LOADING = "profile/duck/LOADING";
const SET_STATUS = "profile/duck/SET-STATUS";
const DOWNLOAD_SMALL_PHOTO = "profile/duck/DOWNLOAD-SMALL-PHOTO";

// Auth reducer
const SET_IS_AUTH = "auth/duck/SET-IS-AUTH";
const CAPTCHA = "auth/duck/CAPTCHA";

// RootApp reducer
const INITIALIZED_SUCCESS_ROOT_APP =
  "rootApp/duck/INITIALIZED-SUCCESS-ROOT-APP";

// Social reducer
const FOLLOW = "social/duck/FOLLOW";
const UN_FOLLOW = "social/duck/UN-FOLLOW";
const SET_USERS = "social/duck/SET-USERS";
const SET_CURRENT_PAGE = "social/duck/SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "social/duck/SET-TOTAL-USERS-COUNT";
const FOLLOWING_BLOCKED_BTN = "social/duck/FOLLOWING-BLOCKED-BTN";

export default {
  CREATE_NEW_POST,
  CHANGE_POST,
  UPDATE_SEARCH_POST,
  SET_CURRENT_USER_PAGE,
  LOADING,
  SET_STATUS,
  SET_IS_AUTH,
  CAPTCHA,
  INITIALIZED_SUCCESS_ROOT_APP,
  FOLLOW,
  UN_FOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  FOLLOWING_BLOCKED_BTN,
  DOWNLOAD_SMALL_PHOTO,
};
