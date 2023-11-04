import { ComponentType, FC, Suspense, lazy, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { ChatStyle } from "./chatStyle";

import { DialogUsers } from "./dialog-users/DialogUsers";
import { CreateMessagePost } from "../../components/forms/create-message-post/CreateMessagePost";
import { ChatSkeleton } from "../../components/UI/loaders/chat-loader/chatSkeleton";

import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { useFetching } from "../../hooks/useFetching";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";
import {
  removeMessagesTC,
  setMessagesTC,
} from "../../redux/reducers/chat-reducer/chatReducer";

//? Lazy loading of components
const ChatUsers = lazy(() => import("./chat-users/ChatUsers"));

const Chat: FC = () => {
  let { userId } = useParams() as any;

  const dispatch = useTypeDispatch();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  useEffect(() => {
    dispatch(setMessagesTC());

    return () => dispatch(removeMessagesTC());
  }, [dispatch]);

  //? При перезавантаженні виводимо dropdown свого профілю
  useEffect(() => {
    fetching();
  }, [dispatch, userId]);

  return (
    <ChatStyle>
      <CreateMessagePost />

      <div className="messages">
        <Suspense fallback={<ChatSkeleton />}>
          <ChatUsers />
        </Suspense>

        <DialogUsers />
      </div>
    </ChatStyle>
  );
};

export default compose(
  connect(null, { fetchCurrentUserPageTC }),

  //? HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(Chat) as ComponentType;
