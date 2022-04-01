import React from "react";
import './FormControl.scss'

export const Textarea = (props) => {
  return (
      <FormControl {...props}/>
  );
}

export const Input = (props) => {
  return (
      <FormControl {...props}/>
  );
}

export const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? 'error' : ''}>
      <props.dataType {...input} {...props} />
      <div>{hasError ? <span>{meta.error}</span> : null}</div>
    </div>
  );
}