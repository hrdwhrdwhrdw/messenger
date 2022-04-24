import React from "react";
import "./FormControl.scss";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";

export const MultiTextarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? "error" : ""}>
      <TextField
        id="standard-multiline-flexible"
        multiline
        maxRows={4}
        variant="standard"
        sx={{
          "& .MuiInputBase-root": {
            "& textarea": {
              width: "380px",
            },
            fontSize: "13px",
            fontWeight: "bold",
            "&::before": {
              border: "none",
              display: "none",
            },
            color: "#72727a",
            "&:after": {
              display: "none",
            },
          },
        }}
        {...input}
        {...props}
      />
      <div>{hasError ? <span>{meta.error}</span> : null}</div>
    </div>
  );
};

export const CustomInput = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? "error" : ""}>
      <Input
        sx={{
          padding: "5px",
          fontSize: "12px",
          width: "100%",
          color: "#61656e",
          fontWeight: "bold",
          backgroundColor: "#151922",
          borderRadius: "5px",
          border: "none",
          ":before": {
            display: "none",
          },
          "&::after": {
            border: "1px solid #7663fd",
            backgroundColor: "#7663fd",
          },
        }}
        {...input}
        {...props}
      />
      <div>{hasError ? <span>{meta.error}</span> : null}</div>
    </div>
  );
};
