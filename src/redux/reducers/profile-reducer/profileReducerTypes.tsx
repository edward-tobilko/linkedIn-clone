import { ThunkAction } from "redux-thunk";

import { CurrentProfilePageProps } from "../../../pages/profile/profileTypes";

import {
  CREATE_NEW_POST,
  CHANGE_POST,
  SET_CURRENT_USER_PAGE,
  LOADING,
  SET_STATUS,
  DOWNLOAD_SMALL_PHOTO,
} from "../../duck/typesName";

import { RootState } from "../../store";

// Types for initial state
type GeoType = {
  lat: string;
  lng: string;
};

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type ItemProps = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};

type InitialStateProps = {
  postUsers: ItemProps[];
  newPostText: string;
  name: string;
  currentProfilePage: CurrentProfilePageProps | null;
  loading: boolean;
  status: string;
};

// Types for action creators
type AddNewPostACType = {
  type: typeof CREATE_NEW_POST;
};

type ChangePostACType = {
  type: typeof CHANGE_POST;
  newPostText: string;
};

type SetCurrentUserPageACType = {
  currentProfilePage: CurrentProfilePageProps | null;
  type: typeof SET_CURRENT_USER_PAGE;
};

type SetLoadingACType = {
  type: typeof LOADING;
  loading: boolean;
};

type SetStatusACType = {
  type: typeof SET_STATUS;
  status: string;
};

type SetDownloadSmallPhotoACType = {
  type: typeof DOWNLOAD_SMALL_PHOTO;
  smallPhoto: string | null;
};

// Type for actions
type ProfileActionsTypes =
  | AddNewPostACType
  | ChangePostACType
  | SetCurrentUserPageACType
  | SetLoadingACType
  | SetStatusACType
  | SetDownloadSmallPhotoACType;

// Type for thunks
type ProfileThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ProfileActionsTypes
>;

export {
  ItemProps,
  InitialStateProps,
  AddNewPostACType,
  ChangePostACType,
  SetCurrentUserPageACType,
  SetLoadingACType,
  SetStatusACType,
  SetDownloadSmallPhotoACType,
  ProfileActionsTypes,
  ProfileThunkType,
};
