import { CreatePostForm } from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import { PostsList } from "../../components/posts/PostsList";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

const Profile = () => {
  return (
    <ProfileStyle>
      <CreatePostStyle>
        <CreatePostForm />
        <CreatePostFormList />
      </CreatePostStyle>

      <PostsList />
    </ProfileStyle>
  );
};

export default Profile;
