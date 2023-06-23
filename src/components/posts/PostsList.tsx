import { FC } from "react";

import { PostsListStyle } from "./postsListStyle";
import { PostsItem } from "./PostsItem";
import { useTypeSelector } from "../../hooks/useTypeSelector";

export const PostsList: FC<any> = () => {
  const props = useTypeSelector((state) => state.profilePage);

  // async function getUsers(limit: any = 3) {
  //   try {
  //     await fetch(
  //       "https://jsonplaceholder.typicode.com/users?" +
  //         new URLSearchParams({
  //           _limit: limit,
  //         }),
  //     )
  //       .then((response) => response.json())
  //       .then((data) => props?.setUsers(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <PostsListStyle>
      {props.postUsers.map((user: any) => (
        <PostsItem key={user.id} user={user} />
      ))}
    </PostsListStyle>
  );
};
