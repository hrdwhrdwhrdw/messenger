import { actions } from "../actions/authActions";
import { stopSubmit } from "redux-form";
import { AuthAPI, ResponseCodesWithCaptcha } from "../../API/authAPI";
import { ResponseCodes } from "../../types/response-codes";
import ThunkType  from "types/thunk-type";
import { ActionTypes } from "redux/reducers/authReducer";

type AuthThunkType = ThunkType<ActionTypes | ReturnType<typeof stopSubmit>>

export const getAuthData = (): AuthThunkType => async (dispatch) => {
  let res = await AuthAPI.getOwnData();
  if (res.resultCode === ResponseCodes.Success) {
    let { id, login, email } = res.data;
    dispatch(actions.setAuthData(id, login, email, true));
  }
};

export const getCaptchaUrl = (): AuthThunkType => async (dispatch) => {
  let res = await AuthAPI.getCaptchaUrl();
  dispatch(actions.setCaptchaURL(res.data.url));
};

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string = null
  ):AuthThunkType =>
  async (dispatch) => {
    let res = await AuthAPI.login(email, password, rememberMe, captcha);
    if (res.resultCode === ResponseCodes.Success) {
      dispatch(getAuthData());
    } else {
      if (res.resultCode === ResponseCodesWithCaptcha.Captcha) {
        dispatch(getCaptchaUrl());
      }
      let messageError = res.messages[0];
      dispatch(stopSubmit("login", { _error: messageError }));
      // dispatch({type: "rwrwr"})
    }
  };

export const logout = (): AuthThunkType => async (dispatch) => {
  let res = await AuthAPI.logout();
  if (res.resultCode === 0) {
    dispatch(actions.setAuthData(null, null, null, false));
  }
};
