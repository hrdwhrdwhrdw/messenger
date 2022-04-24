import React, { useState } from "react";
import ProfileStatus from "./ProfileStatus";
import defaultUserPhoto from "../../../assets/images/i.webp";
import ProfileDataForm from "./ProfileDataForm";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ReactComponent as Vksvg } from "../../../assets/images/vk-brands.svg";
import WebIcon from "@mui/icons-material/Web";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import CustomButton from "../../common/Button/Button";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

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
                <CustomButton
                  variant="raised"
                  className="profile__update-button"
                >
                  <label
                    htmlFor="raised-button-file"
                  >
                    Upload photo
                  </label>
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

const ProfileData = ({ goToEditMode, ...props }) => {
  return (
    <div>
      <div className="profile__contact contact__item">
        <span style={{ fontSize: "2.5rem" }}>{props.profile.fullName}</span>
      </div>
      <div className="profile__contact contact__item">
        <span>Needs a job:</span>
        {props.profile.lookingForAJob ? <DoneIcon sx={{color: "#7663fd"}}/> : <ClearIcon sx={{color: "#7663fd"}} />}
      </div>
      <div className="profile__contact contact__item">
        <span>My skills:</span>
        {props.profile.lookingForAJobDescription}
      </div>
      <div className="profile__contact contact__item">
        <span>About me:</span>
        {props.profile.aboutMe}
      </div>
      <div className="profile__contacts">
        <span>My contacts:</span>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
        {props.isOwner && <CustomButton type="submit" onClick={goToEditMode}>Edit</CustomButton>}
      </div>
    </div>
  );
};

export const renderIcons = (contactTitle) => {
  switch (contactTitle) {
    case "vk":
      return <Vksvg className="contact__icon contact__icon_vk" />;
    case "facebook":
      return <FacebookIcon className="contact__icon" />;
    case "twitter":
      return <TwitterIcon className="contact__icon" />;
    case "instagram":
      return <InstagramIcon className="contact__icon" />;
    case "youtube":
      return <YouTubeIcon className="contact__icon" />;
    case "github":
      return <GitHubIcon className="contact__icon" />;
    case "website":
      return <WebIcon className="contact__icon" />;
    case "mainLink":
      return <LinkIcon className="contact__icon" />;
    default:
      break;
  }
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className="profile__contact contact__item">
      {renderIcons(contactTitle)}
      <span>{contactTitle}:</span>
      {contactValue ? contactValue : <ClearIcon sx={{color: "#7663fd"}}/>}
    </div>
  );
};
