import { ResponseCodes } from "API/ResponseCodesEnum";

export type DefaultResponseType = {
  data: any;
  resultCode: ResponseCodes;
  messages: Array<string>;
};