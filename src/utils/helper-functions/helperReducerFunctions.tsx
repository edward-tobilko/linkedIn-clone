import { ResultCodesEnum } from "../../api/apiTypes";
import actionCreators from "../../redux/ducks/actionCreators";
import {
  SetFollowUserACType,
  SetUnFollowUserACType,
  SocialUserType,
} from "../../redux/reducers/social-reducer/socialReducerTypes";

import { TypedDispatch } from "../../redux/store";

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
  dispatch: TypedDispatch,
  userId: number,
  // apiMethod: (userId: number) => Promise<void>,
  apiMethod: any,
  setFollowUnfollow: (
    userId: number,
  ) => SetFollowUserACType | SetUnFollowUserACType,
) => {
  dispatch(actionCreators.setFollowingBlockedBtnAC(true, userId)); //? Блокуємо кнопку при натисканні

  apiMethod(userId)
    .then((data: any) => {
      if (data.resultCode === ResultCodesEnum.ResultCodeSuccess) {
        dispatch(setFollowUnfollow(userId)); //? Діспатчимо виклик AC-ра, а не сам AC!
      }

      dispatch(actionCreators.setFollowingBlockedBtnAC(false, userId));
    })
    .catch((error: Object) => console.log("Error:", error));
};

export { setFollowUnfollowAC, followUnfollowAction };
