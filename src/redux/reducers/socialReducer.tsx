const FOLLOW = "follow";
const UN_FOLLOW = "un-follow";
const SET_USERS = "set-users";
const SET_CURRENT_PAGE = "set-current-page";
const SET_TOTAL_USERS_COUNT = "set-total-users-count";
const LOADING = "loading";
const FOLLOWING_BLOCKED_BTN = "following-blocked-btn";

const initialState = {
  socialUsers: [],
  totalUsersCount: 0, // загальна к-сть користувачів
  usersCount: 18, // к-сть користувачів на одній сторінці
  currentPage: 1, // поточна активна сторінка
  loading: false,
  followingBlockedBtn: [],
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
        socialUsers: [...action.socialUsers],
      };

    // Навігація постранічного вивода користувачів
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    // Отримуємо всю к-сть користувачів з сервера
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    // Додаємо загрузчик
    case LOADING:
      return { ...state, loading: action.loading };

    // Блокуємо кнопку при натисканні
    case FOLLOWING_BLOCKED_BTN:
      return {
        ...state,
        followingBlockedBtn: action.loading
          ? [...state.followingBlockedBtn, action.userId]
          : state.followingBlockedBtn.filter(
              (id: number) => id !== action.userId,
            ),
      };

    default:
      return state;
  }
};

// ACs
export const setFollowUserAC = (userId: number) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const setUnFollowUserAC = (userId: number) => {
  return {
    type: UN_FOLLOW,
    userId,
  };
};

export const setUsersAC = (socialUsers: any) => {
  return {
    type: SET_USERS,
    socialUsers,
  };
};

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUsersCountAC = (totalUsersCount: number) => {
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

export const setFollowingBlockedBtnAC = (loading: boolean, userId: number) => {
  return {
    type: FOLLOWING_BLOCKED_BTN,
    loading,
    userId,
  };
};

export default socialReducer;
