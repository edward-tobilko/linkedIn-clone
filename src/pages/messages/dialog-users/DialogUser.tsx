import { FC } from "react";
import { NavLink } from "react-router-dom";

import { DialogUserStyle } from "./dialogUsersStyle";
import { AvatarImgStyle } from "../../../rootStyles";

import { IDialogUsers } from "../../../type-models";

interface IDialogUserProps {
  dialogUser: IDialogUsers;
}

export const DialogUser: FC<IDialogUserProps> = ({ dialogUser }) => {
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
          <p> {dialogUser.dataTime} </p>
        </div>

        <div className="dialog__user-content">
          <p> {dialogUser.voice.say} </p>
        </div>
      </div>
    </DialogUserStyle>
  );
};
