import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

import CreatePostForm from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import PostsList from "../../components/posts/PostsList";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Loader } from "../../components/UI/loader/Loader";

import {
  fetchCurrentUserPageTC,
  fetchUserStatusByIdTC,
  updateUserStatusTC,
} from "../../redux/reducers/profileReducer";
import { RootState } from "../../redux/store";

import { useFetching } from "../../hooks/useFetching";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

type ProfileContentProps = {
  currentProfilePage: any;
  loading: boolean;
  status: string;
};

type UseParamsProps = {
  userId: string;
};

const mapStateToProps = (state: RootState | any) => {
  return {
    currentProfilePage: state.profilePage.currentProfilePage,
    loading: state.profilePage.loading,
    status: state.profilePage.status,
  };
};

const ProfileContent: FC<ProfileContentProps> = ({
  currentProfilePage,
  loading,
  status,
}) => {
  let { userId } = useParams<keyof UseParamsProps>() as UseParamsProps;

  const dispatch = useTypeDispatch();

  const [getCurrentUserPageById] = useFetching(() => {
    dispatch(fetchCurrentUserPageTC(userId));
    dispatch(fetchUserStatusByIdTC(userId));
  });

  useEffect(() => {
    getCurrentUserPageById();
  }, [dispatch]);

  if (!userId) {
    userId = "29793";
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Sidebar
            currentProfilePage={currentProfilePage}
            status={status}
            updateUserStatusTC={updateUserStatusTC}
          />

          <ProfileStyle>
            <CreatePostStyle>
              <CreatePostForm />
              <CreatePostFormList />
            </CreatePostStyle>

            <PostsList />
          </ProfileStyle>
        </>
      )}
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
  }),

  // HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(ProfileContent);
