import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import "./Profile.scss";

export default function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        updatePhoto={props.updatePhoto}
        setProfile={props.setProfile}
      />
      <MyPostsContainer />
    </div>
  );
}
