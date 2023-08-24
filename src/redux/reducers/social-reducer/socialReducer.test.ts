import socialReducer, {
  fetchSocialUsersTC,
  fetchSocialUsersOnChangedPageTC,
  setFollowUserTC,
  setUnFollowUserTC,
} from "./socialReducer";
import { socialUsersAPI } from "../../../api/API";

import socialTypeNames from "../../duck/typesName";
import actionCreators from "../../duck/actionCreators";

import { SocialUserType } from "./socialReducerTypes";

let mockDispatch: any;
let mockFollowUser: any;
let mockUnFollowUser: any;

beforeEach(() => {
  mockDispatch = jest.fn();
  mockFollowUser = jest.spyOn(socialUsersAPI, "followUser");
  mockUnFollowUser = jest.spyOn(socialUsersAPI, "unFollowUser");
});

afterEach(() => {
  mockFollowUser.mockRestore();
  mockUnFollowUser.mockRestore();
});

describe("Social Reducer Actions", () => {
  it("should return the initial state", () => {
    expect(socialReducer(undefined, {})).toEqual({
      socialUsers: [],
      totalUsersCount: 0,
      usersCount: 18,
      currentPage: 1,
      loading: false,
      followingBlockedBtn: [],
    });
  });

  it("should handle UN_FOLLOW", () => {
    const userId = "123";
    const initialState: any = {
      socialUsers: [{ id: "123", followed: true }],
      totalUsersCount: 1,
      usersCount: 18,
      currentPage: 1,
      loading: false,
      followingBlockedBtn: [],
    };
    const expectedState = {
      ...initialState,
      socialUsers: [{ id: "123", followed: false }],
    };

    expect(
      socialReducer(initialState, actionCreators.setUnFollowUserAC(userId)),
    ).toEqual(expectedState);
  });

  it("should handle SET_USERS", () => {
    const socialUsers: any = [{ id: "123", name: "John Doe", followed: true }];
    const initialState = {
      socialUsers: [],
      totalUsersCount: 0,
      usersCount: 18,
      currentPage: 1,
      loading: false,
      followingBlockedBtn: [],
    };
    const expectedState = {
      ...initialState,
      socialUsers,
    };

    expect(
      socialReducer(initialState, actionCreators.setUsersAC(socialUsers)),
    ).toEqual(expectedState);
  });

  it("should create an action to set follow user", () => {
    const testUserId = "123";
    const expectedAction = { type: socialTypeNames.FOLLOW, userId: testUserId };

    expect(actionCreators.setFollowUserAC(testUserId)).toEqual(expectedAction);
  });

  it("should create an action to set unFollow user", () => {
    const testUserId = "123";
    const expectedAction = {
      type: socialTypeNames.UN_FOLLOW,
      userId: testUserId,
    };

    expect(actionCreators.setUnFollowUserAC(testUserId)).toEqual(
      expectedAction,
    );
  });

  it("should create an action to set users", () => {
    const testSocialUsers: SocialUserType[] = [{ id: 1, name: "John Doe" }];
    const expectedAction = {
      type: socialTypeNames.SET_USERS,
      socialUsers: testSocialUsers,
    };

    expect(actionCreators.setUsersAC(testSocialUsers)).toEqual(expectedAction);
  });

  it("should create an action to set current page", () => {
    const testCurrentPage: any = null;
    const expectedAction = {
      type: socialTypeNames.SET_CURRENT_PAGE,
      currentPage: testCurrentPage,
    };

    expect(actionCreators.setCurrentPageAC(testCurrentPage)).toEqual(
      expectedAction,
    );
  });

  it("should create an action to set total users count", () => {
    const testTotalUsersCount = 30;
    const expectedAction = {
      type: socialTypeNames.SET_TOTAL_USERS_COUNT,
      totalUsersCount: testTotalUsersCount,
    };

    expect(actionCreators.setTotalUsersCountAC(testTotalUsersCount)).toEqual(
      expectedAction,
    );
  });

  it("should create an action to set loading", () => {
    const testLoading: any = false;
    const expectedAction = {
      type: socialTypeNames.LOADING,
      loading: testLoading,
    };

    expect(actionCreators.setLoadingAC(testLoading)).toEqual(expectedAction);
  });
});

describe("Social Reducer Thunk Actions", () => {
  it("should fetch social users and dispatch corresponding actions", async () => {
    const mockDispatch = jest.fn();
    const mockFetchSocialUsers = jest.spyOn(socialUsersAPI, "fetchSocialUsers");
    mockFetchSocialUsers.mockResolvedValue({
      items: [
        {
          name: "John Doe",
          id: 1,
          uniqueUrlName: null,
          photos: { small: null, large: null },
          status: "",
          followed: false,
        },
      ],
      totalCount: 1,
      error: null,
    });

    await fetchSocialUsersTC(1, 10)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(5); // Number of expected actions dispatched
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setCurrentPageAC(1),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setLoadingAC(true),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setLoadingAC(false),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setUsersAC([
        {
          name: "John Doe",
          id: 1,
          uniqueUrlName: null,
          photos: { small: null, large: null },
          status: "",
          followed: false,
        },
      ]),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setTotalUsersCountAC(1),
    );

    mockFetchSocialUsers.mockRestore(); // Restore the original function
  });

  it("should fetch social users on changed page and dispatch corresponding actions", async () => {
    const mockDispatch = jest.fn();
    const mockFetchChangedPageUsers = jest.spyOn(
      socialUsersAPI,
      "fetchChangedPageUsers",
    );
    mockFetchChangedPageUsers.mockResolvedValue({
      items: [
        {
          name: "Jane Doe",
          id: 2,
          uniqueUrlName: null,
          photos: { small: null, large: null },
          status: "",
          followed: true,
        },
      ],
      totalCount: 1,
      error: null,
    });

    await fetchSocialUsersOnChangedPageTC(2, 10)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(4); // Number of expected actions dispatched
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setCurrentPageAC(2),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setLoadingAC(true),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setLoadingAC(false),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setUsersAC([
        {
          name: "Jane Doe",
          id: 2,
          uniqueUrlName: null,
          photos: { small: null, large: null },
          status: "",
          followed: true,
        },
      ]),
    );

    mockFetchChangedPageUsers.mockRestore(); // Restore the original function
  });

  it("should follow a user and dispatch actions", async () => {
    const userId = "123";
    const mockData = { resultCode: 0 };
    mockFollowUser.mockResolvedValue(mockData);

    await setFollowUserTC(userId)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(3);
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setFollowingBlockedBtnAC(true, userId),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setFollowUserAC(userId),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setFollowingBlockedBtnAC(false, userId),
    );
  });

  it("should unFollow a user and dispatch actions", async () => {
    const userId = "123";
    const mockData = { resultCode: 0 };
    mockUnFollowUser.mockResolvedValue(mockData);

    await setUnFollowUserTC(userId)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(3);
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setFollowingBlockedBtnAC(true, userId),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setUnFollowUserAC(userId),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      actionCreators.setFollowingBlockedBtnAC(false, userId),
    );
  });
});
