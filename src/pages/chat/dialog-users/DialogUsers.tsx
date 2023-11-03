import { FC, useEffect, useRef, useState } from "react";

import { DialogUsersStyle } from "./dialogUsersStyle";

import { DialogUser } from "./DialogUser";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

export const DialogUsers: FC = () => {
  const [autoScroll, setAutoScroll] = useState(true);
  const [notification, setNotification] = useState("You have unread messages!");

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
    }
  }, [messages]);

  return (
    <DialogUsersStyle ref={chatContainerRef} onScroll={scrollHandler}>
      {messages?.map((dialogUser) => (
        <DialogUser key={dialogUser.id} dialogUser={dialogUser} />
      ))}
    </DialogUsersStyle>
  );
};
