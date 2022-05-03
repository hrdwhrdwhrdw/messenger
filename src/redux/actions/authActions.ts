import { SET_AUTH_DATA, SET_CAPTCHA_URL } from "../../constants/constants";

export type SetAuthDataActionPayloadType = {
  userId: number;
  login: string;
  email: string;
  isAuth: boolean;
}

export type SetAuthDataActionType = {
  type: typeof SET_AUTH_DATA;
  payload: SetAuthDataActionPayloadType;
}

export type SetCaptchaActionType = {
  type: typeof SET_CAPTCHA_URL;
  payload: { captcha: string };
};

export const setAuthData = (
  userId: number,
  login: string,
  email: string,
  isAuth: boolean
): SetAuthDataActionType => ({
  type: SET_AUTH_DATA,
  payload: { userId, login, email, isAuth },
});

export const setCaptchaURL = (captcha: string): SetCaptchaActionType => ({
  type: SET_CAPTCHA_URL,
  payload: { captcha },
});
