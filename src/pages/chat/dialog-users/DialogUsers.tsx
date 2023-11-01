import { FC, useEffect, useRef } from "react";

import { DialogUsersStyle } from "./dialogUsersStyle";

import { DialogUser } from "./DialogUser";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

export const DialogUsers: FC = () => {
  const messages = useTypeSelector((state) => state.chatPage.messages);

  const chatContainerRef = useRef<HTMLDivElement | null>(null); //? Ref for chat container

  useEffect(() => {
    //? Scroll to the bottom when a new message arrives
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <DialogUsersStyle ref={chatContainerRef}>
      {messages?.map((dialogUser, index) => (
        <DialogUser key={index} dialogUser={dialogUser} />
      ))}
    </DialogUsersStyle>
  );
};
