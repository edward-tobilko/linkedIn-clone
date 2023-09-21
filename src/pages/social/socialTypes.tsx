import { SocialUserType } from "../../redux/reducers/social-reducer/socialReducerTypes";

// SocialContent component
type SocialContentProps = {
  socialUsers: SocialUserType[];
  usersCount: number;
  totalUsersCount: number;
  currentPage: number;
  loading: boolean;
  followingBlockedBtn: Array<number>;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  fetchSocialUsersTC: (currentPage: number, usersCount: number) => void;
  fetchSocialUsersOnChangedPageTC: (
    pageNumber: number,
    usersCount: number,
  ) => void;
  setFollowUserTC: (id: number) => void;
  setUnFollowUserTC: (id: number) => void;
};

type OwnPropsType = {};

// SocialUsersList component
type SocialUsersListProps = {
  socialUsers?: SocialUserType[];
  followingBlockedBtn: number[];
  setFollowUserTC: (id: number) => void;
  setUnFollowUserTC: (id: number) => void;
};

// SocialUsersItem component
type SocialUsersItemProps = SocialUsersListProps & {
  socialUser: SocialUserType;
};

export {
  SocialContentProps,
  SocialUsersListProps,
  SocialUsersItemProps,
  MapDispatchToPropsType,
  OwnPropsType,
};
