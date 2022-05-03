import { setAuthData, setCaptchaURL } from "../actions/authActions";
import { stopSubmit } from "redux-form";
import {
  AuthAPI,
  ResponseCodesWithCaptcha,
} from "../../API/authAPI";
import { ResponseCodes } from "../../API/ResponseCodesEnum";

export const getAuthData = () => async (dispatch: any) => {
  let response = await AuthAPI.getOwnData();
  if (response.resultCode === ResponseCodes.Success) {
    let { id, login, email } = response.data;
    dispatch(setAuthData(id, login, email, true));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  let response = await AuthAPI.getCaptchaUrl();
  dispatch(setCaptchaURL(response.data.url));
};

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string = null
  ) =>
  async (dispatch: any) => {
    let response = await AuthAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === ResponseCodes.Success) {
      dispatch(getAuthData());
    } else {
      if (response.resultCode === ResponseCodesWithCaptcha.Captcha) {
        dispatch(getCaptchaUrl());
      }
      let messageError = response.messages[0];
      dispatch(stopSubmit("login", { _error: messageError }));
    }
  };

export const logout = () => async (dispatch: any) => {
  let response = await AuthAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
  }
};
