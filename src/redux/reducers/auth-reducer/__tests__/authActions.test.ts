import authReducer, { initialState, actions } from "../authReducer";

describe("authReducer", () => {
  it("should handle SET-IS-AUTH action", () => {
    const action = actions.setIsAuthAC(1, "test@example.com", "user", true);
    const newState = authReducer(initialState, action);

    expect(newState).toEqual({
      id: 1,
      email: "test@example.com",
      login: "user",
      isAuth: true,
      captchaUrl: "",
      authLoginBtnLoading: false,
    });
  });

  it("should handle CAPTCHA action", () => {
    const action = actions.setCaptchaAC("captcha-url");
    const newState = authReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      captchaUrl: "captcha-url",
    });
  });

  it("should handle AUTH-LOGIN-BTN-LOADING action", () => {
    const action = actions.setAuthLoginBtnLoadingAC(true);
    const newState = authReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      authLoginBtnLoading: true,
    });
  });
});
