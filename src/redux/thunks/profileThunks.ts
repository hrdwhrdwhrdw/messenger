import {
  actions
} from "../actions/profileActions";
import { stopSubmit } from "redux-form";
import { ProfileAPI } from "../../API/profileAPI";
import { ProfileType } from "../../types/profile-types";
import { ResponseCodes } from "types/response-codes";
import ThunkType from "types/thunk-type";
import { ActionTypes } from "redux/reducers/profileReducer";

type ProfileThunkType = ThunkType<ActionTypes | ReturnType<typeof stopSubmit>>


export const getProfileData = (userId: number): ProfileThunkType => async (dispatch) => {
  let data = await ProfileAPI.getUserData(userId);
  dispatch(actions.setUserProfile(data));
};

export const updateStatus = (status: string): ProfileThunkType => async (dispatch) => {
  let res = await ProfileAPI.updateStatus(status);
  if (res.data.resultCode === ResponseCodes.Success) {
    dispatch(actions.setStatus(status));
  }
};

export const requestStatus = (userId: number): ProfileThunkType => async (dispatch) => {
  let res = await ProfileAPI.requestStatus(userId);
  let status = res.data; 
  dispatch(actions.setStatus(status));
};

export const updatePhoto = (file: File): ProfileThunkType => async (dispatch) => {
  let data = await ProfileAPI.savePhoto(file);
  if (data.resultCode === ResponseCodes.Success) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
};

export const setProfile =
  (profile: ProfileType): ProfileThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let res = await ProfileAPI.saveProfileInfo(profile);
    if (res.data.resultCode === ResponseCodes.Success) {
      dispatch(getProfileData(userId));
    } else {
      dispatch(
        stopSubmit("profile-desc", { _error: [...res.data.messages] })
      );
      return Promise.reject();
    }
  };
