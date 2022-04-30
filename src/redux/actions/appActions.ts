import { SET_INITIALIZING_SUCCESS } from "../../constants/constants";

export type InitializingSuccessActionType = {
  type: typeof SET_INITIALIZING_SUCCESS;
};

export const setInitializingSuccess = (): InitializingSuccessActionType => ({
  type: SET_INITIALIZING_SUCCESS,
});