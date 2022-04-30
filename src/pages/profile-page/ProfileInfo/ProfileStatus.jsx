import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import {BURGUNDY, PURPLE} from '../../../constants/styles';

export default function ProfileStatus(props) {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  return (
    <div className="profile__status-inner">
      {props.isOwner ? (
        editMode ? (
          <Input
            sx={{
              padding: "0 5px",
              fontSize: "14px",
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
                display: "none",
              },
            }}
            type="text"
            value={status}
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            {...props}
          />
        ) : (
          <span
          className="profile__status-text"
            onChange={onStatusChange}
            onClick={activateEditMode}
            style={{
              color: PURPLE,
              backgroundColor: BURGUNDY,
              padding: "4px",
              borderRadius: "5px",
            }}
          >
            {props.status || "set status"}
          </span>
        )
      ) : (
        <span>{props.status || "User has no status"}</span>
      )}
    </div>
  );
}
