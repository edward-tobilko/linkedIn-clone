import { socialUsersAPI } from "../../../api/API";

import {
  InitialStateType,
  SocialActionsTypes,
  SocialThunkType,
  fetchSocialUsersOnChangedPageDataType,
} from "./socialReducerTypes";

import {
  FOLLOW,
  UN_FOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  LOADING,
  FOLLOWING_BLOCKED_BTN,
} from "../../ducks/typesName";

import actionCreators from "../../ducks/actionCreators";

import { setFollowUnfollowAC } from "../../../utils/helper-functions/helperReducerFunctions";

const initialState: InitialStateType = {
  socialUsers: [],
  totalUsersCount: 0, //? Загальна к-сть користувачів
  usersCount: 18, //? К-сть користувачів на одній сторінці
  currentPage: 1, //? Поточна активна сторінка
  loading: false,
  followingBlockedBtn: [], //? Для засвітлювання кнопки, щоб не натиснути більше ніж один раз поки запит йде на сервер
};

// Reducer
const socialReducer = (
  state = initialState,
  action: SocialActionsTypes,
): InitialStateType => {
  switch (action.type) {
    //? Додаємо користувача
    case FOLLOW:
      return {
        ...state,
        socialUsers: state.socialUsers.map((socialUser) => {
          if (socialUser.id === action.userId) {
            return { ...socialUser, followed: true };
          }

          return socialUser;
        }),
      };

    //? Видаляємо користувача
    case UN_FOLLOW:
      return {
        ...state,
        socialUsers: state.socialUsers.map((socialUser) => {
          if (socialUser.id === action.userId) {
            return { ...socialUser, followed: false };
          }

          return socialUser;
        }),
      };

    //? Встановлюємо (відображаємо) користувачів в стейт (на сторінці)
    case SET_USERS:
      return {
        ...state,
        socialUsers: [...action.socialUsers],
      };

    //? Навігація постранічного вивода користувачів
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    //? Отримуємо всю к-сть користувачів з сервера
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    //? Додаємо загрузчик
    case LOADING:
      return { ...state, loading: action.loading };

    //? Блокуємо кнопку при натисканні
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

export default socialReducer;

// TC: Thunk creator - anonym function and HOC - fetchSocialUsersTC
//? Санка (thunk creator) для отримання користувачів
export const fetchSocialUsersTC = (
  currentPage: number,
  usersCount: number,
): SocialThunkType => {
  return async (dispatch) => {
    dispatch(actionCreators.setLoadingAC(true));

    await socialUsersAPI
      .fetchSocialUsers(currentPage, usersCount)
      .then((data: fetchSocialUsersOnChangedPageDataType) => {
        dispatch(actionCreators.setCurrentPageAC(currentPage));
        dispatch(actionCreators.setLoadingAC(false)); // Додаємо загрузчик;
        dispatch(actionCreators.setUsersAC(data.items)); // Встановлюємо (відображаємо) користувачів в стейт (на сторінці);
        dispatch(actionCreators.setTotalUsersCountAC(data.totalCount)); // Отримуємо всю к-сть користувачів з сервера;
      })
      .catch((error) => console.log("Error:", error));
  };
};

//? Санка (TC) для отримання користувачів при переходах по пагінації
export const fetchSocialUsersOnChangedPageTC = (
  pageNumber: number,
  usersCount: number,
): SocialThunkType => {
  return (dispatch) => {
    dispatch(actionCreators.setCurrentPageAC(pageNumber)); // Навігація постранічного вивода користувачів (показуємо стиль кнопок);
    dispatch(actionCreators.setLoadingAC(true));

    socialUsersAPI
      .fetchChangedPageUsers(pageNumber, usersCount)
      .then((data: fetchSocialUsersOnChangedPageDataType) => {
        dispatch(actionCreators.setLoadingAC(false));
        dispatch(actionCreators.setUsersAC(data.items));
      })
      .catch((error) => console.log("Error:", error));
  };
};

//? ТС для додавання користувача
export const setFollowUserTC = (userId: number): SocialThunkType => {
  return async (dispatch) => {
    await setFollowUnfollowAC(
      dispatch,
      userId,
      socialUsersAPI.followUser.bind(socialUsersAPI),
      actionCreators.setFollowUserAC,
    );
  };
};

//? ТС для видалення користувача
export const setUnFollowUserTC = (userId: number): SocialThunkType => {
  return async (dispatch) => {
    await setFollowUnfollowAC(
      dispatch,
      userId,
      socialUsersAPI.unFollowUser.bind(socialUsersAPI),
      actionCreators.setUnFollowUserAC,
    );
  };
};
