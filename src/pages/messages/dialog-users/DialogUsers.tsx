import { FC } from "react";

import { IDialogUsersProps } from "./dialogUsersTypes";

import { DialogUsersStyle } from "./dialogUsersStyle";

import { DialogUser } from "./DialogUser";

export const DialogUsers: FC<IDialogUsersProps> = ({ messages }) => {
  return (
    <DialogUsersStyle>
      {messages?.map((dialogUser) => (
        <DialogUser key={dialogUser.userId} dialogUser={dialogUser} />
      ))}
    </DialogUsersStyle>
  );
};
