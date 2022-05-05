import { RootState } from '../store/store';
export const getUserId = (state:RootState) => {
  return state.auth.userId;
};

export const getLogin = (state:RootState) => {
  return state.auth.login;
};

export const getEmail = (state:RootState) => {
  return state.auth.email;
};

export const getIsAuth = (state:RootState) => {
  return state.auth.isAuth;
};