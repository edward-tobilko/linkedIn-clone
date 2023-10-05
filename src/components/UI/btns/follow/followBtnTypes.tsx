import { SocialUserType } from "../../../../redux/reducers/social-reducer/socialReducerTypes";

type FollowBtnPropsType = {
  socialUser: SocialUserType;
  followingBlockedBtn: Array<number>;
};

type FollowBtnPropsWithHandlersType = FollowBtnPropsType & {
  setFollowUserTC: (id: number) => void;
  setUnFollowUserTC: (id: number) => void;
};

export { FollowBtnPropsWithHandlersType };
