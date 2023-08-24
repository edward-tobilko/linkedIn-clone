import { FC } from "react";

import { AvatarImgStyle } from "../../rootStyles";
import { CardProfileStyle } from "./profileStyle";

import avatarIcon from "../../img/images/avatar.png";
import lampIcon from "../../img/images/lamp.png";

import { Status } from "../../components/forms/status-input/Status";

import { CardProfileProps } from "./profileTypes";

export const CardProfile: FC<CardProfileProps> = ({
  currentProfilePage,
  status,
  updateUserStatusTC,
}) => {
  return (
    <CardProfileStyle>
      <img
        src={
          currentProfilePage?.photos?.large !== null
            ? currentProfilePage?.photos?.large
            : lampIcon
        }
        alt=""
        className="cardProfile__wrapper"
      />
      <div className="cardProfile__desc">
        <AvatarImgStyle
          src={
            currentProfilePage?.photos?.small !== null
              ? currentProfilePage?.photos?.small
              : avatarIcon
          }
          alt=""
          width="70px"
          height="70px"
        />
        <h1 className="cardProfile__desc-suptitle">
          {currentProfilePage?.fullName}
        </h1>

        {currentProfilePage?.aboutMe?.length > 0 ? (
          <p className="cardProfile__desc-title">
            {currentProfilePage?.aboutMe}
          </p>
        ) : (
          <p className="cardProfile__desc-title">No info</p>
        )}

        <Status
          status={status}
          updateUserStatusTC={updateUserStatusTC}
          currentProfilePage={currentProfilePage}
        />
      </div>
    </CardProfileStyle>
  );
};
