import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsUserItem from "./DialogsUserItem/DialogsUserItem";
import "./Dialogs.scss";
import { createRef } from "react";

export const Dialogs = (props) => {
  let newMessageText = createRef();

  let sendMessage = () => {
    alert(newMessageText.current.value);
  };

  return (
    <div className="dialogs">
      <ul className="dialogs__userlist">
        {props.dialogsPage.dialogsUsers.map((dialogUser) => (
          <DialogsUserItem
            id={dialogUser.id}
            name={dialogUser.name}
            key={dialogUser.id}
          />
        ))}
      </ul>
      <div className="dialogs__list">
        <ul className="dialogs__messagelist">
          {props.dialogsPage.dialogsMessage.map((dialogMessage) => (
            <DialogsItem
              id={dialogMessage.id}
              message={dialogMessage.message}
              key={dialogMessage.id}
            />
          ))}
        </ul>
        <textarea name="" id="" cols="25" rows="4" ref={newMessageText} />
        <div className="dialogs__button">
          <div className="dialogs__button dialogs__button_send">
            <button onClick={sendMessage}>Send message</button>
          </div>
          <div className="dialogs__button dialogs__button_edit">
            <button onClick={sendMessage}>Edit message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
