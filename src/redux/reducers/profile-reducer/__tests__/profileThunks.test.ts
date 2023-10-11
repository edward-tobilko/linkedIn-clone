import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { CurrentProfilePageType } from "../../../../pages/profile/profileTypes";

import { profileAPI } from "../../../../api/API";
import {
  fetchCurrentUserPageTC,
  setLoadingAC,
  setCurrentUserPageAC,
  fetchUserStatusByIdTC,
  setStatusAC,
  setDownloadSmallPhotoAC,
  updateUserStatusTC,
  downloadSmallPhotoTC,
  profileEditModeTC,
} from "../profileReducer";

jest.mock("../../../../api/API.tsx", () => ({
  profileAPI: {
    fetchCurrentUserPageById: jest.fn(),
    fetchUserStatusById: jest.fn(),
    updateUserStatus: jest.fn(),
    downloadPhoto: jest.fn(),
    profileInfoEditMode: jest.fn(),
  },
}));

// Configure mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Profile Reducer Thunk Actions", () => {
  it("should dispatch actions for fetchCurrentUserPageTC", async () => {
    const mockDispatch = jest.fn();
    const mockData: any = "mockedData";

    (profileAPI.fetchCurrentUserPageById as jest.Mock).mockResolvedValue(
      mockData,
    );
    const mockAction = jest.fn();

    await fetchCurrentUserPageTC(2)(mockDispatch, mockData, mockAction);

    expect(mockDispatch).toHaveBeenCalledWith(setLoadingAC(true));
    expect(mockDispatch).toHaveBeenCalledWith(setCurrentUserPageAC(mockData));
    expect(mockDispatch).toHaveBeenCalledWith(setLoadingAC(false));
  });

  it("should dispatch actions for fetch user status by id", async () => {
    const expectedStatus = "mockedStatus";
    const userId = 1;

    //? Mock the API response data
    (profileAPI.fetchUserStatusById as jest.Mock).mockResolvedValue({
      data: expectedStatus,
    });

    const store = mockStore();

    //? Dispatch the thunk
    await store.dispatch(fetchUserStatusByIdTC(userId));

    expect(store.getActions()).toEqual([setStatusAC(expectedStatus)]);
  });

  it("should dispatch actions for update user status by id", async () => {
    const expectedStatus = "mockedStatus";

    (profileAPI.updateUserStatus as jest.Mock).mockResolvedValue({
      resultCode: 0,
    });

    const store = mockStore();

    await store.dispatch(updateUserStatusTC(expectedStatus));

    expect(store.getActions()).toEqual([setStatusAC(expectedStatus)]);
  });

  it("should dispatch actions for download photo file", async () => {
    const expectedMockedFile = new File(["file content"], "photo.jpg", {
      type: "image/jpeg",
    });

    (profileAPI.downloadPhoto as jest.Mock).mockResolvedValue({
      data: {
        resultCode: 0,
        data: {
          photos: { small: "mockedPhotoURL" },
        },
      },
    });

    const store = mockStore();

    await store.dispatch(downloadSmallPhotoTC(expectedMockedFile));

    expect(store.getActions()).toEqual([
      setLoadingAC(true),
      setDownloadSmallPhotoAC({ small: "mockedPhotoURL" }),
      setLoadingAC(false),
    ]);
  });

  it("should dispatch actions for profile edit mode", async () => {
    const mockProfileProperties: CurrentProfilePageType = {
      aboutMe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      contacts: {
        facebook: "https://facebook.com",
        website: "https://google.com",
        vk: "https://vk.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        youtube: "https://www.youtube.com",
        github: "https://github.com/edward-tobilko",
        mainLink: "https://google.com",
      },
      lookingForAJob: false,
      lookingForAJobDescription: "react / redux / typescript",
      fullName: "john_doe",
      userId: 29793,
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/29793/user-small.jpg?v=74",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/29793/user.jpg?v=74",
      },
    };

    (profileAPI.profileInfoEditMode as jest.Mock).mockResolvedValue({
      data: {
        resultCode: 0,
      },
    });

    const store = mockStore({
      authorization: {
        id: 2,
      },
    });

    // Mock the fetchCurrentUserPageTC action since it's being dispatched in the thunk
    jest.spyOn(store, "dispatch").mockImplementation(async () => {
      await Promise.resolve();
    });

    await store.dispatch(profileEditModeTC(mockProfileProperties));

    await Promise.resolve();

    expect(store.getActions()).toEqual([
      setLoadingAC(true),
      fetchCurrentUserPageTC(2),
      setLoadingAC(false),
    ]);
  });
});
