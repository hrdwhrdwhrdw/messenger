import {
  ADD_NEW_POST,
  INCREASE_LIKES_POST,
  DECREASE_LIKES_POST,
  SET_USER_PROFILE,
  SET_STATUS,
  SAVE_PHOTO_SUCCESS,
  SAVE_PROFILE_INFO_SUCCESS,
} from "../../constants/constants";

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
  profile,
});

export const increaseLikesCount = (id) => ({
  type: INCREASE_LIKES_POST,
  id,
});

export const decreaseLikesCount = (id) => ({
  type: DECREASE_LIKES_POST,
  id,
});
