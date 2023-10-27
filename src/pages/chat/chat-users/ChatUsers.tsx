import { ChatUsersStyle } from "./chatUsersStyle";

import { ChatUser } from "./ChatUser";
import { useMyContext } from "../../../context/Context";

export const ChatUsers = () => {
  const props = useMyContext();

  return (
    <ChatUsersStyle>
      {props?.chatUsers != null ? (
        <>
          {[...props.chatUsers]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((chatUser) => (
              <ChatUser key={chatUser.id} chatUser={chatUser} />
            ))}
        </>
      ) : null}
    </ChatUsersStyle>
  );
};
