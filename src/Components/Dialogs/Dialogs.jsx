import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsUserItem from "./DialogsUserItem/DialogsUserItem";
import "./Dialogs.scss";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { Textarea } from "../common/FormControl/FormControl";

export const Dialogs = (props) => {
  let addMessage = (values) => {
    props.sendMessage(values.newMessageText);
    props.reset();
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
        <AddMessageReduxForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="...enter your message"
        name="newMessageText"
        component={Textarea}
        dataType="textarea"
      />
      <div className="dialogs__button">
        <div className="dialogs__button dialogs__button_send">
          <button type="submit">Send message</button>
        </div>
        {/* <div className="dialogs__button dialogs__button_edit">
            <button onClick={editMessage}>Edit message</button>
          </div> */}
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "addMessage",
})(AddMessageForm);
