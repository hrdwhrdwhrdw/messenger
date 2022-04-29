export const getUserId = (state) => {
  return state.auth.userId;
};

export const getLogin = (state) => {
  return state.auth.login;
};

export const getEmail = (state) => {
  return state.auth.email;
};

export const getIsAuth = (state) => {
  return state.auth.isAuth;
};