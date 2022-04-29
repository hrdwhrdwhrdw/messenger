import React, { useState } from "react";
import ProfileStatus from "./ProfileStatus";
import defaultUserPhoto from "../../../assets/images/i.webp";
import ProfileDataForm from "../../../components/Forms/profile-data-form/ProfileDataForm";
import CustomButton from "../../../components/Button/Button";
import { ProfileData } from "./ProfileData/ProfileData";

export const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const onSubmit = (formData) => {
    props.setProfile(formData).then(() => setEditMode(false));
  };

  const savePhoto = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0]);
    }
  };
  return (
    <div className="profile__info">
      <div className="profile__photo">
        <img
          src={props.profile.photos.large || defaultUserPhoto}
          alt=""
          className="profile__photo-image"
        />
        <div className="profile__update-photo">
          {props.isOwner && (
            <div>
              <CustomButton variant="raised" className="profile__update-button">
                <label htmlFor="raised-button-file">Upload photo</label>
                <input
                  accept="image/*"
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={savePhoto}
                  hidden
                />
              </CustomButton>
            </div>
          )}
        </div>
      </div>
      <div className="profile__info-container">
        <div className="profile__status">
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
          />
        </div>
        {editMode ? (
          <ProfileDataForm
            initialValues={props.profile}
            profile={props.profile}
            onSubmit={onSubmit}
            isOwner={props.isOwner}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            goToEditMode={() => setEditMode(true)}
            isOwner={props.isOwner}
          />
        )}
      </div>
    </div>
  );
};
