import { FC } from "react";
import { UsersType } from "./myTasksTypes";

type GitHubUserType = {
  user: UsersType;
  selectedUser: UsersType | null;
  setSelectedUser: (selectedUser: UsersType | null) => void;
};

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
