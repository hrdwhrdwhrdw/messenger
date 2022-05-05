import React from "react";
import { Button } from "@material-ui/core";
import styles from "./Button.module.scss";

const CustomButton = ({ ...props }) => {
  return (
    <Button {...props} className={styles.button + " " + props.className} sx={props.sx}>
      {props.children}
    </Button>
  );
}
export default CustomButton;
