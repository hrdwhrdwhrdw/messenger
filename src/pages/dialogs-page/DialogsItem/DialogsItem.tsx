import React from "react";
import { MessageType } from "redux/reducers/dialogsReducer";

const DialogsItem: React.FC<MessageType> = (props) => {
  return (
    <li className="dialogs__item">
      <span>{props.message}</span>
    </li>
  );
};

export default DialogsItem;
