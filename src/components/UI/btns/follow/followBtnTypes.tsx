import { SocialUserType } from "../../../../redux/reducers/social-reducer/socialReducerTypes";
import { RootDispatch } from "../../../../redux/store";

type FollowBtnProps = {
  socialUser: SocialUserType;
  followingBlockedBtn: any;
  setFollowUserTC: RootDispatch;
  setUnFollowUserTC: RootDispatch;
};

export { FollowBtnProps };
