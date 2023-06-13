import React from "react";
import { NavLink } from "react-router-dom";

import { ChatUserStyle } from "./chatUsersStyle";
import { AvatarImgStyle } from "../../../rootStyles";

export const ChatUser = ({ chatUser }: any) => {
  let pathChatUser = "/messages/" + chatUser.name + "/" + chatUser.id;

  return (
    <ChatUserStyle>
      <AvatarImgStyle
        width="40px"
        height="40px"
        src="https://place-hold.it/50"
        alt="ChatUsersAvatar"
      />
      <NavLink to={pathChatUser}>{chatUser.name}</NavLink>
    </ChatUserStyle>
  );
};
