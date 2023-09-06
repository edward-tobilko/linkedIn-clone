import { RootDispatch } from "../../redux/store";

// ProfileContent component
type ProfileContentProps = {
  currentProfilePage: any;
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

export { ProfileContentProps, UseParamsProps, CardProfileProps };
