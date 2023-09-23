import { FC, useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

import CreatePostForm from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import PostsList from "../../components/posts/PostsList";
import { ProfileContentLoader } from "../../components/UI/loaders/profile-loaders/ProfileContentLoader";
import { ProfileContentSkeleton } from "../../components/UI/loaders/profile-loaders/ProfileContentSkeleton";

import {
  fetchCurrentUserPageTC,
  fetchUserStatusByIdTC,
  downloadSmallPhotoTC,
} from "../../redux/reducers/profile-reducer/profileReducer";
import { RootState } from "../../redux/store";

import { useFetching } from "../../hooks/useFetching";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import {
  currentProfilePageSelector,
  loadingSelector,
} from "../../utils/selectors/profileSelectors";

import {
  MapDispatchToPropsType,
  OwnPropsType,
  ProfileContentProps,
} from "./profileTypes";

// Lazy loading of components
const Sidebar = lazy(() => import("../../components/sidebar/Sidebar"));

const mapStateToProps = (state: RootState): ProfileContentProps => {
  return {
    currentProfilePage: currentProfilePageSelector(state),
    loading: loadingSelector(state),
    postUsers: state.profilePage.postUsers,
  };
};

const ProfileContent: FC<ProfileContentProps> = ({
  currentProfilePage,
  loading,
  postUsers,
}) => {
  // let { userId }: { userId: number | null } = useParams();
  let { userId }: any = useParams();

  const dispatch = useTypeDispatch();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    await dispatch(fetchCurrentUserPageTC(userId));
    await dispatch(fetchUserStatusByIdTC(userId));
  });

  useEffect(() => {
    fetching();
  }, [dispatch, userId]);

  return (
    <>
      <Suspense fallback={<ProfileContentSkeleton />}>
        <Sidebar
          currentProfilePage={currentProfilePage}
          downloadSmallPhotoTC={downloadSmallPhotoTC}
          loading={loading}
        />
      </Suspense>

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
export default compose(
  connect<ProfileContentProps, MapDispatchToPropsType, OwnPropsType, RootState>(
    mapStateToProps,
    {
      //? Коли ми передаємо TC або AC-функції в HOC connect, то він нам автоматично створює callback з такою ж самою назвою, параметрами і тд.

      // Санка (thunk creator) для отримання поточної сторінки іншого користувача
      fetchCurrentUserPageTC,

      // TC для отримання статусу іншого користувача
      fetchUserStatusByIdTC,

      // TC для загрузки фото
      downloadSmallPhotoTC,
    },
  ),

  // HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(ProfileContent);
