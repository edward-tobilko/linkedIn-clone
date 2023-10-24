import { ComponentType, FC, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { MessagesStyle } from "./messagesStyle";

import { ChatUsers } from "./chat-users/ChatUsers";
import { DialogUsers } from "./dialog-users/DialogUsers";
import { CreateMessagePost } from "../../components/forms/create-message-post/CreateMessagePost";

import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { useFetching } from "../../hooks/useFetching";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";

const Messages: FC = () => {
  let { userId } = useParams() as any;

  const dispatch = useTypeDispatch();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  useEffect(() => {
    fetching();
  }, [dispatch, userId]);

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

export default compose(
  connect(null, { fetchCurrentUserPageTC }),

  //? HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(Messages) as ComponentType;
