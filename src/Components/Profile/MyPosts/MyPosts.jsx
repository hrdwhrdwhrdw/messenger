import React from "react";
import Post from "./Post/Post";
import "./MyPosts.scss";
import { createRef } from "react";

export default function MyPosts(props) {
  let newPostValue = createRef();

  let addPost = () => {
    props.addPost(newPostValue.current.value);
    props.setPostText('')
  }

  let onChangePostText = () => {
    props.setPostText(newPostValue.current.value)
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
        value={props.postText}
        onChange={onChangePostText}
      />
      <div className="posts__buttons">
        <button className="posts__buttons posts_buttons_add_button" onClick={addPost}>
          Add post
        </button>
        <button className="posts__buttons posts_buttons_delete_button">
          Delete post
        </button>
      </div>
      <ul className="profile__postlist">
        {props.posts.map((post) => (
          <Post key={post.id} id={post.id} message={post.message} />
        ))}
      </ul>
    </div>
  );
}
