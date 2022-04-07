import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultUserPhoto from "../../../assets/images/i.webp";
import ProfileDataForm from "./ProfileDataForm";

export const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const onSubmit = (formData) => {
    props.setProfile(formData).then(() => setEditMode(false));
  };

  if (!props.profile) {
    return <Preloader />;
  }
  const savePhoto = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0]);
    }
  };
  return (
    <div className="profile__info">
      <img src={props.profile.photos.large || defaultUserPhoto} alt="" />
      {props.isOwner && <input type={"file"} onChange={savePhoto} />}
      <div>
        <b>Status:</b>
        <ProfileStatusWithHooks
          status={props.status || "empty status"}
          updateStatus={props.updateStatus}
        />
      </div>
      {editMode ? (
        <ProfileDataForm
          initialValues={props.profile}
          profile={props.profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          goToEditMode={() => setEditMode(true)}
        />
      )}
    </div>
  );
};

const ProfileData = ({ goToEditMode, ...props }) => {
  return (
    <div>
      <div>
        <b>Full Name:</b>
        {props.profile.fullName}
      </div>
      <div>
        <b>Need job:</b>
        {props.profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>Looking for a job:</b>
        {props.profile.lookingForAJobDescription}
      </div>
      <div>
        <b>My skills:</b>
        {props.profile.lookingForAJobDescription}
      </div>
      <div>
        <b>About me:</b>
        {props.profile.aboutMe}
      </div>
      <div>
        <b>My contacts:</b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
        <div>
          <button type="submit" onClick={goToEditMode}>
            edit
          </button>
        </div>
      </div>
    </div>
  );
};



const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}:</b>
      {contactValue}
    </div>
  );
};


