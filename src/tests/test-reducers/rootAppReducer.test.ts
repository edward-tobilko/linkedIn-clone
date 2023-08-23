import {
  setInitializedSuccessRootAppAC,
  setInitializedSuccessRootAppTC,
} from "../../redux/reducers/rootAppReducer";
import { setIsAuthTC } from "../../redux/reducers/authReducer";

import { INITIALIZED_SUCCESS_ROOT_APP } from "../../utils/reducer-types-name/reducerTypesName";

describe("Root App Reducer Actions", () => {
  it("should create an action to set initialized success", () => {
    const expectedAction = { type: INITIALIZED_SUCCESS_ROOT_APP };
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
