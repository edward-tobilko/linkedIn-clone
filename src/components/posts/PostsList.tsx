import { FC } from "react";

import { PostsListStyle } from "./postsListStyle";

import { PostsListProps } from "./postsTypes";

import { PostsItem } from "./PostsItem";

const PostsList: FC<PostsListProps> = ({ postUsers }) => {
  return (
    <PostsListStyle>
      {postUsers
        ?.map((user) => <PostsItem key={user.id} user={user} />)
        .reverse()}
    </PostsListStyle>
  );
};

export default PostsList;
