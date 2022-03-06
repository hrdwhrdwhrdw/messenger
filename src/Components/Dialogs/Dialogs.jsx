import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsUserItem from "./DialogsUserItem/DialogsUserItem";
import "./Dialogs.scss";

export const Dialogs = (props) => {
  let updateMessageText = (e) => {
    let messageText = e.target.value;
    props.updateMessageText(messageText)
  }
  return (
    <div className="dialogs">
      <ul className="dialogs__userlist">
        {props.state.dialogsUsers.map((dialogUser) => (
          <DialogsUserItem
            id={dialogUser.id}
            name={dialogUser.name}
            key={dialogUser.id}
          />
        ))}
      </ul>
      <div className="dialogs__list">
        <ul className="dialogs__messagelist">
          {props.state.dialogsMessage.map((dialogMessage) => (
            <DialogsItem
              id={dialogMessage.id}
              message={dialogMessage.message}
              key={dialogMessage.id}
            />
          ))}
        </ul>
        <textarea
          name=""
          id=""
          cols="25"
          rows="4"
          onChange={updateMessageText}
          value={props.state.messageText}
        />
        <div className="dialogs__button">
          <div className="dialogs__button dialogs__button_send">
            <button onClick={props.sendMessage}>Send message</button>
          </div>
          {/* <div className="dialogs__button dialogs__button_edit">
            <button onClick={editMessage}>Edit message</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
