import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import "./Profile.scss";
import Preloader from "../../components/Preloader/Preloader";

export default function Profile(props) {
  if (!props.profile) {
    return <Preloader />;
  }
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
