import { ResponseCodes } from "types/response-codes";

export type DefaultResponseType<D = {}, RC = ResponseCodes> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
};