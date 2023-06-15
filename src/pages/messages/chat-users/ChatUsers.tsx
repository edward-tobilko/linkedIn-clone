import { ChatUsersStyle } from "./chatUsersStyle";

import { ChatUser } from "./ChatUser";
import { useMyContext } from "../../../context/Context";

export const ChatUsers = () => {
  const props = useMyContext();

  return (
    <ChatUsersStyle>
      {props?.chatUsers.map((chatUser) => (
        <ChatUser key={chatUser.id} chatUser={chatUser} />
      ))}
    </ChatUsersStyle>
  );
};
