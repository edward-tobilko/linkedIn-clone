import { SocialUserType } from "../../../../redux/reducers/social-reducer/socialReducerTypes";

type FollowBtnProps = {
  socialUser: SocialUserType;
  followingBlockedBtn: Array<number>;
  setFollowUserTC: any;
  setUnFollowUserTC: any;
  // setFollowUserTC: (id: number) => void;
  // setUnFollowUserTC: (id: number) => void;
};

export { FollowBtnProps };
