import { CurrentProfilePageTypes } from "../pages/profile/profileTypes";
import { SocialUserType } from "../redux/reducers/social-reducer/socialReducerTypes";

//? Перечислення наборів створених нами констант, можуть бути числа або строки.
enum ResultCodesEnum {
  ResultCodeSuccess = 0,
  ResultCodeError = 1,
}

// authAPI
type AuthMeApiType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodesEnum;
  messages: string[];
};

type LoginApiDataType = {
  userId: number;
};

type LoginLogoutApiType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  resultCode: RC;
  messages: string[];
};

// profileAPI
type FetchCurrentUserPageByIdApiType = CurrentProfilePageTypes;

type UpdateUserStatusApiType = {
  data: Object;
  resultCode: ResultCodesEnum;
  messages: string[];
};

type PhotosApiType = {
  photos: {
    small: string;
    large: string;
  };
};

type DownloadPhotoApiType = {
  data: PhotosApiType;
  resultCode: ResultCodesEnum;
  messages: string[];
};

type ProfileInfoEditModeApiType = UpdateUserStatusApiType;

// socialUsersAPI
type FetchSocialUsersApiType = {
  items: SocialUserType[];
  totalCount: number;
  error: string;
};

type FollowUnfollowApiType = {
  data: Object;
  resultCode: ResultCodesEnum;
  messages: string[];
};

export {
  ResultCodesEnum,
  AuthMeApiType,
  LoginLogoutApiType,
  FetchCurrentUserPageByIdApiType,
  UpdateUserStatusApiType,
  DownloadPhotoApiType,
  ProfileInfoEditModeApiType,
  FetchSocialUsersApiType,
  FollowUnfollowApiType,
  LoginApiDataType,
};
