import { RootDispatch } from "../../redux/store";

// ProfileContent component
type ContactsTypes = {
  facebook: string | any;
  website: string | any;
  vk: string | any;
  twitter: string | any;
  instagram: string | any;
  youtube: string | any;
  github: string | any;
  mainLink: string | any;
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
  userId: string | number;
  photos: PhotosTypes;
};

type CurrentProfilePageProps = {
  currentProfilePage: CurrentProfilePageTypes;
};

type ProfileContentProps = CurrentProfilePageProps & {
  loading: boolean;
  status: string;
};

type UseParamsProps = {
  userId: string;
};

// CardProfile component
type CardProfileProps = ProfileContentProps & {
  updateUserStatusTC: RootDispatch;
  downloadSmallPhotoTC: RootDispatch;
};

export {
  ProfileContentProps,
  UseParamsProps,
  CardProfileProps,
  CurrentProfilePageTypes,
  CurrentProfilePageProps,
};
