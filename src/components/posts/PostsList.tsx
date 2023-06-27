import { FC } from "react";
import { connect } from "react-redux";

import { PostsListStyle } from "./postsListStyle";

import { PostsItem } from "./PostsItem";
import { RootState } from "../../redux/store";

// Container component
const mapState = (state: RootState) => {
  return {
    postUsers: state.profilePage.postUsers,
  };
};

const PostsListContainer = connect(mapState, null);

// Pure component
const PostsList: FC<any> = ({ postUsers }) => {
  return (
    <PostsListStyle>
      {postUsers.map((user: any) => (
        <PostsItem key={user.id} user={user} />
      ))}
    </PostsListStyle>
  );
};

export default PostsListContainer(PostsList);
