import { FC, MouseEvent } from "react";

import { FollowBtnStyle } from "./followBtnStyle";

import followUserIcon from "../../../../img/svg/followUser_icon.svg";
import unFollowUserIcon from "../../../../img/svg/unFollowUser_icon.svg";

import { useTypeDispatch } from "../../../../hooks/useTypeSelector";

import { FollowBtnPropsWithHandlersType } from "./followBtnTypes";

export const FollowBtn: FC<FollowBtnPropsWithHandlersType> = ({
  socialUser,
  followingBlockedBtn,
  setFollowUserTC,
  setUnFollowUserTC,
}) => {
  const dispatch = useTypeDispatch();

  const handleFollow = (event: MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    dispatch(setFollowUserTC(socialUser.id)!);
  };

  const handleUnFollow = (event: MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    dispatch(setUnFollowUserTC(socialUser.id)!);
  };

  return (
    <>
      {socialUser.followed ? (
        <FollowBtnStyle
          disabled={followingBlockedBtn.some((id) => id === socialUser.id)}
          onClick={handleUnFollow}
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
          disabled={followingBlockedBtn.some((id) => id === socialUser.id)}
          onClick={handleFollow}
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
