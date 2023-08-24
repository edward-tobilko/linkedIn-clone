import {
  setInitializedSuccessRootAppAC,
  setInitializedSuccessRootAppTC,
} from "./rootAppReducer";
import { setIsAuthTC } from "../auth-reducer/authReducer";

import rootAppTypeNames from "../../duck/typesName";

describe("Root App Reducer Actions", () => {
  it("should create an action to set initialized success", () => {
    const expectedAction = {
      type: rootAppTypeNames.INITIALIZED_SUCCESS_ROOT_APP,
    };
    expect(setInitializedSuccessRootAppAC()).toEqual(expectedAction);
  });
});

describe("Root App Reducer Thunk Actions", () => {
  it("should dispatch actions for setting initialized success", async () => {
    const mockDispatch = jest.fn();
    const mockSetIsAuthTC = jest.fn();
    (setIsAuthTC as jest.Mock).mockReturnValue(mockSetIsAuthTC);

    await setInitializedSuccessRootAppTC()(mockDispatch);

    expect(mockSetIsAuthTC).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(setInitializedSuccessRootAppAC());
  });
});
