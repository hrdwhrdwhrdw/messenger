import { RootState } from "redux/store/store";

export const getIsAuth = (state: RootState) => {
  return state.auth.isAuth;
};

export const getCaptcha = (state: RootState) => {
  return state.auth.captcha;
};