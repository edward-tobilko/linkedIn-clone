import { ItemProps } from "../../redux/reducers/profile-reducer/profileReducerTypes";
import { TypedDispatch } from "../../redux/store";

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
  userId: number;
  photos: PhotosTypes;
};

type CurrentProfilePageProps = {
  currentProfilePage: CurrentProfilePageTypes;
};

type ProfileContentProps = CurrentProfilePageProps & {
  loading: boolean;
  postUsers?: ItemProps[];
};

type MapDispatchToPropsType = {
  fetchCurrentUserPageTC: (userId: number) => void;
  fetchUserStatusByIdTC: (userId: number) => void;
  downloadSmallPhotoTC: (dispatch: any) => void;
};

type OwnPropsType = {};

// CardProfile component
type CardProfileProps = ProfileContentProps & {
  downloadSmallPhotoTC: TypedDispatch;
};

export {
  ProfileContentProps,
  CardProfileProps,
  CurrentProfilePageTypes,
  CurrentProfilePageProps,
  MapDispatchToPropsType,
  OwnPropsType,
};
