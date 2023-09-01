import { FC } from "react";

import { AvatarImgStyle } from "../../rootStyles";
import { CardProfileEditorStyle, CardProfileStyle } from "./profileStyle";

import Status from "../../components/forms/status-input/Status";

import { CardProfileProps } from "./profileTypes";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

export const CardProfile: FC<CardProfileProps> = ({
  currentProfilePage,
  status,
  updateUserStatusTC,
  downloadSmallPhotoTC,
}) => {
  const dispatch = useTypeDispatch();

  const downloadPhoto = (event: any) => {
    if (event.target.files.length) {
      dispatch(downloadSmallPhotoTC(event.target.files[0]));
    }
  };
  return (
    <CardProfileStyle>
      <img
        src={currentProfilePage?.photos?.large || "https://place-hold.it/170"}
        alt=""
        className="cardProfile__wrapper"
      />

      {currentProfilePage?.userId === 29793 ? (
        <CardProfileEditorStyle>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={downloadPhoto}
          />
          <i className="bx bx-pencil"></i>
        </CardProfileEditorStyle>
      ) : null}

      <div className="cardProfile__desc">
        <AvatarImgStyle
          src={currentProfilePage?.photos?.small || "https://place-hold.it/90"}
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
