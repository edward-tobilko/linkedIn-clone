import { socialUsersAPI } from "../../api/API";
import { RootDispatch } from "../store";

const FOLLOW = "follow";
const UN_FOLLOW = "un-follow";
const SET_USERS = "set-users";
const SET_CURRENT_PAGE = "set-current-page";
const SET_TOTAL_USERS_COUNT = "set-total-users-count";
const LOADING = "loading";
const FOLLOWING_BLOCKED_BTN = "following-blocked-btn";

type SocialUserPhotosType = {
  small: any;
  large: any;
};

export type SocialUserType = {
  name: string;
  id: number;
  uniqueUrlName: any;
  photos: SocialUserPhotosType;
  status: string;
  followed: boolean;
};

type InitialStateType = {
  socialUsers: SocialUserType[];
  totalUsersCount: number;
  usersCount: number;
  currentPage: number;
  loading: boolean;
  followingBlockedBtn: any;
  fake: number;
};

type fetchSocialUsersOnChangedPageDataType = {
  items: SocialUserType[];
  totalCount: number;
  error: any;
};

const initialState: InitialStateType = {
  socialUsers: [],
  totalUsersCount: 0, // загальна к-сть користувачів
  usersCount: 18, // к-сть користувачів на одній сторінці
  currentPage: 1, // поточна активна сторінка
  loading: false,
  followingBlockedBtn: [], // для засвітлювання кнопки, щоб не натиснути більше ніж один раз поки запит йде на сервер

  // Для прикладу рендера компоненти SocialContent
  fake: 2,
};

// Reducer
const socialReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // Для прикладу рендера компоненти SocialContent
    case "FAKE":
      return { ...state, fake: state.fake + 1 };

    // Додаємо користувача
    case FOLLOW:
      return {
        ...state,
        socialUsers: state.socialUsers.map((socialUser: SocialUserType) => {
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
        socialUsers: state.socialUsers.map((socialUser: SocialUserType) => {
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
export const setFollowUserAC = (userId: string) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const setUnFollowUserAC = (userId: string) => {
  return {
    type: UN_FOLLOW,
    userId,
  };
};

export const setUsersAC = (socialUsers: SocialUserType[]) => {
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

export const setFollowingBlockedBtnAC = (loading: boolean, userId: string) => {
  return {
    type: FOLLOWING_BLOCKED_BTN,
    loading,
    userId,
  };
};

export default socialReducer;

// TC: Thunk creator - anonym function and HOC - fetchSocialUsersTC

// Санка (thunk creator) для отримання користувачів
export const fetchSocialUsersTC = (currentPage: number, usersCount: number) => {
  return (dispatch: RootDispatch) => {
    dispatch(setLoadingAC(true));

    socialUsersAPI
      .fetchSocialUsers(currentPage, usersCount)
      .then((data: fetchSocialUsersOnChangedPageDataType) => {
        dispatch(setCurrentPageAC(currentPage));
        dispatch(setLoadingAC(false)); // Додаємо загрузчик;
        dispatch(setUsersAC(data.items)); // Встановлюємо (відображаємо) користувачів в стейт (на сторінці);
        dispatch(setTotalUsersCountAC(data.totalCount)); // Отримуємо всю к-сть користувачів з сервера;
      });
  };
};

// Санка (TC) для отримання користувачів при переходах по пагінації
export const fetchSocialUsersOnChangedPageTC = (
  pageNumber: number,
  usersCount: number,
) => {
  return (dispatch: RootDispatch) => {
    dispatch(setCurrentPageAC(pageNumber)); // Навігація постранічного вивода користувачів (показуємо стиль кнопок);
    dispatch(setLoadingAC(true));

    socialUsersAPI
      .fetchChangedPageUsers(pageNumber, usersCount)
      .then((data: fetchSocialUsersOnChangedPageDataType) => {
        dispatch(setLoadingAC(false));
        dispatch(setUsersAC(data.items));
      });
  };
};

// ТС для додавання користувача
export const setFollowUserTC = (userId: string) => {
  return (dispatch: RootDispatch) => {
    dispatch(setFollowingBlockedBtnAC(true, userId)); // Блокуємо кнопку при натисканні

    socialUsersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setFollowUserAC(userId)); // Діспатчимо виклик AC-ра, а не сам AC!
      }

      dispatch(setFollowingBlockedBtnAC(false, userId));
    });
  };
};

// ТС для видалення користувача
export const setUnFollowUserTC = (userId: string) => {
  return (dispatch: RootDispatch) => {
    dispatch(setFollowingBlockedBtnAC(true, userId));

    socialUsersAPI.unFollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUnFollowUserAC(userId));
      }

      dispatch(setFollowingBlockedBtnAC(false, userId));
    });
  };
};
