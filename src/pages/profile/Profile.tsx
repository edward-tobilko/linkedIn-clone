import { FC } from "react";

import { CreatePostFormContainer } from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import { PostsList } from "../../components/posts/PostsList";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

const Profile: FC<any> = () => {
  return (
    <ProfileStyle>
      <CreatePostStyle>
        <CreatePostFormContainer />
        <CreatePostFormList />
      </CreatePostStyle>

      <PostsList />
    </ProfileStyle>
  );
};

export default Profile;
