import { FC } from "react";

import { PostsListEmptyStyle, PostsListStyle } from "./postsListStyle";

import { PostsListProps } from "./postsTypes";

import { PostsItem } from "./PostsItem";

import { useProfilePosts } from "../../hooks/useProfilePosts";
import { useMyContext } from "../../context/Context";
import { IStateContext } from "../../context/contextTypes";

const PostsList: FC<PostsListProps> = ({ postUsers }) => {
  const props: IStateContext | null = useMyContext();

  const searchedPosts = useProfilePosts(postUsers, props?.searchUsers);

  return (
    <PostsListStyle>
      {searchedPosts?.length !== 0 ? (
        <>
          {searchedPosts
            ?.map((user) => <PostsItem key={user.id} user={user} />)
            .reverse()}
        </>
      ) : (
        <PostsListEmptyStyle>Posts not found!</PostsListEmptyStyle>
      )}
    </PostsListStyle>
  );
};

export default PostsList;
