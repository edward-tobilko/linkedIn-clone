import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GitHubStyle } from "./gitHubStyle";

import { SearchUsersType, UsersType } from "./gitHubTypes";

import { instance } from "./gitHubApi";
import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";

import GitHubUser from "./GitHubUser";
import GitHubUserDetails from "./GitHubUserDetails";
import GitHubSearchUsers from "./GitHubSearchUsers";
import { GitHubSkeleton } from "../../components/UI/loaders/gitHub-loaders/GitHubSkeleton";

import { useFetching } from "../../hooks/useFetching";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

const GitHub: FC = () => {
  let initialSearchUserState = "edward-tobilko";

  const [users, setUsers] = useState<UsersType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UsersType | null>(null);
  const [searchTerm, setSearchTerm] = useState(initialSearchUserState);
  const [gitHubLoading, setGitHubLoading] = useState(false);

  let { userId } = useParams() as any;
  const dispatch = useTypeDispatch();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser?.login;
    }
  }, [selectedUser]);

  useEffect(() => {
    setGitHubLoading(true);
    instance
      .get<SearchUsersType>(`search/users?q=${searchTerm}`)
      .then((res) => {
        setUsers(res.data.items);
        setGitHubLoading(false);
      });

    fetching();
  }, [searchTerm, dispatch, userId]);

  return (
    <GitHubStyle>
      <div className="container">
        <GitHubSearchUsers
          searchTerm={searchTerm}
          findCallbackFunc={(value: string) => setSearchTerm(value)}
          resetCallbackFunc={() => setSearchTerm(initialSearchUserState)}
        />

        <ul className="container__menu">
          {gitHubLoading ? (
            <GitHubSkeleton />
          ) : (
            <>
              {users.map((user) => (
                <GitHubUser
                  key={user.id}
                  user={user}
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                />
              ))}
            </>
          )}
        </ul>
      </div>

      <div className="container__details">
        <GitHubUserDetails selectedUser={selectedUser} />
      </div>
    </GitHubStyle>
  );
};

export default GitHub;
