import { ProfileType, PhotoType } from "types/profile-types";
import {
  ADD_NEW_POST,
  INCREASE_LIKES_POST,
  DECREASE_LIKES_POST,
  SET_USER_PROFILE,
  SET_STATUS,
  SAVE_PHOTO_SUCCESS,
  SAVE_PROFILE_INFO_SUCCESS,
} from "../../constants/constants";

type AddPostActionType = {
  type: typeof ADD_NEW_POST,
  postText: string
}

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}

type SetStatusActionType = {
  type: typeof SET_STATUS,
  status: string
}

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotoType
}

type SaveProfileInfoSuccessActionType = {
  type: typeof SAVE_PROFILE_INFO_SUCCESS,
  profile: ProfileType
}

type IncreaseLikesCountActionType = {
  type: typeof INCREASE_LIKES_POST,
  id: number
}

type DecreaseLikesCountActionType = {
  type: typeof DECREASE_LIKES_POST,
  id: number
}

export const addPostActionCreator = (postText: string):AddPostActionType  => ({
  type: ADD_NEW_POST,
  postText,
});

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

export const savePhotoSuccess = (photos: PhotoType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const saveProfileInfoSuccess = (profile: ProfileType): SaveProfileInfoSuccessActionType => ({
  type: SAVE_PROFILE_INFO_SUCCESS,
  profile,
});

export const increaseLikesCount = (id: number): IncreaseLikesCountActionType => ({
  type: INCREASE_LIKES_POST,
  id,
});

export const decreaseLikesCount = (id: number): DecreaseLikesCountActionType => ({
  type: DECREASE_LIKES_POST,
  id,
});
