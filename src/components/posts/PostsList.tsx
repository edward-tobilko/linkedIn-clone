import { useEffect, useState } from "react";

import { PostsListStyle } from "./postsListStyle";
import { PostsItem } from "./PostsItem";

export const PostsList = () => {
  const [users, setUsers] = useState<any>([]);

  async function getUsers() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users")
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
      {users.map((user: any) => (
        <PostsItem key={user.id} user={user} />
      ))}
    </PostsListStyle>
  );
};
