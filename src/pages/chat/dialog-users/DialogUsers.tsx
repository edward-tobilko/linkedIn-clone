import { FC, useEffect, useRef, useState } from "react";

import { DialogUsersStyle } from "./dialogUsersStyle";

import { DialogUser } from "./DialogUser";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

export const DialogUsers: FC = () => {
  const [autoScroll, setAutoScroll] = useState(true);
  const [notification, setNotification] = useState(0);

  const messages = useTypeSelector((state) => state.chatPage.messages);

  const chatContainerRef = useRef<HTMLDivElement | null>(null); //? Ref for chat container

  //? Auto scroll not active if we aren't at the bottom
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;

    if (
      Math.abs(element.scrollHeight - element.scrollTop) -
        element.clientHeight <
      300
    ) {
      !autoScroll && setAutoScroll(true);
      setNotification(0);
    } else {
      autoScroll && setAutoScroll(false);
    }
  };

  useEffect(() => {
    if (autoScroll) {
      //? Scroll to the bottom when a new message arrives
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    } else {
      //? Calculate unread messages when not at the bottom
      const lastReadMessages = messages[messages.length - notification - 1];
      const newUnreadMessages = messages.filter(
        (unreadMsg) => unreadMsg.id > lastReadMessages.id,
      ).length;

      setNotification(newUnreadMessages);
    }
  }, [messages, autoScroll]);

  return (
    <DialogUsersStyle ref={chatContainerRef} onScroll={scrollHandler}>
      {messages?.map((dialogUser) => (
        <DialogUser key={dialogUser.id} dialogUser={dialogUser} />
      ))}

      {notification > 0 && (
        <div className="notification">
          You have {notification} unread
          {notification > 1 ? " messages" : "message"}
        </div>
      )}
    </DialogUsersStyle>
  );
};
