import { FC } from "react";

import { AvatarImgStyle } from "../../rootStyles";
import {
  PostsItemAboutStyle,
  PostsItemAddressStyle,
  PostsItemCommentsStyle,
  PostsItemDescriptionStyle,
  PostsItemStyle,
} from "./postsListStyle";

import { IPostItemProps } from "./postsTypes";

export const PostsItem: FC<IPostItemProps> = ({ user, currentProfilePage }) => {
  return (
    <>
      <PostsItemStyle>
        <PostsItemDescriptionStyle>
          <div style={{ display: "flex" }}>
            {currentProfilePage?.userId === 29793 ? (
              <AvatarImgStyle
                width="50px"
                height="50px"
                src={
                  currentProfilePage?.photos?.small ||
                  "https://place-hold.it/70"
                }
                alt=""
              />
            ) : (
              <AvatarImgStyle
                width="50px"
                height="50px"
                src="https://place-hold.it/70"
                alt=""
              />
            )}

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
