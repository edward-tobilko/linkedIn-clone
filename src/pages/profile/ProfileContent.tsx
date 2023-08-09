import { FC, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

import CreatePostForm from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import PostsList from "../../components/posts/PostsList";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Loader } from "../../components/UI/loader/Loader";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profileReducer";

import { useFetching } from "../../hooks/useFetching";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";

const mapStateToProps = (state: any) => {
  return {
    currentProfilePage: state.profilePage.currentProfilePage,
    loading: state.profilePage.loading,
  };
};

const ProfileContent: FC<any> = ({ currentProfilePage, loading }) => {
  let { userId }: any = useParams();

  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  if (!userId) {
    userId = 18850;
  } else if (!userId) {
    navigate("/auth");
  }

  const [getCurrentUserPageById] = useFetching(() => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  useEffect(() => {
    getCurrentUserPageById(userId);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Sidebar currentProfilePage={currentProfilePage} />

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
  }),

  // HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(ProfileContent);
