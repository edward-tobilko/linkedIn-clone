import { FC, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { profileAPI } from "../../api/API";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

import CreatePostForm from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import PostsList from "../../components/posts/PostsList";
import { Sidebar } from "../../components/sidebar/Sidebar";

import { setCurrentUserPageAC } from "../../redux/reducers/profileReducer";
import { useFetching } from "../../hooks/useFetching";

const mapState = (state: any) => {
  return {
    currentProfilePage: state.profilePage.currentProfilePage,
  };
};

const ProfileContent: FC<any> = ({
  currentProfilePage,
  setCurrentUserPageAC,
}) => {
  let { userId }: any = useParams();
  const navigate = useNavigate();

  if (!userId) {
    userId = 18850;

    if (!userId) {
      navigate("/login");
    }
  }

  const [getCurrentUserPageById] = useFetching(async () => {
    await profileAPI.fetchCurrentUserPageById(userId).then((data: any) => {
      setCurrentUserPageAC(data);
    });
  });

  useEffect(() => {
    getCurrentUserPageById(userId);
  }, []);

  return (
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
  );
};

export default connect(mapState, {
  // Показуємо поточну сторінку іншого користувача
  setCurrentUserPageAC,
})(ProfileContent);
