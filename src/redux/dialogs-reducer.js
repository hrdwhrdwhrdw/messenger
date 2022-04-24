const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

let initialState = {
  dialogsUsers: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Mariya" },
    { id: 3, name: "Lena" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Vasya" },
    { id: 6, name: "Dima" },
    { id: 7, name: "Mariya" },
    { id: 8, name: "Lena" },
    { id: 9, name: "Vlad" },
    { id: 10, name: "Vasya" },
    { id: 11, name: "Dima" },
    { id: 12, name: "Mariya" },
    { id: 13, name: "Lena" },
    { id: 14, name: "Vlad" },
    { id: 15, name: "Vasya" },
    { id: 16, name: "Dima" },
    { id: 17, name: "Mariya" },
    { id: 18, name: "Lena" },
    { id: 19, name: "Vlad" },
    { id: 20, name: "Vasya" },
    { id: 21, name: "Dima" },
    { id: 22, name: "Mariya" },
    { id: 23, name: "Lena" },
    { id: 24, name: "Vlad" },
    { id: 25, name: "Vasya" },
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

export const addMessage = (messageText) => ({ type: ADD_NEW_MESSAGE, messageText });

