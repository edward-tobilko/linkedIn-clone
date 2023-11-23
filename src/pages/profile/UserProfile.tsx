import { FC, useEffect, useMemo, ChangeEvent, ComponentType } from "react";
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
  CurrentProfilePageType,
  DispatchUserProfileType,
  OwnPropsType,
  ProfileContentPropsType,
} from "./profileTypes";

import {
  currentProfilePageSelector,
  loadingSelector,
} from "../../utils/selectors/profileSelectors";
import {
  EditModeSchemaType,
  editModeSchema,
} from "../../utils/validators/editModeSchema";
import { useMyContext } from "../../context/Context";

import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { RootState } from "../../redux/store";
import {
  downloadSmallPhotoTC,
  profileEditModeTC,
  setLoadingAC,
} from "../../redux/reducers/profile-reducer/profileReducer";

import { CardProfileLoader } from "../../components/UI/loaders/profile-loaders/CardProfileLoader";
import Status from "../../components/forms/status-input/StatusContainer";
import Contacts from "./Contacts";
import EditModeForm from "../../components/forms/edit-mode/EditModeForm";
import { ProfileContentLoader } from "../../components/UI/loaders/profile-loaders/ProfileContentLoader";

const mapStateToProps = (state: RootState): ProfileContentPropsType | any => {
  return {
    currentProfilePage: currentProfilePageSelector(state),
    loading: loadingSelector(state),
  };
};

const UserProfileContainer = compose<ComponentType>(
  connect<
    ProfileContentPropsType,
    DispatchUserProfileType,
    OwnPropsType,
    RootState
  >(mapStateToProps, {
    downloadSmallPhotoTC,
    profileEditModeTC,
  }),
);

const UserProfile: FC<ProfileContentPropsType> = ({
  currentProfilePage,
  loading,
}) => {
  const dispatch = useTypeDispatch();

  const {
    localLoading,
    profileEditMode,
    setLocalLoading,
    setProfileEditMode,
  }: any = useMyContext();

  const downloadPhoto = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      setLoadingAC(true);
      dispatch(downloadSmallPhotoTC(event.target.files[0]));
      setLoadingAC(false);
    }
  };

  const authForm = useForm<CurrentProfilePageType | EditModeSchemaType | any>({
    resolver: yupResolver(editModeSchema),

    //? Для зберігання введених даних в формі
    defaultValues: useMemo(() => {
      return currentProfilePage || {};
    }, [currentProfilePage]),

    mode: "onChange",
  });

  // Submit your data into Redux store
  const onSubmit: SubmitHandler<CurrentProfilePageType | any> = (formData) => {
    dispatch(profileEditModeTC(formData));
    setProfileEditMode(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let delay: number = 1200;

    if (localLoading) {
      timer = setTimeout(() => {
        setLocalLoading(false);
        setProfileEditMode(true);
      }, delay);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [localLoading]);

  useEffect(() => {
    authForm.reset(currentProfilePage || {});
  }, [currentProfilePage, authForm]);

  return (
    <FormProvider {...authForm}>
      <UserProfileStyle>
        {loading ? (
          <ProfileContentLoader />
        ) : (
          <div className="user__profile">
            <div className="user__profile-header">
              <WrapperImgStyle
                bg={
                  currentProfilePage?.photos?.large ||
                  "https://place-hold.it/170"
                }
              />

              {currentProfilePage?.userId === 29793 && (
                <CardProfileEditorStyle
                  $sidebarTop={false}
                  $sidebarRight={false}
                >
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={downloadPhoto}
                    disabled={loading}
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
                  currentProfilePage?.photos?.small ||
                  "https://place-hold.it/160"
                }
                alt=""
                width="150px"
                height="150px"
                position={true}
                bottom="-60px"
                left="50px"
                display={true}
              />
            </div>

            <div className="user__profile-content">
              <div className="user__profile-content-about">
                <h1 className="user__profile-content-about-name">
                  {currentProfilePage?.fullName}
                  <span> id: {currentProfilePage?.userId} </span>
                </h1>

                <div className="user__profile-content-about-status">
                  <Status />
                </div>
                <div className="user__profile-content-about-descriptions">
                  <p className="user__profile-content-about-descriptions-title">
                    <span>{currentProfilePage?.aboutMe}</span>
                  </p>
                  <p className="user__profile-content-about-descriptions-title">
                    Skills:
                    {currentProfilePage?.lookingForAJobDescription?.length >
                    0 ? (
                      <span>
                        {currentProfilePage?.lookingForAJobDescription}
                      </span>
                    ) : (
                      <span>Null</span>
                    )}
                  </p>
                  <p className="user__profile-content-about-descriptions-title">
                    Looking for a job:
                    <span>
                      {currentProfilePage?.lookingForAJob ? (
                        <i className="bx bxs-binoculars"></i>
                      ) : (
                        <i className="bx bx-bell-off"></i>
                      )}
                    </span>
                  </p>
                </div>

                <Contacts currentProfilePage={currentProfilePage} />
              </div>

              <div className="user__profile-content-editing">
                {currentProfilePage?.userId === 29793 && (
                  <>
                    {profileEditMode ? (
                      <EditModeForm
                        currentProfilePage={currentProfilePage}
                        onSubmit={onSubmit}
                        authForm={authForm}
                        setProfileEditMode={setProfileEditMode}
                        loading={loading}
                      />
                    ) : (
                      <CardProfileEditorStyle
                        $sidebarTop={false}
                        $sidebarRight={false}
                      >
                        <input
                          type="button"
                          name="profileEditMode"
                          onClick={() => setLocalLoading(true)}
                          disabled={localLoading}
                        />

                        {localLoading ? (
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
        )}
      </UserProfileStyle>
    </FormProvider>
  );
};

export default UserProfileContainer(UserProfile);
