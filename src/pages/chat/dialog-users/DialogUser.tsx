import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { DialogUserStyle } from "./dialogUsersStyle";
import { AvatarImgStyle } from "../../../rootStyles";
import { MessagesPropsType } from "../../../api/apiTypes";

export const DialogUser: FC<{ dialogUser: MessagesPropsType }> = React.memo(
  ({ dialogUser }) => {
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
            <NavLink
              to={`/profile/${dialogUser.userId}`}
              className="dialog__user-header-link"
            >
              {dialogUser.userName}
            </NavLink>
            <p className="dialog__user-header-time"> Current time </p>
          </div>

          <div className="dialog__user-content">
            <p className="dialog__user-content-msg">{dialogUser.message}</p>
          </div>
        </div>
      </DialogUserStyle>
    );
  },
);
