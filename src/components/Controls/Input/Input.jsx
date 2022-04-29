import { Input } from "@material-ui/core";
import {PURPLE} from '../../../constants/styles';

export const CustomInput = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  const styles = {
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
  }
  return (
    <div className={hasError ? styles.error : null}>
      <Input
        sx={styles}
        {...input}
        {...props}
      />
      <div>{hasError ? <span>{meta.error}</span> : null}</div>
    </div>
  );
};
