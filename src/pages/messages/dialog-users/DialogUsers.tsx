import { DialogUsersStyle } from "./dialogUsersStyle";

import { DialogUser } from "./DialogUser";
import { useMyContext } from "../../../context/Context";

export const DialogUsers = () => {
  const props = useMyContext();

  return (
    <DialogUsersStyle>
      {props?.dialogUsers.map((dialogUser) => (
        <DialogUser key={dialogUser.id} dialogUser={dialogUser} />
      ))}
    </DialogUsersStyle>
  );
};
