import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "redux/reducers/usersReducer";
import { UsersAPI } from "../../API/userAPI";
import { RootState } from '../store/store';
import {
  follow,
  followingInProgressToggle,
  isFetchingToggle,
  setCurrentPage,
  setTotalUsers,
  setUsers,
  unfollow,
} from "../actions/usersActions";
import { ResponseCodes } from "API/ResponseCodesEnum";

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>

export const requestUsers =
  (pageSize: number, currentPage: number): ThunkType => async (dispatch) => {
    dispatch(isFetchingToggle(true)); 
    dispatch(setCurrentPage(currentPage));

    let data = await UsersAPI.getUsers(pageSize, currentPage);
    dispatch(isFetchingToggle(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
  };

export const followUser = (userId: number): ThunkType => async (dispatch) => {
  dispatch(followingInProgressToggle(true, userId));
  let response = await UsersAPI.follow(userId);
  if (response.data.resultCode === ResponseCodes.Success) {
    dispatch(follow(userId));
  }
  dispatch(followingInProgressToggle(false, userId));
};

export const unfollowUser = (userId: number): ThunkType => async (dispatch) => {
  dispatch(followingInProgressToggle(true, userId));
  let response = await UsersAPI.unfollow(userId);
  if (response.data.resultCode === ResponseCodes.Success) {
    dispatch(unfollow(userId));
  }
  dispatch(followingInProgressToggle(false, userId));
};
