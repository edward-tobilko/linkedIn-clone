import actionCreators from "../../redux/duck/actionCreators";
import { SocialUserType } from "../../redux/reducers/social-reducer/socialReducerTypes";

import { RootDispatch } from "../../redux/store";

// Social reducer
const followUnfollowAction = (
  socialUsers: SocialUserType[],
  socialUserId: string,
  userId: string,
  action: any,
) => {
  return socialUsers.map((socialUser: any) => {
    if (socialUser[socialUserId] === userId) {
      return { ...socialUser, ...action };
    }

    return socialUser;
  });
};

const setFollowUnfollowAC = (
  dispatch: RootDispatch,
  userId: string,
  apiMethod: any,
  setFollowUnfollow: any,
) => {
  dispatch(actionCreators.setFollowingBlockedBtnAC(true, userId)); // Блокуємо кнопку при натисканні

  apiMethod(userId).then((data: any) => {
    if (data.resultCode === 0) {
      dispatch(setFollowUnfollow(userId)); // Діспатчимо виклик AC-ра, а не сам AC!
    }

    dispatch(actionCreators.setFollowingBlockedBtnAC(false, userId));
  });
};

export default {
  setFollowUnfollowAC,
  followUnfollowAction,
};
