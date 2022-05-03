import React from "react";
import Post from "./Post/Post";
import "./MyPosts.scss";
import AddPostForm from "../../../components/Forms/add-post-form/AddPostForm";

export default function MyPosts(props) {
  let addPost = (values) => {
    if (values.newPost) {
      props.addPost(values.newPost);
      props.resetForm();
    }
  };

  let increaseLikesCount = (id) => {
    props.increaseLikesCount(id);
  };

  let decreaseLikesCount = (id) => {
    props.decreaseLikesCount(id);
  };

  return (
    <div className="profile__posts">
      <AddPostForm onSubmit={addPost} />
      <ul className="profile__postlist">
        {props.posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
            isLiked={post.isLiked}
            increaseLikesCount={increaseLikesCount}
            decreaseLikesCount={decreaseLikesCount}
          />
        ))}
      </ul>
    </div>
  );
}
