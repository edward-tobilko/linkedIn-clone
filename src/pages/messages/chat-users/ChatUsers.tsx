import { useState } from "react";

import { ChatUsersStyle } from "./chatUsersStyle";

import { ChatUser } from "./ChatUser";

export const ChatUsers = () => {
  const [chatUsers, setChatUsers] = useState([
    { id: 7, name: "Anna Young" },
    { id: 1, name: "Sophia Lee" },
    { id: 3, name: "Julia Cox" },
    { id: 8, name: "James Carter" },
    { id: 5, name: "Richard Bell" },
    { id: 2, name: "John Doe" },
  ]);

  return (
    <ChatUsersStyle>
      {chatUsers.map((chatUser) => (
        <ChatUser key={chatUser.id} chatUser={chatUser} />
      ))}
    </ChatUsersStyle>
  );
};
