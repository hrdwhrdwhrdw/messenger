import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsUserItem from "./DialogsUserItem/DialogsUserItem";
import "./Dialogs.scss";
import { Button, ButtonGroup, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import AddMessageReduxForm from "../../components/Forms/add-message-form/AddMessageForm";
import { PURPLE } from "../../constants/styles";

export const Dialogs = (props) => {
  const buttonStyle = {
    fontSize: "12px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: PURPLE,
    },
  };

  const inputStyle = {
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
      border: "1px solid" + PURPLE,
      backgroundColor: PURPLE,
    },
  };

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
            <Button className="switch__button" sx={buttonStyle}>
              General
            </Button>
            <Button className="switch__button" sx={buttonStyle}>
              Groups
            </Button>
            <Button className="switch__button" sx={buttonStyle}>
              Personal
            </Button>
          </ButtonGroup>
        </div>
        <div className="dialogs__search">
          <Input
            placeholder="Search for contacts..."
            sx={inputStyle}
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
