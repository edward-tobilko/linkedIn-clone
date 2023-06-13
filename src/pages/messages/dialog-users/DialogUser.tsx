import React from "react";
import { NavLink } from "react-router-dom";

import { DialogUserStyle } from "./dialogUsersStyle";
import { AvatarImgStyle } from "../../../rootStyles";

export const DialogUser = ({ dialogUser }: any) => {
  let pathDialogUser = "/messages/" + dialogUser.name + "/" + dialogUser.id;

  return (
    <DialogUserStyle>
      <AvatarImgStyle
        width="40px"
        height="40px"
        src="https://place-hold.it/60"
        alt="DialogUsersAvatar"
      />

      <div className="dialog__user">
        <div className="dialog__user-header">
          <NavLink to={pathDialogUser}> {dialogUser.name} </NavLink>
          <span> {dialogUser.dataTime} </span>
        </div>

        <div className="dialog__user-content">
          <p> {dialogUser.say} </p>
        </div>
      </div>
    </DialogUserStyle>
  );
};
