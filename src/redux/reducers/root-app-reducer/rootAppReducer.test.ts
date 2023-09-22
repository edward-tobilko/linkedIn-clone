import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import rootAppReducer, {
  setInitializedSuccessRootAppAC,
  setServerErrorAC,
  setInitializedSuccessRootAppTC,
  setServerErrorTC,
} from "./rootAppReducer";

describe("rootAppReducer", () => {
  it("should return the initial state", () => {
    const serverError = { message: "Sample error" };
    const action =
      setInitializedSuccessRootAppAC() && setServerErrorAC(serverError);
    const initialState = {
      initialized: false,
      serverError: null,
    };

    expect(rootAppReducer(undefined, action)).toEqual(initialState);
  });

  it("should handle INITIALIZED_SUCCESS_ROOT_APP", () => {
    const action = setInitializedSuccessRootAppAC();
    const expectedState = {
      initialized: true,
      serverError: null,
    };

    expect(rootAppReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle SET_SERVER_ERROR", () => {
    const serverError = { message: "Sample error" };
    const action = setServerErrorAC(serverError);
    const expectedState = {
      initialized: false,
      serverError: serverError,
    };

    expect(rootAppReducer(undefined, action)).toEqual(expectedState);
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("setInitializedSuccessRootAppTC", () => {
  it("dispatches setInitializedSuccessRootAppAC after setIsAuthTC", () => {
    const store: any = mockStore({});
    const expectedActions = [setInitializedSuccessRootAppAC()];

    return store.dispatch(setInitializedSuccessRootAppTC()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

const mockDispatch = jest.fn();

describe("setServerErrorTC", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches setServerErrorAC with the provided serverError object", () => {
    const serverError = { message: "Sample error" };

    setServerErrorAC({ type: "SET_SERVER_ERROR", serverError });

    const thunk: any = setServerErrorTC(serverError);
    thunk(mockDispatch);

    expect(setServerErrorAC).toHaveBeenCalledWith(serverError);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_SERVER_ERROR",
      serverError,
    });
  });
});
