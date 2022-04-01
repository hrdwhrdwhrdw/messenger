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

export const setAuthData = (id, login, email, isAuth) => ({
  type: SET_AUTH_DATA,
  payload: { id, login, email, isAuth },
});

export const getAuthData = () => {
  return (dispatch) => {
    AuthAPI.getOwnData().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email} = { ...response.data };
        dispatch(setAuthData(id, login, email, true));
      }
    });
  };
};

export const loginUser = (email, password, rememberMe) => {
  return (dispatch) => {
    AuthAPI.login(email, password, rememberMe).then((response) => {
      if (response.resultCode === 0) {
        dispatch(getAuthData());
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    AuthAPI.logout().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
      }
    });
  };
};
