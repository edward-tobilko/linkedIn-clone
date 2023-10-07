import { InitialStateType } from "../socialReducerTypes";

import socialReducer from "../socialReducer";
import actions from "../../../ducks/actionCreators";

describe("socialReducer", () => {
  let initialState: InitialStateType;

  beforeEach(() => {
    initialState = {
      socialUsers: [
        {
          name: "User-1",
          id: 1,
          uniqueUrlName: null,
          photos: { small: null, large: null },
          status: "",
          followed: false,
        },
        {
          name: "User-2",
          id: 2,
          uniqueUrlName: null,
          photos: { small: null, large: null },
          status: "",
          followed: false,
        },
        {
          name: "User-3",
          id: 3,
          uniqueUrlName: null,
          photos: { small: null, large: null },
          status: "",
          followed: false,
        },
      ],
      totalUsersCount: 0,
      usersCount: 18,
      currentPage: 1,
      loading: false,
      followingBlockedBtn: [],
    };
  });

  it("should handle FOLLOW action", () => {
    const userId = 1;
    const action = actions.setFollowUserAC(userId);
    const newState = socialReducer(initialState, action);

    expect(newState.socialUsers[0]?.followed).toBe(true);
  });

  it("should handle UN_FOLLOW action", () => {
    const userId = 1;
    const action = actions.setUnFollowUserAC(userId);
    const newState = socialReducer(initialState, action);

    expect(newState.socialUsers[0]?.followed).toBe(false);
  });

  it("should handle SET_USERS action", () => {
    const socialUsers = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
    ];
    const action = actions.setUsersAC(socialUsers);
    const newState = socialReducer(initialState, action);

    expect(newState.socialUsers).toEqual(socialUsers);
  });

  it("should handle SET_LOADING action", () => {
    const loading = true;
    const action = actions.setLoadingAC(loading);
    const newState = socialReducer(initialState, action);

    expect(newState.loading).toBe(loading);
  });

  it("should handle SET_FOLLOWING_BLOCKED_BTN action", () => {
    const userId = 1;
    const loading = true;
    const action = actions.setFollowingBlockedBtnAC(loading, userId);
    const newState = socialReducer(initialState, action);

    expect(newState.followingBlockedBtn).toEqual([userId]);
  });
});
