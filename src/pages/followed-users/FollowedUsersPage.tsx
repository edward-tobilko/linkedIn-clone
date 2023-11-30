import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { useFetching } from "../../hooks/useFetching";
import { useTypeDispatch, useTypeSelector } from "../../hooks/useTypeSelector";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";

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
    const abortController = new AbortController();

    fetching();

    return () => {
      abortController.abort();
    };
  }, [dispatch, userId, fetching]);

  return (
    <div>
      {followedUsers?.map((followedUser) => (
        <div key={followedUser.id}> {followedUser.name} </div>
      ))}
    </div>
  );
};

export default compose(
  connect(null, { fetchCurrentUserPageTC }),
  withAuthRedirectHOC,
)(FollowedUsersPage);
