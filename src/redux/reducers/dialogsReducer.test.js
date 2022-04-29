import { addMessage, dialogsReducer } from "./dialogs-reducer";

test("dialogs length should be 6", () => {
  let state = {
    dialogsMessage: [
      { id: 1, message: "hello" },
      { id: 2, message: "hi" },
      { id: 3, message: "bye" },
      { id: 4, message: "ciao" },
      { id: 5, message: "good" },
    ]
  };
  let action = addMessage("hello");

  let newState = dialogsReducer(state, action)

  expect(newState.dialogsMessage.length).toBe(6);
});



test("post message should be correct", () => {
  let state = {
    dialogsMessage: [
      { id: 1, message: "hello" },
      { id: 2, message: "hi" },
      { id: 3, message: "bye" },
      { id: 4, message: "ciao" },
      { id: 5, message: "good" },
    ]
  };
  let action = addMessage("hello");

  let newState = dialogsReducer(state, action);

  expect(newState.dialogsMessage[5].message).toBe("hello");
});
