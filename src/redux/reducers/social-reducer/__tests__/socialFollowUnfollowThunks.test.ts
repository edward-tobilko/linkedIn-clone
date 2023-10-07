import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { AnyAction } from "redux";

import {
  FollowUnfollowApiType,
  ResultCodesEnum,
} from "../../../../api/apiTypes";
import { InitialStateType } from "../socialReducerTypes";

import { RootState } from "../../../store";
import actionCreators from "../../../ducks/actionCreators";
import { socialUsersAPI } from "../../../../api/API";
import { setFollowUserTC, setUnFollowUserTC } from "../socialReducer";

jest.mock("../../../../api/API");
const mockedSocialUsersAPI = socialUsersAPI as jest.Mocked<
  typeof socialUsersAPI
>;

const result: FollowUnfollowApiType = {
  data: {},
  resultCode: ResultCodesEnum.ResultCodeSuccess,
  messages: [],
};

describe("socialThunks", () => {
  it("setFollowUserTC should dispatch the correct actions", async () => {
    //? Mock the followUser method on the mock instance
    mockedSocialUsersAPI.followUser.mockReturnValue(Promise.resolve(result));

    const initialState = {
      socialUsers: [],
      totalUsersCount: 0,
      usersCount: 18,
      currentPage: 1,
      loading: false,
      followingBlockedBtn: [],
    };

    const expectedActions = [
      actionCreators.setFollowingBlockedBtnAC(true, 1),
      actionCreators.setFollowUserAC(1),
      actionCreators.setFollowingBlockedBtnAC(false, 1),
    ];

    const store = configureMockStore<RootState | InitialStateType, AnyAction>([
      thunk,
    ])(initialState);

    await store.dispatch(setFollowUserTC(1));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("setUnFollowUserTC should dispatch the correct actions", async () => {
    //? Mock the unFollowUser method on the mock instance
    mockedSocialUsersAPI.unFollowUser.mockReturnValue(Promise.resolve(result));

    const initialState = {
      socialUsers: [],
      totalUsersCount: 0,
      usersCount: 18,
      currentPage: 1,
      loading: false,
      followingBlockedBtn: [],
    };

    const expectedActions = [
      actionCreators.setFollowingBlockedBtnAC(true, 1),
      actionCreators.setUnFollowUserAC(1),
      actionCreators.setFollowingBlockedBtnAC(false, 1),
    ];

    const store = configureMockStore<RootState | InitialStateType, AnyAction>([
      thunk,
    ])(initialState);

    await store.dispatch(setUnFollowUserTC(1));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
