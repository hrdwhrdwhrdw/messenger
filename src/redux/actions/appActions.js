import { SET_INITIALIZING_SUCCESS } from "../../constants/constants";

export const setInitializingSuccess = () => ({
  type: SET_INITIALIZING_SUCCESS,
  initialized: true,
});
