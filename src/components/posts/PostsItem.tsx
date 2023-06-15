import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";

import { IPostComment } from "../../type-models";

import { AvatarImgStyle } from "../../rootStyles";
import {
  PostsItemAboutStyle,
  PostsItemAddressStyle,
  PostsItemCommentsStyle,
  PostsItemDescriptionStyle,
  PostsItemStyle,
} from "./postsListStyle";

export const PostsItem = ({ user }: any) => {
  const [userComments, setUserComments] = useState<IPostComment[]>([]);
  console.log(userComments);

  async function getUserComments(limit = 5) {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
        {
          params: {
            _limit: limit,
          },
          headers: {
            Accept: "application/json",
          },
        },
      );
      setUserComments(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return error.message;
      }
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

        <PostsItemCommentsStyle>
          {userComments.map((comment: any) => (
            <p key={comment.id}> {comment.body} </p>
          ))}
        </PostsItemCommentsStyle>
      </PostsItemStyle>
    </>
  );
};
