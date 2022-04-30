import { SET_AUTH_DATA, SET_CAPTCHA_URL } from "../../constants/constants";

type InitialStateType = {
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
  captcha: string | null,
};

let initialState: InitialStateType = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: null,
};

export const authReducer = (state = initialState, action: any): InitialStateType => {
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
