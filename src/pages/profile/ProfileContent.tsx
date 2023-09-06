import { FC, useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

import CreatePostForm from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import PostsList from "../../components/posts/PostsList";
import { ProfileContentLoader } from "../../components/UI/loaders/profile-content-loader/ProfileContentLoader";
import { ProfileContentSkeleton } from "../../components/UI/loaders/profile-content-loader/ProfileContentSkeleton";

import {
  fetchCurrentUserPageTC,
  fetchUserStatusByIdTC,
  updateUserStatusTC,
  downloadSmallPhotoTC,
} from "../../redux/reducers/profile-reducer/profileReducer";
import { RootState } from "../../redux/store";

import { useFetching } from "../../hooks/useFetching";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import {
  currentProfilePageSelector,
  loadingSelector,
  statusSelector,
} from "../../utils/selectors/profileSelectors";

import { ProfileContentProps, UseParamsProps } from "./profileTypes";

// Lazy loading of components
const Sidebar = lazy(() => import("../../components/sidebar/Sidebar"));

const mapStateToProps = (state: RootState) => {
  return {
    currentProfilePage: currentProfilePageSelector(state),
    loading: loadingSelector(state),
    status: statusSelector(state),
  };
};

const ProfileContent: FC<ProfileContentProps> = ({
  currentProfilePage,
  loading,
  status,
}) => {
  let { userId } = useParams<keyof UseParamsProps>() as UseParamsProps;

  if (!userId) {
    userId = "29793";
  }

  const dispatch = useTypeDispatch();

  const [getCurrentUserPageById] = useFetching(() => {
    dispatch(fetchCurrentUserPageTC(userId));
    dispatch(fetchUserStatusByIdTC(userId));
  });

  useEffect(() => {
    getCurrentUserPageById();
  }, [dispatch, userId]);

  return (
    <>
      <Suspense fallback={<ProfileContentSkeleton />}>
        <Sidebar
          currentProfilePage={currentProfilePage}
          status={status}
          updateUserStatusTC={updateUserStatusTC}
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

            <PostsList />
          </>
        )}
      </ProfileStyle>
    </>
  );
};

// Ф-я compose працює (перебирає всі наші створені обробники (ф-ї, хоки і тд.)) з права -> на ліво
export default compose(
  connect(mapStateToProps, {
    // Санка (thunk creator) для отримання поточної сторінки іншого користувача
    fetchCurrentUserPageTC,

    // TC для отримання статусу іншого користувача
    fetchUserStatusByIdTC,

    // TC для динамічної зміни статусу
    updateUserStatusTC,

    // TC для загрузки фото
    downloadSmallPhotoTC,
  }),

  // HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(ProfileContent);
