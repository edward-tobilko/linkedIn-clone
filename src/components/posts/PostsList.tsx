import { FC } from "react";
import { connect } from "react-redux";

import { PostsListEmptyStyle, PostsListStyle } from "./postsListStyle";

import { PostsItem } from "./PostsItem";
import { RootState } from "../../redux/store";
import { useProfilePosts } from "../../hooks/useProfilePosts";
import { useMyContext } from "../../context/Context";

// Container component
const mapState = (state: RootState) => {
  return {
    postUsers: state.profilePage.postUsers,
  };
};

const PostsListContainer = connect(mapState, null);

// Pure component
const PostsList: FC<any> = ({ postUsers }) => {
  const props = useMyContext();

  const searchedPosts = useProfilePosts(postUsers, props?.searchUsers);

  return (
    <PostsListStyle>
      {searchedPosts.length !== 0 ? (
        <>
          {searchedPosts.map((user: any) => (
            <PostsItem key={user.id} user={user} />
          ))}
        </>
      ) : (
        <PostsListEmptyStyle>Posts not found!</PostsListEmptyStyle>
      )}
    </PostsListStyle>
  );
};

export default PostsListContainer(PostsList);
