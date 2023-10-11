import {
  addNewPostAC,
  changePostAC,
  setCurrentUserPageAC,
  setLoadingAC,
  setStatusAC,
} from "../profileReducer";

import {
  CREATE_NEW_POST,
  CHANGE_POST,
  SET_CURRENT_USER_PAGE,
  LOADING,
  SET_STATUS,
} from "../../../ducks/typesName";

describe("Profile Reducer Actions", () => {
  it("should create an action to add a new post", () => {
    const expectedAction = { type: CREATE_NEW_POST };
    expect(addNewPostAC()).toEqual(expectedAction);
  });

  it("should create an action to change post text", () => {
    const newText = "Hello, world!";
    const expectedAction = {
      type: CHANGE_POST,
      newPostText: newText,
    };
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
