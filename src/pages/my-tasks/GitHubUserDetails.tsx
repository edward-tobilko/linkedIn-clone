import { FC, useEffect, useState } from "react";
import axios from "axios";

import { UsersType } from "./myTasksTypes";

type GitHubUserDetailsType = {
  selectedUser: UsersType | null;
};

const GitHubUserDetails: FC<GitHubUserDetailsType> = ({ selectedUser }) => {
  const [userDetails, setUserDetails] = useState<UsersType | null>(null);

  useEffect(() => {
    if (selectedUser) {
      axios
        .get<UsersType>(`https://api.github.com/users/${selectedUser?.login}`)
        .then((res) => setUserDetails(res.data));
    }
  }, [selectedUser]);

  return (
    <div>
      {userDetails && (
        <>
          <img src={userDetails?.avatar_url} alt="" />
          <br />
          <h2>{userDetails?.name}</h2>
          <p>Followers: {userDetails?.followers}</p>
          <p>Location: {userDetails?.location}</p>
          <p>Repositories: {userDetails?.public_repos}</p>
          <p>Following: {userDetails?.following}</p>
        </>
      )}
    </div>
  );
};

export default GitHubUserDetails;
