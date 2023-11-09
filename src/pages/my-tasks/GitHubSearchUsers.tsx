import { FC } from "react";

type GitHubSearchUsersType = {
  searchUser: string;
  setSearchUser: (searchUser: string) => void;
};

const GitHubSearchUsers: FC<GitHubSearchUsersType> = ({
  searchUser,
  setSearchUser,
}) => {
  return (
    <div>
      <input
        type="search"
        className="container__search"
        value={searchUser}
        onChange={(e) => setSearchUser(e.currentTarget.value)}
      />
      <button onClick={() => {}}>Find</button>
    </div>
  );
};

export default GitHubSearchUsers;
