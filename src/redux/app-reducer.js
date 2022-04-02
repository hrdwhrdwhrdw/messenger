import { getAuthData } from "./auth-reducer";

const SET_INITIALIZING_SUCCESS = "SET_INITIALIZING_SUCCESS";

let initialState = {
  initialized: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZING_SUCCESS: {
      return {
        ...state,
        initialized: true
      };
    }

    default:
      return state;
  }
};

export const setInitializingSuccess = () => ({
  type: SET_INITIALIZING_SUCCESS,
  initialized: true
});

export const setInitializing = () => (dispatch) => {
  let promise = dispatch(getAuthData());
  Promise.all([promise]).then(() => {
    dispatch(setInitializingSuccess())
  })
};

