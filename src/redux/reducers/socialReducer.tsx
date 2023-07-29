const FOLLOW = "follow";
const UN_FOLLOW = "un-follow";
const SET_USERS = "set-users";
const SET_CURRENT_PAGE = "set-current-page";
const SET_TOTAL_USERS_COUNT = "set-total-users-count";
const LOADING = "loading";

const initialState = {
  socialUsers: [],
  totalUsersCount: 0, // загальна к-сть користувачів
  usersCount: 18, // к-сть користувачів на одній сторінці
  currentPage: 40, // поточна активна сторінка
  loading: false,
};

const socialReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    // Додаємо користувача
    case FOLLOW:
      return {
        ...state,
        socialUsers: state.socialUsers.map((socialUser: any) => {
          if (socialUser.id === action.userId) {
            return { ...socialUser, followed: true };
          }

          return socialUser;
        }),
      };

    // Видаляємо користувача
    case UN_FOLLOW:
      return {
        ...state,
        socialUsers: state.socialUsers.map((socialUser: any) => {
          if (socialUser.id === action.userId) {
            return { ...socialUser, followed: false };
          }

          return socialUser;
        }),
      };

    // Встановлюємо (відображаємо) користувачів в стейт (на сторінці)
    case SET_USERS:
      return {
        ...state,
        socialUsers: [...action.newUsers],
      };

    // Навігація постранічного вивода користувачів
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    // Отримуємо всю к-сть користувачів з сервера
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    case LOADING:
      return { ...state, loading: action.loading };

    default:
      return state;
  }
};

// ACs
export const followUserAC = (userId: any) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unFollowUserAC = (userId: any) => {
  return {
    type: UN_FOLLOW,
    userId,
  };
};

export const setUsersAC = (newUsers: any) => {
  return {
    type: SET_USERS,
    newUsers,
  };
};

export const setCurrentPageAC = (currentPage: any) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUsersCountAC = (totalUsersCount: any) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

export const setLoadingAC = (loading: boolean) => {
  return {
    type: LOADING,
    loading,
  };
};

export default socialReducer;
