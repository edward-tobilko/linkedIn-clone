import { useEffect } from "react";

import { PostsListStyle } from "./postsListStyle";
import { PostsItem } from "./PostsItem";
import { useMyContext } from "../../context/Context";

export const PostsList = () => {
  const props = useMyContext();

  async function getUsers(limit: any = 3) {
    try {
      await fetch(
        "https://jsonplaceholder.typicode.com/users?" +
          new URLSearchParams({
            _limit: limit,
          }),
      )
        .then((response) => response.json())
        .then((data) => props?.setUsers(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <PostsListStyle>
      {props?.users.map((user) => (
        <PostsItem key={user.id} user={user} />
      ))}
    </PostsListStyle>
  );
};
