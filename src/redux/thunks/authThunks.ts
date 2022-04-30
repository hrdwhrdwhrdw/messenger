import { setAuthData, setCaptchaURL } from "../actions/authActions";
import { stopSubmit } from "redux-form";
import { AuthAPI } from "../../API/API";

export const getAuthData = () => async (dispatch: any) => {
  let response = await AuthAPI.getOwnData();
  if (response.resultCode === 0) {
    type DataType = {
      id: any,
      login: any,
      email: any,
    };

    let data: DataType = {
      id: response.data.id,
      login: response.data.login,
      email: response.data.email,
    };
    // let { id, login, email } = { ...response.data };
    dispatch(setAuthData(data.id, data.login, data.email, true));
    // dispatch(setAuthData(id, login, email, true));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await AuthAPI.getCaptchaUrl();
  dispatch(setCaptchaURL(response.data.url));
};

export const loginUser =
  (email, password, rememberMe, captcha = null) =>
  async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
      dispatch(getAuthData());
    } else {
      if (response.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let messageError = response.messages[0];
      dispatch(stopSubmit("login", { _error: messageError }));
    }
  };

export const logout = () => async (dispatch) => {
  let response = await AuthAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
  }
};
