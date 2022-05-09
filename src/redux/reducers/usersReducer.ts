import { actions } from "redux/actions/usersActions";
import { UserType } from "types/user-types";
import { InferActionsType } from "../store/store";
import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  IS_FETCHING_TOGGLE,
  FOLLOWING_IN_PROGRESS,
  SET_USERS_FILTER
} from "../../constants/constants";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  currentPage: 1,
  totalUsersCount: 0,
  portionSize: 10,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users id
  filter: {
    term: "",
    isFriend: null
  }
};

export type InitialStateType = typeof initialState;

export type ActionTypes = InferActionsType<typeof actions>;

export const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: true}
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
            return {...user, followed: false}
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

    case SET_USERS_FILTER: {
      return {
        ...state,
        filter: action.filter
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
