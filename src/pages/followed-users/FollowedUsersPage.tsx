import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "../../hooks/useFetching";
import { useTypeDispatch, useTypeSelector } from "../../hooks/useTypeSelector";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";

import { followedUsersHelper } from "../../utils/helper-functions/helperComponentFunctions";

const FollowedUsersPage: FC = () => {
  let { userId } = useParams() as any;

  const dispatch = useTypeDispatch();
  const chatUsers = useTypeSelector((state) => state.chatPage.chatUsers);

  const followedUsers = followedUsersHelper(chatUsers);

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  useEffect(() => {
    fetching();
  }, [dispatch, userId]);

  return (
    <div>
      {followedUsers?.map((followedUser) => (
        <div key={followedUser.id}> {followedUser.name} </div>
      ))}
    </div>
  );
};

export default FollowedUsersPage;
