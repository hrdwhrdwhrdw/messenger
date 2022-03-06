import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hello" },
        { id: 2, message: "hello" },
        { id: 3, message: "hello" },
        { id: 4, message: "hello" },
        { id: 5, message: "hello" },
      ],
      postText: "",
    },
    dialogsPage: {
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
      messageText: "",
    },
  },

  _callSubscriber() {
    console.log("store is changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
