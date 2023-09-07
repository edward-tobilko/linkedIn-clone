import { FC } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { CardProfileEditorStyle, UserProfileStyle } from "./profileStyle";
import { AvatarImgStyle } from "../../rootStyles";

import {
  currentProfilePageSelector,
  loadingSelector,
  statusSelector,
} from "../../utils/selectors/profileSelectors";
import { useTypeDispatch } from "../../hooks/useTypeSelector";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";

import { RootState } from "../../redux/store";
import { downloadSmallPhotoTC } from "../../redux/reducers/profile-reducer/profileReducer";

import { CardProfileLoader } from "../../components/UI/loaders/card-profile-loader/CardProfileLoader";
import Status from "../../components/forms/status-input/Status";
import Contacts from "../../components/sidebar/Contacts";

const mapStateToProps = (state: RootState) => {
  return {
    currentProfilePage: currentProfilePageSelector(state),
    loading: loadingSelector(state),
    status: statusSelector(state),
  };
};

const UserProfileContainer = compose(
  connect(mapStateToProps, {}),

  // HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
);

const UserProfile: FC<any> = ({ currentProfilePage, loading, status }) => {
  const dispatch = useTypeDispatch();
  console.log(currentProfilePage);

  const downloadPhoto = (event: any) => {
    if (event.target.files.length) {
      dispatch(downloadSmallPhotoTC(event.target.files[0]));
    }
  };

  return (
    <UserProfileStyle>
      <div className="user__profile">
        <div className="user__profile-header">
          <img
            src={
              currentProfilePage?.photos?.large || "https://place-hold.it/170"
            }
            alt=""
            className="user__profile-header-wrapper"
          />

          {currentProfilePage?.userId === 29793 && (
            <CardProfileEditorStyle $sidebarTop={false} $sidebarRight={false}>
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={downloadPhoto}
              />

              {loading ? (
                <CardProfileLoader />
              ) : (
                <i className="bx bx-pencil"></i>
              )}
            </CardProfileEditorStyle>
          )}

          <AvatarImgStyle
            src={
              currentProfilePage?.photos?.small || "https://place-hold.it/160"
            }
            alt=""
            width="150px"
            height="150px"
            position={true}
            bottom="-60px"
            left="50px"
          />
        </div>

        <div className="user__profile-content">
          <div className="user__profile-content-about">
            <h1 className="user__profile-content-about-name">
              {currentProfilePage?.fullName}
            </h1>
            <div className="user__profile-content-about-status">
              <Status status={status} />
            </div>
            <div className="user__profile-content-about-lookingForAJobDescription">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                quisquam quo perferendis obcaecati reprehenderit mollitia
                distinctio culpa, necessitatibus commodi ipsum, earum veritatis
                aliquid. Quo illum veritatis molestias aliquid dolores
                voluptates!
              </p>
              <p>Looking for a job: YES</p>
            </div>

            <div className="user__profile-content-about-contacts">
              <Contacts />
            </div>
          </div>

          <div className="user__profile-content-editing">
            {currentProfilePage?.userId === 29793 && (
              <CardProfileEditorStyle $sidebarTop={false} $sidebarRight={false}>
                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  onChange={downloadPhoto}
                />

                {loading ? (
                  <CardProfileLoader />
                ) : (
                  <i className="bx bx-pencil"></i>
                )}
              </CardProfileEditorStyle>
            )}
          </div>
        </div>
      </div>
    </UserProfileStyle>
  );
};

export default UserProfileContainer(UserProfile);
