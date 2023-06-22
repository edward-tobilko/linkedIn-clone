import { FC } from "react";

import { CreatePostForm } from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import { PostsList } from "../../components/posts/PostsList";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";

const Profile: FC<any> = ({ state, dispatch }) => {
  return (
    <ProfileStyle>
      <CreatePostStyle>
        <CreatePostForm newText={state.newText} dispatch={dispatch} />
        <CreatePostFormList />
      </CreatePostStyle>

      <PostsList posts={state.postUsers} />
    </ProfileStyle>
  );
};

export default Profile;
