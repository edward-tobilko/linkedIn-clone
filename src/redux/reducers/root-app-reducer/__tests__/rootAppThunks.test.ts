import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  setInitializedSuccessRootAppTC,
  setServerErrorTC,
  setInitializedSuccessRootAppAC,
  setServerErrorAC,
} from "../rootAppReducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Root App Thunks", () => {
  it("setInitializedSuccessRootAppTC dispatches the expected actions", async () => {
    const expectedActions = [setInitializedSuccessRootAppAC()];

    const store = mockStore();

    await store.dispatch(setInitializedSuccessRootAppTC());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("setServerErrorTC dispatches the expected actions", async () => {
    const serverError = { message: "Server error" };
    const expectedActions = [setServerErrorAC(serverError)];

    const store = mockStore();

    await store.dispatch(setServerErrorTC(serverError));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
