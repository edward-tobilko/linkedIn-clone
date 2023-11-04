import { useEffect } from "react";

import { ChatUsersStyle } from "./chatUsersStyle";

import { ChatUser } from "./ChatUser";

import {
  useTypeDispatch,
  useTypeSelector,
} from "../../../hooks/useTypeSelector";
import { getChatUsersTC } from "../../../redux/reducers/chat-reducer/chatReducer";

const ChatUsers = () => {
  const dispatch = useTypeDispatch();
  const chatUsers = useTypeSelector((state) => state.chatPage.chatUsers);

  useEffect(() => {
    dispatch(getChatUsersTC());
  }, [dispatch]);

  return (
    <ChatUsersStyle>
      {chatUsers != null ? (
        <>
          {[...chatUsers]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((chatUser) => (
              <ChatUser key={chatUser.id} chatUser={chatUser} />
            ))}
        </>
      ) : null}
    </ChatUsersStyle>
  );
};

export default ChatUsers;
