import { FC, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  CardProfileEditorStyle,
  UserProfileStyle,
  WrapperImgStyle,
} from "./profileStyle";
import { AvatarImgStyle } from "../../rootStyles";

import {
  currentProfilePageSelector,
  loadingSelector,
  statusSelector,
} from "../../utils/selectors/profileSelectors";
import { editModeSchema } from "../../utils/validators/authFormValidator";

import { useTypeDispatch } from "../../hooks/useTypeSelector";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";

import { RootState } from "../../redux/store";
import { downloadSmallPhotoTC } from "../../redux/reducers/profile-reducer/profileReducer";

import { CardProfileLoader } from "../../components/UI/loaders/card-profile-loader/CardProfileLoader";
import Status from "../../components/forms/status-input/Status";
import Contacts from "../../components/sidebar/Contacts";
import EditModeForm from "../../components/forms/edit-mode/EditModeForm";

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

  const [editMode, setEditMode] = useState(false);

  const downloadPhoto = (event: any) => {
    if (event.target.files.length) {
      dispatch(downloadSmallPhotoTC(event.target.files[0]));
    }
  };

  const authForm = useForm<any>({
    resolver: yupResolver(editModeSchema),
    defaultValues: {
      fullName: "",
      lookingForAJobDescription: "",
      lookingForAJob: "",
    },
    mode: "onChange",
  });

  // Submit your data into Redux store
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Submit");
  };

  return (
    <FormProvider {...authForm}>
      <UserProfileStyle>
        <div className="user__profile">
          <div className="user__profile-header">
            <WrapperImgStyle
              bg={
                currentProfilePage?.photos?.large || "https://place-hold.it/170"
              }
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
                <span> id: {currentProfilePage?.userId} </span>
              </h1>

              <div className="user__profile-content-about-status">
                <Status status={status} />
              </div>
              <div className="user__profile-content-about-lookingForAJobDescription">
                {currentProfilePage?.lookingForAJobDescription}
                <p>
                  Looking for a job:
                  {currentProfilePage?.lookingForAJob ? (
                    <i className="bx bxs-binoculars"></i>
                  ) : (
                    <i className="bx bx-bell-off"></i>
                  )}
                </p>
              </div>

              <Contacts currentProfilePage={currentProfilePage} />
            </div>

            <div className="user__profile-content-editing">
              {currentProfilePage?.userId === 29793 && (
                <>
                  {editMode ? (
                    <EditModeForm
                      currentProfilePage={currentProfilePage}
                      onSubmit={onSubmit}
                      authForm={authForm}
                      setEditMode={setEditMode}
                    />
                  ) : (
                    <CardProfileEditorStyle
                      $sidebarTop={false}
                      $sidebarRight={false}
                    >
                      <input
                        type="button"
                        name="editMode"
                        onClick={() => setEditMode(true)}
                      />

                      {loading ? (
                        <CardProfileLoader />
                      ) : (
                        <i className="bx bx-pencil"></i>
                      )}
                    </CardProfileEditorStyle>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </UserProfileStyle>
    </FormProvider>
  );
};

export default UserProfileContainer(UserProfile);
