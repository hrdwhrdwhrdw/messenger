import { UsersAPI } from "../Components/API/API";

const FOLLOW = "UFOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_FETCHING_TOGGLE = "IS_FETCHING_TOGGLE";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  currentPage: 1,
  totalUsersCount: 0,
  portionSize: 10,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            user.followed = true;
            return user;
          }
          return user;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            user.followed = false;
            return user;
          }
          return user;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }

    case IS_FETCHING_TOGGLE: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setTotalUsers = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const isFetchingToggle = (isFetching) => ({
  type: IS_FETCHING_TOGGLE,
  isFetching,
});
export const followingInProgressToggle = (isFetching, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

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
