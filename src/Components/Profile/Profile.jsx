import React from "react";
import MyPosts from './MyPosts/MyPosts';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import './Profile.scss';

export default function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} postText={props.profilePage.postText} />
    </div>
  );
}
