import React from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import './Profile.scss';

export default function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo {...props} profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}
