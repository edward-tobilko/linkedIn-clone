import { FC, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
  followUserAC,
  unFollowUserAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setLoadingAC,
} from "../../redux/reducers/socialReducer";

import { useFetching } from "../../hooks/useFetching";

import { SocialUsersListStyle, SocialStyle } from "./socialStyle";

import { Loader } from "../../components/UI/loader/Loader";
import SocialUsersList from "./SocialUsersList";
import { Error } from "../../components/UI/error/Error";
import { Pagination } from "../../components/UI/paginations/Pagination";

// Container component
const mapState = (state: any) => {
  return {
    socialUsers: state.socialPage.socialUsers,
    totalUsersCount: state.socialPage.totalUsersCount,
    usersCount: state.socialPage.usersCount,
    currentPage: state.socialPage.currentPage,
    loading: state.socialPage.loading,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    // Додаємо користувача
    followDispatch: (userId: any) => {
      dispatch(followUserAC(userId)); // Діспатчимо виклик AC-ра, а не сам AC!!!
    },

    // Видаляємо користувача
    unFollowDispatch: (userId: any) => {
      dispatch(unFollowUserAC(userId));
    },

    // Встановлюємо (відображаємо) користувачів в стейт (на сторінці)
    setUsersDispatch: (newUsers: any) => {
      dispatch(setUsersAC(newUsers));
    },

    // Навігація постранічного вивода користувачів
    setCurrentPageDispatch: (pageNumber: any) => {
      dispatch(setCurrentPageAC(pageNumber));
    },

    // Отримуємо всю к-сть користувачів з сервера
    setTotalUsersCountDispatch: (totalUsers: any) => {
      dispatch(setTotalUsersCountAC(totalUsers));
    },

    // Додаємо загрузчик
    setLoadingDispatch: (isLoading: boolean) => {
      dispatch(setLoadingAC(isLoading));
    },
  };
};

const SocialContentContainer = connect(mapState, mapDispatch);

// Pure component
const SocialContent: FC<any> = ({
  socialUsers,
  setUsersDispatch,
  followDispatch,
  unFollowDispatch,
  usersCount,
  totalUsersCount,
  currentPage,
  setCurrentPageDispatch,
  setTotalUsersCountDispatch,
  setLoadingDispatch,
  loading,
}) => {
  const [getSocialUsers, loadingSocialUsers] = useFetching(async () => {
    setLoadingDispatch(true);
    await axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${usersCount}`,
      )
      .then((response: any) => {
        setLoadingDispatch(false);
        setUsersDispatch(response.data.items);
        setTotalUsersCountDispatch(response.data.totalCount);
      });
  });

  const onChangedPage = async (pageNumber: any) => {
    setCurrentPageDispatch(pageNumber);
    setLoadingDispatch(true);

    await axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${usersCount}`,
      )
      .then((res: any) => {
        setLoadingDispatch(false);
        setUsersDispatch(res.data.items);
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
        {socialUsers.length ? (
          <SocialUsersList
            socialUsers={socialUsers}
            followDispatch={followDispatch}
            unFollowDispatch={unFollowDispatch}
          />
        ) : loading ? null : (
          <Error />
        )}
      </SocialUsersListStyle>
    </SocialStyle>
  );
};

export default SocialContentContainer(SocialContent);
