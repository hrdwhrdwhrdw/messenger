import { PhotoType, ProfileType } from "types/profile-types";
import { DefaultResponseType } from "types/response-type";
import {instance} from "./instance"
import { ResponseCodes } from "./ResponseCodesEnum";

type ResponseRequestStatusType = {
  data: {
    status: string
  }
}

type ResponseSavePhotoType = {
  data: PhotoType
  resultCode: ResponseCodes;
  messages: Array<string>;
}

export const ProfileAPI = {
  getUserData(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`).then((response) => response.data);
  },

  requestStatus(userId: number) {
    return instance
      .get<ResponseRequestStatusType>(`profile/status/${userId}`)
      .then((response) => response.data);
  },

  updateStatus(status: string) {
    return instance.put<DefaultResponseType>(`profile/status`, { status });
  },

  savePhoto(photo: File) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put<ResponseSavePhotoType>(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfileInfo(profile: ProfileType) {
    return instance.put<DefaultResponseType>("profile", profile);
  },
};