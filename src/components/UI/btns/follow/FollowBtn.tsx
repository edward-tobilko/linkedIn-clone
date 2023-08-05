import { FC } from "react";

import { FollowBtnStyle } from "./followBtnStyle";

import followUserIcon from "../../../../img/svg/followUser_icon.svg";
import unFollowUserIcon from "../../../../img/svg/unFollowUser_icon.svg";

import { socialUsersAPI } from "../../../../api/API";

export const FollowBtn: FC<any> = ({
  socialUser,
  setFollowDispatch,
  setUnFollowDispatch,
  setFollowingBlockedBtnDispatch,
  followingBlockedBtn,
}) => {
  const follow = async (userId: number) => {
    setFollowingBlockedBtnDispatch(true, userId);

    await socialUsersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) {
        setFollowDispatch(userId);
      }

      setFollowingBlockedBtnDispatch(false, userId);
    });
  };

  const unFollow = async (userId: number) => {
    setFollowingBlockedBtnDispatch(true, userId);

    await socialUsersAPI.unFollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        setUnFollowDispatch(userId);
      }

      setFollowingBlockedBtnDispatch(false, userId);
    });
  };

  return (
    <>
      {socialUser.followed ? (
        <FollowBtnStyle
          disabled={followingBlockedBtn.some(
            (id: number) => id === socialUser.id,
          )}
          onClick={() => unFollow(socialUser.id)}
          left={false}
          transformPosition={false}
          top={false}
          position={false}
          margin={false}
          maxWidth={false}
          visibleText={false}
          primary
          borderRadius={false}
          fontSizeIcon={false}
        >
          <img src={unFollowUserIcon} alt="" />
          <span>Unfollow</span>
        </FollowBtnStyle>
      ) : (
        <FollowBtnStyle
          disabled={followingBlockedBtn.some(
            (id: number) => id === socialUser.id,
          )}
          onClick={() => follow(socialUser.id)}
          transformPosition
          left
          top
          position
          margin
          fontSizeIcon
          maxWidth
          visibleText
          primary
          borderRadius
        >
          <img src={followUserIcon} alt="" />
          <span>Follow</span>
        </FollowBtnStyle>
      )}
    </>
  );
};
