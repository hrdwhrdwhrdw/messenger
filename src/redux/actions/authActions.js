import { SET_AUTH_DATA, SET_CAPTCHA_URL } from "../../constants/constants";

export const setAuthData = (userId, login, email, isAuth) => ({
  type: SET_AUTH_DATA,
  payload: { userId, login, email, isAuth },
});

export const setCaptchaURL = (captcha) => ({
  type: SET_CAPTCHA_URL,
  payload: { captcha },
});
