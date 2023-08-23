import { ChatUsersStyle } from "./chatUsersStyle";

import { ChatUser } from "./ChatUser";
import { useMyContext } from "../../../context/Context";

export const ChatUsers = () => {
  const props: any = useMyContext();

  return (
    <ChatUsersStyle>
      {[...props?.chatUsers]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((chatUser) => (
          <ChatUser key={chatUser.id} chatUser={chatUser} />
        ))}
    </ChatUsersStyle>
  );
};
