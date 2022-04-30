import { setInitializingSuccess } from "../actions/appActions";
import { getAuthData } from "./authThunks";

export const setInitializing = () => (dispatch: any) => {
  let promise = dispatch(getAuthData());
  Promise.all([promise]).then(() => {
    dispatch(setInitializingSuccess());
  });
};
