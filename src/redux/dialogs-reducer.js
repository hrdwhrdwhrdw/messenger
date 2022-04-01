const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

let initialState = {
  dialogsUsers: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Mariya" },
    { id: 3, name: "Lena" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Vasya" },
  ],
  dialogsMessage: [
    { id: 1, message: "hello" },
    { id: 2, message: "hi" },
    { id: 3, message: "bye" },
    { id: 4, message: "ciao" },
    { id: 5, message: "good" },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      let newMessage = {
        id: state.dialogsMessage.length + 1,
        message: action.messageText,
      };
      return { 
        ...state,
        dialogsMessage: [...state.dialogsMessage, newMessage],
      };
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = (messageText) => ({ type: ADD_NEW_MESSAGE, messageText });

