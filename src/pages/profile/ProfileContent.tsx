import { FC, useEffect, lazy, ComponentType } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

import CreatePostForm from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import PostsList from "../../components/posts/PostsList";
import { ProfileContentLoader } from "../../components/UI/loaders/profile-loaders/ProfileContentLoader";

import {
  fetchCurrentUserPageTC,
  fetchUserStatusByIdTC,
  downloadSmallPhotoTC,
} from "../../redux/reducers/profile-reducer/profileReducer";
import { RootState } from "../../redux/store";

import { useFetching } from "../../hooks/useFetching";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { withSuspenseHOC } from "../../hocs/withSuspenseHOC";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import {
  currentProfilePageSelector,
  loadingSelector,
} from "../../utils/selectors/profileSelectors";

import {
  CardProfilePropsType,
  MapDispatchToPropsType,
  OwnPropsType,
  ProfileContentPropsType,
} from "./profileTypes";

//? Lazy loading of components
const Sidebar = lazy(() => import("../../components/sidebar/Sidebar"));

//? Suspense components
const SuspendedSidebar = withSuspenseHOC<CardProfilePropsType | any>(Sidebar);

//? State
const mapStateToProps = (state: RootState): ProfileContentPropsType | any => {
  return {
    currentProfilePage: currentProfilePageSelector(state),
    loading: loadingSelector(state),
    postUsers: state.profilePage.postUsers,
  };
};

const ProfileContent: FC<ProfileContentPropsType> = ({
  currentProfilePage,
  loading,
  postUsers,
}) => {
  let { userId } = useParams() as any;

  const dispatch = useTypeDispatch();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
    dispatch(fetchUserStatusByIdTC(userId));
  });

  useEffect(() => {
    fetching();
  }, [dispatch, userId]);

  return (
    <>
      <SuspendedSidebar
        currentProfilePage={currentProfilePage}
        downloadSmallPhotoTC={downloadSmallPhotoTC}
        loading={loading}
      />

      <ProfileStyle>
        {loading ? (
          <ProfileContentLoader />
        ) : (
          <>
            <CreatePostStyle>
              <CreatePostForm />
              <CreatePostFormList />
            </CreatePostStyle>

            <PostsList postUsers={postUsers} />
          </>
        )}
      </ProfileStyle>
    </>
  );
};

//? <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState> - в connect потрібно передати дженериком 4 параметра: 1 - props, які ми прокинули в компоненту, 2 - mapDispatchToProps: ф-ї (AC or TC), 3 - власні параметри, які ми створимо в компоненті, 4 - mapStateToProps: initialState (RootState), який ми прокидуємо з reducer (profileReducer).

//? Ф-я compose працює з права -> на ліво: перебирає всі наші створені обробники (ф-ї, хоки і тд.)
export default compose<ComponentType>(
  connect<
    ProfileContentPropsType,
    MapDispatchToPropsType,
    OwnPropsType,
    RootState
  >(mapStateToProps, {
    //? Коли ми передаємо TC або AC-функції в HOC connect, то він нам автоматично створює callback з такою ж самою назвою, параметрами і тд.

    // Санка (thunk creator) для отримання поточної сторінки іншого користувача
    fetchCurrentUserPageTC,

    // TC для отримання статусу іншого користувача
    fetchUserStatusByIdTC,

    // TC для загрузки фото
    downloadSmallPhotoTC,
  }),

  //? HOC для перенаправлення сторінки на <Auth />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(ProfileContent);
