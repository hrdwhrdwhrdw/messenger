import { stopSubmit } from "redux-form";
import ProfileAPI from "../Components/API/ProfileAPI";

// constants
const ADD_NEW_POST = "ADD_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const GET_STATUS = "GET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SAVE_PROFILE_INFO_SUCCESS = "SAVE_PROFILE_INFO_SUCCESS";

// initial state
let initialState = {
  posts: [
    { id: 1, message: "hello" },
    { id: 2, message: "hello" },
    { id: 3, message: "hello" },
    { id: 4, message: "hello" },
    { id: 5, message: "hello" },
  ],
  profile: null,
  status: "",
};

//switch-case reducer
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: action.postText,
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

    case GET_STATUS: {
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
        profile: { ...action.profile}
      };
    }

    default:
      return state;
  }
};

// action-creator functions
export const addPostActionCreator = (postText) => ({
  type: ADD_NEW_POST,
  postText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const saveProfileInfoSuccess = (profile) => ({
  type: SAVE_PROFILE_INFO_SUCCESS,
  profile
});

// thunk-functions
export const getProfileData = (userId) => async (dispatch) => {
  let response = await ProfileAPI.getUserData(userId);
  dispatch(setUserProfile(response));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await ProfileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await ProfileAPI.getStatus(userId);
  dispatch(setStatus(response));
};

export const updatePhoto = (file) => async (dispatch) => {
  let response = await ProfileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const setProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await ProfileAPI.saveProfileInfo(profile);
  if (response.data.resultCode === 0) {
    dispatch(getProfileData(userId));
  } else {
    dispatch(stopSubmit("profile-desc", {_error: [...response.data.messages]}));
    return Promise.reject();
  }
};
