import { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import {
  fetchSocialUsersTC,
  fetchSocialUsersOnChangedPageTC,
  setFollowUserTC,
  setUnFollowUserTC,
} from "../../redux/reducers/socialReducer";

import { SocialUsersListStyle, SocialStyle } from "./socialStyle";

import { useFetching } from "../../hooks/useFetching";

import { Loader } from "../../components/UI/loader/Loader";
import SocialUsersList from "./SocialUsersList";
import { Error } from "../../components/UI/error/Error";
import { Pagination } from "../../components/UI/paginations/Pagination";

const mapStateToProps = (state: any) => {
  return {
    socialUsers: state.socialPage.socialUsers,
    totalUsersCount: state.socialPage.totalUsersCount,
    usersCount: state.socialPage.usersCount,
    currentPage: state.socialPage.currentPage,
    loading: state.socialPage.loading,
    followingBlockedBtn: state.socialPage.followingBlockedBtn,
  };
};

const SocialContentContainer = connect(mapStateToProps, {
  // Санка (thunk creator) для отримання користувачів
  fetchSocialUsersTC,

  // Санка (TC) для отримання користувачів при переходах по пагінації
  fetchSocialUsersOnChangedPageTC,

  // ТС для додавання користувача
  setFollowUserTC,

  // ТС для видалення користувача
  setUnFollowUserTC,
});

const SocialContent: FC<any> = ({
  socialUsers,
  usersCount,
  totalUsersCount,
  currentPage,
  loading,
  followingBlockedBtn,
}) => {
  const dispatch: any = useDispatch();

  const [getSocialUsers] = useFetching(async () => {
    dispatch(fetchSocialUsersTC(currentPage, usersCount));
  });

  const onChangedPage = (pageNumber: number) => {
    dispatch(fetchSocialUsersOnChangedPageTC(pageNumber, usersCount));
  };

  useEffect(() => {
    getSocialUsers();
  }, [dispatch]);

  return (
    <SocialStyle>
      <Pagination
        totalUsersCount={totalUsersCount}
        usersCount={usersCount}
        currentPage={currentPage}
        onChangedPage={onChangedPage}
      />

      {loading && <Loader />}

      <SocialUsersListStyle>
        {socialUsers?.length ? (
          <SocialUsersList
            socialUsers={socialUsers}
            followingBlockedBtn={followingBlockedBtn}
            setFollowUserTC={setFollowUserTC}
            setUnFollowUserTC={setUnFollowUserTC}
          />
        ) : loading ? null : (
          <Error />
        )}
      </SocialUsersListStyle>
    </SocialStyle>
  );
};

export default SocialContentContainer(SocialContent);
