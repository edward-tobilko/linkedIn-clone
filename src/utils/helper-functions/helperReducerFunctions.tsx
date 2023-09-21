import actionCreators from "../../redux/duck/actionCreators";
import { SocialUserType } from "../../redux/reducers/social-reducer/socialReducerTypes";

import { RootDispatch } from "../../redux/store";

// Social reducer
const followUnfollowAction = (
  socialUsers: SocialUserType[],
  socialUserId: number,
  userId: number,
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
  userId: number,
  apiMethod: (userId: number) => Promise<any>,
  setFollowUnfollow: any,
) => {
  dispatch(actionCreators.setFollowingBlockedBtnAC(true, userId)); //? Блокуємо кнопку при натисканні

  apiMethod(userId)
    .then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(setFollowUnfollow(userId)); //? Діспатчимо виклик AC-ра, а не сам AC!
      }

      dispatch(actionCreators.setFollowingBlockedBtnAC(false, userId));
    })
    .catch((error: Object) => console.log("Error:", error));
};

export default {
  setFollowUnfollowAC,
  followUnfollowAction,
};
