import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IMessagesProps } from "../../../context/contextTypes";

import { DialogUserStyle } from "./dialogUsersStyle";
import { AvatarImgStyle } from "../../../rootStyles";

export const DialogUser: FC<{ dialogUser: IMessagesProps }> = ({
  dialogUser,
}) => {
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
      />

      <div className="dialog__user">
        <div className="dialog__user-header">
          <NavLink to={`/profile/${dialogUser.userId}`}>
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
