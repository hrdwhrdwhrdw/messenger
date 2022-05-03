import { UserType } from "types/user-types";
import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  IS_FETCHING_TOGGLE,
  FOLLOWING_IN_PROGRESS,
} from "../../constants/constants";

export type FollowActionType = {
  type: typeof FOLLOW;
  userId: number;
};

export type UnfollowActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};

export type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};

export type SetTotalUsersActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};

export type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export type IsFetchingToggleActionType = {
  type: typeof IS_FETCHING_TOGGLE;
  isFetching: boolean;
};

export type FollowingInProgressToggleActionType = {
  type: typeof FOLLOWING_IN_PROGRESS;
  isFetching: boolean;
  userId: number;
};

export const follow = (userId: number): FollowActionType => ({
  type: FOLLOW,
  userId,
});
export const unfollow = (userId: number): UnfollowActionType => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});
export const setTotalUsers = (
  totalUsersCount: number
): SetTotalUsersActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const isFetchingToggle = (
  isFetching: boolean
): IsFetchingToggleActionType => ({
  type: IS_FETCHING_TOGGLE,
  isFetching,
});
export const followingInProgressToggle = (
  isFetching: boolean,
  userId: number
): FollowingInProgressToggleActionType => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});
