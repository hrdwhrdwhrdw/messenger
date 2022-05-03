import { ADD_NEW_MESSAGE } from "../../constants/constants";

export const actions = {
  addMessage: (messageText: string) => ({
    type: ADD_NEW_MESSAGE,
    messageText,
  })
}
