import { CurrentProfilePageProps } from "../../../pages/profile/profileTypes";

import profileTypeNames from "../../duck/typesName";

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

type AddNewPostACType = {
  type: typeof profileTypeNames.CREATE_NEW_POST;
};

type ChangePostACType = {
  type: typeof profileTypeNames.CHANGE_POST;
  newPostText: string;
};

type SetCurrentUserPageACType = {
  currentProfilePage: string | null;
  type: typeof profileTypeNames.SET_CURRENT_USER_PAGE;
};

type SetLoadingACType = {
  type: typeof profileTypeNames.LOADING;
  loading: boolean;
};

type SetStatusACType = {
  type: typeof profileTypeNames.SET_STATUS;
  status: string;
};

type SetDownloadSmallPhotoACType = {
  type: typeof profileTypeNames.DOWNLOAD_SMALL_PHOTO;
  smallPhoto: string | null;
};

export {
  ItemProps,
  InitialStateProps,
  AddNewPostACType,
  ChangePostACType,
  SetCurrentUserPageACType,
  SetLoadingACType,
  SetStatusACType,
  SetDownloadSmallPhotoACType,
};
