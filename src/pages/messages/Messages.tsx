import { ComponentType, FC, Suspense, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { IMessagesProps } from "../../context/contextTypes";

import { MessagesStyle } from "./messagesStyle";

import { ChatUsers } from "./chat-users/ChatUsers";
import { DialogUsers } from "./dialog-users/DialogUsers";
import { CreateMessagePost } from "../../components/forms/create-message-post/CreateMessagePost";

import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { useFetching } from "../../hooks/useFetching";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";
import { useMyContext } from "../../context/Context";

const Messages: FC = () => {
  const props = useMyContext();

  let { userId } = useParams() as any;

  const dispatch = useTypeDispatch();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  useEffect(() => {
    const newWs = new WebSocket(
      "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx",
    );

    //? Отримуємо смс по каналу WebSocket
    newWs.addEventListener("message", (e) => {
      let receivedMessage = JSON.parse(e.data) as IMessagesProps;

      // @ts-ignore
      props?.setMessages((prevMessages) => [
        ...prevMessages,
        receivedMessage as IMessagesProps,
      ]);
    });

    fetching();
  }, [dispatch, userId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MessagesStyle>
        <CreateMessagePost />

        <div className="messages">
          <ChatUsers />
          <DialogUsers messages={props?.messages} />
        </div>
      </MessagesStyle>
    </Suspense>
  );
};

export default compose(
  connect(null, { fetchCurrentUserPageTC }),

  //? HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(Messages) as ComponentType;
