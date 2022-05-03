import { SET_AUTH_DATA, SET_CAPTCHA_URL } from "../../constants/constants";
import { InferActionsType } from "../store/store";
import { actions } from "../actions/authActions";

let initialState = {
  userId: null as number,
  login: null as string,
  email: null as string,
  isAuth: false as boolean,
  captcha: null as string,
};

type InitialStateActionType = typeof initialState;

export type ActionTypes = InferActionsType<typeof actions>;

export const authReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateActionType => {
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
