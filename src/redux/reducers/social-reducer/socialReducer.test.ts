import axios from "axios";

import socialReducer from "./socialReducer";
import actionCreators from "../../ducks/actionCreators";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchSocialUsersTC,
  fetchSocialUsersOnChangedPageTC,
  setFollowUserTC,
  setUnFollowUserTC,
} from "./socialReducer";
// import { socialUsersAPI } from "../../../api/API";

const userId = 1;
const initialState: any = {
  socialUsers: [{ id: userId, followed: false }],
};
const expectedState = {
  socialUsers: [{ id: userId, followed: true }],
};
const socialUsers = [{ id: 1, name: "John Doe" }];
const currentPage = 2;
const totalUsersCount = 30;
const loading = true;

// Tests for reducer
describe("socialReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      socialUsers: [],
      totalUsersCount: 0,
      usersCount: 18,
      currentPage: 1,
      loading: false,
      followingBlockedBtn: [],
    };
    const actions =
      actionCreators.setFollowUserAC(userId) &&
      actionCreators.setUnFollowUserAC(userId) &&
      actionCreators.setUsersAC(socialUsers) &&
      actionCreators.setCurrentPageAC(currentPage) &&
      actionCreators.setTotalUsersCountAC(totalUsersCount) &&
      actionCreators.setLoadingAC(loading) &&
      actionCreators.setFollowingBlockedBtnAC(true, userId);

    expect(socialReducer(undefined, actions)).toEqual(initialState);
  });

  // Actions
  it("should handle FOLLOW action", () => {
    const action = actionCreators.setFollowUserAC(userId);
    expect(socialReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle UN_FOLLOW action", () => {
    const action = actionCreators.setUnFollowUserAC(userId);
    expect(socialReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_USERS action", () => {
    const initialState: any = {
      socialUsers: [],
    };
    const expectedState = {
      socialUsers,
    };

    const action = actionCreators.setUsersAC(socialUsers);
    expect(socialReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_CURRENT_PAGE action", () => {
    const initialState: any = {
      currentPage: 1,
    };
    const expectedState = {
      currentPage,
    };

    const action = actionCreators.setCurrentPageAC(currentPage);
    expect(socialReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_TOTAL_USERS_COUNT action", () => {
    const initialState: any = {
      totalUsersCount: 0,
    };
    const expectedState = {
      totalUsersCount,
    };

    const action = actionCreators.setTotalUsersCountAC(totalUsersCount);
    expect(socialReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle LOADING action", () => {
    const initialState: any = {
      loading: false,
    };
    const expectedState = {
      loading,
    };

    const action = actionCreators.setLoadingAC(loading);
    expect(socialReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FOLLOWING_BLOCKED_BTN action", () => {
    const userId = 1;
    const initialState: any = {
      followingBlockedBtn: [],
    };
    const expectedState = {
      followingBlockedBtn: [userId],
    };

    const action = actionCreators.setFollowingBlockedBtnAC(true, userId);
    expect(socialReducer(initialState, action)).toEqual(expectedState);
  });
});

// Tests for Thunks
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// jest.mock("../../../api/socialUsersAPI");

describe("Thunks", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const store: any = mockStore({});

  it("should dispatch actions for fetchSocialUsersTC", () => {
    const currentPage = 1;
    const usersCount = 10;
    const items = [{ id: 1, name: "User 1" }];
    const totalCount = 1;
    const expectedActions = [
      { type: "SET_LOADING", loading: true },
      { type: "SET_CURRENT_PAGE", currentPage },
      { type: "SET_LOADING", loading: false },
      { type: "SET_USERS", socialUsers: items },
      { type: "SET_TOTAL_USERS_COUNT", totalUsersCount: totalCount },
    ];

    // Mock the API response
    (axios.get as jest.Mock).mockResolvedValue({
      items,
      totalCount,
    });

    // Dispatch the thunk
    return store
      .dispatch(fetchSocialUsersTC(currentPage, usersCount))
      .then(() => {
        // Check if the store dispatched the expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("should dispatch actions for fetchSocialUsersOnChangedPageTC", () => {
    const pageNumber = 2;
    const usersCount = 10;
    const items = [{ id: 2, name: "User 2" }];
    const expectedActions = [
      { type: "SET_CURRENT_PAGE", currentPage: pageNumber },
      { type: "SET_LOADING", loading: true },
      { type: "SET_LOADING", loading: false },
      { type: "SET_USERS", socialUsers: items },
    ];

    // Mock the API response
    (axios.get as jest.Mock).mockResolvedValue({
      items,
    });

    // Dispatch the thunk
    return store
      .dispatch(fetchSocialUsersOnChangedPageTC(pageNumber, usersCount))
      .then(() => {
        // Check if the store dispatched the expected actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("should dispatch actions for setFollowUserTC", () => {
    const userId = 3;
    const expectedActions = [
      { type: "SET_FOLLOW_USER", userId },
      { type: "SET_FOLLOWING_BLOCKED_BTN", loading: true, userId },
      { type: "SET_FOLLOWING_BLOCKED_BTN", loading: false, userId },
    ];

    // Mock the API response
    (axios.get as jest.Mock).mockResolvedValue({ resultCode: 0 });

    // Dispatch the thunk
    return store.dispatch(setFollowUserTC(userId)).then(() => {
      // Check if the store dispatched the expected actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should dispatch actions for setUnFollowUserTC", () => {
    const userId = 4;
    const expectedActions = [
      { type: "SET_UNFOLLOW_USER", userId },
      { type: "SET_FOLLOWING_BLOCKED_BTN", loading: true, userId },
      { type: "SET_FOLLOWING_BLOCKED_BTN", loading: false, userId },
    ];

    // Mock the API response
    (axios.get as jest.Mock).mockResolvedValue({ resultCode: 0 });

    // Dispatch the thunk
    return store.dispatch(setUnFollowUserTC(userId)).then(() => {
      // Check if the store dispatched the expected actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
