import { FC } from "react";

import { GitHubUserType } from "./gitHubTypes";

const GitHubUser: FC<GitHubUserType> = ({
  user,
  selectedUser,
  setSelectedUser,
}) => {
  return (
    <li
      className={
        selectedUser === user ? "selected__user" : "container__menu-list"
      }
      key={user.id}
      onClick={() => {
        if (user) setSelectedUser(user);
      }}
    >
      {user.login}
    </li>
  );
};

export default GitHubUser;
