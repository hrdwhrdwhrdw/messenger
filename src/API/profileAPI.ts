import { PhotoType, ProfileType, ResponsePhotoDataType } from "types/profile-types";
import { DefaultResponseType } from "types/response-type";
import {instance} from "./instance"

export const ProfileAPI = {
  async getUserData(userId: number) {
    const res = await instance.get<ProfileType>(`profile/${userId}`);
    return res.data;
  },

  async requestStatus(userId: number) {
    const res = await instance
      .get<string>(`profile/status/${userId}`);
    return res;
  },

  updateStatus(status: string) {
    return instance.put<DefaultResponseType>(`profile/status`, { status });
  },

  async savePhoto(photo: any) {
    const formData = new FormData();
    formData.append("image", photo);
    const res = await instance.put<DefaultResponseType<ResponsePhotoDataType>>(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return res.data;
  },

  saveProfileInfo(profile: ProfileType) {
    return instance.put<DefaultResponseType>("profile", profile);
  },
};