import { CreatePostForm } from "../../components/forms/create-post-form/CreatePostForm";
import { CreatePostFormList } from "../../components/forms/create-post-form/CreatePostFormList";
import { Sidebar } from "../../components/sidebar/Sidebar";

import { ContentStyle, ProfileStyle, CreatePostStyle } from "./profileStyle";

const Profile = () => {
  return (
    <ProfileStyle>
      <Sidebar />

      <ContentStyle>
        <CreatePostStyle>
          <CreatePostForm />
          <CreatePostFormList />
        </CreatePostStyle>
      </ContentStyle>
    </ProfileStyle>
  );
};

export default Profile;
