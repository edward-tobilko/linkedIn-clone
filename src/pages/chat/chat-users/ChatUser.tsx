import { FC } from "react";
import { NavLink } from "react-router-dom";

import { ChatUserStyle } from "./chatUsersStyle";
import { AvatarImgStyle } from "../../../rootStyles";

import { IChatUserProps } from "./chatUsersTypes";

export const ChatUser: FC<IChatUserProps> = ({ chatUser }) => {
  let pathChatUser = `/profile/${chatUser.id}`;

  return (
    <ChatUserStyle>
      <AvatarImgStyle
        width="40px"
        height="40px"
        src={
          chatUser?.photos?.large
            ? chatUser?.photos?.large
            : "https://place-hold.it/60"
        }
        alt=""
        position={false}
        bottom="0"
        left="0"
      />
      <NavLink to={pathChatUser}>{chatUser.name}</NavLink>
    </ChatUserStyle>
  );
};
