export const getProfile = (state) => {
  return state.profilePage.profile;
};

export const getStatus = (state) => {
  return state.profilePage.status;
};

export const getAuthUserId = (state) => {
  return state.auth.userId;
};

export const getIsAuth = (state) => {
  return state.auth.isAuth;
};

export const getPosts = (state) => {
  return state.profilePage.posts;
};
