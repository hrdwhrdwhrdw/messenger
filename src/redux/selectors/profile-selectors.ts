import { RootState } from '../store/store';
export const getProfile = (state: RootState) => {
  return state.profilePage.profile;
};

export const getStatus = (state: RootState) => {
  return state.profilePage.status;
};

export const getAuthUserId = (state: RootState) => {
  return state.auth.userId;
};

export const getIsAuth = (state: RootState) => {
  return state.auth.isAuth;
};

export const getPosts = (state: RootState) => {
  return state.profilePage.posts;
};
