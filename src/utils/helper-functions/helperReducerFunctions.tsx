import { FollowUnfollowApiType, ResultCodesEnum } from "../../api/apiTypes";
import actionCreators from "../../redux/ducks/actionCreators";
import {
  SetFollowUserACType,
  SetUnFollowUserACType,
  SocialUserType,
} from "../../redux/reducers/social-reducer/socialReducerTypes";

import { RootState, TypedDispatch } from "../../redux/store";

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

const setFollowUnfollowAC = async (
  dispatch: TypedDispatch<RootState>,
  userId: number,
  apiMethod: (userId: number) => Promise<FollowUnfollowApiType>,
  setFollowUnfollow: (
    userId: number,
  ) => SetFollowUserACType | SetUnFollowUserACType,
) => {
  dispatch(actionCreators.setFollowingBlockedBtnAC(true, userId)); //? Блокуємо кнопку при натисканні

  try {
    const data = await apiMethod(userId);

    if (data.resultCode === ResultCodesEnum.ResultCodeSuccess) {
      dispatch(setFollowUnfollow(userId)); //? Діспатчимо виклик AC-ра, а не сам AC!
    }

    dispatch(actionCreators.setFollowingBlockedBtnAC(false, userId));
  } catch (error) {
    console.log("Server error:", error);
  }
};

// Chat reducer
const uniqueIdWithCurrentTimePlusIndex = (index: number | string) => {
  const date = new Date();
  let output = String(date.getTime());
  output = output + "_" + index;

  return output;
};

export {
  setFollowUnfollowAC,
  followUnfollowAction,
  uniqueIdWithCurrentTimePlusIndex,
};
