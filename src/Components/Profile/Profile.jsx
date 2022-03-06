import React from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import './Profile.scss';

export default function Profile() {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}
