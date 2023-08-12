import { FC } from "react";

import { AvatarImgStyle } from "../../rootStyles";
import { CardProfileStyle } from "./profileStyle";

// import avatarIcon from "../../img/images/avatar.png";
// import lampIcon from "../../img/images/lamp.png";

import { Status } from "../../components/forms/status-input/Status";

export const CardProfile: FC<any> = ({
  currentProfilePage,
  status,
  updateUserStatusTC,
  loading,
}) => {
  return (
    <CardProfileStyle>
      <img
        src={
          currentProfilePage?.photos?.large !== null
            ? currentProfilePage?.photos?.large
            : "https://place-hold.it/170"
        }
        alt=""
        className="cardProfile__wrapper"
      />
      <div className="cardProfile__desc">
        <AvatarImgStyle
          src={
            currentProfilePage?.photos?.small !== null
              ? currentProfilePage?.photos?.small
              : "https://place-hold.it/70"
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
          loading={loading}
        />
      </div>
    </CardProfileStyle>
  );
};
