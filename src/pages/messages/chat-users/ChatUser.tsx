import { FC } from "react";
import { NavLink } from "react-router-dom";

import { ChatUserStyle } from "./chatUsersStyle";
import { AvatarImgStyle } from "../../../rootStyles";

import { IChatUsersType } from "../../../type-models";

interface IChatUserProps {
  chatUser: IChatUsersType;
}

export const ChatUser: FC<IChatUserProps> = ({ chatUser }) => {
  let pathChatUser = "/messages/" + chatUser.name + "/" + chatUser.id;

  return (
    <ChatUserStyle>
      <AvatarImgStyle
        width="40px"
        height="40px"
        src="https://place-hold.it/60"
        alt="ChatUsersAvatar"
      />
      <NavLink to={pathChatUser}>{chatUser.name}</NavLink>
    </ChatUserStyle>
  );
};
