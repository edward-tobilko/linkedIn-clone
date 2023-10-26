import { FC } from "react";
import { NavLink } from "react-router-dom";

import { SocialUserItemStyle } from "./socialStyle";
import { AvatarImgStyle } from "../../rootStyles";

import { FollowBtn } from "../../components/UI/btns/follow/FollowBtn";
import { SocialUsersItemRemoveBtn } from "../../components/UI/btns/remove-btn/removeBtnStyle";

import { SocialUsersItemProps } from "./socialTypes";

import removeIcon from "../../img/svg/remove_icon.svg";

const SocialUsersItem: FC<SocialUsersItemProps> = ({
  socialUser,
  followingBlockedBtn,
  setFollowUserTC,
  setUnFollowUserTC,
}) => {
  return (
    <>
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
              position={false}
              bottom="0"
              left="0"
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

            <SocialUsersItemRemoveBtn>
              <img src={removeIcon} alt="" />
            </SocialUsersItemRemoveBtn>
          </div>

          {socialUser.id === 30231 ? (
            <h1 style={{ paddingBottom: 25 }}>It's me</h1>
          ) : (
            <FollowBtn
              socialUser={socialUser}
              followingBlockedBtn={followingBlockedBtn}
              setUnFollowUserTC={setUnFollowUserTC}
              setFollowUserTC={setFollowUserTC}
            />
          )}
        </div>
      </SocialUserItemStyle>
    </>
  );
};

export default SocialUsersItem;
