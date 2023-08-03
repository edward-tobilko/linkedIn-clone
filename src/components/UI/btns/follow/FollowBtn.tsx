import { FC } from "react";

import { FollowBtnStyle } from "./followBtnStyle";

import followUserIcon from "../../../../img/svg/followUser_icon.svg";
import unFollowUserIcon from "../../../../img/svg/unFollowUser_icon.svg";

import { socialUsersAPI } from "../../../../api/API";

export const FollowBtn: FC<any> = ({
  socialUser,
  setFollowDispatch,
  setUnFollowDispatch,
}) => {
  const follow = async (userId: number) => {
    await socialUsersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) {
        setFollowDispatch(userId);
      }
    });
  };

  const unFollow = async (userId: number) => {
    await socialUsersAPI.unFollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        setUnFollowDispatch(userId);
      }
    });
  };

  return (
    <>
      {socialUser.followed ? (
        <FollowBtnStyle onClick={() => unFollow(socialUser.id)}>
          <img src={unFollowUserIcon} alt="" />
          Unfollow
        </FollowBtnStyle>
      ) : (
        <FollowBtnStyle onClick={() => follow(socialUser.id)}>
          <img src={followUserIcon} alt="" />
          Follow
        </FollowBtnStyle>
      )}
    </>
  );
};
