import React from "react";

const DialogsItem = (props) => {
  return <li className="dialogs__item"><span>
    {props.message}</span></li>;
};

export default DialogsItem