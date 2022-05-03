import { ResponseCodes } from "./ResponseCodesEnum";
import {instance} from "./instance";
import {DefaultResponseType} from '../types/response-type'

export enum ResponseCodesWithCaptcha {
  Captcha = 10
}

type OwnDataType = {
  data: { id: number; login: string; email: string };
  resultCode: ResponseCodes;
  messages: Array<string>;
};

type LoginResponseType = {
  data: { userId: number };
  resultCode: ResponseCodes | ResponseCodesWithCaptcha;
  messages: Array<string>;
};

type GetCaptchaUrlType = {
  url: string
}

export const AuthAPI = {
  getOwnData() {
    return instance.get<OwnDataType>(`auth/me`).then((response) => {
      return response.data;
    });
  },

  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string = null
  ) {
    return instance
      .post<LoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => {
        return response.data;
      });
  },

  logout() {
    return instance.delete<DefaultResponseType>(`auth/login`).then((response) => {
      return response.data;
    });
  },

  getCaptchaUrl() {
    return instance.get<GetCaptchaUrlType>(`/security/get-captcha-url`).then((response) => {
      return response;
    });
  },
};