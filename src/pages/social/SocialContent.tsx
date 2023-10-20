import { ComponentType, FC, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import {
  fetchSocialUsersTC,
  fetchSocialUsersOnChangedPageTC,
  setFollowUserTC,
  setUnFollowUserTC,
} from "../../redux/reducers/social-reducer/socialReducer";
import { RootState } from "../../redux/store";

import { SocialUsersListStyle, SocialStyle } from "./socialStyle";

import {
  MapDispatchToPropsType,
  OwnPropsType,
  SocialContentProps,
} from "./socialTypes";

import { useFetching } from "../../hooks/useFetching";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { SocialContentLoader } from "../../components/UI/loaders/social-loaders/SocialContentLoader";
import SocialUsersList from "./SocialUsersList";
import { Error } from "../../components/UI/error/Error";
import { Pagination } from "../../components/UI/paginations/Pagination";
import SocialNetworkManagement from "./social-sidebar/SocialNetworkManagement";

import {
  socialUsersReselector,
  totalUsersCountSelector,
  usersCountSelector,
  currentPageSelector,
  loadingSelector,
  followingBlockedBtnSelector,
  isAuthSelector,
  searchTermSelector,
  filteredUsersSelector,
} from "../../utils/selectors/socialSelectors";

const mapStateToProps = (state: RootState): SocialContentProps => {
  return {
    socialUsers: socialUsersReselector(state),
    totalUsersCount: totalUsersCountSelector(state),
    usersCount: usersCountSelector(state),
    currentPage: currentPageSelector(state),
    loading: loadingSelector(state),
    followingBlockedBtn: followingBlockedBtnSelector(state),
    isAuth: isAuthSelector(state),
    term: searchTermSelector(state),
    friend: filteredUsersSelector(state),
  };
};

//? <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState> - в connect потрібно передати дженериком 4 параметра: 1 - props, які ми прокинули в компоненту, 2 - mapDispatchToProps: ф-ї (AC or TC), 3 - власні параметри, які ми створимо в компоненті, 4 - mapStateToProps: initialState (RootState), який ми прокидуємо з reducer (socialReducer).

const SocialContentContainer = connect<
  SocialContentProps,
  MapDispatchToPropsType,
  OwnPropsType,
  RootState
>(mapStateToProps, {
  //? Коли ми передаємо TC або AC-функції в HOC connect, то він нам автоматично створює callback з такою ж самою назвою, параметрами і тд.

  // Санка (thunk creator) для отримання користувачів
  fetchSocialUsersTC,

  // Санка (TC) для отримання користувачів при переходах по пагінації
  fetchSocialUsersOnChangedPageTC,

  // ТС для додавання користувача
  setFollowUserTC,

  // ТС для видалення користувача
  setUnFollowUserTC,
});

const SocialContent: FC<SocialContentProps> = ({
  socialUsers,
  usersCount,
  totalUsersCount,
  currentPage,
  loading,
  followingBlockedBtn,
  isAuth,
  term,
  friend,
}) => {
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();

  // const location = useLocation();
  // const [searchParams] = useSearchParams(location.search);
  // console.log(searchParams.get(`?term=${term}&friend=${friend}`));

  const { fetching } = useFetching(async () => {
    dispatch(fetchSocialUsersTC(currentPage, usersCount, "", null));
  });

  const onChangedPage = (
    pageNumber: number,
    searchTerm: string,
    filteredFriends: null | boolean,
  ) => {
    dispatch(
      fetchSocialUsersOnChangedPageTC(
        pageNumber,
        usersCount,
        searchTerm,
        filteredFriends,
      ),
    );
  };

  useEffect(() => {
    //? Відображаємо URL посилання в адресній строкі
    navigate(`?term=${term}&friend=${friend}&page=${currentPage}`);
  }, [term, friend, currentPage]);

  useEffect(() => {
    fetching();
  }, [dispatch]);

  return (
    <>
      {isAuth && (
        <SocialNetworkManagement
          totalUsersCount={totalUsersCount}
          usersCount={usersCount}
          socialUsers={socialUsers}
        />
      )}

      <SocialStyle>
        <Pagination
          totalUsersCount={totalUsersCount}
          usersCount={usersCount}
          currentPage={currentPage}
          onChangedPage={onChangedPage}
          term={term}
          friend={friend}
        />

        {loading ? (
          <SocialContentLoader />
        ) : (
          <SocialUsersListStyle>
            {socialUsers?.length ? (
              <SocialUsersList
                socialUsers={socialUsers}
                followingBlockedBtn={followingBlockedBtn}
                setFollowUserTC={setFollowUserTC}
                setUnFollowUserTC={setUnFollowUserTC}
              />
            ) : loading ? null : (
              <Error>The list is empty...</Error>
            )}
          </SocialUsersListStyle>
        )}
      </SocialStyle>
    </>
  );
};

//? Ф-я compose працює з права -> на ліво: перебирає всі наші створені обробники (ф-ї, хоки і тд.)
export default compose<ComponentType>(SocialContentContainer)(SocialContent);
