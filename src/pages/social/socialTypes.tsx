import { SocialUserType } from "../../redux/reducers/social-reducer/socialReducerTypes";

// SocialContent component
type SocialContentProps = {
  socialUsers: SocialUserType[];
  usersCount: number;
  totalUsersCount: number;
  currentPage: number;
  loading: boolean;
  followingBlockedBtn: any;
  isAuth: boolean;
};

// SocialUsersList component
type SocialUsersListProps = {
  socialUsers: SocialUserType[];
  followingBlockedBtn: any;
  setFollowUserTC: any;
  setUnFollowUserTC: any;
};

type SocialUsersItemProps = {
  socialUser: SocialUserType;
  followingBlockedBtn: any;
  setFollowUserTC: any;
  setUnFollowUserTC: any;
};

export { SocialContentProps, SocialUsersListProps, SocialUsersItemProps };
