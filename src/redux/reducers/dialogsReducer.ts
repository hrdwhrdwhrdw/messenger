import { actions } from "redux/actions/dialogsActions";
import { ADD_NEW_MESSAGE } from "../../constants/constants";
import { InferActionsType } from '../store/store';

export type DialogType = {
  id: number,
  name:string
}

export type MessageType = {
  id: number,
  message:string
}

let initialState = {
  dialogsUsers: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Mariya" },
    { id: 3, name: "Lena" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Vasya" },
    { id: 6, name: "Dima" },
    { id: 7, name: "Afanasiy" },
    { id: 8, name: "Vladimir" },
    { id: 9, name: "Evgeniy" },
    { id: 10, name: "Fedya" },
    { id: 11, name: "Dima" },
    { id: 12, name: "Sveta" },
    { id: 13, name: "Nikolay" },
    { id: 14, name: "Yulya" },
    { id: 15, name: "Alexey" },
    { id: 16, name: "Boris" },
    { id: 17, name: "Maksim" },
    { id: 18, name: "Anjelika" },
    { id: 19, name: "Stanislav" },
    { id: 20, name: "Katya" },
    { id: 21, name: "Petya" },
    { id: 22, name: "Danil" },
    { id: 23, name: "Anatoliy" },
    { id: 24, name: "Sergey" },
    { id: 25, name: "Nikita" },
  ] as Array<DialogType>,
  dialogsMessage: [
    { id: 1, message: "hello" },
    { id: 2, message: "hi" },
    { id: 3, message: "bye" },
    { id: 4, message: "ciao" },
    { id: 5, message: "good" },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState
type ActionTypes = InferActionsType<typeof actions>;

export const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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
