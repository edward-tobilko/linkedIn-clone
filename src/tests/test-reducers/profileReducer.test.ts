import {
  addNewPostAC,
  changePostAC,
  setCurrentUserPageAC,
  setLoadingAC,
  setStatusAC,
  fetchCurrentUserPageTC,
  fetchUserStatusByIdTC,
  updateUserStatusTC,
} from "../../redux/reducers/profileReducer";
import { profileAPI } from "../../api/API";

import {
  CREATE_NEW_POST,
  CHANGE_POST,
  SET_CURRENT_USER_PAGE,
  LOADING,
  SET_STATUS,
} from "../../utils/reducer-types-name/reducerTypesName";

jest.mock("../../api/API.tsx", () => ({
  profileAPI: {
    fetchCurrentUserPageById: jest.fn(),
    fetchUserStatusById: jest.fn(),
    updateUserStatus: jest.fn(),
  },
}));

describe("Profile Reducer Actions", () => {
  it("should create an action to add a new post", () => {
    const expectedAction = { type: CREATE_NEW_POST };
    expect(addNewPostAC()).toEqual(expectedAction);
  });

  it("should create an action to change post text", () => {
    const newText = "Hello, world!";
    const expectedAction = { type: CHANGE_POST, newPostText: newText };
    expect(changePostAC(newText)).toEqual(expectedAction);
  });

  it("should create an action to current profile page", () => {
    const currentProfilePage = null;
    const expectedAction = {
      type: SET_CURRENT_USER_PAGE,
      currentProfilePage: currentProfilePage,
    };
    expect(setCurrentUserPageAC(currentProfilePage)).toEqual(expectedAction);
  });

  it("should create an action to loading", () => {
    const testLoading = false;
    const expectedAction = {
      type: LOADING,
      loading: testLoading,
    };
    expect(setLoadingAC(testLoading)).toEqual(expectedAction);
  });

  it("should create an action to status", () => {
    const newStatus = "Hello React";
    const expectedAction = {
      type: SET_STATUS,
      status: newStatus,
    };
    expect(setStatusAC(newStatus)).toEqual(expectedAction);
  });
});

describe("Profile Reducer Thunk Actions", () => {
  it("should dispatch actions for fetchCurrentUserPageTC", async () => {
    const mockDispatch = jest.fn();
    const mockData = "mockedData";

    (profileAPI.fetchCurrentUserPageById as jest.Mock).mockResolvedValue(
      mockData,
    );

    await fetchCurrentUserPageTC("userId")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setLoadingAC(true));
    expect(mockDispatch).toHaveBeenCalledWith(setCurrentUserPageAC(mockData));
    expect(mockDispatch).toHaveBeenCalledWith(setLoadingAC(false));
  });

  it("should dispatch actions for fetch user status by id", async () => {
    const mockDispatch = jest.fn();
    const mockData = "mockedData";

    (profileAPI.fetchUserStatusById as jest.Mock).mockResolvedValue(mockData);

    await fetchUserStatusByIdTC("userId")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setStatusAC(mockData));
  });

  it("should dispatch actions for update user status", async () => {
    const newStatus = "New status";

    const mockDispatch = jest.fn();
    const mockResponse = {
      resultCode: 0,
    };

    (profileAPI.updateUserStatus as jest.Mock).mockResolvedValue(mockResponse);

    await updateUserStatusTC(newStatus)(mockDispatch);

    expect(profileAPI.updateUserStatus).toHaveBeenCalledWith(newStatus);
    expect(mockDispatch).toHaveBeenCalledWith(setStatusAC(newStatus));
  });
});
