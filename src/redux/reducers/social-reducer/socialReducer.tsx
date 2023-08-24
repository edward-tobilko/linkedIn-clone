import { socialUsersAPI } from "../../../api/API";
import { RootDispatch } from "../../store";

import socialTypeNames from "../../duck/typesName";
import actionCreators from "../../duck/actionCreators";

import helperReducerFunctions from "../../../utils/helper-functions/helperReducerFunctions";

import {
  InitialStateType,
  SocialUserType,
  fetchSocialUsersOnChangedPageDataType,
} from "./socialReducerTypes";

const initialState: InitialStateType = {
  socialUsers: [],
  totalUsersCount: 0, // загальна к-сть користувачів
  usersCount: 18, // к-сть користувачів на одній сторінці
  currentPage: 1, // поточна активна сторінка
  loading: false,
  followingBlockedBtn: [], // для засвітлювання кнопки, щоб не натиснути більше ніж один раз поки запит йде на сервер
};

// Reducer
const socialReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // Додаємо користувача
    case socialTypeNames.FOLLOW:
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
    case socialTypeNames.UN_FOLLOW:
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
    case socialTypeNames.SET_USERS:
      return {
        ...state,
        socialUsers: [...action.socialUsers],
      };

    // Навігація постранічного вивода користувачів
    case socialTypeNames.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    // Отримуємо всю к-сть користувачів з сервера
    case socialTypeNames.SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    // Додаємо загрузчик
    case socialTypeNames.LOADING:
      return { ...state, loading: action.loading };

    // Блокуємо кнопку при натисканні
    case socialTypeNames.FOLLOWING_BLOCKED_BTN:
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

export default socialReducer;

// TC: Thunk creator - anonym function and HOC - fetchSocialUsersTC

// Санка (thunk creator) для отримання користувачів
export const fetchSocialUsersTC = (currentPage: number, usersCount: number) => {
  return (dispatch: RootDispatch) => {
    dispatch(actionCreators.setLoadingAC(true));

    socialUsersAPI
      .fetchSocialUsers(currentPage, usersCount)
      .then((data: fetchSocialUsersOnChangedPageDataType) => {
        dispatch(actionCreators.setCurrentPageAC(currentPage));
        dispatch(actionCreators.setLoadingAC(false)); // Додаємо загрузчик;
        dispatch(actionCreators.setUsersAC(data.items)); // Встановлюємо (відображаємо) користувачів в стейт (на сторінці);
        dispatch(actionCreators.setTotalUsersCountAC(data.totalCount)); // Отримуємо всю к-сть користувачів з сервера;
      });
  };
};

// Санка (TC) для отримання користувачів при переходах по пагінації
export const fetchSocialUsersOnChangedPageTC = (
  pageNumber: number,
  usersCount: number,
) => {
  return (dispatch: RootDispatch) => {
    dispatch(actionCreators.setCurrentPageAC(pageNumber)); // Навігація постранічного вивода користувачів (показуємо стиль кнопок);
    dispatch(actionCreators.setLoadingAC(true));

    socialUsersAPI
      .fetchChangedPageUsers(pageNumber, usersCount)
      .then((data: fetchSocialUsersOnChangedPageDataType) => {
        dispatch(actionCreators.setLoadingAC(false));
        dispatch(actionCreators.setUsersAC(data.items));
      });
  };
};

// ТС для додавання користувача
export const setFollowUserTC = (userId: string) => {
  return (dispatch: RootDispatch) => {
    helperReducerFunctions.setFollowUnfollowAC(
      dispatch,
      userId,
      socialUsersAPI.followUser.bind(socialUsersAPI),
      actionCreators.setFollowUserAC,
    );
  };
};

// ТС для видалення користувача
export const setUnFollowUserTC = (userId: string) => {
  return (dispatch: RootDispatch) => {
    helperReducerFunctions.setFollowUnfollowAC(
      dispatch,
      userId,
      socialUsersAPI.unFollowUser.bind(socialUsersAPI),
      actionCreators.setUnFollowUserAC,
    );
  };
};
