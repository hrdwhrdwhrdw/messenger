import { SET_AUTH_DATA, SET_CAPTCHA_URL } from "../../constants/constants";

export type SetAuthDataActionType = {
  type: typeof SET_AUTH_DATA;
  payload: {
    userId: number;
    login: string;
    email: string;
    isAuth: boolean;
  };
}

export const actions = {
  setAuthData: (
    userId: number,
    login: string,
    email: string,
    isAuth: boolean
  ) => ({
    type: SET_AUTH_DATA,
    payload: { userId, login, email, isAuth },
  }),
  
  setCaptchaURL: (captcha: string) => ({
    type: SET_CAPTCHA_URL,
    payload: { captcha },
  })
}