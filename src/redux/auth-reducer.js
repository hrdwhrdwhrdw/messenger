import { stopSubmit } from "redux-form";
import AuthAPI from "../Components/API/AuthAPI";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case SET_CAPTCHA_URL: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
};

export const setAuthData = (userId, login, email, isAuth) => ({
  type: SET_AUTH_DATA,
  payload: { userId, login, email, isAuth },
});

export const setCaptchaURL = (captcha) => ({
  type: SET_CAPTCHA_URL,
  payload: { captcha },
});

export const getAuthData = () => async (dispatch) => {
  let response = await AuthAPI.getOwnData();
  if (response.resultCode === 0) {
    let { id, login, email } = { ...response.data };
    dispatch(setAuthData(id, login, email, true));
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
