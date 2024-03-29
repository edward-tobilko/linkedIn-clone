import { ItemProps } from "../../redux/reducers/profile-reducer/profileReducerTypes";
import { SocialUserType } from "../../redux/reducers/social-reducer/socialReducerTypes";

// ProfileContent component
type ContactsType = {
  facebook: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
};

type PhotosType = {
  small: string;
  large: string;
};

type CurrentProfilePageType = {
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
  fullName: string;
  contacts: ContactsType;
  userId: number;
  photos: PhotosType;
};

type CurrentProfilePagePropsType = {
  currentProfilePage: CurrentProfilePageType;
};

type ProfileContentPropsType = CurrentProfilePagePropsType & {
  loading: boolean;
  postUsers?: ItemProps[];
  chatUsers?: SocialUserType[];
};

type MapDispatchToPropsType = {
  fetchCurrentUserPageTC: (userId: number) => void;
  fetchUserStatusByIdTC: (userId: number) => void;
  downloadSmallPhotoTC: (photoFile: File) => void;
};

type OwnPropsType = {};

// CardProfile component
type CardProfilePropsType = ProfileContentPropsType & {
  downloadSmallPhotoTC: any;
};

// UserProfile component
type DispatchUserProfileType = {
  downloadSmallPhotoTC: (photoFile: File) => void;
  profileEditModeTC: (currentProfilePage: CurrentProfilePageType) => void;
};

// Contacts component
type ContactItemPropsType = {
  contactKey: string;
  contactValue: string | null;
};

export {
  ProfileContentPropsType,
  CardProfilePropsType,
  CurrentProfilePageType,
  CurrentProfilePagePropsType,
  MapDispatchToPropsType,
  OwnPropsType,
  DispatchUserProfileType,
  ContactItemPropsType,
};
