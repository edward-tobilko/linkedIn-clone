import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { DialogUserStyle } from "./dialogUsersStyle";
import { AvatarImgStyle } from "../../../rootStyles";

import { MessagesWithId } from "../../../redux/reducers/chat-reducer/chatReducerTypes";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

export const DialogUser: FC<{
  dialogUser: MessagesWithId;
}> = React.memo(({ dialogUser }) => {
  const file = useTypeSelector((state) => state.chatPage.file);

  return (
    <DialogUserStyle>
      <AvatarImgStyle
        width="40px"
        height="40px"
        src={dialogUser.photo ? dialogUser.photo : "https://place-hold.it/60"}
        alt=""
        position={false}
        bottom="0"
        left="0"
        display={true}
        width30px={true}
      />

      <div className="dialog__user">
        <div className="dialog__user-header">
          <NavLink
            to={`/profile/${dialogUser.userId}`}
            className="dialog__user-header-link"
          >
            {dialogUser.userName}
          </NavLink>
        </div>

        <div className="dialog__user-content">
          <p className="dialog__user-content-msg">{dialogUser.message}</p>

          {file && <img src={URL.createObjectURL(file)} alt="File" />}
        </div>
      </div>
    </DialogUserStyle>
  );
});
