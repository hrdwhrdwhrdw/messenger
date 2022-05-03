import { ProfileType, PostType } from "types/profile-types";
import {
  ADD_NEW_POST,
  INCREASE_LIKES_POST,
  DECREASE_LIKES_POST,
  SET_USER_PROFILE,
  SET_STATUS,
  SAVE_PHOTO_SUCCESS,
  SAVE_PROFILE_INFO_SUCCESS,
} from "../../constants/constants";

let initialState = {
  posts: [
    { id: 1, message: "hello", likesCount: 0, isLiked: false },
    { id: 2, message: "bye", likesCount: 2, isLiked: false },
    { id: 3, message: "my post", likesCount: 3, isLiked: false },
    { id: 4, message: "again my post", likesCount: 4, isLiked: false },
    { id: 5, message: "hello all", likesCount: 0, isLiked: false },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

type InitialStateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: action.postText,
        likesCount: 0,
        isLiked: false,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }

    case SAVE_PROFILE_INFO_SUCCESS: {
      return {
        ...state,
        profile: { ...action.profile },
      };
    }

    case INCREASE_LIKES_POST: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.id) {
            post.likesCount = post.likesCount + 1;
            post.isLiked = true;
            return post;
          }
          return post;
        }),
      };
    }

    case DECREASE_LIKES_POST: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.id) {
            post.likesCount = post.likesCount - 1;
            post.isLiked = false;
            return post;
          }
          return post;
        }),
      };
    }

    default:
      return state;
  }
};
