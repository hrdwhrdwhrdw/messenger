import React from "react";
import MyPosts from './MyPosts/MyPosts';
import './Profile.scss';

export default function Profile() {
  return (
    <div className="content">
      <div>ava+description</div>
      <MyPosts />
    </div>
  );
}
