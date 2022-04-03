import React, { useEffect, useState } from "react";

export default function ProfileStatusWithHooks(props)  {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

    return (
      <div>
        {editMode ? (
          <input
            type="text"
            value={status}
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
          />
        ) : (
          <span
            onChange={onStatusChange}
            onDoubleClick={activateEditMode}
          >
            {status}
          </span>
        )}
      </div>
    );
}
