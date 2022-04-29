import React from "react";
import { Button } from "@material-ui/core";
import styles from "./Button.module.scss";

export default function CustomButton({ ...props }) {
  return (
    <Button {...props} className={styles.button + " " + props.className}>
      {props.children}
    </Button>
  );
}
