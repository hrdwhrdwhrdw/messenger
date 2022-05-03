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

export const actions = {
  follow: (userId: number) => ({
    type: FOLLOW,
    userId,
  }) as const,
  unfollow: (userId: number) => ({
    type: UNFOLLOW,
    userId,
  }) as const,
  setUsers: (users: Array<UserType>) => ({
    type: SET_USERS,
    users,
  }) as const,
  setTotalUsers: (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  }) as const,
  setCurrentPage: (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
  }) as const,
  isFetchingToggle: (isFetching: boolean) => ({
    type: IS_FETCHING_TOGGLE,
    isFetching,
  }) as const,
  followingInProgressToggle: (isFetching: boolean, userId: number) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    userId,
  }) as const,
};