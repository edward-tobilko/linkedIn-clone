import { SocialUserType } from "../../redux/reducers/social-reducer/socialReducerTypes";

type CalculatePaginationTotalCountPagesHelperResultType = {
  totalPagesCount: number;
  paginationLengthCount: number;
};

const calculatePaginationTotalCountPagesHelper = (
  totalItems: number,
  itemsPerPage: number,
  paginationLength: number,
): CalculatePaginationTotalCountPagesHelperResultType => {
  const totalPagesCount = Math.ceil(totalItems / itemsPerPage);
  const paginationLengthCount = Math.ceil(totalPagesCount / paginationLength);

  return { totalPagesCount, paginationLengthCount };
};

const followedUsersHelper = (chatUsers?: SocialUserType[]) => {
  const sidebarUsersFollowed = chatUsers?.filter(
    (followedUsers) => followedUsers.followed,
  );

  return sidebarUsersFollowed;
};

export { calculatePaginationTotalCountPagesHelper, followedUsersHelper };
