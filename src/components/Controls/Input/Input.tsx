import React from "react";
import { Input } from "@material-ui/core";
import { PURPLE } from "../../../constants/styles";
import styles from "./Input.module.scss";
import { WrappedFieldProps } from "redux-form/lib/Field";

// export const CustomInput = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   const inputStyles = {
//     padding: "5px",
//     fontSize: "12px",
//     width: "100%",
//     color: "#61656e",
//     fontWeight: "bold",
//     backgroundColor: "#151922",
//     borderRadius: "5px",
//     border: "none",
//     ":before": {
//       display: "none",
//     },
//     "&::after": {
//       border: "1px solid" + PURPLE,
//       backgroundColor: PURPLE,
//     },
//   }
//   return (
//     <div className={hasError ? styles.error : null}>
//       <Input
//         sx={inputStyles}
//         {...input}
//         {...props}
//       />
//       <div>{hasError ? <span>{meta.error}</span> : null}</div>
//     </div>
//   );
// };

export const CustomInput: React.FC<WrappedFieldProps> = ({
  input,
  meta,
  ...props
}) => {
  const hasError = meta.touched && meta.error;
  const inputStyles = {
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
      border: "1px solid" + PURPLE,
      backgroundColor: PURPLE,
    },
  };
  return (
    <div className={hasError ? styles.error : null}>
      <Input sx={inputStyles} {...input} {...props} />
      <div>{hasError ? <span>{meta.error}</span> : null}</div>
    </div>
  );
};
