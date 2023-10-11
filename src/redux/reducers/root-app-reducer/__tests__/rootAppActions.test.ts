import {
  INITIALIZED_SUCCESS_ROOT_APP,
  SET_SERVER_ERROR,
} from "../../../ducks/typesName";
import {
  setInitializedSuccessRootAppAC,
  setServerErrorAC,
} from "../rootAppReducer";

describe("Root App Actions", () => {
  it("setInitializedSuccessRootAppAC creates the correct action", () => {
    const expectedAction = {
      type: INITIALIZED_SUCCESS_ROOT_APP,
    };

    const action = setInitializedSuccessRootAppAC();

    expect(action).toEqual(expectedAction);
  });

  it("setServerErrorAC creates the correct action", () => {
    const serverError = { message: "Server error" };

    const expectedAction = {
      type: SET_SERVER_ERROR,
      serverError,
    };

    const action = setServerErrorAC(serverError);

    expect(action).toEqual(expectedAction);
  });
});
