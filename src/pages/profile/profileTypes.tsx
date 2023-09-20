import { RootDispatch } from "../../redux/store";

// ProfileContent component
type ContactsTypes = {
  facebook: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
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

// CardProfile component
type CardProfileProps = ProfileContentProps & {
  updateUserStatusTC: RootDispatch;
  downloadSmallPhotoTC: RootDispatch;
};

export {
  ProfileContentProps,
  CardProfileProps,
  CurrentProfilePageTypes,
  CurrentProfilePageProps,
};
