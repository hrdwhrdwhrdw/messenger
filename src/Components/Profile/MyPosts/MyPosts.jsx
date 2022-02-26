import React from "react";
import Post from "./Post/Post";
import './MyPosts.scss'

export default function MyPosts() {
  return (
    <div className="profile__posts">
      <textarea name="" id="" cols="25" rows="3" placeholder="add new post..."/>
      <div className="posts__buttons">
        <button className="posts__buttons posts_buttons_add_button">
          Add post
        </button>
        <button className="posts__buttons posts_buttons_delete_button">
          Delete post
        </button>
      </div>
      <ul className="profile__postlist">
        <Post message="hello"/>
        <Post message="tuututu"/>
        <Post message="HRDW"/>
        <Post message="hi"/>
      </ul>
    </div>
  );
}
