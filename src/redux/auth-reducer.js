import { stopSubmit } from "redux-form";
import AuthAPI from "../Components/API/AuthAPI";

const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...action.payload,
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

export const getAuthData = () => async (dispatch) => {
  let response = await AuthAPI.getOwnData();
  if (response.resultCode === 0) {
    let { id, login, email } = { ...response.data };
    dispatch(setAuthData(id, login, email, true));
  }
};

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  let response = await AuthAPI.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getAuthData());
  } else {
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
