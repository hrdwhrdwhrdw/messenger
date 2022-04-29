import TextField from "@mui/material/TextField";
import styles from "./Textarea.module.scss";

export const MultiTextarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  const style = {
    "& .MuiInputBase-root": {
      "& textarea": {
        width: "100%",
      },
      fontSize: "0.7rem",
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
  }
  return (
    <div className={hasError ? styles.error : "textfield-container"}>
      <TextField
        id="standard-multiline-flexible"
        multiline
        maxRows={4}
        variant="standard"
        sx={style}
        {...input}
        {...props}
      />
      <div>{hasError ? <span>{meta.error}</span> : null}</div>
    </div>
  );
};
