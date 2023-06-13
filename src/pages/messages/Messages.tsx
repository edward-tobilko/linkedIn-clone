import { MessagesStyle } from "./messagesStyle";

import { ChatUsers } from "./chat-users/ChatUsers";
import { DialogUsers } from "./dialog-users/DialogUsers";
import { CreateMessagePost } from "../../components/forms/create-message-post/CreateMessagePost";

const Messages = () => {
  return (
    <>
      <MessagesStyle>
        <CreateMessagePost />

        <div className="messages">
          <ChatUsers />
          <DialogUsers />
        </div>
      </MessagesStyle>
    </>
  );
};

export default Messages;
