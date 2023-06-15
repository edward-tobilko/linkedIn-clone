import { useEffect, useState } from "react";

import { IPostsUser } from "../../type-models";

import { PostsListStyle } from "./postsListStyle";
import { PostsItem } from "./PostsItem";

export const PostsList = () => {
  const [users, setUsers] = useState<IPostsUser[]>([]);

  async function getUsers(limit: any = 3) {
    try {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users?" +
          new URLSearchParams({
            _limit: limit,
          }),
      )
        .then((response) => response.json())
        .then((data) => setUsers(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <PostsListStyle>
      {users.map((user) => (
        <PostsItem key={user.id} user={user} />
      ))}
    </PostsListStyle>
  );
};
