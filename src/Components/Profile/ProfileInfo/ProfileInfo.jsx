import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className="profile__info">
      <img src={props.profile.photos.large} alt="" />
      <div>{props.profile.fullName}</div>
      <ProfileStatus status={props.status || 'empty status'} updateStatus={props.updateStatus}/>
      <div>{props.profile.lookingForAJob}</div>
      <div>{props.profile.lookingForAJobDescription}</div>
    </div>
  );
};
