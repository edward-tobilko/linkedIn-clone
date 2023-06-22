import { FC } from "react";

import { AvatarImgStyle } from "../../rootStyles";
import {
  PostsItemAboutStyle,
  PostsItemAddressStyle,
  PostsItemCommentsStyle,
  PostsItemDescriptionStyle,
  PostsItemStyle,
} from "./postsListStyle";

import { IPostsUser } from "../../type-models";

interface IPostItemProps {
  user: IPostsUser;
}

export const PostsItem: FC<IPostItemProps> = ({ user }) => {
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
                {user.name} <span> id: {user.id} </span>
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

        <PostsItemCommentsStyle>{user.company.bs}</PostsItemCommentsStyle>
      </PostsItemStyle>
    </>
  );
};
