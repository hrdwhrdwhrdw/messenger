import { RootState } from '../store/store';
export const getUsers = (state: RootState) => {
  return state.usersPage.users;
};

export const getPageSize = (state: RootState) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: RootState) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: RootState) => {
  return state.usersPage.currentPage;
};

export const getPortionSize = (state: RootState) => {
  return state.usersPage.portionSize;
};

export const getIsFetching = (state: RootState) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: RootState) => {
  return state.usersPage.followingInProgress;
};

export const getUsersFilter = (state: RootState) => {
  return state.usersPage.filter;
};