import { FC } from "react";
import { NavLink } from "react-router-dom";

import { SocialUserItemStyle, RemoveCardSocialUserStyle } from "./socialStyle";
import { AvatarImgStyle } from "../../rootStyles";

import { FollowBtn } from "../../components/UI/btns/follow/FollowBtn";

import removeIcon from "../../img/svg/remove_icon.svg";

const SocialUsersItem: FC<any> = ({
  socialUser,
  setFollowDispatch,
  setUnFollowDispatch,
  setFollowingBlockedBtnDispatch,
  followingBlockedBtn,
}) => {
  return (
    <SocialUserItemStyle>
      <div className="cardSocial">
        <img
          src={
            socialUser?.photos?.large !== null
              ? socialUser?.photos?.large
              : "https://place-hold.it/170"
          }
          alt="Wrapper"
          className="cardSocial__wrapper"
        />
        <div className="cardSocial__desc">
          <AvatarImgStyle
            src={
              socialUser?.photos?.small !== null
                ? socialUser?.photos?.small
                : "https://place-hold.it/90"
            }
            alt=""
            width="90px"
            height="90px"
          />
          <p>
            <NavLink to={`/profile/${socialUser?.id}`}>
              {socialUser?.name}
            </NavLink>
          </p>

          <p>
            {socialUser?.status !== null ? (
              socialUser?.status
            ) : (
              <span>No status...</span>
            )}
          </p>

          <RemoveCardSocialUserStyle>
            <img src={removeIcon} alt="" />
          </RemoveCardSocialUserStyle>
        </div>

        <FollowBtn
          socialUser={socialUser}
          setFollowDispatch={setFollowDispatch}
          setUnFollowDispatch={setUnFollowDispatch}
          setFollowingBlockedBtnDispatch={setFollowingBlockedBtnDispatch}
          followingBlockedBtn={followingBlockedBtn}
        />
      </div>
    </SocialUserItemStyle>
  );
};

export default SocialUsersItem;
