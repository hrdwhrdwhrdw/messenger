const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newMessage = {
        id: state.dialogsMessage.length + 1,
        message: state.messageText,
      };

      state.dialogsMessage.push(newMessage);
      console.log(state.dialogsMessage);
      state.messageText = "";
      return state;

    case UPDATE_MESSAGE_TEXT:
      state.messageText = action.messageText;
      return state;

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateMessageTextActionCreator = (messageText) => ({
  type: UPDATE_MESSAGE_TEXT,
  messageText,
});
