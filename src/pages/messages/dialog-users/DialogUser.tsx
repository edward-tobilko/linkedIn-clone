import { FC } from "react";
import { NavLink } from "react-router-dom";

import { DialogUserStyle } from "./dialogUsersStyle";
import { AvatarImgStyle } from "../../../rootStyles";

import { IMessagesProps } from "../../../context/contextTypes";

export const DialogUser: FC<{ dialogUser: IMessagesProps }> = ({
  dialogUser,
}) => {
  return (
    <DialogUserStyle>
      <AvatarImgStyle
        width="40px"
        height="40px"
        src="https://place-hold.it/60"
        alt=""
        position={false}
        bottom="0"
        left="0"
      />

      <div className="dialog__user">
        <div className="dialog__user-header">
          <NavLink to={`/messages/${dialogUser.userId}`}>
            {dialogUser.userName}
          </NavLink>
        </div>

        <div className="dialog__user-content">
          <p> {dialogUser.message} </p>
        </div>
      </div>
    </DialogUserStyle>
  );
};
