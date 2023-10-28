import { FC, useEffect, useRef } from "react";

import { IDialogUsersProps } from "./dialogUsersTypes";

import { DialogUsersStyle } from "./dialogUsersStyle";

import { DialogUser } from "./DialogUser";

export const DialogUsers: FC<IDialogUsersProps> = ({ messages }) => {
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
