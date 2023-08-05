import { FC, useEffect } from "react";
import { connect } from "react-redux";

import { socialUsersAPI } from "../../api/API";

import {
  setFollowUserAC,
  setUnFollowUserAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setLoadingAC,
  setFollowingBlockedBtnAC,
} from "../../redux/reducers/socialReducer";

import { useFetching } from "../../hooks/useFetching";

import { SocialUsersListStyle, SocialStyle } from "./socialStyle";

import { Loader } from "../../components/UI/loader/Loader";
import SocialUsersList from "./SocialUsersList";
import { Error } from "../../components/UI/error/Error";
import { Pagination } from "../../components/UI/paginations/Pagination";

// Container component
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    // Додаємо користувача
    setFollowDispatch: (userId: number) => {
      dispatch(setFollowUserAC(userId)); // Діспатчимо виклик AC-ра, а не сам AC!!!
    },

    // Видаляємо користувача
    setUnFollowDispatch: (userId: number) => {
      dispatch(setUnFollowUserAC(userId));
    },

    // Встановлюємо (відображаємо) користувачів в стейт (на сторінці)
    setUsersDispatch: (newUsers: any) => {
      dispatch(setUsersAC(newUsers));
    },

    // Навігація постранічного вивода користувачів
    setCurrentPageDispatch: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },

    // Отримуємо всю к-сть користувачів з сервера
    setTotalUsersCountDispatch: (totalUsers: number) => {
      dispatch(setTotalUsersCountAC(totalUsers));
    },

    // Додаємо загрузчик
    setLoadingDispatch: (isLoading: boolean) => {
      dispatch(setLoadingAC(isLoading));
    },

    // Блокуємо кнопку при натисканні
    setFollowingBlockedBtnDispatch: (isLoading: boolean, userId: number) => {
      dispatch(setFollowingBlockedBtnAC(isLoading, userId));
    },
  };
};

const SocialContentContainer = connect(mapStateToProps, mapDispatchToProps);

const SocialContent: FC<any> = ({
  socialUsers,
  setUsersDispatch,
  setFollowDispatch,
  setUnFollowDispatch,
  usersCount,
  totalUsersCount,
  currentPage,
  setCurrentPageDispatch,
  setTotalUsersCountDispatch,
  setLoadingDispatch,
  loading,
  followingBlockedBtn,
  setFollowingBlockedBtnDispatch,
}) => {
  const [getSocialUsers, loadingSocialUsers] = useFetching(async () => {
    setLoadingDispatch(true);

    socialUsersAPI
      .fetchSocialUsers(currentPage, usersCount)
      .then((data: any) => {
        setLoadingDispatch(false);
        setUsersDispatch(data.items);
        setTotalUsersCountDispatch(data.totalCount);
      });
  });

  const onChangedPage = async (pageNumber: number) => {
    setCurrentPageDispatch(pageNumber);
    setLoadingDispatch(true);

    socialUsersAPI
      .fetchChangedPageUsers(pageNumber, usersCount)
      .then((data: any) => {
        setLoadingDispatch(false);
        setUsersDispatch(data.items);
      });
  };

  useEffect(() => {
    getSocialUsers();
  }, []);

  return (
    <SocialStyle>
      <Pagination
        totalUsersCount={totalUsersCount}
        usersCount={usersCount}
        currentPage={currentPage}
        setCurrentPageDispatch={setCurrentPageDispatch}
        onChangedPage={onChangedPage}
      />

      {loading && <Loader />}

      <SocialUsersListStyle>
        {socialUsers?.length ? (
          <SocialUsersList
            socialUsers={socialUsers}
            setFollowDispatch={setFollowDispatch}
            setUnFollowDispatch={setUnFollowDispatch}
            setFollowingBlockedBtnDispatch={setFollowingBlockedBtnDispatch}
            followingBlockedBtn={followingBlockedBtn}
          />
        ) : loading ? null : (
          <Error />
        )}
      </SocialUsersListStyle>
    </SocialStyle>
  );
};

export default SocialContentContainer(SocialContent);
