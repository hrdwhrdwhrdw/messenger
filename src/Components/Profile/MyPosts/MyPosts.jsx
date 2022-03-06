import React from "react";
import Post from "./Post/Post";
import "./MyPosts.scss";
import { createRef } from "react";


export default function MyPosts(props) {
  let newPostValue = createRef();
  let onChangePostText = () => {
    let postText = newPostValue.current.value;
    props.onChangePostText(postText)
  }

  let addPost = () => {
    props.addPost();
  }

  return (
    <div className="profile__posts">
      <textarea
        name=""
        id=""
        cols="25"
        rows="3"
        placeholder="add new post..."
        ref={newPostValue}
        value={props.profilePage.postText}
        onChange={onChangePostText}
      />
      <div className="posts__buttons">
        <button className="posts__buttons posts_buttons_add_button" onClick={addPost}>
          Add post
        </button>
      </div>
      <ul className="profile__postlist">
        {props.profilePage.posts.map((post) => (
          <Post key={post.id} id={post.id} message={post.message} />
        ))}
      </ul>
    </div>
  );
}
