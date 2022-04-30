import { ADD_NEW_MESSAGE } from "../../constants/constants";

export const addMessage = (messageText) => ({
  type: ADD_NEW_MESSAGE,
  messageText,
});
