import authTypeNames from "../../duck/typesName";

type SetIsAuthACType = {
  type: typeof authTypeNames.SET_IS_AUTH;
  data: Object;
};

type SetCaptchaACType = {
  type: typeof authTypeNames.CAPTCHA;
  payload: { captchaUrl: string };
};

type SetAuthLoginBtnLoadingType = {
  type: "AUTH-LOGIN-BTN-LOADING";
  authLoginBtnLoading: boolean;
};

export { SetIsAuthACType, SetCaptchaACType, SetAuthLoginBtnLoadingType };
