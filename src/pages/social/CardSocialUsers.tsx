import { FC, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
  followUserAC,
  unFollowUserAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from "../../redux/reducers/socialReducer";

import { useFetching } from "../../hooks/useFetching";

import { CardSocialUsersListStyle, CardSocialUsersStyle } from "./socialStyle";

import { Loader } from "../../components/UI/loader/Loader";
import CardSocialUsersList from "./CardSocialUsersList";
import { Error } from "../../components/UI/error/Error";
import { Pagination } from "../../components/UI/paginations/Pagination";

// Container component
const mapState = (state: any) => {
  return {
    socialUsers: state.socialPage.socialUsers,
    totalUsersCount: state.socialPage.totalUsersCount,
    usersCount: state.socialPage.usersCount,
    currentPage: state.socialPage.currentPage,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    // Додаємо користувача
    followDispatch: (userId: any) => {
      dispatch(followUserAC(userId));
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
  };
};

const CardSocialUsersContainer = connect(mapState, mapDispatch);

// Pure component
const CardSocialUsers: FC<any> = ({
  socialUsers,
  setUsersDispatch,
  followDispatch,
  unFollowDispatch,
  usersCount,
  totalUsersCount,
  currentPage,
  setCurrentPageDispatch,
  setTotalUsersCountDispatch,
}) => {
  const [getSocialUsers, loadingSocialUsers] = useFetching(async () => {
    await axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${usersCount}`,
      )
      .then((response: any) => {
        setUsersDispatch(response.data.items);
        setTotalUsersCountDispatch(response.data.totalCount);
      });
  });

  const onChangedPage = async (pageNumber: any) => {
    setCurrentPageDispatch(pageNumber);

    await axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${usersCount}`,
      )
      .then((res: any) => {
        setUsersDispatch(res.data.items);
      });
  };

  useEffect(() => {
    getSocialUsers();
  }, []);

  return (
    <CardSocialUsersStyle>
      <Pagination
        totalUsersCount={totalUsersCount}
        usersCount={usersCount}
        currentPage={currentPage}
        setCurrentPageDispatch={setCurrentPageDispatch}
        onChangedPage={onChangedPage}
      />

      {loadingSocialUsers && <Loader />}

      <CardSocialUsersListStyle>
        {socialUsers.length ? (
          <CardSocialUsersList
            socialUsers={socialUsers}
            followDispatch={followDispatch}
            unFollowDispatch={unFollowDispatch}
          />
        ) : loadingSocialUsers ? null : (
          <Error />
        )}
      </CardSocialUsersListStyle>
    </CardSocialUsersStyle>
  );
};

export default CardSocialUsersContainer(CardSocialUsers);
