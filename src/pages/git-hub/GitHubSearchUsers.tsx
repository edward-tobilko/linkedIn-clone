import { FC, useState, useEffect } from "react";

import { GitHubSearchUsersStyle } from "./gitHubStyle";

import { GitHubSearchUsersType } from "./gitHubTypes";

const GitHubSearchUsers: FC<GitHubSearchUsersType> = ({
  searchTerm,
  findCallbackFunc,
  resetCallbackFunc,
}) => {
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => setSearchUser(searchTerm), [searchTerm]);

  return (
    <GitHubSearchUsersStyle>
      <input
        type="search"
        value={searchUser}
        onChange={(e) => setSearchUser(e.currentTarget.value)}
      />
      <button onClick={() => findCallbackFunc(searchUser)}>Find</button>
      <button onClick={() => resetCallbackFunc()}>Reset</button>
    </GitHubSearchUsersStyle>
  );
};

export default GitHubSearchUsers;
