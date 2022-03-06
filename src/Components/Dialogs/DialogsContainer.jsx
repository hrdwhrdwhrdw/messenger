import React from "react";
import { StoreContext } from "../../context";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = () => {
  return (
    <div>
      <StoreContext.Consumer>
        {(store) => {
          let state = store.getState().dialogsPage;
          let sendMessage = () => {
            store.dispatch(addMessageActionCreator());
          };

          let updateMessageText = (messageText) => {
            let action = updateMessageTextActionCreator(messageText);
            store.dispatch(action);
          };
          return <Dialogs
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
            state={state}
          />;
        }}
      </StoreContext.Consumer>
    </div>
  );
};
