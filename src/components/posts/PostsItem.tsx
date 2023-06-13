import { useEffect, useState } from "react";

import { AvatarImgStyle } from "../../rootStyles";
import {
  PostsItemAboutStyle,
  PostsItemAddressStyle,
  PostsItemComments,
  PostsItemDescriptionStyle,
  PostsItemStyle,
} from "./postsListStyle";

export const PostsItem = ({ user }: any) => {
  const [userComments, setUserComments] = useState<any>([]);

  async function getUserComments() {
    try {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts/7/comments",
      )
        .then((response) => response.json())
        .then((data) => setUserComments(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserComments();
  }, []);

  return (
    <>
      <PostsItemStyle>
        <PostsItemDescriptionStyle>
          <div style={{ display: "flex" }}>
            <AvatarImgStyle
              width="50px"
              height="50px"
              src="https://place-hold.it/70"
              alt="Avatar"
            />

            <PostsItemAboutStyle>
              <h2>
                {user.name} <span> {user.id}+ </span>
              </h2>
              <p>
                {user.company.catchPhrase} | <span> {user.company.name} </span>
              </p>
              <p> {user.email} </p>
            </PostsItemAboutStyle>
          </div>

          <PostsItemAddressStyle>
            <h2>
              {user.address.city} <span> | {user.address.street} </span>
            </h2>
            <p>{user.phone}</p>
          </PostsItemAddressStyle>
        </PostsItemDescriptionStyle>

        <PostsItemComments>
          {userComments.map((comment: any) => (
            <p key={comment.id}> {comment.body} </p>
          ))}
        </PostsItemComments>
      </PostsItemStyle>
    </>
  );
};
