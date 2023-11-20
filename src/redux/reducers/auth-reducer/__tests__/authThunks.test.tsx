import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { setIsAuthTC } from "../authReducer";
import { authAPI } from "../../../../api/API";

jest.mock("../../../../api/API.tsx", () => ({
  authAPI: {
    authorizationMe: jest.fn(),
    getLoginApi: jest.fn(),
  },
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("authThunks", () => {
  it("setIsAuthTC: dispatches the expected actions on successful authorization", async () => {
    const store = mockStore({});

    const mockUserData = {
      resultCode: 0,
      data: {
        id: 1,
        email: "test@example.com",
        login: "test_user",
      },
    };

    (authAPI.authorizationMe as jest.Mock).mockResolvedValue({
      data: mockUserData,
    });

    await store.dispatch(setIsAuthTC());

    const expectedActions = [
      {
        type: "SET-IS-AUTH",
        data: {
          id: mockUserData.data.id,
          email: mockUserData.data.email,
          login: mockUserData.data.login,
          isAuth: true,
        },
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
    expect(authAPI.authorizationMe).toHaveBeenCalled();
  });

  it("setIsAuthTC: does not dispatch actions on failed authorization", async () => {
    const store = mockStore({});

    const mockErrorResponse = {
      resultCode: 1,
      messages: ["Authorization failed"],
      data: {},
    };

    (authAPI.authorizationMe as jest.Mock).mockRejectedValue({
      response: { data: mockErrorResponse },
    });

    await store.dispatch(setIsAuthTC());

    const expectedActions: any = [];

    expect(store.getActions()).toEqual(expectedActions);
    expect(authAPI.authorizationMe).toHaveBeenCalled();
  });
});
