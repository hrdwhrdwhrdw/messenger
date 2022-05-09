import { actions } from "../actions/usersActions";
import { UsersAPI } from "../../API/userAPI";
import { ResponseCodes } from "types/response-codes";
import ThunkType from "types/thunk-type";
import { ActionTypes } from "redux/reducers/usersReducer";
import { FilterType } from "../../components/Forms/user-search-form/UserSearchForm";

type UserThunkType = ThunkType<ActionTypes>;

export const requestUsers =
  (pageSize: number, currentPage: number, filter: FilterType): UserThunkType =>
  async (dispatch) => {
    dispatch(actions.isFetchingToggle(true));
    dispatch(actions.setCurrentPage(currentPage));
    dispatch(actions.setUsersFilter(filter));
    let data = await UsersAPI.getUsers(pageSize, currentPage, filter);
    dispatch(actions.isFetchingToggle(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsers(data.totalCount));
  };

export const followUser =
  (userId: number): UserThunkType =>
  async (dispatch) => {
    dispatch(actions.followingInProgressToggle(true, userId));
    let res = await UsersAPI.follow(userId);
    if (res.resultCode === ResponseCodes.Success) {
      dispatch(actions.follow(userId));
    }
    dispatch(actions.followingInProgressToggle(false, userId));
  };

export const unfollowUser =
  (userId: number): UserThunkType =>
  async (dispatch) => {
    dispatch(actions.followingInProgressToggle(true, userId));
    let res = await UsersAPI.unfollow(userId);
    if (res.data.resultCode === ResponseCodes.Success) {
      dispatch(actions.unfollow(userId));
    }
    dispatch(actions.followingInProgressToggle(false, userId));
  };
