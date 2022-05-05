import React from "react";
import { Button } from "@material-ui/core";
import { Field } from "redux-form";
import { InjectedFormProps, reduxForm } from "redux-form";
import SendIcon from "@mui/icons-material/Send";
import { MultiTextarea } from "../../Controls/Textarea/Textarea";
import { PURPLE } from "../../../constants/styles";
import { NewMessageType } from "pages/dialogs-page/Dialogs";

type PropsType = {}

const AddMessageForm: React.FC<
InjectedFormProps<NewMessageType, PropsType> &
PropsType
> = (props) => {
  const styles = {
    borderRadius: "50%",
    height: "32px",
    padding: "6px 2px",
    marginLeft: "20px",
    marginRight: "10px",
    minWidth: "20px",
    backgroundColor: PURPLE,
    boxShadow: "2px 2px 10px 2px rgba(34, 60, 80, 0.9)",
    span: {
      marginRight: "3px",
    },
  }
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="dialogs__form">
        <Field
          placeholder="Write a message..."
          name="newMessageText"
          component={MultiTextarea}
        />
        <div className="dialogs__button button_send">
          <Button
            sx={styles}
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
          />
        </div>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm<NewMessageType & PropsType>({
  form: "addMessage",
})(AddMessageForm);

export default AddMessageReduxForm;
