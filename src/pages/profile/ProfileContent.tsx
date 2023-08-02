import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
// import { connect } from "react-redux";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

import CreatePostForm from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import PostsList from "../../components/posts/PostsList";
import { Sidebar } from "../../components/sidebar/Sidebar";

// import { setCurrentUserPageAC } from "../../redux/reducers/profileReducer";
import { useFetching } from "../../hooks/useFetching";

// // Container component
// const mapState = (state: any) => {
//   return {
//     currentProfilePage: state.profilePage.currentProfilePage,
//   };
// };

// Pure component
const ProfileContent: FC = () => {
  const [currentUserPage, setCurrentUserPage] = useState(null);
  let { userId }: any = useParams();
  const navigate = useNavigate();

  if (!userId) {
    userId = 18850;

    if (!userId) {
      navigate("/login");
    }
  }

  const [getCurrentUserPageById] = useFetching(async () => {
    await axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response: any) => {
        setCurrentUserPage(response.data);
      });
  });

  useEffect(() => {
    getCurrentUserPageById(userId);
  }, []);

  return (
    <>
      <Sidebar currentUserPage={currentUserPage} />

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

export default ProfileContent;

// export default connect(mapState, {
//   // Показуємо поточну сторінку іншого користувача
//   setCurrentUserPageAC,
// })(ProfileContent);
