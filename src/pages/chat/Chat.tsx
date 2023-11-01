import { ComponentType, FC, Suspense, useEffect } from "react";
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
import {
  removeMessagesTC,
  setMessagesTC,
} from "../../redux/reducers/chat-reducer/chatReducer";

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
  }, []);

  //? При перезавантаженні виводимо dropdown свого профілю
  useEffect(() => {
    fetching();
  }, [dispatch, userId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatStyle>
        <CreateMessagePost />

        <div className="messages">
          <ChatUsers />
          <DialogUsers />
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
