import { actions, setIsAuthTC } from "./authReducer";

import { authAPI } from "../../../api/API";

jest.mock("../../../api/API", () => ({
  authAPI: {
    authorizationMe: jest.fn(),
    getLoginApi: jest.fn(),
    logoutApi: jest.fn(),
    getCaptchaUrl: jest.fn(),
  },
}));

describe("Auth Reducer Actions", () => {
  it("should create an action to set is auth", () => {
    const id = 123;
    const email = "test@example.com";
    const login = "testUser";
    const isAuth = true;
    const expectedAction = {
      type: "SET-IS-AUTH",
      data: { id, email, login, isAuth },
    } as const;
    expect(actions.setIsAuthAC(id, email, login, isAuth)).toEqual(
      expectedAction,
    );
  });

  it("should create an action to set captcha", () => {
    const captcha = "mockCaptcha";
    const expectedAction = {
      type: "CAPTCHA",
      payload: { captcha },
    } as const;
    expect(actions.setCaptchaAC(captcha)).toEqual(expectedAction);
  });
});

describe("Auth Reducer Thunk Actions", () => {
  it("should dispatch actions for set is auth", async () => {
    const mockDispatch = jest.fn();
    const mockData: any = {
      resultCode: 0,
      data: { id: 123, email: "test@example.com", login: "testUser" },
    };
    const mockAction = jest.fn();

    (authAPI.authorizationMe as jest.Mock).mockResolvedValue({
      data: mockData,
    });

    await setIsAuthTC()(mockDispatch, mockData, mockAction);

    expect(mockDispatch).toHaveBeenCalledWith(
      actions.setIsAuthAC(
        mockData.data.id,
        mockData.data.email,
        mockData.data.login,
        true,
      ),
    );
  });
});
