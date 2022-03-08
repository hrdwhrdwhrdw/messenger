import React from "react";
import Preloader from "../../common/Preloader/Preloader";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className="profile__info">
      <img src={props.profile.photos.large} alt="" />
      <div>{props.profile.fullName}</div>
      <div>{props.profile.lookingForAJob}</div>
      <div>{props.profile.lookingForAJobDescription}</div>
    </div>
  );
};
