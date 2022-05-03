import { SET_AUTH_DATA, SET_CAPTCHA_URL } from "../../constants/constants";
import {
  SetAuthDataActionType,
  SetCaptchaActionType,
} from "../actions/authActions";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: null,
};

type InitialStateActionType = {
  userId: number;
  login: string;
  email: string;
  isAuth: boolean;
  captcha?: string;
};

type ActionTypes = SetAuthDataActionType | SetCaptchaActionType

export const authReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateActionType  => {
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
        ...action.payload,
      };
    }

    default:
      return state;
  }
};
