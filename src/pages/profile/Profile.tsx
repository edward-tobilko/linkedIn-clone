import { FC } from "react";

import CreatePostForm from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import PostsList from "../../components/posts/PostsList";

import { ProfileStyle, CreatePostStyle } from "./profileStyle";
import { Sidebar } from "../../components/sidebar/Sidebar";

const Profile: FC<any> = () => {
  return (
    <>
      <Sidebar />

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

export default Profile;
