import { FC, useEffect, useState } from "react";
import axios from "axios";

import { MyTasksStyle } from "./myTasksStyle";

import { SearchUsersType, UsersType } from "./myTasksTypes";

import GitHubUser from "./GitHubUser";
import GitHubUserDetails from "./GitHubUserDetails";
import GitHubSearchUsers from "./GitHubSearchUsers";

const MyTasks: FC = () => {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UsersType | null>(null);
  const [searchUser, setSearchUser] = useState("user");

  useEffect(() => {
    axios
      .get<SearchUsersType>(
        `https://api.github.com/search/users?q=${searchUser}`,
      )
      .then((res) => {
        setUsers(res.data.items);
      });
  }, [searchUser]);

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser?.login;
    }
  }, [selectedUser]);

  return (
    <MyTasksStyle>
      <div className="container">
        <GitHubSearchUsers
          searchUser={searchUser}
          setSearchUser={setSearchUser}
        />

        <ul className="container__menu">
          {users.map((user) => (
            <GitHubUser
              key={user.id}
              user={user}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          ))}
        </ul>
      </div>

      <div className="container__details">
        <GitHubUserDetails selectedUser={selectedUser} />
      </div>
    </MyTasksStyle>
  );
};

export default MyTasks;
