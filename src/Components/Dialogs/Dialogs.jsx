import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsUserItem from "./DialogsUserItem/DialogsUserItem";
import "./Dialogs.scss";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { MultiTextarea } from "../common/FormControl/FormControl";
import { Button, ButtonGroup, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";

export const Dialogs = (props) => {
  let addMessage = (values) => {
    props.sendMessage(values.newMessageText);
    props.reset();
  };
  return (
    <div className="dialogs">
      <div className="dialogs__container">
        <div className="dialogs__title">Messages</div>
        <div className="dialogs__switch">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            className="switch__group-button"
          >
            <Button
              className="switch__button"
              sx={{
                fontSize: "12px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#7663fd",
                },
              }}
            >
              General
            </Button>
            <Button
              className="switch__button"
              sx={{
                fontSize: "12px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#7663fd",
                },
              }}
            >
              Groups
            </Button>
            <Button
              className="switch__button"
              sx={{
                fontSize: "12px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#7663fd",
                },
              }}
            >
              Personal
            </Button>
          </ButtonGroup>
        </div>
        <div className="dialogs__search">
          <Input
            placeholder="Search for contacts..."
            sx={{
              marginBottom: "10px",
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
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#61656e", marginLeft: "5px" }} />
              </InputAdornment>
            }
          />
        </div>
        <div className="dialogs__userlist-container">
          <ul className="dialogs__userlist">
            {props.dialogsPage.dialogsUsers.map((dialogUser) => (
              <DialogsUserItem
                id={dialogUser.id}
                name={dialogUser.name}
                key={dialogUser.id}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="dialogs__list">
        <ul className="dialogs__messagelist">
          {props.dialogsPage.dialogsMessage.map((dialogMessage) => (
            <DialogsItem
              id={dialogMessage.id}
              message={dialogMessage.message}
              key={dialogMessage.id}
            />
          ))}
        </ul>
        <AddMessageReduxForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="dialogs__form">
        <Field
          placeholder="Write a message..."
          name="newMessageText"
          component={MultiTextarea}
          dataType="textarea"
        />
        <div className="dialogs__button button_send">
            <Button
              sx={{
                borderRadius: "50%",
                height: "32px",
                padding: "6px 2px",
                marginLeft: "20px",
                marginRight: "10px",
                minWidth: "20px",
                backgroundColor: "#7663fd",
                boxShadow: "2px 2px 10px 2px rgba(34, 60, 80, 0.9)",
                span: {
                  marginRight: "3px",
                },
              }}
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            />
        </div>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "addMessage",
})(AddMessageForm);
