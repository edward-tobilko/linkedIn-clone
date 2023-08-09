import { FC } from "react";
import { compose } from "redux";

import { MessagesStyle } from "./messagesStyle";

import { ChatUsers } from "./chat-users/ChatUsers";
import { DialogUsers } from "./dialog-users/DialogUsers";
import { CreateMessagePost } from "../../components/forms/create-message-post/CreateMessagePost";

import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";

const Messages: FC = () => {
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

export default compose(withAuthRedirectHOC)(Messages);
