import { RootDispatch } from "../../redux/store";

// ProfileContent component
type ContactsTypes = {
  facebook: any;
  website: any;
  vk: any;
  twitter: any;
  instagram: any;
  youtube: any;
  github: any;
  mainLink: any;
};

type PhotosTypes = {
  small: string;
  large: string;
};

type CurrentProfilePageTypes = {
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
  fullName: string;
  contacts: ContactsTypes;
  userId: string;
  photos: PhotosTypes;
};

type ProfileContentProps = {
  currentProfilePage: CurrentProfilePageTypes;
  loading: boolean;
  status: string;
};

type UseParamsProps = {
  userId: string;
};

// CardProfile component
type CardProfileProps = {
  currentProfilePage: any;
  status: string;
  updateUserStatusTC: RootDispatch;
  downloadSmallPhotoTC: RootDispatch;
  loading: boolean;
};

// UserProfile component
type UserProfileProps = {
  currentProfilePage: any;
  loading: boolean;
  status: string;
};

export {
  ProfileContentProps,
  UseParamsProps,
  CardProfileProps,
  UserProfileProps,
  CurrentProfilePageTypes,
};
