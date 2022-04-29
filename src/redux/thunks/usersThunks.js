import { UsersAPI } from "../../API/API";
import {
  follow,
  followingInProgressToggle,
  isFetchingToggle,
  setCurrentPage,
  setTotalUsers,
  setUsers,
  unfollow,
} from "../actions/usersActions";

export const getUsers = (pageSize, currentPage) => async (dispatch) => {
  dispatch(isFetchingToggle(true));
  let data = await UsersAPI.getUsers(pageSize, currentPage);
  dispatch(isFetchingToggle(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsers(data.totalCount));
};

export const getUsersAfterChange =
  (pageSize, currentPage) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(isFetchingToggle(true));
    let data = await UsersAPI.getUsers(pageSize, currentPage);
    dispatch(isFetchingToggle(false));
    dispatch(setUsers(data.items));
  };

export const followUser = (userId) => async (dispatch) => {
  dispatch(followingInProgressToggle(true, userId));
  let response = await UsersAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(follow(userId));
  }
  dispatch(followingInProgressToggle(false, userId));
};

export const unfollowUser = (userId) => async (dispatch) => {
  dispatch(followingInProgressToggle(true, userId));
  let response = await UsersAPI.unfollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unfollow(userId));
  }
  dispatch(followingInProgressToggle(false, userId));
};
