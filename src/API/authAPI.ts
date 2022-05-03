import { ResponseCodes } from "../types/response-codes";
import { instance } from "./instance";
import { DefaultResponseType } from "../types/response-type";

export enum ResponseCodesWithCaptcha {
  Captcha = 10,
}

type OwnDataType = {
  id: number;
  login: string;
  email: string;
};

type LoginResponseDataType = {
  userId: number;
};

type GetCaptchaUrlType = {
  url: string;
};

export const AuthAPI = {
  async getOwnData() {
    const res = await instance.get<DefaultResponseType<OwnDataType>>(`auth/me`);
    return res.data;
  },

  async login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string = null
  ) {
    const res = await instance
      // ResponseCaptcha
      .post<
        DefaultResponseType<LoginResponseDataType, ResponseCodes | ResponseCodesWithCaptcha>
      >(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      });
    return res.data;
  },

  async logout() {
    const res = await instance.delete<DefaultResponseType>(`auth/login`);
    return res.data;
  },

  async getCaptchaUrl() {
    const res = await instance.get<GetCaptchaUrlType>(
      `/security/get-captcha-url`
    );
    return res;
  },
};
