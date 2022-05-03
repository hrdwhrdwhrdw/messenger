import { ADD_NEW_MESSAGE } from "../../constants/constants";

type AddMessageActionType = {
  type: typeof ADD_NEW_MESSAGE,
  messageText: string
}

export const addMessage = (messageText: string): AddMessageActionType => ({
  type: ADD_NEW_MESSAGE,
  messageText,
});
