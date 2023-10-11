import { setIsAuthTC, actions, setLoginTC } from "../authReducer";

// Mocking the authAPI module
jest.mock("../../../../api/API.tsx", () => ({
  authAPI: {
    authorizationMe: jest.fn(),
    getLoginApi: jest.fn(),
  },
}));

describe("Auth Thunks", () => {
  //? For setIsAuthTC thunk
  it("should dispatch setIsAuthAC on successful authorization", async () => {
    const mockedUserData = {
      data: {
        resultCode: 0,
        data: {
          id: 1,
          email: "test@example.com",
          login: "testUser",
        },
      },
    };

    // Mocking the API response
    require("../../../../api/API").authAPI.authorizationMe.mockResolvedValue(
      mockedUserData,
    );

    // Mocking the dispatch function
    const dispatch = jest.fn();

    // Calling the thunk
    // @ts-ignore
    await setIsAuthTC()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      actions.setIsAuthAC(1, "test@example.com", "testUser", true),
    );
  });

  it("should not dispatch any action on unsuccessful authorization", async () => {
    const mockedErrorResponse = {
      response: {
        data: {
          resultCode: 1,
          messages: ["Authorization failed"],
        },
      },
    };

    // Mocking the API response for an error
    require("../../../../api/API").authAPI.authorizationMe.mockRejectedValue(
      mockedErrorResponse,
    );

    const dispatch = jest.fn();

    // @ts-ignore
    await setIsAuthTC()(dispatch);

    expect(dispatch).not.toHaveBeenCalled();
  });

  //? For setLoginTC thunk
  it("should dispatch setIsAuthTC on successful login", async () => {
    const mockedLoginResponse = {
      data: {
        resultCode: 0,
      },
    };

    require("../../../../api/API").authAPI.getLoginApi.mockResolvedValue(
      mockedLoginResponse,
    );

    const dispatch = jest.fn();

    // @ts-ignore
    await setLoginTC("test@example.com", "password", true, "captcha")(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setIsAuthTC());
  });

  it("should dispatch setCaptchaTC on unsuccessful login with captcha required", async () => {
    const mockedLoginResponse = {
      data: {
        resultCode: 10,
      },
    };

    require("../../../../api/API").authAPI.getLoginApi.mockResolvedValue(
      mockedLoginResponse,
    );

    const dispatch = jest.fn();

    // @ts-ignore
    await setLoginTC("test@example.com", "password", true, "captcha")(dispatch);

    expect(dispatch).toHaveBeenCalledWith(actions.setCaptchaAC("captcha"));
  });

  it("should log an error on unsuccessful login without captcha required", async () => {
    const mockedErrorResponse = {
      response: {
        data: {
          resultCode: 1,
          messages: ["Login failed"],
        },
      },
    };

    require("../../../../api/API").authAPI.getLoginApi.mockRejectedValue(
      mockedErrorResponse,
    );

    console.error = jest.fn();

    const dispatch = jest.fn();

    // @ts-ignore
    await setLoginTC("test@example.com", "password", true, "captcha")(dispatch);

    expect(console.error).toHaveBeenCalledWith(
      "Login failed:",
      mockedErrorResponse,
    );
  });

  it("should dispatch setAuthLoginBtnLoadingAC(true) at the beginning and setAuthLoginBtnLoadingAC(false) at the end", async () => {
    require("../../../../api/API").authAPI.getLoginApi.mockResolvedValue({
      data: { resultCode: 0 },
    });

    const dispatch = jest.fn();

    // @ts-ignore
    await setLoginTC("test@example.com", "password", true, "captcha")(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      actions.setAuthLoginBtnLoadingAC(true),
    );
    expect(dispatch).toHaveBeenCalledWith(
      actions.setAuthLoginBtnLoadingAC(false),
    );
  });
});
