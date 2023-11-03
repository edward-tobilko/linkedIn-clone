import { useEffect, useState } from "react";

import { ChatUsersStyle } from "./chatUsersStyle";

import { ChatUser } from "./ChatUser";
import { instance } from "../../../api/API";

export const ChatUsers = () => {
  const [dataState, setDataState] = useState<any>([]);

  const fetchSocialUsers = async () => {
    const result = await instance.get("users?count=100&page=3");
    const data = result.data;

    setDataState(data.items);
  };

  const socialUsersFollowed = dataState.filter((user: any) => user.followed);

  useEffect(() => {
    fetchSocialUsers();
  }, []);

  return (
    <ChatUsersStyle>
      {socialUsersFollowed != null ? (
        <>
          {[...socialUsersFollowed]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((chatUser) => (
              <ChatUser key={chatUser.id} chatUser={chatUser} />
            ))}
        </>
      ) : null}
    </ChatUsersStyle>
  );
};
