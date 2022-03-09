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
        userId: action.id,
        login: action.login,
        email: action.email,
        isAuth: true
      };
    }

    default:
      return state;
  }
};

export const setAuthData = (id, login, email) => ({
  type: SET_AUTH_DATA,
  id,
  login, 
  email
});


