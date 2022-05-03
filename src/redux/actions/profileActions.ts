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

export const actions = {
  addPostActionCreator: (postText: string)  => ({
    type: ADD_NEW_POST,
    postText,
  }),
  setUserProfile: (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile,
  }),
  setStatus: (status: string) => ({
    type: SET_STATUS,
    status,
  }),
  savePhotoSuccess: (photos: PhotoType) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
  }),
  saveProfileInfoSuccess: (profile: ProfileType) => ({
    type: SAVE_PROFILE_INFO_SUCCESS,
    profile,
  }),
  increaseLikesCount: (id: number) => ({
    type: INCREASE_LIKES_POST,
    id,
  }),
  decreaseLikesCount: (id: number) => ({
    type: DECREASE_LIKES_POST,
    id,
  })
}
