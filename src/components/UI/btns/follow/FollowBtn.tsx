import { FC } from "react";

import { FollowBtnStyle } from "./followBtnStyle";

import followUserIcon from "../../../../img/svg/followUser_icon.svg";
import unFollowUserIcon from "../../../../img/svg/unFollowUser_icon.svg";

export const FollowBtn: FC<any> = ({
  socialUser,
  followDispatch,
  unFollowDispatch,
}) => {
  return (
    <>
      {socialUser.followed ? (
        <FollowBtnStyle onClick={() => unFollowDispatch(socialUser.id)}>
          <img src={unFollowUserIcon} alt="" />
          Unfollow
        </FollowBtnStyle>
      ) : (
        <FollowBtnStyle onClick={() => followDispatch(socialUser.id)}>
          <img src={followUserIcon} alt="" />
          Follow
        </FollowBtnStyle>
      )}
    </>
  );
};
