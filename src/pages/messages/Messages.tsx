import { MessagesStyle } from "./messagesStyle";
import { ChatUsers } from "./chat-users/ChatUsers";
import { DialogUsers } from "./dialog-users/DialogUsers";

const Messages = () => {
  return (
    <MessagesStyle>
      <ChatUsers />
      <DialogUsers />
    </MessagesStyle>
  );
};

export default Messages;
