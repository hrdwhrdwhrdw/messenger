import {
  savePhotoSuccess,
  setStatus,
  setUserProfile,
} from "../actions/profileActions";
import { stopSubmit } from "redux-form";
import { ProfileAPI } from "../../API/profileAPI";
import { ProfileType } from "../../types/profile-types";
import { ResponseCodes } from "API/ResponseCodesEnum";

export const getProfileData = (userId: number) => async (dispatch: any) => {
  let response = await ProfileAPI.getUserData(userId);
  dispatch(setUserProfile(response));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await ProfileAPI.updateStatus(status);
  if (response.data.resultCode === ResponseCodes.Success) {
    dispatch(setStatus(status));
  }
};

export const requestStatus = (userId: number) => async (dispatch: any) => {
  let response = await ProfileAPI.requestStatus(userId);
  dispatch(setStatus(response.data.status));
};

export const updatePhoto = (file: File) => async (dispatch: any) => {
  let response = await ProfileAPI.savePhoto(file);
  if (response.data.resultCode === ResponseCodes.Success) {
    dispatch(savePhotoSuccess(response.data.data));
  }
};

export const setProfile =
  (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    let response = await ProfileAPI.saveProfileInfo(profile);
    if (response.data.resultCode === ResponseCodes.Success) {
      dispatch(getProfileData(userId));
    } else {
      dispatch(
        stopSubmit("profile-desc", { _error: [...response.data.messages] })
      );
      return Promise.reject();
    }
  };
