import {
  ComponentType,
  FC,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { ChatStyle } from "./chatStyle";

import { ChatUsers } from "./chat-users/ChatUsers";
import { DialogUsers } from "./dialog-users/DialogUsers";
import { CreateMessagePost } from "../../components/forms/create-message-post/CreateMessagePost";

import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { useFetching } from "../../hooks/useFetching";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";
import { useMyContext } from "../../context/Context";

const Chat: FC = () => {
  const [newWs, setNewWs] = useState<WebSocket | null>(null);
  const props = useMyContext();

  let { userId } = useParams() as any;

  const dispatch = useTypeDispatch();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  //? Отримуємо з'єднання з WebSocket
  const reconnectWsMemoized = useMemo(() => {
    return () => {
      let wsChannel: WebSocket;

      const closeHandler = (e: CloseEvent) => {
        console.log(
          "Socket is closed. Reconnect will be attempted in 3 seconds.",
          e.reason,
        );

        setTimeout(() => {
          reconnectWs();
        }, 3000);
      };

      //? Отримуємо з'єднання з WebSocket, якщо у нас або в когось відбулось роз'єднання з інтернетом, тобто повторно отримує WebSocket канал
      function reconnectWs() {
        if (wsChannel !== null) {
          wsChannel?.removeEventListener("close", closeHandler);
        }

        wsChannel = new WebSocket(
          "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx",
        );
        setNewWs(wsChannel);

        wsChannel?.addEventListener("close", closeHandler);

        //? Якщо помилка на сервері
        wsChannel?.addEventListener("error", (event) => {
          console.error("Socket encountered error: Closing socket", event);

          wsChannel.close();
        });
      }

      reconnectWs(); // recursion

      //? cleanup function - Витік пам'яті - це накопчення обробників, підписків.
      return () => {
        wsChannel?.removeEventListener("close", closeHandler);
        wsChannel?.close();
      };
    };
  }, []);

  //? Отримуємо смс по каналу WebSocket
  const messageHandlerMemo = useCallback(
    (e: MessageEvent) => {
      let receivedMessage = JSON.parse(e.data);

      // @ts-ignore
      props?.setMessages((prevMessages) => [
        ...prevMessages,
        ...receivedMessage,
      ]);
    },
    [props],
  );

  useEffect(() => {
    newWs?.addEventListener("message", messageHandlerMemo);

    // cleanup
    return () => newWs?.removeEventListener("message", messageHandlerMemo);
  }, [newWs, messageHandlerMemo]);

  useEffect(() => {
    reconnectWsMemoized();
  }, []);

  //? При перезавантаженні виводимо dropdown свого профілю
  useEffect(() => {
    fetching();
  }, [dispatch, userId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatStyle>
        <CreateMessagePost newWs={newWs} />

        <div className="messages">
          <ChatUsers />
          <DialogUsers messages={props?.messages} />
        </div>
      </ChatStyle>
    </Suspense>
  );
};

export default compose(
  connect(null, { fetchCurrentUserPageTC }),

  //? HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(Chat) as ComponentType;
