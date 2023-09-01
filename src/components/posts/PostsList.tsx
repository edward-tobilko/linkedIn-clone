import { FC } from "react";
import { connect } from "react-redux";

import { PostsListEmptyStyle, PostsListStyle } from "./postsListStyle";

import { PostsItem } from "./PostsItem";

import { RootState } from "../../redux/store";

import { useProfilePosts } from "../../hooks/useProfilePosts";
import { useMyContext } from "../../context/Context";
import { IStateContext } from "../../context/contextTypes";

import { IPostsUser } from "./postsTypes";

// Container component
const mapStateToProps = (state: RootState | any) => {
  return {
    postUsers: state.profilePage.postUsers,
  };
};

const PostsListContainer = connect(mapStateToProps, null);

// Pure component
const PostsList: FC<any> = ({ postUsers, currentProfilePage }) => {
  const props: IStateContext | any = useMyContext();

  const searchedPosts = useProfilePosts(postUsers, props?.searchUsers);

  return (
    <PostsListStyle>
      {searchedPosts?.length !== 0 ? (
        <>
          {searchedPosts
            ?.map((user: IPostsUser) => (
              <PostsItem
                key={user.id}
                user={user}
                currentProfilePage={currentProfilePage}
              />
            ))
            .reverse()}
        </>
      ) : (
        <PostsListEmptyStyle>Posts not found!</PostsListEmptyStyle>
      )}
    </PostsListStyle>
  );
};

export default PostsListContainer(PostsList);
