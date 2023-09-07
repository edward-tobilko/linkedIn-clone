import { FC } from "react";
import { NavLink } from "react-router-dom";

import { AvatarImgStyle } from "../../rootStyles";
import { CardProfileEditorStyle, CardProfileStyle } from "./profileStyle";

import Status from "../../components/forms/status-input/Status";
import { CardProfileLoader } from "../../components/UI/loaders/card-profile-loader/CardProfileLoader";

import { CardProfileProps } from "./profileTypes";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

export const CardProfile: FC<CardProfileProps> = ({
  currentProfilePage,
  status,
  updateUserStatusTC,
  downloadSmallPhotoTC,
  loading,
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

      {currentProfilePage?.userId === 29793 && (
        <CardProfileEditorStyle $sidebarTop={true} $sidebarRight={true}>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={downloadPhoto}
          />

          {loading ? <CardProfileLoader /> : <i className="bx bx-pencil"></i>}
        </CardProfileEditorStyle>
      )}

      <div className="cardProfile__desc">
        <AvatarImgStyle
          src={currentProfilePage?.photos?.small || "https://place-hold.it/90"}
          alt=""
          width="70px"
          height="70px"
          position={false}
          bottom="0"
          left="0"
        />

        <h1 className="cardProfile__desc-suptitle">
          <NavLink to="/user-profile"> {currentProfilePage?.fullName} </NavLink>
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
