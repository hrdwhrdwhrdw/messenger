import {
  savePhotoSuccess,
  setStatus,
  setUserProfile,
} from "../actions/profileActions";
import { stopSubmit } from "redux-form";
import { ProfileAPI } from "../../API/API";

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
    dispatch(
      stopSubmit("profile-desc", { _error: [...response.data.messages] })
    );
    return Promise.reject();
  }
};
