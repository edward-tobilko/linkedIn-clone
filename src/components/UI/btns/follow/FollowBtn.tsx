import { FC } from "react";
import { useDispatch } from "react-redux";

import { FollowBtnStyle } from "./followBtnStyle";

import followUserIcon from "../../../../img/svg/followUser_icon.svg";
import unFollowUserIcon from "../../../../img/svg/unFollowUser_icon.svg";

export const FollowBtn: FC<any> = ({
  socialUser,
  followingBlockedBtn,
  setFollowUserTC,
  setUnFollowUserTC,
}) => {
  const dispatch: any = useDispatch();

  return (
    <>
      {socialUser.followed ? (
        <FollowBtnStyle
          disabled={followingBlockedBtn.some(
            (id: number) => id === socialUser.id,
          )}
          onClick={() => dispatch(setUnFollowUserTC(socialUser.id))}
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
          onClick={() => dispatch(setFollowUserTC(socialUser.id))}
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
