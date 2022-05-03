import React from "react";
import { Field } from "redux-form";

import "./Checkbox.scss";

export default function Checkbox(props) {
  return (
    <div className="button r" id="button">
      <Field
        name={props.name}
        className="checkbox"
        component={"input"}
        type={"checkbox"}
      />
      <div className="knobs"></div>
      <div className="layer"></div>
    </div>
  );
}
