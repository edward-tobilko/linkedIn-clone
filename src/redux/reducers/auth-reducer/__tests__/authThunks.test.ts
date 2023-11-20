import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import {
  setIsAuthTC,
  setLoginTC,
  actions,
  setLogoutTC,
  setCaptchaTC,
} from "../authReducer";
import { authAPI } from "../../../../api/API";
import { ResultCodesEnum } from "../../../../api/apiTypes";

jest.mock("../../../../api/API.tsx", () => ({
  authAPI: {
    authorizationMe: jest.fn(),
    getLoginApi: jest.fn(),
  },
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("authThunks", () => {
  let mock: any;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

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

  it("setIsAuthTC: doesn't dispatch actions on failed authorization", async () => {
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

  it("setLoginTC: dispatches the expected actions on successful login", async () => {
    const store = mockStore({});

    const mockResponse = {
      resultCode: 0,
    };

    //? Mock Axios request
    mock.onPost("/api/login").reply(200, mockResponse);

    //? Replace with your actual login credentials
    const email = "test@example.com";
    const password = "password";
    const rememberMe = false;
    const captcha = "captcha";

    //? Dispatch the thunk
    await store.dispatch(setLoginTC(email, password, rememberMe, captcha));

    expect(store.getActions()).toEqual(
      expect.arrayContaining([
        actions.setAuthLoginBtnLoadingAC(true),
        // actions.setIsAuthAC(null, null, null, false), //! This is should be fixed.
        actions.setAuthLoginBtnLoadingAC(false),
      ]),
    );
  });

  it("setLoginTC: dispatches the expected actions on captcha error", async () => {
    const store = mockStore({});
    const mockResponse = {
      resultCode: 10,
      messages: ["Captcha error"],
      data: {},
    };

    mock.onPost("/api/login").reply(200, mockResponse);

    const email = "test@example.com";
    const password = "password";
    const rememberMe = false;
    const captcha = "captcha";

    await store.dispatch(setLoginTC(email, password, rememberMe, captcha));

    const expectedActions = [
      actions.setAuthLoginBtnLoadingAC(true),
      // actions.setCaptchaAC("captcha"), //! This is should be fixed.
      actions.setAuthLoginBtnLoadingAC(false),
    ];

    expect(store.getActions()).toEqual(expect.arrayContaining(expectedActions));
  });

  it("setLoginTC: dispatches the expected actions on general error", async () => {
    const store = mockStore({});
    const mockResponse = {
      resultCode: 1,
      messages: ["General error"],
      data: {},
    };

    mock.onPost("/api/login").reply(200, mockResponse);

    const email = "test@example.com";
    const password = "password";
    const rememberMe = false;
    const captcha = "captcha";

    await store.dispatch(setLoginTC(email, password, rememberMe, captcha));

    const expectedActions = [
      actions.setAuthLoginBtnLoadingAC(true),
      //! This is should be fixed (Here is must be some action to the error).
      actions.setAuthLoginBtnLoadingAC(false),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("setLogoutTC: dispatches the expected actions on successful logout", async () => {
    const store = mockStore({});
    const mockResponse = {
      resultCode: ResultCodesEnum.ResultCodeSuccess,
    };

    mock.onDelete("/api/logout").reply(200, mockResponse);

    await store.dispatch(setLogoutTC());

    const expectedActions = [actions.setIsAuthAC(null, null, null, false)]; //! This is should be fixed.

    expect(store.getActions()).toContainEqual(expectedActions);
  });

  it("setCaptchaTC: dispatches the expected actions on successful getCaptchaUrl", async () => {
    const store = mockStore({});
    const mockResponse = {
      data: {
        url: "mocked_captcha_url",
      },
    };

    mock.onGet("/api/captcha").reply(200, mockResponse);

    await store.dispatch(setCaptchaTC());

    expect(store.getActions()).toContainEqual([
      actions.setCaptchaAC("mocked_captcha_url"), //! This is should be fixed.
    ]);
  });
});
